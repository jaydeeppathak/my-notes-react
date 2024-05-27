import { Layout } from "antd";
import { AppLayoutWrapper } from "./styled";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
const { Content, Footer } = Layout;

const AppLayout = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("jwt")) {
            navigate("/login", {
                replace: true,
            });
        }
    }, []);

    return (
        <AppLayoutWrapper className="d-flex h-100 w-100">
            <Outlet className="w-100 h-100 abcd" />
        </AppLayoutWrapper>
    );
};

export default AppLayout;
