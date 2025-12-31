<template>
  <q-page class="q-pa-lg">
    <div class="row items-center justify-between q-mb-xl">
       <div>
          <h1 class="text-h4 text-weight-bolder text-black q-my-none">Students</h1>
          <div class="text-grey-6 text-subtitle1 q-mt-xs">Manage your student database</div>
       </div>
       <q-btn unelevated color="black" icon="add" label="Add Student" no-caps class="rounded-borders" />
    </div>

    <q-card flat class="bg-white rounded-borders soft-shadow">
       <q-card-section class="q-pa-none">
          <q-table
             flat
             :rows="students"
             :columns="columns"
             row-key="id"
             :loading="loading"
          >
             <template v-slot:loading>
               <q-inner-loading showing color="primary" />
             </template>
             <template v-slot:body-cell-status="props">
                <q-td :props="props">
                   <q-badge :color="props.value === 'Active' ? 'green-1' : 'grey-2'" :text-color="props.value === 'Active' ? 'green-8' : 'grey-8'" class="q-px-sm q-py-xs rounded-borders">
                      {{ props.value }}
                   </q-badge>
                </q-td>
             </template>
             <template v-slot:no-data>
                <div class="full-width row flex-center text-grey-6 q-pa-md">
                   No students found. Add one to get started.
                </div>
             </template>
          </q-table>
       </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const students = ref([])
const loading = ref(false)
const $q = useQuasar()

const columns = [
  { name: 'full_name', align: 'left', label: 'Name', field: 'full_name', sortable: true },
  { name: 'email', align: 'left', label: 'Email', field: 'email', sortable: true },
  { name: 'phone', align: 'left', label: 'Phone', field: 'phone' },
  { name: 'enrollment_date', align: 'left', label: 'Joined', field: row => new Date(row.enrollment_date).toLocaleDateString(), sortable: true },
  { name: 'status', align: 'left', label: 'Status', field: 'status', sortable: true },
]

onMounted(async () => {
  loading.value = true
  try {
     const { data, error } = await supabase.from('students').select('*')
     if (error) throw error
     students.value = data
  } catch (error) {
     $q.notify({ type: 'negative', message: 'Error fetching students: ' + error.message })
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
:deep(.q-table th) {
   font-size: 0.75rem;
   font-weight: 700;
   color: #9e9e9e;
   text-transform: uppercase;
}
</style>
