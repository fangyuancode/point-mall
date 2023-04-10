import axios from "axios";

// instance 实例  之前的axios对象
const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8881/cms',
    timeout: 5000,

})

// 主要有两个对象：请求拦截，响应拦截

instance.interceptors.request.use(config => {
    // 什么时候，执行这里的代码，在每个请求发出去之前。
    // config是一个对象,记录了本次请求的相关信息
    // console.log(config);
    // 这个函数什么作用：可以用来做请求前的准备工作，如：添加请求头

    return config

}, err => {
    // 将错误抛出
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    // 什么时候，执行这里的代码，在后端返回响应，在进入到组件中成功的回调函数之前，执行。
    // res是一个对象,原先axiso封装的res对象。
    // console.log("res", res);
    // 这个函数什么作用：
    // 1.可以用来做请求前的准备工作
    // 2.对服务器返回的数据做统一的处理
    return res.data;

}, err => {
    // 将错误抛出
    return Promise.reject(err)
})




export default instance;