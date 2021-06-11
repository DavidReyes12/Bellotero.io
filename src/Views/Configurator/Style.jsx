import styled from "styled-components"; 

export const Container = styled.div`
    flex: 1;
    background: #f9faff;
    padding: 0px 173px 0 174px;
    display: flex;
    font-family: Roboto;
    @media (max-width: 729px) {
        padding: 0px 80px 0 80px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 1023px) {
        flex-direction: column;
    }
`;

export const TextCont = styled.div`
    width: 32%;
    margin-right: 211px;
    margin-top: -90px;
    @media (max-width: 1350px) {
        margin-right: 100px;
    }
    @media (max-width: 1023px) {
        margin: 90px 0px 30px 0px;
        width: 100%;
    }
`;

export const TitleCont = styled.div`
    width: fit-content;
    background: #071eb3;
    padding: 8px 4px;
    font-size: 36px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: 0.77px;
    color: #ffffff;
    margin-bottom: ${({ $mar }) => $mar };
`;

export const DescriptionCont = styled.div`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #161616;
`;

export const CalculatorCont = styled.div`
    width: calc(68% - 211px);
    @media (max-width: 1350px) {
        width: calc(68% - 100px);
    }
    @media (max-width: 1023px) {
        width: 100%;
    }
`;

export const ResultCont = styled.div`
    display: flex;
    @media (max-width: 1180px) {
        flex-direction: column;
    }
    @media (max-width: 1023px) {
        flex-direction: row;
    }
    @media (max-width: 799px) {
        flex-direction: column;
    }
`;

export const ResultContent = styled.div`
    width: ${({ $width }) => $width};
    text-align: end;
    @media (max-width: 1180px) {
        width: 100%;
    }
    @media (max-width: 1023px) {
        width: ${({ $width }) => $width};
    }
    @media (max-width: 799px) {
        width: 100%;
    }
`;

export const Title = styled.div`
    font-size: 72px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1px;
    text-align: right;
    color: #071eb3;
    margin-bottom: 8px;
`;

export const Subtitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #161616;
`;
