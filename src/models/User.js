import { axiosIns } from "../axios";
import { REACT_APP_API } from "../constants";

const regex = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /[a-zA-Z0-9]+/,
};

export class UserModel {
    static validations = {
        email: [
            { required: true, message: "Email id is required" },
            { pattern: regex.email, message: "Email id is invalid" },
        ],
        password: [
            { required: true, message: "Password is required" },
            { pattern: regex.password, message: "Password is invalid" },
        ],
        confirmPassword: (password) => {
            return [
                {
                    required: true,
                    message: "Please confirm your password!",
                },
                {
                    validator: (_, value) => {
                        if (password !== value) {
                            return Promise.reject("Password is not matching");
                        } else {
                            return Promise.resolve();
                        }
                    },
                },
                { pattern: regex.password, message: "Password is invalid" },
            ];
        },
    };

    static checkLogin = (queryData) => {
        console.log("REACT_APP_API :>> ", REACT_APP_API);
        return axiosIns
            .post(`${REACT_APP_API}/users/login`, queryData)
            .then((res) => {
                return res;
            })
            .catch((e) => {
                console.log("e :>> ", e);
                return { success: false, error: e.message };
            });
    };
}