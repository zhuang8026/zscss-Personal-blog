// admin sign-in s001
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

// ckeck in admin s002
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
