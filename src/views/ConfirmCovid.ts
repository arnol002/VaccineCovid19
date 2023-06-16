import { defineComponent } from 'vue';
import moment from 'moment';

export default defineComponent({
  name: "ConfirmCovid",
  data() {
    return {
      firstname: this.$route.query.firstname,
      lastname: this.$route.query.lastname,
      cardnumber: this.$route.query.cardnumber,
      gender: this.$route.query.gender,
      date: moment(this.$route.query.date?.toString()).format("DD MMMM yyyy"),
      age:  moment().diff(this.$route.query.date?.toString(),'month'),
    };
  },
  methods: {
    checkQuota():boolean{
      if(this.age >= 780){
        return true;
      }else if(this.age >= 4  && this.age <= 22) {
        return true;
      }
      return false;
    },
  }
});