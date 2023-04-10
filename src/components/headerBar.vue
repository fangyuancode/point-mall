<template>
    <div class="header wrap">
        <h1><img src="@/assets/img/indexLogo.6f8ac4f0.png" alt=""></h1>
        <ul class="nav">
            <li :class="$route.path == '/home' ? 'active' : ''" @click="$router.push('/home')">首页</li>
            <li :class="$route.path == '/goods' ? 'active' : ''" @click="$router.push('/goods')">全部商品</li>
            <li :class="$route.path == '/user' ? 'active' : ''" @click="$router.push('/user')">个人中心</li>
            <li :class="$route.path == '/order' ? 'active' : ''" @click="$router.push('/order')">我的订单</li>
            <li :class="$route.path == '/free' ? 'active' : ''" @click="$router.push('/free')">专属福利</li>
        </ul>
        <div class="search">
            <input type="text" placeholder="请输入你想要的内容">
            <span><img src="@/assets/img/search.png" alt=""></span>
        </div>
    </div>
</template>
<script>
export default {
    name: "headerbar"
}
</script>
<style lang="less" scoped>
@import '@/assets/css/global.less';

.header {
    height: 118px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav {
        display: flex;
        width: 500px;
        justify-content: space-between;

        li {
            cursor: pointer;

            &.active {
                color: @base-color;
                font-weight: 700;
            }
        }
    }

    .search {
        display: flex;

        input {
            width: 214px;
            height: 38px;
            border: 1px solid #dedede;
            border-radius: 20px 0px 0px 20px;
            text-indent: 12px; //文字缩进，避免撑开盒子
        }

        span {
            width: 50px;
            height: 38px;
            background-color: @base-color;
            border-radius: 0px 20px 20px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            img {
                width: 20px;
                height: 20px;
            }
        }
    }
}
</style>