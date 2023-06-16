import { defineComponent } from 'vue';
import modal from '@/components/modal.vue';

export default defineComponent({
  components:{
    modal,
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      cardnumber: '',
      gender: 'blank',
      date: new Date(),
      maxdate: new Date(),
      errors: {} as { [key: string]: string },
      showModal: false,
    };
  },
  methods: {
    validate(): void {
      this.errors = {};

      if (!this.firstname) {
        this.errors.firstname = 'กรุณากรอกชื่อของคุณ';
      }else if (!this.isValidName(this.firstname)) {
        this.errors.firstname = 'กรุณากรอกนามสกุล เป็นภาษาไทยหรือภาษาอังกฤษเท่านั้น';
      }

      if (!this.lastname) {
        this.errors.lastname = 'กรุณากรอกนามสกุลของคุณ';
      }
      else if (!this.isValidName(this.lastname)) {
        this.errors.lastname = 'กรุณากรอกนามสกุล เป็นภาษาไทยหรือภาษาอังกฤษเท่านั้น';
      }

      if (!this.cardnumber) {
        this.errors.cardnumber = 'กรุณากรอกรหัสประชาชนให้ถูกต้อง';
      }

      if (!this.gender || this.gender == 'blank') {
        this.errors.gender = 'กรุณาระบุเพศ';
      }

      if (Object.keys(this.errors).length === 0) {
        // Perform form submission logic here
        // e.g., send the data to the server
        console.log('Form submitted!');
        this.showModal = true; // Show the modal


      }

      if (!this.cardnumber) {
        this.errors.cardnumber = 'กรุณากรอกรหัสประชาชน';
      } else if (!this.checkcardnumber(this.cardnumber)) {
        this.errors.cardnumber = 'กรุณากรอกรหัสประชาชนให้ถูกต้อง';
      }

    },

    checkcardnumber(cardnumber: string) {
      let sum = 0;
      const checkCard = cardnumber.replace(/-/g,'');
      console.log(checkCard);
      if (Number(checkCard.substring(0, 1)) == 0) {
        return false;
      }
      if (checkCard.length != 13) {
        return false;

      }
      for (let i = 0; i < 12; i++) {
        sum += parseFloat(checkCard.charAt(i)) * (13 - i);
      }
      if ((11 - sum % 11) % 10 != parseFloat(checkCard.charAt(12))) {
        return false;
      }
      else {
        return true;
      }
    },

    cleardata() {
      this.firstname = '';
      this.lastname = '';
      this.cardnumber = '';
      this.gender = 'blank';
      this.date = new Date();
    },

    closeModal(): void {
      this.showModal = false; // Close the modal
    },

    isValidName(name: string): boolean {
      const nameRegex = /^[\u0E00-\u0E7F\u0020-\u007E]+$/; // Regular expression to match Thai and English characters
      const specialCharsRegex = /[!@#$%^&*()_+?><":{}|']/; // Regular expression to match special characters
      const nameNumber = /^[^\d]+$/; // Regular expression to match any character except digits (numbers)

      return nameRegex.test(name) && !specialCharsRegex.test(name) && nameNumber.test(name);
    },
    Confirm(){
      let data = {
        firstname: this.firstname.toString(),
        lastname: this.lastname.toString(),
        cardnumber: this.cardnumber.toString(),
        gender: this.gender.toString(),
        date: this.date.toString(),
      };

      console.log(data);
      // Programmatically navigate to the new page and pass the form data as route parameters
      this.$router.push({
          name: 'confirmcovid',
          query : data,
        });

    },
    formatCardNumber() {
      // Remove any non-digit characters from the input value
      this.cardnumber = this.cardnumber.replace(/\D/g, '');
  
      // Format the card number in the Thai ID card format
      if (this.cardnumber.length >= 1 && this.cardnumber.length <= 13) {
        // Add the hyphen at the appropriate position
        this.cardnumber = this.cardnumber.replace(/(\d{1,1})?(\d{1,4})?(\d{1,5})?(\d{1,2})?(\d{1,1})?/g, function (match, p1, p2, p3, p4, p5) {
          return [p1, p2, p3, p4, p5].filter(Boolean).join('-');
        });
      }
    },
  }
});