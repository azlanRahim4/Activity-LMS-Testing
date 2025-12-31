<template>
  <div>
    <div v-if="loading" class="flex flex-center q-pa-xl">
       <q-spinner size="50px" color="primary" />
    </div>
    
    <component :is="dashboardComponent" v-else />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
import { supabase } from 'boot/supabase'


// Import dashboard components directly or async
// We will rename the original content to this or keep it here
// Since we are replacing the file content, let's just import the new ones we created.
const TeacherHome = defineAsyncComponent(() => import('./TeacherHome.vue'))
const StudentHome = defineAsyncComponent(() => import('./StudentHome.vue'))

// Define a simple fallback Admin view inline or use the previous code if role is admin
const AdminHome = defineAsyncComponent(() => import('./AdminHomeContent.vue')) 

const role = ref(null)
const loading = ref(true)

const dashboardComponent = computed(() => {
   if (role.value === 'teacher') return TeacherHome
   if (role.value === 'student') return StudentHome
   return AdminHome // Default fallback
})

onMounted(async () => {
   try {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
         const { data } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()
         
         if (data) {
            role.value = data.role
         }
      }
   } catch (error) {
      console.error('Error fetching role:', error)
   } finally {
      loading.value = false
   }
})
</script>

