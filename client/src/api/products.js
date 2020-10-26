// product001 獲取分頁資料
export const productsPagesAPI = (method, data) => {
    return {
        method: method,
        baseURL: 'http://localhost:3009', // window.location.origin
        url: `products/pages/${data}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
};

// taring001 星星評分
export const ratingAllAPI = method => {
    return {
        method: method,
        baseURL: 'http://localhost:3009',
        url: `products/all`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
};

// account214, previously member010
// export const productsPagesAPI = data =>
//     request('GET', `http://localhost:3009/products/pages/${data}`, {
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         }
//     });
