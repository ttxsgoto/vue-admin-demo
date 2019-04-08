const api01 = {
    login01: {
        url: '/api/v1/auth/login/',
        method: 'post',
        notNeedToken: true,
        desc: '登录',
        param: {
            username: {
                desc: '用户名',
            },
            password: {
                desc: '密码',
            }
        }
    },
    searchCustomerPayList: {
        url: '/api/v1/payer/',
        method: 'GET',
        desc: '查询付款方列表',
        param: {}
    },
    getSupplierList: {
        url: '/api/v1/inout-supplier-pay/',
        method: 'get',
        desc: '供应商应付列表',
        param: {

        }
    },
};

export default api01


