import axios from "axios";
const axiosIns = axios.create();

axiosIns.interceptors.request.use((req) => {
    // No 'Access-Control-Allow-Origin' header is present on the requested resource.
    const jwt = localStorage.getItem("jwt") || "";
    req.headers["Access-Control-Allow-Origin"] = "*";
    req.headers.authorization = `Bearer ${jwt}`;
    return req;
});

export { axiosIns };
