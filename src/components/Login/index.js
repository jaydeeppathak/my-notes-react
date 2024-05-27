import { useState } from "react";
import { Form, Input, Card, Button, Avatar, Typography, message } from "antd";
import BlankLayout from "../../common/layouts/BlankLayout";
import { EditOutlined } from "@ant-design/icons";
import { LoginWrapper } from "./styled";
import { LoginModel } from "../../models";

const Login = () => {
    const [form] = Form.useForm();
    const validations = LoginModel.validations;
    const [messageApi, contextHolder] = message.useMessage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onFinish = async ({ email, password }) => {
        setIsSubmitting(true);
        const queryData = {
            email,
            password,
        };
        console.log("queryData :>> ", queryData);

        const res = await LoginModel.checkLogin(queryData);
        if (!res.success) {
            messageApi.open({
                type: "error",
                content: res.error || "Something went wrong",
            });
            setIsSubmitting(false);
        }
        console.log("res :>> ", res);
        setIsSubmitting(false);
    };
    return (
        <LoginWrapper>
            <BlankLayout>
                {contextHolder}
                <div className="d-flex w-100 justify-content-center align-items-center">
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
                                <Input
                                    placeholder="Enter email"
                                    type="email"
                                    size="large"
                                />
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
                    </Card>
                </div>
            </BlankLayout>
        </LoginWrapper>
    );
};

export default Login;
