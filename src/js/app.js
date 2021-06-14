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

// Lesson 18 Vue Files and Root Component
//https://www.youtube.com/watch?v=yP5Tu3S_FtU&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=19
