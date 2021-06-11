import React, { useEffect, useState } from 'react';
import { 
    Container, 
    TitleCont, 
    Content, 
    MessageCont, 
    Message,
    UserCont,
    Name,
    Position,
    Comment,
    CommentCont,
    PaginationCont,
    CurrentPageCont,
    ArrowsCont,
    ArrowCont,
} from "./Style";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { message } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentMessage } from "../../redux/testimonialDucks";

const NOOP = () => {};

const Testimonial = () => {

    const [Title, setTitle] = useState("");
    const [Reviews, setReviews] = useState([]);
    // const [CurrentMessage, setCurrentMessage] = useState(0);

    const dispatch = useDispatch();
    const { testimonial: { CurrentMessage } } = useSelector(state => state);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
          .then(response => response.json())
          .then(data =>  {
            if(data) {
              const { slider: { title, reviews } } = data;
              setTitle(title);
              setReviews(reviews);
            } else {
              message.error("Error :(");
            }
          });
    }, [])

    return (
        <Container>
            <Content>
                {Reviews.length && (
                    <MessageCont>
                        <TitleCont>{Title}</TitleCont>
                        <CommentCont>
                            <Message>
                                <UserCont>
                                    <Name>{Reviews[CurrentMessage].name}</Name>
                                    <Position>{Reviews[CurrentMessage].position}</Position>
                                </UserCont>
                                <Comment>{Reviews[CurrentMessage].comment}</Comment>
                            </Message>
                            <PaginationCont>
                                <CurrentPageCont>{`${CurrentMessage + 1}/${Reviews.length}`}</CurrentPageCont>
                                <ArrowsCont>
                                    <ArrowCont 
                                        onClick={() => CurrentMessage === 0 ? NOOP : dispatch(setCurrentMessage(CurrentMessage - 1)) } 
                                    >
                                        <ArrowBack style={{ color: "#ffffff", fontSize: "25px" }} />
                                    </ArrowCont>
                                    <ArrowCont 
                                        onClick={() => CurrentMessage === Reviews.length - 1 ? NOOP : dispatch(setCurrentMessage(CurrentMessage + 1)) } 
                                    >
                                        <ArrowForward style={{ color: "#ffffff", fontSize: "25px" }} />
                                    </ArrowCont>
                                </ArrowsCont>
                            </PaginationCont>
                        </CommentCont>
                    </MessageCont>
                )}
            </Content>
        </Container>
    );
};

export default Testimonial;