import { useEffect, useState } from "react";
import { cookies } from "../cookies";

const { default: axios } = require("axios");

export const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    // baseURL: "http://localhost:5000",
    timeout: 5000,
    headers: {
        "X-Custom-Header-Name": "by me",
    },
});

instance.interceptors.request.use(
    (config) => {
        try {
            console.log("Intercepting request...");
            config.headers["X-interceptor-header"] = "interception";

            const cookie = cookies.get("email");
            console.log(cookie);

            // console.log("Interceptor Config:", config);
            console.log(
                "======================================== End request interceptor ============================="
            );

            return config;
        } catch (error) {
            console.error("Error in interceptor:", error);
            return Promise.reject(error);
        }
    },
    (error) => {
        console.error("Error from interceptors:", error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        console.log(
            " from res inter: ",
            response.status,
            "headers: ",
            response.headers,
            "data: ",
            response.data,
            "=====================================end res interceptor ==============================="
        );
        return response;
    },
    (error) => {
        console.log(error.code);

        // console.log("error from res inter: ", error.response,"===================================================== end inter res error ==========================================");
        // console.log("error from res inter: ", error.resp);

        return Promise.reject(error);
    }
);
