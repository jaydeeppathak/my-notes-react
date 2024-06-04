import { useState } from "react";
import {
    Form,
    Input,
    Card,
    Button,
    Avatar,
    Typography,
    message,
    Modal,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { LoginWrapper } from "./styled";
import { UserModel } from "../../models";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [form] = Form.useForm();
    const validations = UserModel.validations;
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onFinish = async ({ email, password }) => {
        setIsSubmitting(true);
        const queryData = {
            email,
            password,
        };

        const res = await UserModel.checkLogin(queryData);
        console.log("res :>> ", res);

        if (!res.success) {
            Modal.error({
                title: "Oops!",
                content: res.error || "Something went wrong",
                centered: true,
            });
            setIsSubmitting(false);
            return;
        } else {
            localStorage.setItem("jwt", res?.data);
            setIsSubmitting(false);
            Modal.success({
                title: "Success",
                content: "User logged in successfully",
                centered: true,
                afterClose: () => {
                    navigate("/", { replace: true });
                },
            });
        }
    };
    return (
        <LoginWrapper className="d-flex w-100 justify-content-center align-items-center">
            <Card className="content-card">
                <Avatar
                    size="large"
                    icon={<EditOutlined style={{ fontSize: "40px" }} />}
                    style={{
                        width: "80px",
                        height: "80px",
                        marginBottom: "30px",
                    }}
                />
                <Typography.Title
                    level={2}
                    style={{
                        margin: 0,
                        textAlign: "left",
                        fontWeight: "bold",
                    }}
                    className="mb-2"
                >
                    Welcome back
                </Typography.Title>
                <Typography.Title
                    level={5}
                    style={{
                        margin: 0,
                        textAlign: "left",
                        fontWeight: "normal",
                    }}
                    className="mb-5"
                >
                    Welcome back! Please enter your details.
                </Typography.Title>

                <Form
                    form={form}
                    className="w-100"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name={"email"}
                        label="Email"
                        rules={validations.email}
                    >
                        <Input placeholder="Enter email" size="large" />
                    </Form.Item>
                    <Form.Item
                        name={"password"}
                        label="Password"
                        rules={validations.password}
                    >
                        <Input.Password
                            placeholder="Enter password"
                            type="password"
                            size="large"
                        />
                    </Form.Item>
                    <Button
                        type="primary"
                        className="w-100 mt-2"
                        size="large"
                        htmlType="submit"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        Login
                    </Button>
                </Form>
                <div className="mt-3 ">
                    <Link to={"/register"} className="text-decoration-none">
                        New user? Register
                    </Link>
                </div>
            </Card>
        </LoginWrapper>
    );
};

export default Login;
