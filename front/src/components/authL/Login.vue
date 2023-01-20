<template>
    <div>
        <div class="login-from" v-if="!this.$store.getters.IS_AUTH">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Логин</label>
                    <input v-model="User.login" class="form-control" />
                    <small id="emailHelp" class="form-text text-muted"
                        >We'll never share your email with anyone else.</small
                    >
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Пароль</label>
                    <input v-model="User.password" type="password" class="form-control" />
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Your password must be 8-20 characters long, contain letters and numbers.
                    </small>
                </div>
            </form>
            <button v-on:click="post(User)" class="btn btn-primary">Отправить</button>
        </div>
        <div class="spinner-border" role="status" v-else>
            <span class="sr-only"></span>
        </div>
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
