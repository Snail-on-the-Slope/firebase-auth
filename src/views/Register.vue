<template>
  <form class="card" @submit.prevent="submitHanler">
    <div class="card__content">
      <span class="card__title">Регистрация</span>
      <div class="input-field">
        <input
          id="name"
          type="text"
          :class="{
            invalid:
              ($v.name.$dirty && !$v.name.required) ||
              ($v.name.$dirty && !$v.name.minLength),
          }"
          v-model.trim="name"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Введите Имя</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.name.$dirty && !$v.name.minLength"
          >Имя должно быть не меньше
          {{ $v.name.$params.minLength.min }} символов. Сейчас оно
          {{ name.length }}</small
        >
      </div>
      <div class="input-field">
        <input
          id="phone"
          type="text"
          :class="{
            invalid: $v.phone.$dirty && !$v.phone.required,
          }"
          v-model.trim="phone"
        />
        <label for="phone">Телефон</label>
        <small
          class="helper-text invalid"
          v-if="$v.phone.$dirty && !$v.phone.required"
          >Введите Телефон</small
        >
      </div>
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
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card__action">
      <div>
        <button
          class="btn waves-effect waves-light card__submit"
          type="submit"
          :disabled="!agree"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    phone: '',
    agree: false,
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required, minLength: minLength(3) },
    phone: { required },
    agree: { checked: (v) => v },
  },
  methods: {
    async submitHanler() {
      console.log('dis', this.agree)
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        phone: this.phone,
      }

      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
      } catch (e) {}
    },
  },
}
</script>