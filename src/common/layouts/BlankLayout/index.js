import { Layout } from "antd";
import { BlankLayoutWrapper } from "./styled";
const { Content, Footer } = Layout;

const BlankLayout = (props) => {
    const { children } = props;
    return (
        <BlankLayoutWrapper className="h-100 w-100">
            <Content className="d-flex h-100 w-100">{children}</Content>
            {/* <Footer>footer</Footer> */}
        </BlankLayoutWrapper>
    );
};

export default BlankLayout;
