<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form" @submit.prevent="submitHanler">
      <div class="input-field">
        <input
          id="description"
          type="text"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
          v-model="name"
        />
        <label for="description">Имя</label>
        <span
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Поле не должно быть пустым</span
        >
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          :class="{ invalid: $v.phone.$dirty && !$v.phone.required }"
          v-model="phone"
        />
        <label for="description">Телефон</label>
        <span
          class="helper-text invalid"
          v-if="$v.phone.$dirty && !$v.phone.required"
          >Поле не должно быть пустым</span
        >
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
import messages from '@/utils/messages'

export default {
  name: 'profile',
  data: () => ({
    name: '',
    phone: '',
  }),
  validations: {
    name: { required },
    phone: { required },
  },
  mounted() {
    this.name = this.info.name
    this.phone = this.info.phone
    setTimeout(() => {
      M.updateTextFields()
    })
  },
  computed: {
    ...mapGetters(['info']),
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHanler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        await this.updateInfo({
          name: this.name,
          phone: this.phone,
        })
        this.$message(messages['updateUserProfile'])
      } catch (e) {}
    },
  },
}
</script>

<style scoped>
.switch {
  margin-bottom: 2rem;
}
</style>