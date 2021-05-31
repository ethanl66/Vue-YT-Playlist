console.log("Connected");

//Create Vue Instance
new Vue({
  el: "#vue-app",
  data: {
    name: "Shaun",
    job: "Ninja",
    website: "http://www.thenetninja.co.uk", //requires v-bind: on attributes. Shorthand ':'. Doesn't require {{}}
    websiteTag:
      '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>', //v-html: for binding html elements
  },
  methods: {
    greet: function (time) {
      return "Good " + time + " " + this.name;
    },
  },
});
