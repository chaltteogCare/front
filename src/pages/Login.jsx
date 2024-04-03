import React from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";

const Login = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Mobile>
                <H1>hi</H1>
            </Mobile>
            <PC>
                <H2>hello</H2>
            </PC>
        </motion.div>
    );
};

const H1 = styled.div`
    color: red;
`;

const H2 = styled.div`
    color: blue;
`;

export default Login;
