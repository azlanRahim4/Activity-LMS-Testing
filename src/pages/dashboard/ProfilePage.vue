<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg justify-center">
      <div class="col-12 col-md-8 col-lg-6">
         <!-- Profile Header -->
         <q-card flat class="bg-white rounded-borders soft-shadow q-mb-lg overflow-hidden">
            <div class="bg-black relative-position" style="height: 120px;">
               <div class="absolute-bottom-left q-pa-lg" style="bottom: -50px;">
                  <q-avatar size="100px" class="bg-white shadow-2">
                     <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
               </div>
            </div>
             <q-card-section class="q-pt-xl q-mt-sm">
                <div class="row items-center justify-between">
                   <div>
                      <div class="text-h5 text-weight-bold">{{ profile.firstName && profile.lastName ? `${profile.firstName} ${profile.lastName}` : 'User' }}</div>
                      <div class="text-grey-6">{{ profile.email }}</div>
                      <q-badge color="primary" class="q-mt-sm text-capitalize" v-if="profile.role">{{ profile.role }}</q-badge>
                   </div>
                   <q-btn outline color="black" label="Edit Profile" no-caps class="rounded-borders" />
                </div>
             </q-card-section>
          </q-card>

          <!-- Personal Details Form -->
          <q-card flat class="bg-white rounded-borders soft-shadow q-mb-lg">
              <q-card-section>
                 <div class="text-h6 text-weight-bold q-mb-lg">Personal Information</div>
                 <q-form class="q-gutter-y-md">
                    <div class="row q-col-gutter-md">
                       <div class="col-12 col-md-6">
                          <q-input outlined dense label="First Name" v-model="profile.firstName" />
                       </div>
                       <div class="col-12 col-md-6">
                          <q-input outlined dense label="Last Name" v-model="profile.lastName" />
                       </div>
                    </div>
                    <q-input outlined dense label="Email Address" v-model="profile.email" readonly hint="Contact support to change email" />
                    <q-input outlined dense label="Phone Number" v-model="profile.phone" />
                    <div class="text-right">
                       <q-btn unelevated color="black" label="Save Changes" no-caps class="rounded-borders" @click="updateProfile" :loading="loading" />
                    </div>
                 </q-form>
              </q-card-section>
          </q-card>

          <!-- Security Settings -->
          <q-card flat class="bg-white rounded-borders soft-shadow">
              <q-card-section>
                 <div class="text-h6 text-weight-bold q-mb-lg">Security</div>
                 <q-list separator>
                    <q-item class="q-px-none">
                       <q-item-section>
                          <q-item-label>Password</q-item-label>
                          <q-item-label caption>Last changed 3 months ago</q-item-label>
                       </q-item-section>
                       <q-item-section side>
                          <q-btn flat color="primary" label="Change Password" no-caps />
                       </q-item-section>
                    </q-item>
                    <q-item class="q-px-none">
                       <q-item-section>
                          <q-item-label>Two-Factor Authentication</q-item-label>
                          <q-item-label caption>Add an extra layer of security to your account</q-item-label>
                       </q-item-section>
                       <q-item-section side>
                          <q-toggle v-model="twoFactor" color="green" />
                       </q-item-section>
                    </q-item>
                 </q-list>
              </q-card-section>
          </q-card>
       </div>
     </div>
   </q-page>
 </template>
 
 <script setup>
 import { ref, onMounted } from 'vue'
 import { supabase } from 'boot/supabase'
 import { useQuasar } from 'quasar'
 
 const $q = useQuasar()
 const loading = ref(false)
 const profile = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: ''
 })
 
 const twoFactor = ref(false)
 
 const fetchProfile = async () => {
    try {
       const { data: { user } } = await supabase.auth.getUser()
       if (user) {
          profile.value.email = user.email
          
          const { data } = await supabase
             .from('profiles')
             .select('first_name, last_name, phone, role')
             .eq('id', user.id)
             .single()
          
          if (data) {
             profile.value.firstName = data.first_name || ''
             profile.value.lastName = data.last_name || ''
             profile.value.phone = data.phone || ''
             profile.value.role = data.role || ''
          }
       }
    } catch (error) {
       console.error('Error fetching profile:', error.message)
    }
 }


const updateProfile = async () => {
   if (!profile.value.firstName || !profile.value.lastName || !profile.value.phone) {
      $q.notify({
         color: 'orange-5',
         textColor: 'white',
         icon: 'warning',
         message: 'Please fill in all fields (First Name, Last Name, Phone) to save changes.'
      })
      return
   }

   loading.value = true
   try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('No user logged in')

      const updates = {
         id: user.id,
         first_name: profile.value.firstName,
         last_name: profile.value.lastName,
         phone: profile.value.phone,
         updated_at: new Date()
      }

      const { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error

      $q.notify({
         color: 'green-4',
         textColor: 'white',
         icon: 'check',
         message: 'Profile updated successfully'
      })
   } catch (error) {
      $q.notify({
         color: 'red-5',
         textColor: 'white',
         icon: 'warning',
         message: 'Error updating profile: ' + error.message
      })
   } finally {
      loading.value = false
   }
}

onMounted(() => {
   fetchProfile()
})
</script>

<style scoped>
.soft-shadow {
   box-shadow: 0 4px 20px rgba(0,0,0,0.03);
   border: 1px solid #f0f0f0;
}
</style>
