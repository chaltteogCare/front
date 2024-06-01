import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mobile, PC } from "../styles/Global_d"; 
import styled, { createGlobalStyle } from "styled-components";

const Main = () => {
    const navigate = useNavigate();
    
    const onClickSchedule = () => {
        navigate("/Schedule");
    };
    const onClickLogout = () => {
        navigate("/");
    };
    const onClickMypage = () => {
        navigate("/My");
    };
    const onClickSetting = () => {
        navigate("/Setting");
    };      
    const onClickAdd = () => {
      navigate("/Add");
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <GlobalStyle />
            <Mobile>
                <ContainerM>
                    <img
                        id="logo"
                        src="/images/main/logo_s.svg"
                        style={{ position: "relative", top: "10px", left: "19px" }}
                    />
                    {/* 스케쥴 바로가기 */}
                    <img
                        id="schedule_btn"
                        src="/images/main/schedule.svg"
                        style={{ position: "relative", top: "1.2px", left: "120px" }}
                        onClick={onClickSchedule}
                    />
                    {/* 로그아웃 바로가기 */}
                    <img
                        id="logout_btn"
                        src="/images/main/logout.svg"
                        style={{ position: "relative", left: "140px" }}
                        onClick={onClickLogout}
                    />
                    {/* 마이페이지 바로가기 */}
                    <img
                        id="profile_btn"
                        src="/images/main/profile.svg"
                        style={{ position: "relative", top: "9px", left: "165px", width: "33px" }}
                        onClick={onClickMypage}
                    />

                    {/* 관리자 정보 기재 */}
                    <div id="manager_information">
                        <p id="name" style={{ position: "relative", top: "15px", left: "35px", textAlign:"left" }}>
                            관리자 :  
                        </p>
                        {/* 관리자 이름 */}
                        <p id="name" style={{ position: "relative", top: "-45px", left: "125px", textAlign:"left" }}>
                            김서진 
                        </p>
                        <p id="content" style={{  position: "relative", top: "-60px", left: "35px" }}>소속 : </p>
                        {/* 관리자 소속 */}
                        <p id="content" style={{  position: "relative", top: "-92px", left: "69px", textAlign:"left" }}>서울시청울랄라랄 </p>
                        <p id="content" style={{  position: "relative", top: "-100px", left: "35px" }}>관할구역 : </p>
                        {/* 관리자 담당 구역 */}
                        <p id="content" style={{  position: "relative", top: "-132px", left: "95px", textAlign:"left" }}>나도몰라 </p>
                    </div>

                    {/* 담당 노인분들을 확인할 수 있는 박스들 */}
                    <div id="boxes" style={{ marginTop: "200px"}}>
                        <div id="box" style={{ marginTop: "-300px"}}>
                            <img
                                src="/images/main/box.svg"
                                style={{ position: "relative", left: "25px", height: "170px" }}
                            />
                            <p id="name" style={{ position: "relative", top: "-180px", left: "45px", textAlign:"left"}}> 고길동 </p>
                            <p id="address" style={{ position: "relative", top: "-195px", left: "48px", textAlign:"left"}}> 주소 : </p>
                            <p id="address" style={{ position: "relative", top: "-225px", left: "82px", textAlign:"left"}}> 경기도 구리시 XX동 </p>
                            {/* 박스 설정 바로가기 */}
                            <img
                                src="/images/main/sett.svg"
                                style={{ position: "relative", top: "-300px", marginLeft: "295px", left: "25px" }}
                                onClick={onClickSetting}
                            />
                            <p id="content" style={{  position: "relative", top: "-248px", left: "47px" }}>전기 및 수도 : </p>
                            <p id="content" style={{  position: "relative", top: "-280px", left: "128px", textAlign:"left", color: "blue" }}>양호 </p>
                            <p id="content" style={{  position: "relative", top: "-290px", left: "47px" }}>전화 통화량 : </p>
                            <p id="content" style={{  position: "relative", top: "-322px", left: "128px", textAlign:"left", color: "red" }}>부족</p>
                        </div>
                    </div>

                    {/* 담당하는 노인분 추가 */}
                    <div id="addbox" style={{marginTop: "-320px"}}>
                        <img
                            src="/images/main/addBox.svg"
                            style={{ position: "relative", marginTop: "20px", left: "25px", height: "170px"}}
                            onClick={onClickAdd}
                        />
                    </div>
                </ContainerM>
            </Mobile>
            <PC>
                <ContainerP>pc</ContainerP>
            </PC>
        </motion.div>
    );
};

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SOYOMapleBoldTTF';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/SOYOMapleBoldTTF.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
`;

const ContainerM = styled.div`
    height: 100vh; /* 컨테이너 높이를 뷰포트 높이에 맞추기 */
    width: 100%;
    max-width: 390px;
    background-color: #FFF7F0;
    overflow-x: hidden; /* 가로 및 세로 스크롤을 막기 위한 추가 */

    #name {
        font-family: 'SOYOMapleBoldTTF';
        font-size: 25px;
    }

    #content {
        font-family: 'SOYOMapleBoldTTF';
        font-size: 13px;
    }

    #address {
        font-size: 13px;
    }
`;


const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default Main;
