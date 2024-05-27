import { Layout } from "antd";
import styled from "styled-components";

export const AppLayoutWrapper = styled(Layout)`
    @media (min-width: 576px) and (max-width: 767px) {
        .content-card {
            padding: 20px 30px;
        }
    }
`;
