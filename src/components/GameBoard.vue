<template>
  <div class="flex flex-col items-center justify-center p-6 bg-[#d4d0c8] border-2 border-t-[#fff] border-l-[#fff] border-b-[#404040] border-r-[#404040] shadow-[1px_1px_0_0_#000]">
    <h2 class="text-2xl font-mono mb-4 text-black font-bold uppercase tracking-wider">
      Ваше поле
    </h2>
    
    <div class="grid grid-cols-10 gap-1 bg-[#808080] p-1 border-2 border-b-[#fff] border-r-[#fff] border-t-[#404040] border-l-[#404040]">
      <div 
        v-for="cell in 100" 
        :key="cell"
        class="w-8 h-8 bg-[#3a6ea5] border border-[#204060] hover:bg-cyan-400 cursor-pointer transition-colors"
        @click="handleCellClick(cell)"
      />
    </div>
  </div>
</template>

<script setup>
const handleCellClick = (cellIndex) => {
  console.log(`Кликнули по клетке с индексом: ${cellIndex}`)
}
</script>