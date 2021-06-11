import styled from "styled-components"; 
import { Slider, InputNumber } from "antd";

export const Container = styled.div`
   margin-bottom: 46px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    align-items: baseline;
`;

export const Text = styled.div`
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #161616;
    width: 32%;
`;

export const SliderStyle = styled(Slider)`
    &.ant-slider:hover .ant-slider-track {
        background-color: #071eb3;
    }
    &.ant-slider:hover .ant-slider-rail {
        background-color: #f0f2ff;
    }
    &.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
        border-color: #071eb3;
    }   
    .ant-slider-track {
        background-color: #071eb3;
    }
    .ant-slider-handle {
        border: solid 4px #071eb3;
    }
    .ant-slider-rail {
        background-color: #f0f2ff;
    }
`;

export const InputNumb = styled(InputNumber)`
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: 0.77px;
    text-align: right;
    width: ${({ $width }) => $width};
    height: 3rem;
    color: #161616;
    padding: 2px 0px;
    border-color: #d6dcff;
    border-radius: 5px;
`;