import { BlankLayoutWrapper } from "./styled";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const BlankLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("jwt")) {
            navigate("/", {
                replace: true,
            });
        }
    }, []);

    return (
        <BlankLayoutWrapper className="d-flex h-100 w-100">
            <Outlet className="w-100" />
        </BlankLayoutWrapper>
    );
};

export default BlankLayout;
