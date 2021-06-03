console.log("Connected");

const one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One",
  },
  methods: {},
  computed: {
    greet: function () {
      return "Hello from app one";
    },
  },
});

const two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two",
  },
  methods: {
    changeTitle: function () {
      one.title = "Title One Has Been Changed";
    },
  },
  computed: {
    greet: function () {
      return "Hello from app two";
    },
  },
});

two.title = "Changed Title Two from Outside"; //Can be changed from outside the instnace

//NEXT VIDEO: L15 Introduction to Components
// https://www.youtube.com/watch?v=EAONyIKrZN0&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=16

//Make new branch
