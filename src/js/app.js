console.log("Connected");

//Create Vue Instance
new Vue({
  el: "#vue-app", //controls everything in this
  data: {
    name: "Shaun", //{{name}} in html will output this data
    job: "Ninja",
  },
  methods: {
    greet: function (time) {
      //this.name; can access all the data in this function
      return "Good " + time + " " + this.name; //specified afternoon parameter in HTML
    },
  },
});
