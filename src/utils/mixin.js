export const handleBackMixin = {
  data () {
    return {}
  },
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
