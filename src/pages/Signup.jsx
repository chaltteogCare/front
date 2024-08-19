import React from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate("/"); 
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

                    <div id="title">
                        회원가입
                    </div>
                    
                    <InputGroup>
                        <label htmlFor="name">성함</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="성함을 입력해주세요."
                        />
                    </InputGroup>
               
                    <InputGroup>
                        <label htmlFor="phonenumber">전화번호</label>
                        <input
                            name="phonenumber"
                            type="text"
                            placeholder="010-XXXX-XXXX 형식으로 입력해주세요."
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="passwd">비밀번호</label>
                        <input
                            name="passwd"
                            type="password"
                            placeholder="영문+숫자 8자 이상으로 설정해주세요."
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="passwdCheck">비밀번호 확인</label>
                        <input
                            name="passwdCheck"
                            type="password"
                            placeholder="비밀번호를 한 번 더 입력해주세요."
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="team">관할 소속</label>
                        <input
                            name="team"
                            type="text"
                            placeholder="관할 소속을 입력해주요."
                        />
                    </InputGroup>


                    <div id='login_btn' onClick={handleClick}>
                        <img src="/images/Signup/m_btn.svg" alt="Signup Button"></img>
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

    #title {
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 40px; 
        margin-left: 20px;
    }

    #login_btn {
        margin-top: 20px;
        display: flex;
        justify-content: center; 
    }


`;

const InputGroup = styled.div`
    margin-bottom: 20px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    margin-left: 25px; 

    #title {
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 40px; 
    }

    input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 15px;
        font-size: 16px;
        display: block;
        background-color: transparent;
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

export default Signup;
