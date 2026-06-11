<template>
  <div class="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-white mb-2">
        {{ is2FAStage ? 'Защита аккаунта' : 'Вход в игру' }}
      </h2>
      <p class="text-sm text-slate-400">
        {{ is2FAStage ? 'Введите 6-значный код из Google Authenticator' : 'Авторизуйтесь, чтобы начать бой' }}
      </p>
    </div>

    <form v-if="!is2FAStage" @submit.prevent="handleLogin" class="space-y-5">
      <div>
        <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Имя пользователя</label>
        <input 
          v-model="loginForm.username"
          type="text" 
          required
          placeholder="Ваш никнейм"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Пароль</label>
        <input 
          v-model="loginForm.password"
          type="password" 
          required
          placeholder="••••••••"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      <button 
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium py-3 rounded-lg transition shadow-lg shadow-blue-600/20"
      >
        Далее
      </button>
    </form>

    <form v-else @submit.prevent="handle2FA" class="space-y-6">
      <div>
        <label class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 text-center">Код подтверждения</label>
        <input 
          v-model="twoFactorCode"
          type="text" 
          maxlength="6"
          required
          placeholder="000 000"
          class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-center text-2xl font-mono tracking-[0.5em] text-blue-400 placeholder-slate-700 focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      <div class="flex flex-col space-y-3">
        <button 
          type="submit"
          class="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium py-3 rounded-lg transition shadow-lg shadow-emerald-600/20"
        >
          Подтвердить и войти
        </button>
        
        <button 
          @click="is2FAStage = false" 
          type="button"
          class="w-full bg-transparent hover:bg-slate-700/50 text-slate-400 font-medium py-2 rounded-lg transition text-sm"
        >
          Вернуться назад
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { API_URL } from '../config.js'

// Переключатель этапов авторизации
const is2FAStage = ref(false)

const loginForm = ref({
  username: '',
  password: ''
})

const twoFactorCode = ref('')

// Обработка первого этапа (Логин/Пароль)
const handleLogin = async () => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginForm.value),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      alert(data.error || 'Ошибка авторизации')
      return
    }
    is2FAStage.value = true
  } catch {
    alert(`Не удалось подключиться к серверу (${API_URL})`)
  }
}

// Обработка второго этапа (2FA код)
const handle2FA = () => {
  console.log('Отправка TOTP-кода:', twoFactorCode.value)
  alert(`Успешный вход! Токен отправлен. Код: ${twoFactorCode.value}`)
  // Здесь в будущем будет вызов метода для открытия WebSockets сессии
}
</script>