import React, { useEffect, useState } from "react";
import { message } from "antd";
import { Container, 
    Content, 
    TitleCont, 
    TextCont, 
    DescriptionCont,
    CalculatorCont,
    ResultCont,
    ResultContent,
    Title,
    Subtitle,
} from "./Style";
import { AttachMoney } from "@material-ui/icons";
import SliderCal from "../../Components/SliderCal";

import { useDispatch, useSelector } from "react-redux";
import { setIngredients, setEmployees } from "../../redux/ConfiguratorDucks";

const Configurator = () => {

    const [TitleP1, setTitleP1] = useState("");
    const [TitleP2, setTitleP2] = useState("");
    const [Description, setDescription] = useState("");

    // const [Ingredients, setIngredients] = useState(10);
    // const [Employees, setEmployees] = useState(1);

    const dispatch = useDispatch();
    const { configurator: { Ingredients, Employees } } = useSelector(state => state);

    const estimatedFood = Ingredients * 0.3;
    const annualSavings = (Employees * 1337) + estimatedFood;

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
          .then(response => response.json())
          .then(data =>  {
            if(data) {
              const { calculator: { title, description } } = data;
              setTitleP1(title.split(" ").slice(0, 3).join(" "));
              setTitleP2(title.split(" ").slice(3, 4).join(" "));
              setDescription(description);
            } else {
              message.error("Error :(");
            }
          });
    }, [])

    return (
        <Container>
            <Content>
                <TextCont>
                    <TitleCont $mar="0.3rem">{TitleP1}</TitleCont>
                    <TitleCont $mar="2rem">{TitleP2}</TitleCont>
                    <DescriptionCont>{Description}</DescriptionCont>
                </TextCont>
                <CalculatorCont>
                    <SliderCal 
                        title="Monthly ingredient spending"
                        width="8rem"
                        min={10} 
                        max={100} 
                        prefix 
                        value={Ingredients} 
                        onChange={(val) => dispatch(setIngredients(val))} 
                    />
                    <SliderCal 
                        title="Full-time employees that process invoices"
                        width="5rem"
                        min={1} 
                        max={10}
                        value={Employees} 
                        onChange={(val) => dispatch(setEmployees(val))}
                    />
                    <ResultCont>
                        <ResultContent $width="40%">
                            <Title>
                                <AttachMoney style={{ fontSize: "36px" }} />
                                {estimatedFood.toFixed(1)}
                            </Title>
                            <Subtitle>Estimated cost food savings </Subtitle>
                        </ResultContent>
                        <ResultContent $width="60%">
                            <Title>
                                <AttachMoney style={{ fontSize: "36px" }} />
                                {annualSavings.toFixed(1)}
                            </Title>
                            <Subtitle>Your estimated annual savings </Subtitle>
                        </ResultContent>
                    </ResultCont>
                </CalculatorCont>
            </Content>
        </Container>
    );
};

export default Configurator;