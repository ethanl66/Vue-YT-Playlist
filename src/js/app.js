console.log("Connected");

new Vue({
  el: "#vue-app",
  data: {
    output: "Your favorite food",
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs.test.innerHTML);
      this.output = this.$refs.input.value;
    },
  },
});
