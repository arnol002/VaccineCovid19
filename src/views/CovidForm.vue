<script src="./CovidForm" lang="ts"></script>

<style lang="scss">
@import './CovidForm.scss';
</style>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h4 class="head-center">การฉีดวัคซีนป้องกันโควิด 19</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="validate()">

              <!-- input name -->
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

              <!-- input cardnumber -->
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label for="cardnumber">เลขบัตรประชาชน</label>
                    <input v-model="cardnumber" type="text" @input="formatCardNumber" maxlength="13" :class="['form-control', { 'is-invalid': errors.cardnumber }]"
                      id="cardnumber" placeholder="กรุณากรอกเลขบัตรประชาชน">
                    <div v-if="errors.cardnumber" class="invalid-feedback">{{ errors.cardnumber }}</div>
                  </div>
                </div>
              </div>

              <!-- input gender -->
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

              <!-- input date -->
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label for="date">วัน/เดือน/ปี เกิด</label>
                    <VueDatePicker v-model="date" :format='"dd-MM-yyyy"' :max-date="maxdate" :enable-time-picker="false">
                    </VueDatePicker>
                  </div>
                </div>
              </div>

              <!-- input button reset and confirm -->
              <div class="row btn-margin">
                <div class="col">
                  <button type="button" class="btn btn-outline-primary" @click="cleardata">ล้างค่า</button>
                </div>
                <div class="col d-grid justify-content-md-end">
                  <button type="submit" class="btn btn-success">ยืนยัน</button>
                </div>
              </div>

            </form>

            <modal :class="{ 'show': showModal }" @close="closeModal">
              <template v-slot:header>
                  <div class="col-11">
                    <h5 class="modal-title">ยืนยันข้อมูล</h5>
                  </div>
                  <div class="col-1">
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                  </div>
              </template>
              <template v-slot:body>
                <p>ยืนยันข้อมูลการฉีดวัคซีนป้องกันโควิด 19</p>
              </template>
              <template v-slot:footer>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="Confirm">ตรวจสอบข้อมูล</button>
              </template>
            </modal>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>