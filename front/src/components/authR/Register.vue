<template>
  <div class="register-from">
    <template>
      <div class="login-from">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">регистрация</label>
            <input v-model="User.login" class="form-control" />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">ваше имя</label>
            <input v-model="User.name" class="form-control" />
            <small id="emailHelp" class="form-text text-muted">имя</small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">ваша фамилия</label>
            <input v-model="User.surname" class="form-control" />
            <small id="emailHelp" class="form-text text-muted">фамилия</small>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input
              v-model="User.password"
              type="password"
              class="form-control"
            />
            <small id="passwordHelpBlock" class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and
              numbers.
            </small>
          </div>
        </form>
        <button v-on:click="post(User)" class="btn btn-primary">
          Отправить
        </button>
      </div>
    </template>
  </div>
</template>

<script lang="ts" src="./authR.ts"></script>

<style>
.register-from {
  margin: 0 auto;
  max-width: 400px;
}

.btn {
  margin-top: 50px;
}
</style>
