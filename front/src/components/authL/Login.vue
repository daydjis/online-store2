<template>
    <div>
        <div class="login-from">
            <h1>Авторизация</h1>
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
                    <input @blur="true" @focusin="true" v-model="User.password" type="password" class="form-control" />
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Your password must be 6-30 characters long, contain letters and numbers.
                    </small>
                </div>
            </form>
            <button v-if="!this.$store.getters.IS_AUTH" @click="post(User)" class="btn btn-primary">Отправить</button>
            <div v-else class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./auth.ts"></script>

<style lang="scss" scoped>
.login-from {
    margin: 0 auto;
    max-width: 400px;
}

.btn {
    margin-top: 20px;
}
</style>
