// admin sign-in s001 | admin登入 | signin 使用
export const postAdminSignIinAPI = data => {
    // console.log(data);
    return {
        method: 'POST',
        baseURL: 'http://localhost:3009',
        url: `/admin/signin`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        data: data
    };
};

// ckeck in admin s002 | 確認是否有帳號 | signin 使用
export const postUserNameCheckInAPI = data => {
    // console.log(data);
    return {
        method: 'POST',
        baseURL: 'http://localhost:3009',
        url: `admin/checkinAccount`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        data: data
    };
};

// ckeck in admin s002 | 確認是否有帳號 | signin 使用
export const getAllAdminAPI = () => {
    // console.log(data);
    return {
        method: 'GET',
        baseURL: 'http://localhost:3009',
        url: `admin/allAdmin`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
};
