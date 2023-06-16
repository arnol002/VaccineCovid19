<script src="./modal.ts" lang="ts"></script>

<style lang="scss">
@import './modal.scss';
</style>

<!-- Modal -->
<template>
<div class="modal fade" :class="{ 'show': showModal }" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
            <slot name="header"> Default Header </slot>
        </div>
        <div class="modal-body">
            <slot name="body"> Default body content </slot>
        </div>
        <div class="modal-footer">
            <slot name="footer"> Default Footer! </slot>
        </div>
      </div>
    </div>
  </div>
</template>