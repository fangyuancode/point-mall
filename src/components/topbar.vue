<template>
    <div class="topbar">

        <div class="wrap">
            <div class="left">
                欢迎来到叮当朗积分商城
            </div>
            <div class="right">
                <ul>
                    <li>
                        <img src="@/assets/img/userImg.f8bbec5e.png" alt="">
                        用户名：游客
                    </li>
                    <li>我的积分：--</li>
                    <li>获取积分</li>
                    <li>叮当朗官网</li>
                    <li class="loginbtn">登录</li>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "topbar"
}
</script>
<style lang="less" scoped>
// 引入less
@import '@/assets/css/global.less';
.topbar {
    height: 40px;
    background-color: #242b39;
    line-height: 40px;
    font-weight: 300;
    color: #FFFEFE;

    .wrap {
        height: 40px;
        display: flex;
        justify-content: space-between;

        .right ul {
            //right下面的ul
            display: flex;

            li {
                display: flex;
                align-items: center;
                margin-left: 20px;
                cursor: pointer;//鼠标移上去小手指

                img {
                    width: 24px;
                    border-radius: 50%;
                    margin-right: 6px;
                }


                &.loginbtn {
                    // &.loginbtn表示即时li,又有这个类
                    width: 124px;
                    height: 40px;
                    background-color: @base-color;
                    justify-content: center;
                }
            }

        }
    }
}
</style>