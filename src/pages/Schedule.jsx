import React from 'react';
import { motion } from "framer-motion";
import { Mobile } from "../styles/Global_d"; 
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Schedule = ({ data }) => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/Sadd"); 
    };

    const handleClicks = () => {
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
                    <div id='B_Btn' onClick={handleClicks}>
                        <img src="/images/Btn_back.svg" alt="Back Button"></img>
                    </div>

                    <div id="title">
                        오늘의 일정
                    </div>

                    <div id="box" style={{ marginTop: "10px", position: 'relative' }}>
                        <img
                            src="/images/Schedule/box.svg"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <p id="Date" style={{ position: "absolute", top: "10px", left: "30px", textAlign:"left", margin: 0 }}> 오후 09:57 </p>
                        <p id="name" style={{ position: "absolute", top: "15px", left: "170px", textAlign:"left", margin: 0 }}> 김소연 </p>
                        <img
                            id="D_btn"
                            src="/images/Schedule/bbtn.svg"
                            alt="D_btn"
                            style={{ position: "absolute", top: '5px', right: '15px', width: '1cm', height: '1cm' }}
                        />
                    </div>

                    {/* 버튼을 하단 가운데에 위치시키기 위한 컨테이너 */}
                    <BtnContainer>
                        <div id='btn_A' onClick={handleClick}>
                            <img src="/images/Schedule/add_Btn.svg" alt="Add Button"></img>
                        </div>
                    </BtnContainer>

                    <img
                        id="logo"
                        src="/images/Slogo.svg"
                    />

                </ContainerM>
            </Mobile>
        </motion.div>
    );
};

// 버튼을 하단 중앙에 위치시키기 위한 새로운 styled-component
const BtnContainer = styled.div`
    position: absolute; /* 절대 위치 */
    bottom: 20px; /* 하단에서 20px 떨어진 위치 */
    left: 50%; /* 왼쪽 50% */
    transform: translateX(-50%); /* 중앙 정렬을 위한 변환 */
`;

const ContainerM = styled.div`
    height: 100vh; /* 컨테이너 높이를 뷰포트 높이에 맞추기 */
    width: 100%;
    max-width: 390px;
    background-color: #FFF7F0;
    overflow-x: hidden; /* 가로 및 세로 스크롤을 막기 위한 추가 */

    #B_Btn {
        align-self: flex-start; 
        width: 100%; 
        text-align: left; 
        align-items: center; 
    }

    #title {
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-left: 10px;
        margin-bottom: 20px; 
    }
    
    #name {
        font-size: 30px;
        align-items: center; 
        font-weight: bold;
    }

    #logo {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

export default Schedule;



