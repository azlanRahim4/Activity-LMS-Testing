<template>
  <q-page class="q-pa-lg">
    <!-- Page Header -->
    <div class="q-mb-xl">
       <h1 class="text-h4 text-weight-bolder text-black q-my-none">Student Dashboard</h1>
       <div class="text-grey-6 text-subtitle1 q-mt-xs">Track your learning progress</div>
    </div>

    <!-- Stats Row -->
    <div class="row q-col-gutter-lg q-mb-xl">
       <div class="col-12 col-md-3">
          <StatCard title="Enrolled Courses" value="5" icon="library_books" icon-color="purple" percentage="0" :is-positive="true" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Overall Grade" value="A-" icon="grade" icon-color="orange" percentage="2.5" :is-positive="true" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Pending Tasks" value="3" icon="assignment_late" icon-color="red" percentage="1" :is-positive="false" />
       </div>
       <div class="col-12 col-md-3">
          <StatCard title="Attendance" value="96%" icon="event_available" icon-color="green" percentage="0.5" :is-positive="true" />
       </div>
    </div>

    <!-- Content Split -->
    <div class="row q-col-gutter-xl">
       <!-- Main Content Column -->
       <div class="col-12 col-lg-8">
          <!-- My Courses Grid -->
          <div class="row items-center justify-between q-mb-md">
             <div class="text-h6 text-weight-bold">My Courses</div>
             <q-btn flat dense color="primary" no-caps label="View All" />
          </div>
          
          <div class="row q-col-gutter-md">
             <div class="col-12 col-md-6" v-for="course in courses" :key="course.id">
                <q-card flat class="bg-white rounded-borders soft-shadow cursor-pointer hover-card">
                   <q-card-section>
                       <div class="row items-center no-wrap q-mb-sm">
                          <q-avatar size="sm" :color="course.color" text-color="white" icon="class" class="q-mr-sm" />
                          <div class="text-weight-bold">{{ course.name }}</div>
                       </div>
                       <div class="text-caption text-grey-6 q-mb-md">{{ course.schedule }}</div>
                       <q-linear-progress :value="course.progress" :color="course.color" class="q-mb-xs rounded-borders" />
                       <div class="text-caption text-right text-grey-6">{{ (course.progress * 100).toFixed(0) }}% Complete</div>
                   </q-card-section>
                </q-card>
             </div>
          </div>
       </div>

       <!-- Side Widgets Column -->
       <div class="col-12 col-lg-4">
          <!-- Upcoming Deadlines -->
          <q-card flat class="bg-white rounded-borders soft-shadow q-mb-lg">
             <q-card-section class="q-pa-lg">
                <div class="text-h6 text-weight-bold q-mb-md">Upcoming Deadlines</div>
                <q-list separator>
                   <q-item>
                      <q-item-section>
                         <q-item-label class="text-weight-bold">Math Homework</q-item-label>
                         <q-item-label caption class="text-red-5">Due Tomorrow, 10 AM</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                         <q-icon name="warning" color="red-5" />
                      </q-item-section>
                   </q-item>
                   <q-item>
                      <q-item-section>
                         <q-item-label class="text-weight-bold">Physics Lab Report</q-item-label>
                         <q-item-label caption>Due Friday, 5 PM</q-item-label>
                      </q-item-section>
                   </q-item>
                </q-list>
             </q-card-section>
             <q-card-actions align="center">
                <q-btn flat color="primary" label="View All Assignments" no-caps />
             </q-card-actions>
          </q-card>
       </div>
    </div>
  </q-page>
</template>

<script setup>
import StatCard from 'components/dashboard/StatCard.vue'
import { ref } from 'vue'

const courses = ref([
   { id: 1, name: 'Advanced Mathematics', schedule: 'Mon, Wed 10:00 AM', progress: 0.75, color: 'blue' },
   { id: 2, name: 'Physics I', schedule: 'Tue, Thu 01:00 PM', progress: 0.45, color: 'orange' },
   { id: 3, name: 'Chemistry', schedule: 'Fri 09:00 AM', progress: 0.20, color: 'green' },
   { id: 4, name: 'English Literature', schedule: 'Mon, Wed 02:00 PM', progress: 0.90, color: 'purple' },
])
</script>

<style scoped>
.soft-shadow {
   box-shadow: 0 4px 20px rgba(0,0,0,0.03);
   border: 1px solid #f0f0f0;
}
.hover-card {
   transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hover-card:hover {
   transform: translateY(-3px);
   box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}
</style>
