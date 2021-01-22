<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="mainlayout">
      <Navbar @click="isOpen = !isOpen" />

      <main
        class="mainlayout__content"
        :class="{ mainlayout__content_full: !isOpen }"
      >
        <div class="mainlayout__page">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import messages from '@/utils/messages'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true,
  }),
  async mounted() {
    console.log('mounted', this.loading, this.$store.getters.info)
    if (!this.$store.getters.info) {
      await this.$store.dispatch('fetchInfo')
    }

    this.loading = false
    console.log('mounted', this.loading)
  },
  components: {
    Navbar,
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
  },
  watch: {
    error(fbError) {
      console.log(fbError)
      this.$error(messages[fbError.code] || 'Что-то пошло не так')
    },
  },
}
</script>