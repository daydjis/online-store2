<template>
    <div>
        <div class="register-from">
            <div class="login-from">
                <h1>Регистрация</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Логин</label>
                        <input v-model="User.login" class="form-control" @input="fCheckValidFormLogin(User.login)" />
                    </div>
                    <div style="color: brown" v-if="objErrors.login">{{ objErrors.login }}</div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">ваше имя</label>
                        <input v-model="User.name" class="form-control" @input="fCheckValidFormName(User.name)" />
                    </div>
                    <div style="color: brown" v-if="objErrors.name">{{ objErrors.name }}</div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">ваша фамилия</label>
                        <input
                            v-model="User.surname"
                            class="form-control"
                            @input="fCheckValidFormSurname(User.surname)"
                        />
                    </div>
                    <div style="color: brown" v-if="objErrors.surname">{{ objErrors.surname }}</div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Пароль</label>
                        <input
                            v-model="User.password"
                            type="password"
                            class="form-control"
                            @input="fCheckValidFormPassword(User.password)"
                        />
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 6-30 characters long, contain letters and numbers.
                        </small>
                    </div>
                    <div style="color: brown" v-if="objErrors.password">{{ objErrors.password }}</div>
                </form>
                <button
                    type="submit"
                    v-if="!this.$store.getters.AUTH"
                    :disabled="isValidOk"
                    @click="fPostUserInfo(User)"
                    class="btn btn-primary"
                >
                    Отправить
                </button>
                <div v-else class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./authR.ts"></script>

<style lang="scss" scoped>
.register-from {
    margin: 0 auto;
    max-width: 400px;
}

.btn {
    margin-top: 20px;
}
</style>
