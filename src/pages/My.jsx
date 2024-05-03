import React from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";

const My = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Mobile>
                <ContainerM>
                    <div id='btn_B'>
                        <img src="/images/Btn_back.svg" alt="Signup Button"></img>
                    </div>

                    <div id='btn_M'>
                        <img src="/images/My/Btn_mo.svg" alt="Signup Button"></img>
                    </div>
                    <div id='btn_L'>
                        <img src="/images/My/Btn_logout.svg" alt="Signup Button"></img>
                    </div>
                    
                </ContainerM>
            </Mobile>
            <PC>
                <ContainerP>pc</ContainerP>
            </PC>
        </motion.div>
    );
};

const ContainerM = styled.div`
    background-color: #FFF7F0;
    flex-direction: column;
    padding: 8px;
    min-height: 100vh;
    display: flex;
    position: relative;

    #title {
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 40px; /* 타이틀과 입력 필드 사이의 간격을 조정 */
    }

    #btn_M {
        margin-top: 20px;
        display: flex;
        justify-content: center; /* 버튼 중앙 정렬 */
    }
    #btn_L {
        margin: 5px;
        display: flex;
  
        justify-content: center; /* 버튼 중앙 정렬 */
    }
`;


const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default My;
