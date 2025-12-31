<template>
  <q-page class="q-pa-lg">
    <!-- Page Header -->
    <div class="q-mb-xl">
       <h1 class="text-h4 text-weight-bolder text-black q-my-none">Dashboard</h1>
       <div class="text-grey-6 text-subtitle1 q-mt-xs">Overview of your institute's performance</div>
    </div>

    <!-- Stats Row -->
    <div class="row q-col-gutter-lg q-mb-xl">
       <div class="col-12 col-md-3">
          <StatCard title="Total Students" value="2,405" icon="people" icon-color="purple" percentage="12.5" :is-positive="true" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Revenue" value="$84,200" icon="attach_money" icon-color="green" percentage="8.2" :is-positive="true" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Classes Today" value="18" icon="class" icon-color="orange" percentage="0" :is-positive="true" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Avg Attendance" value="92%" icon="verified_user" icon-color="blue" percentage="1.4" :is-positive="false" />
       </div>
    </div>

    <!-- Content Split -->
    <div class="row q-col-gutter-xl">
       <!-- Main Content Column -->
       <div class="col-12 col-lg-8">
          <!-- Recent Enrollments Table -->
          <q-card flat class="bg-white rounded-borders soft-shadow q-mb-lg">
             <q-card-section class="q-pa-lg">
                <div class="row items-center justify-between q-mb-md">
                   <div class="text-h6 text-weight-bold">Recent Enrollments</div>
                   <q-btn flat dense color="primary" no-caps label="View All" />
                </div>
                
                <q-table
                   flat
                   :rows="recentStudents"
                   :columns="columns"
                   row-key="id"
                   hide-pagination
                   :rows-per-page-options="[0]"
                >
                   <template v-slot:header="props">
                      <q-tr :props="props">
                         <q-th v-for="col in props.cols" :key="col.name" :props="props" class="text-grey-6 text-uppercase text-caption font-weight-bold">
                            {{ col.label }}
                         </q-th>
                      </q-tr>
                   </template>
                   <template v-slot:body-cell-status="props">
                      <q-td :props="props">
                         <q-badge :color="props.value === 'Paid' ? 'green-1' : 'orange-1'" :text-color="props.value === 'Paid' ? 'green-8' : 'orange-8'" class="q-px-sm q-py-xs rounded-borders text-caption font-weight-bold">
                            {{ props.value }}
                         </q-badge>
                      </q-td>
                   </template>
                </q-table>
             </q-card-section>
          </q-card>
       </div>

       <!-- Side Widgets Column -->
       <div class="col-12 col-lg-4">
          <!-- Calendar / Schedule Widget -->
          <q-card flat class="bg-black text-white rounded-borders soft-shadow q-mb-lg overflow-hidden">
             <q-card-section class="q-pa-lg">
                <div class="text-h6 text-weight-bold q-mb-md">Today's Schedule</div>
                <q-list dark padding>
                   <q-item class="q-mb-md bg-grey-9 rounded-borders">
                      <q-item-section avatar>
                         <div class="text-center rounded-borders bg-primary q-pa-sm text-black">
                            <div class="text-weight-bold text-h6">10</div>
                            <div class="text-uppercase text-caption" style="font-size: 0.6rem">AM</div>
                         </div>
                      </q-item-section>
                      <q-item-section>
                         <q-item-label class="text-weight-bold">Mathematics</q-item-label>
                         <q-item-label caption class="text-grey-5">Room 204 • Grade 10</q-item-label>
                      </q-item-section>
                   </q-item>
                   
                   <q-item class="bg-grey-9 rounded-borders">
                      <q-item-section avatar>
                         <div class="text-center rounded-borders bg-white q-pa-sm text-black">
                            <div class="text-weight-bold text-h6">02</div>
                            <div class="text-uppercase text-caption" style="font-size: 0.6rem">PM</div>
                         </div>
                      </q-item-section>
                      <q-item-section>
                         <q-item-label class="text-weight-bold">Physics Lab</q-item-label>
                         <q-item-label caption class="text-grey-5">Lab 1 • Grade 12</q-item-label>
                      </q-item-section>
                   </q-item>
                </q-list>
             </q-card-section>
          </q-card>

          <!-- Quick Actions -->
          <q-card flat class="bg-white rounded-borders soft-shadow">
             <q-card-section class="q-pa-lg">
                <div class="text-h6 text-weight-bold q-mb-md">Quick Actions</div>
                <div class="q-gutter-y-md">
                   <q-btn unelevated color="black" class="full-width q-py-sm rounded-borders text-weight-bold" no-caps>
                      <q-icon left name="add" /> Add New Student
                   </q-btn>
                   <q-btn outline color="black" class="full-width q-py-sm rounded-borders text-weight-bold" no-caps>
                      <q-icon left name="email" /> Send Announcement
                   </q-btn>
                </div>
             </q-card-section>
          </q-card>
       </div>
    </div>
  </q-page>
</template>

<script setup>
import StatCard from 'components/dashboard/StatCard.vue'


const columns = [
  { name: 'name', align: 'left', label: 'Student Name', field: 'full_name' },
  { name: 'email', align: 'left', label: 'Email', field: 'email' },
  { name: 'date', align: 'left', label: 'Joined', field: row => new Date(row.enrollment_date).toLocaleDateString() },
  { name: 'status', align: 'left', label: 'Fees Status', field: () => 'Active' },
]

import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'

const recentStudents = ref([])

onMounted(async () => {
   const { data } = await supabase.from('students').select('*').limit(5).order('enrollment_date', { ascending: false })
   if (data) recentStudents.value = data
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
}
</style>
