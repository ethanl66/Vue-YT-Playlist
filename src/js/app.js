console.log("Connected");

//Create Vue Instance
new Vue({
  el: "#vue-app",
  data: {},
  methods: {
    logName: function () {
      console.log("You entered a name"); //Key events and stackable modifiers in HTML, on:keyup.alt.enter
    },
    logAge: function () {
      console.log("You entered an age");
    },
  },
});
