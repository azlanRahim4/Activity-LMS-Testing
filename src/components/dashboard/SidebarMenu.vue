<template>
  <q-list padding class="text-grey-4">
    <div class="q-px-md q-mb-lg text-center">
        <div class="text-h6 text-white text-weight-bold tracking-tighter">
          TUITION<span class="text-primary">MANAGER</span>
        </div>
        <div class="text-caption text-grey-6">Admin Console</div>
    </div>

    <q-item 
      v-for="item in filteredItems" 
      :key="item.label"
      clickable 
      v-ripple 
      :to="item.to"
      active-class="bg-white text-black"
      class="rounded-borders q-mb-sm q-mx-xs transition-colors"
    >
      <q-item-section avatar>
        <q-icon :name="item.icon" size="20px" />
      </q-item-section>
      <q-item-section class="text-weight-medium">{{ item.label }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from 'boot/supabase'

const menuItems = [
  // Common
  { label: 'Dashboard', icon: 'dashboard', to: '/dashboard', roles: ['admin', 'teacher', 'student'] },
  
  // Admin / Teacher
  { label: 'Students', icon: 'people', to: '/dashboard/students', roles: ['admin', 'teacher'] },
  { label: 'Courses', icon: 'class', to: '/dashboard/courses', roles: ['admin', 'teacher', 'student'] },
  { label: 'Schedule', icon: 'event_note', to: '/dashboard/schedule', roles: ['admin', 'teacher', 'student'] },
  
  // Admin Only
  { label: 'Finance', icon: 'attach_money', to: '/dashboard/finance', roles: ['admin'] },
  { label: 'Reports', icon: 'bar_chart', to: '/dashboard/reports', roles: ['admin', 'teacher'] },
  
  // All
  { label: 'Settings', icon: 'settings', to: '/dashboard/settings', roles: ['admin', 'teacher', 'student'] },
]

const role = ref(null)

const filteredItems = computed(() => {
   if (!role.value) return [] 
   return menuItems.filter(item => item.roles.includes(role.value))
})

onMounted(async () => {
   const { data: { user } } = await supabase.auth.getUser()
   if (user) {
      const { data } = await supabase.from('profiles').select('role').eq('id', user.id).single()
      if (data) role.value = data.role
   }
})
</script>

<style scoped>
.transition-colors {
  transition: all 0.3s ease;
}
:deep(.q-item) {
    min-height: 48px;
}
</style>
