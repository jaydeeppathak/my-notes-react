import { Layout } from "antd";
import styled from "styled-components";

export const LoginWrapper = styled.div`
    // background: white;
    height: 100%;

    .content-card {
        padding: 20px 60px;
    }

    // px-5 py-4
    @media (max-width: 767px) {
        .content-card {
            padding: 8px 10px;
        }
    }

    // @media (min-width: 992px) { ... }
`;
