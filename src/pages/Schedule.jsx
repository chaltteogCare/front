import React from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";

const Schedule = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Mobile>
                <ContainerM>
                    <div id='Slogo'>
                        <img src="/images/Slogo.svg" alt="Signup Button"></img>
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

    
`;


const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default Schedule;
