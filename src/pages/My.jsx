import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const My = () => {
    const [showModal, setShowModal] = useState(false);
    // 서버에서 가져온 이름을 저장할 상태, 현재는 "홍길동"으로 초기화
    const [name, setName] = useState("홍길동");
    const [phoneNumber, setPhoneNumber] = useState("");
    // 소속 상태를 "서울시"로 초기화
    const [affiliation, setAffiliation] = useState("서울시소속");

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const navigate = useNavigate();    
    const handleClick = () => {
          navigate("/Main"); 
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Mobile>
                <ContainerM>
                    <div id='B_Btn' onClick={handleClick}>
                        <img src="/images/Btn_back.svg" alt="Signup Button"></img>
                    </div>
                    {/* 사용자의 이름을 보여주는 부분 */}
                    <div id='title'>
                        {name}
                    </div>
                    {/* 사용자의 소속을 보여주는 부분 */}
                    <div id='affiliation'>
                        {affiliation}
                    </div>
                    <div id='btn_M' onClick={toggleModal}>
                      <img src="/images/My/Btn_mo.svg" alt="Signup Button"></img>
                    </div>
                    {showModal && (
                        <div>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="이름"
                            />
                            <input
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="전화번호"
                            />
                            <input
                                value={affiliation}
                                onChange={(e) => setAffiliation(e.target.value)}
                                placeholder="소속"
                            />
                        </div>
                    )}

                    <img
                        id="logo"
                        src="/images/Slogo.svg"
                    />

    
                    
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
    align-items: center; 

    #B_Btn {
        align-self: flex-start; 
        width: 100%; 
        text-align: left; 
    }

    #logo {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    
    #title {
        color: #B45404; 
        font-size: 40px;
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 20px; 
    }

    #affiliation {
        color: grey; 
        font-size: 13px;
        margin-top: 10px;
        margin-bottom: 20px; 
    }

    #btn_M, #btn_L {
        margin-top: 20px;
        display: flex;
        justify-content: center; 
    }

    input {
        margin-top: 20px;
        padding: 10px;
        width: 300px;
        border: 1px solid #B45404;
        background-color: transparent; 
        border-radius: 15px;
        font-size: 16px;
        display: block; 
        margin-bottom: 10px; 
    }
`;

const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default My;
