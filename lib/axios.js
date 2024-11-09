import { cookies } from "next/headers";

const { default: axios } = require("axios");

export const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    // baseURL: "http://localhost:5000",
    timeout: 5000,
    headers: {
        "X-Custom-Header-Name": "by me",
    },
});
const cookiesGet = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
};

instance.interceptors.request.use(
    (config) => {
        try {
            console.log("Intercepting request...");
            config.headers["X-interceptor-header"] = "interception";

            // console.log(req.headers)
            const cookie = cookies();
            // console.log(cookie);

            // console.log("Interceptor Config:", config);
            // console.log(
            //     "======================================== End request interceptor ============================="
            // );

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
        // console.log(
        //     " from res inter: ",
        //     response.status,
        //     "headers: ",
        //     response.headers,
        //     "data: ",
        //     response.data,
        //     "=====================================end res interceptor ==============================="
        // );
        return response;
    },
    (error) => {
        console.log(error.code);

        // console.log("error from res inter: ", error.response,"===================================================== end inter res error ==========================================");
        // console.log("error from res inter: ", error.resp);

        return Promise.reject(error);
    }
);

// export const fetchData = (endPoint) => {
//     const [error, setError] = useState(null);
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     console.log(endPoint);
//     useEffect(() => {
//         (async () => {
//             try {
//                 setIsLoading(true);
//                 let response = await instance.get(endPoint);
//                 setData(response.data);
//                 setIsLoading(false);
//                 console.log(response.data);
//             } catch (error) {
//                 // console.log("error: ",error.response);
//                 setError(error);
//                 setIsLoading(false);
//             }
//         })();
//     }, [endPoint]);

//     return {
//         data,
//         error,
//         isLoading,
//     };
// };

export const fetchDataFromServer = async (endPoint) => {
    try {
        let response = await instance.get(endPoint);
        return response.data;
    } catch (error) {
        console.log(error.code);

        return [];
    }
};
