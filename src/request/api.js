import instance from "@/request/request"
// 这个文件用来管理项目中所有的api

// 这里不用default,因为这里将来就是用来放所有的请求
// 首页精品推荐
export const jinpinAPI = () => instance.get('/products/recommend')
