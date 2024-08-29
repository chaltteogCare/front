import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate(); 

    // 입력값 상태 관리
    const [formData, setFormData] = useState({
        name: '',
        phonenumber: '',
        passwd: '',
        passwdCheck: '',
        team: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClick = async () => {
        // 비밀번호 확인 로직 추가
        if (formData.passwd !== formData.passwdCheck) {
            alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
            return; // 일치하지 않으면 함수 종료
        }
    
        try {
            const response = await axios.post("api/user/register", {
                name: formData.name,
                password: formData.passwd,
                address: formData.team,
                telephoneNumber: formData.phonenumber,
            });
            alert(response.data.message); // 성공 메시지 표시
            // 성공 후 이동
            navigate("/"); 
        } catch (error) {
            console.error("등록 실패:", error);
            alert("등록에 실패했습니다. 다시 시도해주세요.");
        }
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
                        <img id="logo" src="/images/main/logo_s.svg" />
                    </div>

                    <div id="title">회원가입</div>
                    
                    <InputGroup>
                        <label htmlFor="name">성함</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="성함을 입력해주세요."
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </InputGroup>
               
                    <InputGroup>
                        <label htmlFor="phonenumber">전화번호</label>
                        <input
                            name="phonenumber"
                            type="text"
                            placeholder="010-XXXX-XXXX 형식으로 입력해주세요."
                            value={formData.phonenumber}
                            onChange={handleChange}
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="passwd">비밀번호</label>
                        <input
                            name="passwd"
                            type="password"
                            placeholder="영문+숫자 8자 이상으로 설정해주세요."
                            value={formData.passwd}
                            onChange={handleChange}
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="passwdCheck">비밀번호 확인</label>
                        <input
                            name="passwdCheck"
                            type="password"
                            placeholder="비밀번호를 한 번 더 입력해주세요."
                            value={formData.passwdCheck}
                            onChange={handleChange}
                        />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="team">관할 소속</label>
                        <input
                            name="team"
                            type="text"
                            placeholder="관할 소속을 입력해주요."
                            value={formData.team}
                            onChange={handleChange}
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
    height: 100vh;
    width: 100%;
    max-width: 390px;
    background-color: #FFF7F0;
    overflow-x: hidden;

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
