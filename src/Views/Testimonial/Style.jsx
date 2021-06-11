import styled from "styled-components"; 

export const Container = styled.div`
    flex: 1;
    background: #f9faff;
    padding: 0px 173px 0 174px;
    display: flex;
    @media (max-width: 750px) {
        padding: 0px 80px 0 80px;
    }
    @media (max-width: 545px) {
        padding: 0px 35px 0 35px;
    }
`;

export const TitleCont = styled.div`
    width: fit-content;
    font-family: Roboto;
    background: #071eb3;
    padding: 8px 4px;
    font-size: 36px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: 0.77px;
    color: #ffffff;
    @media (max-width: 590px) {
        margin-top: 60px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
`;

export const MessageCont = styled.div`
    background: #f9faff;
`;

export const Message = styled.div`
    display: flex;
    padding: 32px;
    margin: 80px 79px 0 0;
    background: #ffffff;
    @media (max-width: 1024px) {
        flex-direction: column;
        margin: 80px 50px 0 0;
    }
`;

export const UserCont = styled.div`
    width: 41%;
    @media (max-width: 1024px) {
        width: 100%;
        margin-bottom: 1.5rem; 
    }
`;

export const Name = styled.div`
    font-family: Roboto;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #161616;
`;

export const Position = styled.div`
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #a5a5a5;
`;

export const Comment = styled.div`
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #161616;
    width: 59%;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const CommentCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const PaginationCont = styled.div`
    width: 240px;
    height: 56px;
    background: #071eb3;
    margin-top: -28px;
    display: flex;
`;

export const CurrentPageCont = styled.div`
    font-family: CormorantGaramond;
    width: 120px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
    font-stretch: normal;
    font-style: italic;
    line-height: 1;
    letter-spacing: 0.69px;
    color: #ffffff;
    border-right: 1px solid;
`;

export const ArrowsCont = styled.div`
    display: flex;
`;

export const ArrowCont = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.5s ease-out;
    :hover {
        background: #04126e;
    }
`;