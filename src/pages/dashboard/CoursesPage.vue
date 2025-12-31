<template>
  <q-page class="q-pa-lg">
    <div class="row items-center justify-between q-mb-xl">
       <div>
          <h1 class="text-h4 text-weight-bolder text-black q-my-none">Courses</h1>
          <div class="text-grey-6 text-subtitle1 q-mt-xs">Curriculum and subjects</div>
       </div>
       <q-btn unelevated color="black" icon="add" label="New Course" no-caps class="rounded-borders" />
    </div>

    <div class="row q-col-gutter-lg">
       <div class="col-12 col-md-4" v-if="loading">
          <q-card flat class="bg-white rounded-borders q-pa-lg">
             <q-skeleton type="text" class="text-h6" />
             <q-skeleton type="text" width="60%" class="q-mb-md" />
             <q-skeleton type="rect" height="100px" />
          </q-card>
       </div>
       
       <template v-else>
           <div v-if="courses.length === 0" class="col-12 text-center text-grey-5 q-py-xl">
              No courses available.
           </div>
           
           <div class="col-12 col-md-4" v-for="course in courses" :key="course.id">
              <q-card flat class="bg-white rounded-borders soft-shadow transition-hover h-full">
                 <q-card-section>
                    <div class="text-h6 text-weight-bold q-mb-xs">{{ course.title }}</div>
                    <div class="text-primary text-weight-bold q-mb-md">${{ course.fees }}</div>
                    <p class="text-grey-6 text-caption ellipsis-3-lines">{{ course.description || 'No description provided.' }}</p>
                 </q-card-section>
                 <q-card-actions align="right">
                    <q-btn flat color="grey-6" label="Edit" no-caps />
                    <q-btn flat color="primary" label="View Details" no-caps />
                 </q-card-actions>
              </q-card>
           </div>
       </template>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const courses = ref([])
const loading = ref(false)
const $q = useQuasar()

onMounted(async () => {
  loading.value = true
  try {
     const { data, error } = await supabase.from('courses').select('*')
     if (error) throw error
     courses.value = data
  } catch (error) {
     $q.notify({ type: 'negative', message: 'Error fetching courses: ' + error.message })
  } finally {
     loading.value = false
  }
})
</script>

<style scoped>
.soft-shadow {
   box-shadow: 0 4px 20px rgba(0,0,0,0.03);
   border: 1px solid #f0f0f0;
}
.transition-hover {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.transition-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}
</style>
