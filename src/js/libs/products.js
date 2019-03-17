import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
});

export const getList = async () => {
    const res = await instance.request({
        method: 'get',
        url: "/list",
    });

    return res;
};

export const getDetails = async id => {
    const res = await instance.request({
        method: 'get',
        url: "/details",
        params: {
            id,
        },
    });

    return res;
};
