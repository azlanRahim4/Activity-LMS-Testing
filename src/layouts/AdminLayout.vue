<template>
  <q-layout view="lHh LpR lFf" class="bg-grey-1 text-black font-sans">
    <q-header class="bg-white text-black">
      <TopHeader @toggle-drawer="toggleLeftDrawer" />
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-black text-white" :width="260">
      <SidebarMenu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import TopHeader from 'components/dashboard/TopHeader.vue'
import SidebarMenu from 'components/dashboard/SidebarMenu.vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
