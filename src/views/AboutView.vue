<template>
    <div class="about" @click="text">
        <img :src="pic" alt="" class="rightulliimg" />
        <div class="imgFont">BAD VIBES MUSIC</div>
        <div class="login">扫码登录</div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    data() {
        return {
            pic: 'https://img.js.design/assets/img/63386001025a07c7c9ef8e77.png#f4db45de45520adecdcb83bfe9de3fa5'
        };
    },
    mounted() {},
    methods: {
        text() {
            console.log('222');
        }
    }
};
</script>
<style lang="less" scoped>
.about {
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
    .rightulliimg {
        max-width: 1920px;
        max-height: 1080px;
    }
    .imgFont {
        position: absolute;
        left: 23%;
        top: 120px;
        box-sizing: border-box;
        z-index: 2;
        font-size: 150px;
        color: rgba(255, 255, 255, 1);
    }
    .login {
        position: absolute;
        left: 36%;
        top: 30%;
        width: 550px;
        height: 600px;
        border-radius: 52px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.25);
        margin: auto;
        padding: 30px 20px 20px 20px;
        background: #fff;
        font-size: 60px;
    }
}
</style>
