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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
                    <div id='B_Btn' onClick={() => navigate("/")}>
                        <img src="/images/Btn_back.svg" alt="Back Button" />
                    </div>

                    <img
                        id="logo"
                        src="/images/main/logo_s.svg"
                        
                    /> </div>

                    <div id="title">
                        오늘의 일정
                    </div>

                    <div id="TimeBox" style={{ marginTop: "10px", left:"10px" ,position: 'relative' }}>
                        <img
                            src="/images/Schedule/box.svg"
                            style={{ width: "95%", height: "auto" }}
                        />
                        <p id="Date" style={{ position: "absolute", top: "10px", left: "30px", textAlign:"left", margin: 0 }}> 오후 09:57 </p>
                        <p id="name" style={{ position: "absolute", top: "15px", left: "170px", textAlign:"left", margin: 0 }}> 김소연 </p>

                        <img
                            id="Delete_btn"
                            src="/images/Schedule/bbtn.svg"
                            style={{ position: "absolute", top: '5px', right: '30px', width: '1cm', height: '1cm' }}
                        />
                    </div>

                    <div id='Add_Btn' onClick={handleClick}>
                            <img src="/images/Schedule/add_Btn.svg" alt="Add Button"></img>
                    </div>


                </ContainerM>
            </Mobile>
        </motion.div>
    );
};


const BtnContainer = styled.div`
    position: absolute; /* 절대 위치 */
    bottom: 20px; /* 하단에서 20px 떨어진 위치 */


`;

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
 
        margin-left: 20px;
        margin-bottom: 20px; 
    }
    
    #name {
        font-size: 30px;
        align-items: center; 
        font-weight: bold;
    }

    #Add_Btn {
        position: absolute; /* 절대 위치 */
        bottom: 20px; 
        left: 20px;
    }


`;

export default Schedule;



