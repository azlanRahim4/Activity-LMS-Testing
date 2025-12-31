<template>
  <q-page class="flex flex-center bg-black text-white">
    <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders transition-height" style="width: 100%; max-width: 500px; border: 1px solid #333">
      
      <!-- Header -->
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold tracking-tighter q-mb-md">
           TUTION<span class="text-accent">MANAGER</span>
        </div>
        <div class="text-subtitle1 text-grey-5" v-if="!role">Choose your account type</div>
        <div class="text-subtitle1 text-grey-5" v-else>Create {{ role }} account</div>
      </q-card-section>

      <!-- Role Selection Step -->
      <q-card-section v-if="!role" class="q-gutter-y-md fade-in">
         <div class="row q-col-gutter-md">
            <!-- Student Option -->
            <div class="col-6">
               <div 
                  class="role-card q-pa-lg text-center rounded-borders cursor-pointer"
                  @click="selectRole('student')"
               >
                  <q-icon name="school" size="40px" color="white" class="q-mb-sm" />
                  <div class="text-h6 text-weight-bold">Student</div>
                  <div class="text-caption text-grey-5">I want to learn</div>
               </div>
            </div>
            
            <!-- Teacher Option -->
            <div class="col-6">
               <div 
                  class="role-card q-pa-lg text-center rounded-borders cursor-pointer"
                  @click="selectRole('teacher')"
               >
                  <q-icon name="person_pin" size="40px" color="white" class="q-mb-sm" />
                  <div class="text-h6 text-weight-bold">Teacher</div>
                  <div class="text-caption text-grey-5">I want to teach</div>
               </div>
            </div>
         </div>
      </q-card-section>

      <!-- Registration Form -->
      <q-card-section v-else class="fade-in">
        <q-btn flat dense icon="arrow_back" label="Back" class="q-mb-md text-grey-5" no-caps @click="role = ''" />
        
        <q-form @submit="handleRegister" class="q-gutter-md">
          <q-input
            dark
            outlined
            v-model="email"
            label="Email"
            type="email"
            color="white"
            bg-color="grey-9"
            :rules="[val => !!val || 'Email is required']"
          >
             <template v-slot:prepend>
                <q-icon name="email" color="grey-5" />
             </template>
          </q-input>

          <q-input
            dark
            outlined
            v-model="password"
            label="Password"
            type="password"
            color="white"
            bg-color="grey-9"
            :rules="[val => !!val || 'Password is required', val => val.length >= 6 || 'Min 6 characters']"
          >
             <template v-slot:prepend>
                <q-icon name="lock" color="grey-5" />
             </template>
          </q-input>
          
          <q-input
            dark
            outlined
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            color="white"
            bg-color="grey-9"
            :rules="[val => val === password || 'Passwords match']"
          >
             <template v-slot:prepend>
                <q-icon name="lock_clock" color="grey-5" />
             </template>
          </q-input>

          <q-btn
            unelevated
            size="lg"
            color="primary"
            class="full-width rounded-borders text-black q-mt-md"
            label="Sign Up"
            type="submit"
            :loading="loading"
          />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center q-mt-sm">
        <div class="text-grey-5">
          Already have an account? <router-link to="/login" class="text-white text-weight-bold" style="text-decoration: none">Log In</router-link>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const role = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const router = useRouter()
const $q = useQuasar()

const selectRole = (selectedRole) => {
   role.value = selectedRole
}

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
     $q.notify({ color: 'red-5', icon: 'warning', message: 'Passwords do not match' })
     return
  }

  loading.value = true
  try {
    // 1. Sign Up User
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })

    if (signUpError) throw signUpError
    
    // 2. Insert Profile with Role
    if (data.user) {
       const { error: profileError } = await supabase.from('profiles').insert({
          id: data.user.id,
          role: role.value,
          updated_at: new Date()
       })
       
       if (profileError) {
          console.error('Profile creation failed:', profileError)
          // Optional: You might want to delete the auth user if profile creation fails
       }
    }
    
    if (data.session) {
       $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'check',
          message: 'Welcome! You are now logged in.'
       })
       router.push('/dashboard')
    } else {
       $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'check',
          message: 'Registration successful! Please check your email for confirmation.'
       })
       router.push('/login')
    }
  } catch (error) {
    let msg = error.message
    if (msg.includes('already registered')) {
       msg = 'This email is already registered. Please log in instead.'
    }
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: msg
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
:deep(.q-field--outlined .q-field__control:before) {
  border-color: #424242;
}
.role-card {
   border: 1px solid #424242;
   background-color: #212121;
   transition: all 0.3s ease;
}
.role-card:hover {
   border-color: white;
   background-color: #333;
   transform: translateY(-5px);
}
.fade-in {
   animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
   from { opacity: 0; transform: translateY(10px); }
   to { opacity: 1; transform: translateY(0); }
}
</style>
