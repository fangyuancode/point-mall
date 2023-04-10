<template>
    <!-- 登录模态窗口 -->
    <div class="login-model">
        <!-- 添加这个盒子，mask，避免事件冒泡 -->
        <div class="mask">
        </div>
        <div class="login-box">

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.login-model {
    // 固定定位
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

    .mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);

    }

    .login-box {
        width: 555px;
        height: 423px;
        background-image: url('@/assets/img/login-box-bg.png');
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
}</style>