<template>
  <div class="login-from">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Логин</label>
        <input v-model="user.login" class="form-control" />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Пароль</label>
        <input v-model="user.password" class="form-control" />
        <small id="passwordHelpBlock" class="form-text text-muted">
          Your password must be 8-20 characters long, contain letters and
          numbers.
        </small>
      </div>
    </form>
    <button v-on:click="post(user)" class="btn btn-primary">Отправить</button>
  </div>
</template>

<script lang="ts" src="./auth.ts"></script>

<style>
.login-from {
  margin: 0 auto;
  max-width: 400px;
}

.btn {
  margin-top: 50px;
}
</style>
