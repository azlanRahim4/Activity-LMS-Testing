<template>
  <q-page class="flex flex-center bg-black text-white">
    <q-card flat class="bg-grey-10 text-white q-pa-lg rounded-borders" style="width: 100%; max-width: 400px; border: 1px solid #333">
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold tracking-tighter q-mb-md">
           TUTION<span class="text-accent">MANAGER</span>
        </div>
        <div class="text-subtitle1 text-grey-5">Login to your account</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="handleLogin" class="q-gutter-md">
          <q-input
            dark
            outlined
            v-model="email"
            label="Email"
            type="email"
            color="white"
            bg-color="grey-9"
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
          >
             <template v-slot:prepend>
                <q-icon name="lock" color="grey-5" />
             </template>
          </q-input>

          <div class="text-right">
             <a href="#" class="text-grey-5" style="text-decoration: none; font-size: 0.9em">Forgot Password?</a>
          </div>

          <q-btn
            unelevated
            size="lg"
            color="primary"
            class="full-width rounded-borders text-black"
            label="Log In"
            type="submit"
            :loading="loading"
          />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center q-mt-sm">
        <div class="text-grey-5">
          Don't have an account? <router-link to="/register" class="text-white text-weight-bold" style="text-decoration: none">Sign Up</router-link>
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

const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()
const $q = useQuasar()

const handleLogin = async () => {
  loading.value = true
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error
    
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'check',
      message: 'Login successful'
    })
    
    router.push('/dashboard') // Redirect to dashboard or home
  } catch (error) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: error.message
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
</style>
