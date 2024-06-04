import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Affix, Menu, Modal, Space, Spin } from "antd";
import {
    AppstoreOutlined,
    LogoutOutlined,
    MailOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { AppLayoutWrapper } from "./styled";
import { UserModel } from "../../../models";

const items = ({ handleLogout, name }) => [
    {
        label: "Rough Note App",
        key: "mail",
        icon: <MailOutlined />,
    },
    {
        label: `Hello ${name}`,
        key: "SubMenu",
        icon: <UserOutlined style={{ fontSize: "18px" }} />,
        style: { marginLeft: "auto" },
        children: [
            {
                label: (
                    <Space onClick={handleLogout}>
                        <LogoutOutlined />
                        Logout
                    </Space>
                ),
                key: "setting:1",
            },
        ],
    },
];

const AppLayout = () => {
    const navigate = useNavigate();

    const [spinning, setSpinning] = useState(false);
    const [name, setName] = useState("");
    const [percent, setPercent] = useState(0);
    const [current, setCurrent] = useState("");
    const [jwtCheck, setJWTCheck] = useState(undefined);

    const onClick = (e) => {
        setCurrent(e.key);
    };

    useEffect(() => {
        if (!localStorage.getItem("jwt")) {
            navigate("/login", {
                replace: true,
            });
        }

        fetchCurrentUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        navigate("/login", {
            replace: true,
        });
    };

    const fetchCurrentUser = async () => {
        setSpinning(true);

        const res = await UserModel.currentUser();
        console.log("res :>> ", res);

        if (!res.success) {
            Modal.error({
                title: "Oops!",
                content: res.error || "Something went wrong",
                centered: true,
            });
            setSpinning(false);
            return;
        }
        setName(res?.data?.name);
        setSpinning(false);
        setJWTCheck(true);
    };

    return (
        <AppLayoutWrapper className="d-flex h-100 w-100">
            <Affix className="mb-2">
                <Menu
                    className="menu"
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items({ handleLogout, name })}
                    // style={{ position: "sticky" }}
                />
            </Affix>
            {jwtCheck ? (
                <Outlet className="w-100 h-100 mt-2" />
            ) : (
                <Spin spinning={spinning} percent={percent} fullscreen />
            )}
        </AppLayoutWrapper>
    );
};

export default AppLayout;
