<script src="./ConfirmCovid" lang="ts"></script>

<style lang="scss">
@import './ConfirmCovid.scss';
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
            <p>ชื่อ-สกุล : {{ firstname }} {{ lastname }}</p>
            <p>เลขบัตรประชาชน : {{ cardnumber }}</p>
            <p v-if="gender === 'male'">เพศ : ชาย</p>
            <p v-if="gender === 'female'">เพศ : หญิง</p>
            <p>วัน/เดือน/ปี เกิด : {{ date }}</p>
            <!-- <p> age : {{ age }}</p> -->
            <p v-if="checkQuota()" id="passQuota">สามารถเข้ารับบริการได้</p>
            <p v-if="!checkQuota()" id="UnpassQuota">ไม่สามารถเข้ารับบริการได้</p>
            <div class="col">
              <button type="button" class="btn btn-outline-primary" @click="$router.back()">ย้อนกลับ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

