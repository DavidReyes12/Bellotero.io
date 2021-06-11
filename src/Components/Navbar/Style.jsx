import styled from "styled-components"; 
import { Row } from "antd";

export const NavBar = styled(Row)`
    padding: 2px 173px 0 174px;
    background-color: #ffffff;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
    @media (max-width: 729px) {
        padding: 2px 0px 0 0px;
    }
`;

export const Img = styled.img`
    width: 133px;
    height: 26px;
    object-fit: contain;
`;

export const MenuCont = styled.div`
    display: flex;
`;

export const NavBarItems = styled.div`
    font-family: Roboto;
    height: 64px;
    margin: 0px 30px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.3px;
    color: #071eb3;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-top: ${({ $isSelected }) => $isSelected ? "solid 2px" : "none"};
    @media (max-width: 1000px) {
        margin: 0px 15px;
        border-bottom: ${({ $isSelected }) => $isSelected ? "solid 2px" : "none"};
        border-top: none;
    }
`;