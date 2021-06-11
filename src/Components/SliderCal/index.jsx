import React from 'react';
import { Content, Text, Container, SliderStyle, InputNumb } from "./Style";

const NOOP = () => {};


const SliderCal = ({ title, min, max, prefix, value, onChange, width }) => {
    return (
        <Container>
            <Content>  
                <Text>{title}</Text>
                <InputNumb
                    $width={width}
                    min={min} 
                    max={max} 
                    formatter={value => prefix ? `$ ${value}` : value}
                    value={value}
                    onChange={(val) => !Number.isNaN(val) ? onChange(val) : NOOP}
                />
            </Content>
            <SliderStyle 
                tooltipVisible={false}
                min={min} 
                max={max}
                value={value}
                onChange={onChange}
            />
        </Container>
    );
};

export default SliderCal;