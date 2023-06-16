import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal(): void {
      this.showModal = false; // Close the modal
    },
  }
});