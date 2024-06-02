import { Card } from "antd";
import styled from "styled-components";

export const ListWrapper = styled.div`
    display: grid;
    padding: 10px 20px;
    justify-content: space-around;
    align-content: space-between;
    align-items: start;
    grid-template-columns: 1fr;

    grid-row-gap: 20px;
    grid-column-gap: 10px;

    /* X-Small */
    @media (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
        padding: 1em;
    }

    /* Small */
    @media (min-width: 576px) and (max-width: 767px) {
        grid-template-columns: auto auto;
        grid-row-gap: 20px;
        padding: 1em;
    }

    /* Medium */
    @media (min-width: 768px) and (max-width: 991px) {
        grid-template-columns: auto auto;
        grid-row-gap: 20px;
        padding: 1em;
    }

    /* Large */
    @media (min-width: 992px) and (max-width: 1199px) {
        grid-template-columns: auto auto auto;
        grid-row-gap: 20px;
        padding: 1em;
    }

    /* Extra large */
    @media (min-width: 1200px) and (max-width: 1399px) {
        grid-template-columns: auto auto auto;
        grid-row-gap: 20px;
        padding: 1em;
    }

    /* Extra extra large */
    @media (min-width: 1400px) {
        grid-template-columns: auto auto auto auto;
        grid-row-gap: 20px;
        padding: 1em;
    }
`;

export const NoteWrapper = styled(Card)`
    text-align: left;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 8px 0px #d3cdcd;
        transition: all 0.4s ease-in;
    }

    &:not(:hover) {
        box-shadow: 0px 0px 0px 0px;
        transition: all 0.5s ease-in;
    }

    /* X-Small */
    @media (max-width: 575px) {
        width: 94vw;
    }

    /* Small */
    @media (min-width: 576px) and (max-width: 767px) {
        width: 47vw;
    }

    /* Medium */
    @media (min-width: 768px) and (max-width: 991px) {
        width: 47vw;
    }

    /* Large */
    @media (min-width: 992px) and (max-width: 1199px) {
        width: 31.6vw;
    }

    /* Extra large */
    @media (min-width: 1200px) and (max-width: 1399px) {
        width: 31.6vw;
    }

    /* Extra extra large */
    @media (min-width: 1400px) {
        width: 24vw;
    }

    .title {
    }

    .description {
    }
`;
