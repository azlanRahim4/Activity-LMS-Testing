<template>
  <q-card flat class="bg-white rounded-borders soft-shadow full-height transition-hover">
    <q-card-section>
      <div class="row items-start justify-between">
        <div>
           <div class="text-grey-6 text-uppercase text-caption font-weight-bold letter-spacing-1">{{ title }}</div>
           <div class="text-h4 text-weight-bolder q-mt-sm text-black">{{ value }}</div>
        </div>
        <div class="rounded-circle q-pa-sm" :class="`bg-${iconColor}-1 text-${iconColor}`">
           <q-icon :name="icon" size="24px" />
        </div>
      </div>
      <div class="q-mt-md flex items-center">
         <div class="rounded-borders q-px-xs q-mr-sm" :class="isPositive ? 'bg-green-1 text-green-7' : 'bg-red-1 text-red-7'">
            <q-icon :name="isPositive ? 'arrow_upward' : 'arrow_downward'" size="12px" />
            <span class="text-caption text-weight-bold">{{ percentage }}%</span>
         </div>
         <div class="text-caption text-grey-5">vs last month</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  icon: String,
  iconColor: {
     type: String,
     default: 'primary'
  },
  percentage: String,
  isPositive: Boolean
})
</script>

<style scoped>
.soft-shadow {
   box-shadow: 0 4px 20px rgba(0,0,0,0.03);
   border: 1px solid #f0f0f0;
}
.letter-spacing-1 {
   letter-spacing: 0.5px;
}
.transition-hover {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.transition-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}
.rounded-circle {
    border-radius: 50%;
}
</style>
