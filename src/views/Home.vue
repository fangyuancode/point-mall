<template>
    <div>我是首页</div>
</template>
<script>
import { jinpinAPI } from '@/request/api'
export default {
    name: 'home',
    // 以下代码，作为案例可以，项目不行，会有缺陷。
    // 1. 请求头写在哪里，多个连接的带请求头请求怎么写。
    // 2.不便于接口的管理
    // 3.容易出现回调地狱
    async created() {
        // await 后面一般放promise对象，异步代码同步化，await newpRromise
        let res = await jinpinAPI();
        console.log("--res",res);
    }
    // 使用async，await,不会出现回调地狱。
}
</script>
<style scoped></style>