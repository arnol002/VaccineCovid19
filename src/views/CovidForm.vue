<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h4>การฉีดวัคซีนป้องกันโควิด 19</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="validate">
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <!-- Start Input Firstname -->
                    <label for="firstname">ชื่อ</label>
                    <input type="text" class="form-control" v-bind:class="{ 'is-invalid': firstnameError }" id="firstname"
                      placeholder="ชื่อของคุณ" v-model="firstname">
                    <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">
                      {{ errors[0].message }}
                    </div>
                    <!-- End Input Lastname -->
                  </div>
                  <div class="col">
                    <!-- Start Input Lastname -->
                    <label for="lastname">นามสกุล</label>
                    <input type="text" class="form-control" v-bind:class="{ 'is-invalid': lastnameError }" id="lastname"
                      placeholder="นามสกุลของคุณ" v-model="lastname">
                    <div class="invalid-feedback" id="feedback-2" v-if="errors[1]">
                      {{ errors[1].message }}
                    </div>
                    <!-- End Input Lastname -->
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <!-- Start Input Cardnumber -->
                    <label for="cardnumber">เลขบัตรประชาชน</label>
                    <input type="text" v-model="cardnumber" @input="cardnumberInput" class="form-control"
                      v-bind:class="{ 'is-invalid': cardnumberError }" id="cardnumber" placeholder="เลขบัตรประชาชนของคุณ">
                      <div class="invalid-feedback" id="feedback-3" v-if="errors[2]">
                      {{ errors[2].message }}
                    </div>
                    <!-- End Input Cardnumber -->
                  </div>
                </div>
              </div>
              <!-- <div class="form-group">
                <input type="text" class="form-control" v-bind:class="{ 'is-invalid': emailError }" id="email"
                  placeholder="Your email" v-model="email">
                <div class="invalid-feedback" id="feedback-3" v-if="errors[2]">
                  {{ errors[2].message }}
                </div>
              </div>
              <div class="form-group">
                <textarea class="form-control" v-bind:class="{ 'is-invalid': commentError }" id="comment"
                  placeholder="Your comment" v-model="comment"></textarea>
                <div class="invalid-feedback" id="feedback-4" v-if="errors[3]">
                  {{ errors[3].message }}
                </div>
              </div> -->
              <button class="btn btn-primary" type="submit">Validate</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface ErrorItem {
  message: string;
}

export default defineComponent({
  name: 'home',
  data() {
    return {
      firstname: '',
      lastname: '',
      cardnumber: '',
      email: '',
      comment: '',
      firstnameError: false,
      lastnameError: false,
      cardnumberError: false,
      emailError: false,
      commentError: false,
      errors: [] as ErrorItem[], // Explicitly define the type of 'errors'
    };
  },
  methods: {
    validate() {
      this.errors = [];
      const firstnamelen = this.firstname.length;
      // firstname validate
      if (firstnamelen < 5 || firstnamelen > 20) {
        this.firstnameError = true;
        this.errors.push({
          // message: 'Name must be between 5 to 20 characters long.',
          message: 'ชื่อต้องมีความยาวระหว่าง 5 ถึง 20 อักขระ',
        });
      } else {
        (document.getElementById('firstname') as HTMLInputElement).className = 'form-control is-valid';
        this.errors.push({
          message: ' ',
        });
        (document.getElementById('feedback-1') as HTMLElement).className = 'valid-feedback';
      }

      // lastname validate
      const lastnamelen = this.lastname.length;
      if (lastnamelen < 5 || lastnamelen > 20) {
        this.lastnameError = true;
        this.errors.push({
          // message: 'Name must be between 5 to 20 characters long.',
          message: 'นามสกุลต้องมีความยาวระหว่าง 5 ถึง 20 อักขระ',
        });
      } else {
        (document.getElementById('lastname') as HTMLInputElement).className = 'form-control is-valid';
        this.errors.push({
          message: ' ',
        });
        (document.getElementById('feedback-2') as HTMLElement).className = 'valid-feedback';
      }

      // cardnumber validate
      const cardnumberlen = this.cardnumber.length;
      if (cardnumberlen == null || cardnumberlen > 13 || cardnumberlen <= 12) {
        this.cardnumberError = true;
        this.errors.push({
          message: 'เลขบัตรประชาชนต้องครบ 13 หลัก',
        });
      } else {
        (document.getElementById('cardnumber') as HTMLInputElement).className = 'form-control is-valid';
        this.errors.push({
          message: ' ',
        });
        (document.getElementById('feedback-3') as HTMLElement).className = 'valid-feedback';
      }

      // email validate
      // if (this.email.length < 10 || this.email.search('@') === -1) {
      //   this.emailError = true;
      //   this.errors.push({
      //     message: 'Please provide a valid email address.',
      //   });
      // } else {
      //   (document.getElementById('email') as HTMLInputElement).className = 'form-control is-valid';
      //   this.errors.push({
      //     message: 'Validated.',
      //   });
      //   (document.getElementById('feedback-3') as HTMLElement).className = 'valid-feedback';
      // }
      // comment validate
      const regex = /^[a-zA-Z0-9 .-]+$/;
      if (this.comment.length < 20 || this.comment.match(regex) === null) {
        this.commentError = true;
        this.errors.push({
          message: 'Comment must be of 20 characters or more and use of special characters except . and - are restricted',
        });
      } else {
        (document.getElementById('comment') as HTMLInputElement).className = 'form-control is-valid';
        this.errors.push({
          message: 'Validated.',
        });
        (document.getElementById('feedback-4') as HTMLElement).className = 'valid-feedback';
      }
    },

    cardnumberInput() {
      // Remove non-numeric characters from the input
      this.cardnumber = this.cardnumber.replace(/\D/g, '');
    },



  },
});
</script>