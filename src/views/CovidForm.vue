<style lang="scss">
@import './CovidForm.scss';
</style>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h4>การฉีดวัคซีนป้องกันโควิด 19</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="validate()">
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label for="firstname">ชื่อ</label>
                    <input v-model="firstname" type="text" :class="['form-control', { 'is-invalid': errors.firstname }]"
                      id="firstname" placeholder="กรุณากรอกชื่อ">
                    <div v-if="errors.firstname" class="invalid-feedback">{{ errors.firstname }}</div>
                  </div>
                  <div class="col">
                    <label for="lastname">นามสกุล</label>
                    <input v-model="lastname" type="text" :class="['form-control', { 'is-invalid': errors.lastname }]"
                      id="lastname" placeholder="กรุณากรอกนามสกุล">
                    <div v-if="errors.lastname" class="invalid-feedback">{{ errors.lastname }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label for="cardnumber">เลขบัตรประชาชน</label>
                    <input v-model="cardnumber" type="text" :class="['form-control', { 'is-invalid': errors.cardnumber }]"
                      id="cardnumber" placeholder="กรุณากรอกเลขบัตรประชาชน">
                    <div v-if="errors.cardnumber" class="invalid-feedback">{{ errors.cardnumber }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label for="gender">เพศ</label>
                    <select v-model="gender" :class="['form-select', { 'is-invalid': errors.gender }]">
                      <option selected value="blank">กรุณาเลือกเพศ</option>
                      <option value="male">ชาย</option>
                      <option value="female">หญิง</option>
                    </select>
                    <div v-if="errors.gender" class="invalid-feedback">{{ errors.gender }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label for="date">วัน/เดือน/ปี เกิด</label>
                    <VueDatePicker v-model="date" :format='"dd-MM-yyyy"' :max-date="maxdate" :enable-time-picker="false">
                    </VueDatePicker>
                  </div>
                </div>
              </div>



              <!-- <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" :class="['form-control', { 'is-invalid': errors.email }]" id="email"
                  placeholder="Enter your email">
                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
              </div> -->
              <div class="row">
                <div class="col">
                  <button type="button" class="btn btn-outline-primary" @click="cleardata">ล้างค่า</button>
                </div>
                <div class="col">
                  <button type="submit" class="btn btn-success">ยืนยัน</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      firstname: '',
      lastname: '',
      cardnumber: '',
      gender: 'blank',
      date: new Date(),
      maxdate: new Date(),
      // email: '',
      errors: {} as { [key: string]: string }
    };
  },
  methods: {
    validate(): void {
      this.errors = {};

      if (!this.firstname) {
        this.errors.firstname = 'กรุณากรอกชื่อของคุณ';
      }

      if (!this.lastname) {
        this.errors.lastname = 'กรุณากรอกนามสกุลของคุณ';
      }

      if (!this.cardnumber) {
        this.errors.cardnumber = 'กรุณากรอกรหัสประชาชนให้ถูกต้อง';
      }

      if (!this.gender || this.gender == 'blank') {
        this.errors.gender = 'กรุณาระบุเพศ';
      }

      // if (!this.email) {
      //   this.errors.email = 'Please enter your email.';
      // } else if (!this.isValidEmail(this.email)) {
      //   this.errors.email = 'Please enter a valid email address.';
      // }

      if (Object.keys(this.errors).length === 0) {
        // Perform form submission logic here
        // e.g., send the data to the server
        console.log('Form submitted!');
      }

      if (!this.cardnumber) {
        this.errors.cardnumber = 'กรุณากรอกรหัสประชาชน';
      } else if (!this.checkcardnumber(this.cardnumber)) {
        this.errors.cardnumber = 'กรุณากรอกรหัสประชาชนให้ถูกต้อง';
      }
    },
    // isValidEmail(email: string): boolean {
    //   // Add your email validation logic here
    //   // This is a simple example, you can use regular expressions or a library for more comprehensive validation
    //   const emailRegex = /^\S+@\S+.\S+$/;
    //   return emailRegex.test(email);
    // }

    checkcardnumber(cardnumber: string) {
      let sum = 0;
      if (Number(cardnumber.substring(0, 1)) == 0) {
        return false;
      }
      if (cardnumber.length != 13) {
        return false;
      }
      for (let i = 0; i < 12; i++) {
        sum += parseFloat(cardnumber.charAt(i)) * (13 - i);
        console.log(sum);
      }
      if ((11 - sum % 11) % 10 != parseFloat(cardnumber.charAt(12))) {
        return false;
      }
      else {
        return true;
      }
    },

    cleardata(){
      this.firstname = '';
      this.lastname = '';
      this.cardnumber = '';
      this.gender = 'blank';
      this.date = new Date();
    },
  }
});
</script>