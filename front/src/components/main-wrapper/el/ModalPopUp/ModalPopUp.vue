<template>
    <div>
        <div class="back">
            <div class="card bg-dark text-white">
                <img
                    class="imgP"
                    :style="{
                        backgroundImage: `url(${'data:image/jpeg;base64,' + this.$store.getters.THIS_PRODUCT.image})`,
                    }"
                />
                <div class="card-img-overlay">
                    <h5 class="card-title">{{ this.$store.getters.THIS_PRODUCT.title }}</h5>
                    <p class="card-text">
                        {{ this.$store.getters.THIS_PRODUCT.description }}
                    </p>
                    <p class="card-text">{{ this.$store.getters.THIS_PRODUCT.price }}</p>
                    <slot> </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ModalPopUp.ts"></script>

<style>
.back {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(2, 2, 2, 0.3);
    z-index: 50;
    height: 100%;
    width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
}
.imgP {
    height: 100%;
    width: 100%;
}
.card {
    height: 500px;
    width: 700px;
}
</style>
