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

// admin sign-out s002 | admin登出 | signout 使用
export const postAdminSignOutAPI = data => {
    return {
        method: 'POST',
        baseURL: 'http://localhost:3009',
        url: `/admin/signOut`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        data: data
    };
};

// ckeck in admin s003 | 確認是否有帳號 | signin 使用
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

// ckeck in admin s004 | 確認是否有帳號 | signin 使用
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
