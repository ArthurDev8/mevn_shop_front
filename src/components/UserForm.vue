<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="fullname">Fullname</label>
      <input
        type="text"
        class="form-control"
        id="fullname"
        placeholder="fullname"
        v-model="userForm.fullname"
      />
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        placeholder="phone"
        v-model="userForm.phone"
      />
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input
        type="text"
        class="form-control"
        id="email"
        placeholder="email"
        v-model="userForm.email"
      />
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input
        type="text"
        class="form-control"
        id="address"
        placeholder="address"
        v-model="userForm.address"
      />
    </div>
    <button type="submit" class="btn btn-success">Купить</button>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  data: () => ({
    userForm: {
      fullname: "",
      phone: "",
      email: "",
      address: "",
    },
  }),
  methods: {
    handleSubmit() {
      this.$emit('onFormSubmit', this.userForm)
    },
  },
};
</script>

<style>
</style>