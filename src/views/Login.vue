<template>
  <form class="card" @submit.prevent="submitHanler">
    <div class="card__content">
      <span class="card__title">Вход</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
          v-model.trim="email"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Поле Email не должно быть пустым</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите коррректный Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
          v-model.trim="password"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Введите пароль</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Пароль должен быть не меньше
          {{ $v.password.$params.minLength.min }} символов. Сейчас он
          {{ password.length }}</small
        >
      </div>
    </div>
    <div class="card__action">
      <div>
        <button class="btn waves-effect waves-light card__submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength, maxLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6), maxLength: maxLength(40) },
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    async submitHanler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
      }

      try {
        await this.$store.dispatch('login', formData)
        await this.$store.dispatch('fetchInfo')
        this.$router.push('/')
      } catch (e) {}
    },
  },
}
</script>