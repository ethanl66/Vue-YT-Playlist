console.log("Connected");

//Create Vue Instance
new Vue({
  el: "#vue-app",
  data: {
    age: 25, // v-on:click="age++" for click events to change age. Can fire the code inside the quotations.
    // OR you can have the code from methods: Then we could call the functions without () in the quotes
    //Shorthand: '@click, @dblclick
    x: 0,
    y: 0,
  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }, //pass event through parameter, no need in HTML
  },
});
