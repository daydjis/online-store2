<template>
    <div class="back">
        <div class="cont">
            <div class="card bg-dark text-white">
                <div class="modal-header">
                    <slot> </slot>
                </div>
                <img
                    class="imgP"
                    :style="{
                        backgroundImage: `url(${'data:image/jpeg;base64,' + this.$store.getters.THIS_PRODUCT.image})`,
                    }"
                />
                <div class="card-img-overlay">
                    <strong>
                        <h4 class="card-title">{{ this.$store.getters.THIS_PRODUCT.title }}</h4></strong
                    >
                    <strong>
                        <p class="card-text">
                            {{ this.$store.getters.THIS_PRODUCT.description }}
                        </p>
                    </strong>
                    <strong
                        ><p class="card-text">{{ this.$store.getters.THIS_PRODUCT.price }} руб</p></strong
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ModalPopUp.ts"></script>

<style>
.modal-header {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    width: 100%;
    position: absolute;
    z-index: 99999;
}
.back {
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(2, 2, 2, 0.2);
    z-index: 40;
    right: 0;
    height: 140%;
    width: 100%;
    bottom: 0;
    left: 0;
    top: 0;
}

.cont {
    position: fixed;
    top: 50px;
    padding: 16px;
    z-index: 50;
}
.imgP {
    opacity: 20%;
    height: 100%;
    width: 100%;
}
.card {
    height: 500px;
    width: 700px;
}
.card-img-overlay {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
