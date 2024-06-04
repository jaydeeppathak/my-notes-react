import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {
    AppstoreOutlined,
    LogoutOutlined,
    MailOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { AppLayoutWrapper } from "./styled";

import { Affix, Menu, Space } from "antd";
const items = ({ handleLogout }) => [
    {
        label: "Rough Note App",
        key: "mail",
        icon: <MailOutlined />,
    },
    {
        label: "Hello Jaydeep",
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
        setJWTCheck(true);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        navigate("/login", {
            replace: true,
        });
    };
    return (
        <AppLayoutWrapper className="d-flex h-100 w-100">
            <Affix className="mb-2">
                <Menu
                    className="menu"
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items({ handleLogout })}
                    // style={{ position: "sticky" }}
                />
            </Affix>
            {jwtCheck && <Outlet className="w-100 h-100 mt-2" />}
        </AppLayoutWrapper>
    );
};

export default AppLayout;
