import { Layout } from "antd";
import styled from "styled-components";

export const AppLayoutWrapper = styled(Layout)`
    height: auto;

    .menu {
        background-color: rgb(205, 173, 29, 0.85);
        color: white !important;
        font-weight: 500;
        height: 54px;
        align-items: center;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .content-card {
            padding: 20px 30px;
        }
    }
`;
