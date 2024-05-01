import React from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled, { createGlobalStyle } from "styled-components";

const Main = () => {
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
                        id="back"
                        src="/images/main/back.svg"
                        style={{ position: "relative", top: "30px", left: "19px" }}
                    />
                    <img
                        id="schedule_btn"
                        src="/images/main/schedule.svg"
                        style={{ position: "relative", top: "21.2px", left: "120px" }}
                    />
                    <img
                        id="logout_btn"
                        src="/images/main/logout.svg"
                        style={{ position: "relative", top: "20px", left: "140px" }}
                    />
                    <img
                        id="profile_btn"
                        src="/images/main/profile.svg"
                        style={{ position: "relative", top: "29px", left: "165px", width: "33px" }}
                    />
                    <div id="manager_information">
                        <p id="name" style={{ position: "relative", top: "35px", left: "35px", textAlign:"left" }}>
                            김서진 
                        </p>
                        <p id="content" style={{  position: "relative", top: "20px", left: "35px" }}>소속: </p>
                        <p id="content" style={{  position: "relative", top: "-12px", left: "69px", textAlign:"left" }}>서울시청울랄라랄 </p>
                        <p id="content" style={{  position: "relative", top: "-20px", left: "35px" }}>관할구역: </p>
                        <p id="content" style={{  position: "relative", top: "-52px", left: "95px", textAlign:"left" }}>나도몰라 </p>
                    </div>

                    <div id="boxes" style={{ marginTop: "-30px"}}>
                        <div id="box">
                            <img
                                src="/images/main/box.svg"
                                style={{ position: "relative", left: "21px" }}
                            />
                            <p id="name_ㅠㅐㅌ"> 고길동 </p>
                            <p id="address"> 경기도 구리시 xx동 </p>

                        </div>
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
    min-height: 100vh;
    background-color: #FFF7F0;

    #name {
        font-family: 'SOYOMapleBoldTTF';
        font-size: 25px;
    }

    #content {
        font-family: 'SOYOMapleBoldTTF';
        font-size: 13px;
    }
`;

const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default Main;
