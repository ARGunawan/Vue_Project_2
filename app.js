const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      // confirmedName: ""
    };
  },
  methods:{
    increment(num){
      this.counter = this.counter + num
    },
    decrement(num){
      this.counter = this.counter - num
    },
    setName(event, lastName){
      this.name = event.target.value;
    },
    submitForm(){
      // event.preventDefault(); //prevents browser from submitting the form
      alert("Submitted!");
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
