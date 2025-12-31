<template>
  <q-toolbar class="bg-white text-black q-py-sm border-bottom-light">
    <q-btn flat dense round icon="menu" aria-label="Menu" @click="$emit('toggle-drawer')" />
    
    <q-space />

    <div class="row items-center q-gutter-md">
       <!-- Search -->
       <q-input dense outlined rounded placeholder="Search..." bg-color="grey-1" class="search-input gt-xs">
          <template v-slot:prepend>
             <q-icon name="search" class="text-grey-5" />
          </template>
       </q-input>

       <!-- Notifications -->
       <q-btn round flat color="grey-8" icon="notifications_none">
          <q-badge floating color="red" rounded dot />
       </q-btn>

       <!-- User Profile -->
       <q-btn flat no-caps class="q-pl-sm rounded-borders hover-bg-grey-2">
          <div class="row items-center no-wrap">
             <div class="text-right q-mr-sm gt-xs">
                <div class="text-weight-bold text-subtitle2">{{ userName }}</div>
                <div class="text-caption text-grey-6 text-capitalize">{{ userRole }}</div>
             </div>
             <q-avatar size="36px" color="grey-3">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
             </q-avatar>
          </div>
          <q-menu class="q-mt-md rounded-borders shadow-10">
             <q-list style="min-width: 150px">
                <q-item clickable v-close-popup class="text-grey-8" to="/dashboard/profile">
                   <q-item-section avatar><q-icon name="person" size="xs" /></q-item-section>
                   <q-item-section>Profile</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup class="text-red-5" @click="handleLogout">
                   <q-item-section avatar><q-icon name="logout" size="xs" /></q-item-section>
                   <q-item-section>Logout</q-item-section>
                </q-item>
             </q-list>
          </q-menu>
       </q-btn>
    </div>
  </q-toolbar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { supabase } from 'boot/supabase'

defineEmits(['toggle-drawer'])
const router = useRouter()
const $q = useQuasar()

const userName = ref('User')
const userRole = ref('')

onMounted(async () => {
  try {
     const { data: { user } } = await supabase.auth.getUser()
     if (user) {
        const { data } = await supabase
           .from('profiles')
           .select('first_name, last_name, role')
           .eq('id', user.id)
           .single()
        
        if (data) {
           if (data.first_name && data.last_name) {
              userName.value = `${data.first_name} ${data.last_name}`
           }
           userRole.value = data.role || ''
        }
     }
  } catch (error) {
     console.error('Error fetching header profile:', error)
  }
})

const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    
    $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'check',
        message: 'Logged out successfully'
    })
    
    router.push('/login')
  } catch (error) {
    $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'Error logging out: ' + error.message
    })
  }
}
</script>

<style scoped>
.border-bottom-light {
    border-bottom: 1px solid #f0f0f0;
}
.search-input {
    width: 300px;
}
.hover-bg-grey-2:hover {
    background-color: #f5f5f5;
}
</style>
