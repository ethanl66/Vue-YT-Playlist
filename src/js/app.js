console.log("Connected");

//Create Vue Instance
new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: 0,
    y: 0,
  },
  methods: {
    add: function (inc) {
      this.age += inc; // ADDING MODIFIERS v-on:click.once, v-on:click.prevent
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert("You clicked");
    },
  },
});
