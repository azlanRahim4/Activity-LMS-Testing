<template>
  <q-page class="q-pa-lg">
    <!-- Page Header -->
    <div class="q-mb-xl">
       <h1 class="text-h4 text-weight-bolder text-black q-my-none">Teacher Dashboard</h1>
       <div class="text-grey-6 text-subtitle1 q-mt-xs">Manage your classes and students</div>
    </div>

    <!-- Stats Row -->
    <div class="row q-col-gutter-lg q-mb-xl">
       <div class="col-12 col-md-3">
          <StatCard title="My Students" value="142" icon="school" icon-color="purple" percentage="5.2" :is-positive="true" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Active Classes" value="4" icon="class" icon-color="orange" percentage="0" :is-positive="true" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Assignments" value="12" icon="assignment" icon-color="blue" percentage="2" :is-positive="true" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Avg Attendance" value="88%" icon="verified_user" icon-color="green" percentage="1.4" :is-positive="false" />
       </div>
    </div>

    <!-- Content Split -->
    <div class="row q-col-gutter-xl">
       <!-- Main Content Column -->
       <div class="col-12 col-lg-8">
          <!-- Upcoming Classes Table -->
          <q-card flat class="bg-white rounded-borders soft-shadow q-mb-lg">
             <q-card-section class="q-pa-lg">
                <div class="row items-center justify-between q-mb-md">
                   <div class="text-h6 text-weight-bold">Today's Schedule</div>
                   <q-btn flat dense color="primary" no-caps label="View Calendar" />
                </div>
                
                <q-list separator>
                   <q-item v-for="(cls, index) in classes" :key="index" class="q-py-md">
                      <q-item-section avatar>
                         <q-avatar color="grey-2" text-color="primary" icon="class" />
                      </q-item-section>
                      <q-item-section>
                         <q-item-label class="text-weight-bold">{{ cls.name }}</q-item-label>
                         <q-item-label caption>{{ cls.time }} • {{ cls.room }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                         <q-btn outline dense size="sm" color="primary" label="Start Class" no-caps />
                      </q-item-section>
                   </q-item>
                </q-list>
             </q-card-section>
          </q-card>
       </div>

       <!-- Side Widgets Column -->
       <div class="col-12 col-lg-4">
          <!-- Quick Actions -->
          <q-card flat class="bg-black text-white rounded-borders soft-shadow q-mb-lg">
             <q-card-section class="q-pa-lg">
                <div class="text-h6 text-weight-bold q-mb-md">Quick Actions</div>
                <div class="q-gutter-y-md">
                   <q-btn outline color="white" class="full-width q-py-sm rounded-borders text-weight-bold" no-caps icon="add">
                      Create Assignment
                   </q-btn>
                   <q-btn outline color="white" class="full-width q-py-sm rounded-borders text-weight-bold" no-caps icon="upload">
                      Upload Material
                   </q-btn>
                   <q-btn outline color="white" class="full-width q-py-sm rounded-borders text-weight-bold" no-caps icon="mail">
                      Message Class
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
import { ref } from 'vue'

const classes = ref([
   { name: 'Advanced Physics 101', time: '10:00 AM - 11:30 AM', room: 'Room 302' },
   { name: 'Mathematics Grade 10', time: '01:00 PM - 02:30 PM', room: 'Room 105' },
   { name: 'Physics Lab', time: '03:00 PM - 04:30 PM', room: 'Lab A' }
])
</script>

<style scoped>
.soft-shadow {
   box-shadow: 0 4px 20px rgba(0,0,0,0.03);
   border: 1px solid #f0f0f0;
}
</style>
