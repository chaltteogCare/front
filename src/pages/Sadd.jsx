import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Sadd = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [data, setData] = useState([]); 

    const navigate = useNavigate();    

    const handleClick = () => {
        if (name && date) {
            setData([...data, { name, date }]); 
            setName(''); 
            setDate(''); 
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Mobile>
                <ContainerM>
                    <div id='B_Btn' onClick={() => navigate("/schedule")}>
                        <img src="/images/Btn_back.svg" alt="Back Button"></img>
                    </div>

                    <InputGroup>
                        <label htmlFor="name">성함</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="성함을 입력해주세요."
                            value={name}
                            onChange={handleNameChange}
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="date">날짜</label>
                        <input
                            name="date"
                            type="datetime-local"
                            value={date}
                            onChange={handleDateChange}
                        />
                    </InputGroup>

                    <div id='btn' onClick={handleClick}>
                        <img src="/images/Schedule/addBtn.svg" alt="Add Button"></img>
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

    #B_Btn {
        margin-bottom: 20px; 
    }

    #btn {
        display: flex;
        margin: 20px;
        justify-content: center; 
    }
`;

const InputGroup = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px; 

    input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 15px;
        font-size: 16px;
        display: block; 
        margin-top: 10px; 
    }
    ::placeholder {
        color: gray;
        font-size: 13px;
    }

    label {
        color: #333;
        font-size: 14px;
        font-weight: bold;
        align-self: flex-start; 
    }
`;

const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

const DataContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DataBox = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    p {
        margin: 0;
        font-size: 16px;
    }
`;

export default Sadd;
