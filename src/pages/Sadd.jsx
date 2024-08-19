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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
                    <div id='B_Btn' onClick={() => navigate("/")}>
                        <img src="/images/Btn_back.svg" alt="Back Button" />
                    </div>

                    <img
                        id="logo"
                        src="/images/main/logo_s.svg"
                    /> </div>

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

                    <div id='Add_btn' onClick={handleClick}>
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
    height: 100vh; /* 컨테이너 높이를 뷰포트 높이에 맞추기 */
    width: 100%;
    max-width: 390px;
    background-color: #FFF7F0;
    overflow-x: hidden; /* 가로 및 세로 스크롤을 막기 위한 추가 */

    #Add_btn {
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
    margin-left: 30px; 

    input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 15px;
        font-size: 16px;
        color: #000;
        background-color: transparent; /* Make the background transparent */
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

export default Sadd;
