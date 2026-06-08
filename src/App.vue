<template>
  <div class="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 selection:bg-blue-500/30">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

    <div class="relative z-10 w-full flex flex-col items-center">
      <h1 class="text-4xl font-extrabold tracking-wider mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 uppercase">
        ⚓ Морской Бой
      </h1>

      <AuthForm />
    </div>
  </div>
</template>

<script setup>
import AuthForm from './components/AuthForm.vue'
</script>