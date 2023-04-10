export default {
    namespaced: true,
    state: {
        isShowLoginModal: true,
    },
    getters: {
    },
    mutations: {
        // 修改isshow
        changeIsShowLoginModal(state, payload) {
            state.isShowLoginModal = payload;
        }
    },
    actions: {
    },


}