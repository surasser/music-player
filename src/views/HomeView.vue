<template>
    <div class="home" @click="text">
        <img :src="pic" alt="" class="rightulliimg" />
        <div class="imgFont">BAD VIBES MUSIC</div>
        <div class="imgFontsize" @click="toLogin">按下任意键开始</div>
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
        toLogin() {
            this.$router.replace('/about');
        }
    }
};
</script>
<style lang="less" scoped>
.home {
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
    .imgFontsize {
        position: absolute;
        right: 310px;
        top: 92%;
        width: 360px;
        box-sizing: border-box;
        padding: 10px;
        z-index: 2;
        font-size: 48px;
        color: #fff;
    }
}
</style>
