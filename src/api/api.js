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
        param: {}
    },
    getPaymentList: {
        url: '/api/v1/supplier-pay/',
        method: 'get',
        desc: '付款列表',
        param: {}
    },
    SupplierList: {
        url: '/api/v1/suppliers/',
        method: 'get',
        desc: '查询供应商列表',
        param: {}
    },
    updateSupplierPay: {
        url: '/api/v1/supplier-pay/:id/',
        method: 'patch',
        desc: '更新供应商付款',
        param: {}
    },
    addSupplierPay: {
        url: '/api/v1/supplier-pay/',
        method: 'post',
        desc: '付款新增',
        param: {}
    },
};

export default api01


