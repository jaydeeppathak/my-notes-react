import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { BlankLayoutWrapper } from "./styled";

const BlankLayout = () => {
    const navigate = useNavigate();
    const [jwtCheck, setJWTCheck] = useState(undefined);

    useEffect(() => {
        if (localStorage.getItem("jwt")) {
            navigate("/", {
                replace: true,
            });
        }
        setJWTCheck(true);
    }, []);

    return (
        <BlankLayoutWrapper className="d-flex h-100 w-100">
            {jwtCheck && <Outlet className="w-100" />}
        </BlankLayoutWrapper>
    );
};

export default BlankLayout;
