import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mobile, PC } from "../styles/Global_d"; 
import styled, { createGlobalStyle } from "styled-components";

const Add = () => {
    return (
        <>
            <GlobalStyle />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Mobile>
                    <ContainerM>
                        <img
                            id="logo"
                            src="/images/main/logo_s.svg"
                            style={{ position: "relative", top: "10px", left: "19px" }}
                        />
                        <img
                            src="/images/add/title.svg"
                            style={{ position: "relative", top: "60px", left: "-23px" }}
                        />
        
                        {/* 성함 */}
                        <img
                            src="/images/add/name.svg"
                            style={{ position: "relative", top: "112px", left: "-159px" }}
                        />
                        <input 
                            style={{ position: "relative", top: "120px", left: "20px" }}
                            id="nameInput"
                            type="text"
                            placeholder="성함을 입력해주세요."
                        />           
        
                         {/* 전화번호  */}
                        <img
                            src="/images/add/phone.svg"
                            style={{ position: "relative", top: "140px", left: "22px" }}
                        />
                        <input 
                            style={{ position: "relative", top: "148px", left: "20px" }}
                            id="phoneInput"
                            type="text"
                            placeholder="010-XXXX-XXXX 형식으로 입력해주세요."
                        />         

                        {/* 찾아보기 버튼 */}
                        <div style={{ textAlign: "center", position: "relative", height: "200px" }}>
                            <img
                                src="/images/add/s_btn.svg"
                                style={{ top: "180px", position: "relative" }}
                            />
                        </div>

                        {/* 찾는 노인분 정보가 있을 경우, 나타나는 박스 */}
                        <div id="box" style={{ marginTop: "60px"}}>
                            <img
                                src="/images/add/box.svg"
                                style={{ position: "relative", left: "22px", height: "110px" }}
                            />
                            <p id="findName" style={{ position: "relative", top: "-122px", left: "45px", textAlign:"left"}}> 고길동 </p>
                            <p id="phone" style={{ position: "relative", top: "-135px", left: "48px", textAlign:"left"}}> 010-0000-0000 </p>
                            <p id="address" style={{ position: "relative", top: "-145px", left: "48px", textAlign:"left"}}> 주소 : </p>
                            <p id="address" style={{ position: "relative", top: "-180.5px", left: "88px", textAlign:"left"}}> 경기도 구리시 XX동 </p>
                        </div>

                        {/* 연결 버튼 */}
                        <div style={{ textAlign: "center", position: "relative", height: "200px" }}>
                            <img
                                src="/images/add/btn.svg"
                                style={{ top: "-140px", position: "relative" }}
                            />
                        </div>
                    </ContainerM>
                </Mobile>
                <PC>
                    <ContainerP>pc</ContainerP>
                </PC>
            </motion.div>
        </>
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
    overflow: hidden; /* 가로 및 세로 스크롤을 막기 위한 추가 */

    #name {
        font-family: 'SOYOMapleBoldTTF';
        font-size: 25px;
    }

    #findName {
        font-family: 'SOYOMapleBoldTTF';
        font-size: 20px;
    }

    input {
        width: 330px;
        height: 40px; /* 높이를 키워 클릭 영역을 확실히 확보 */
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        background-color: transparent;
        color: #000;
        font-family: "Gothic A1";
        font-size: 16px;
        font-weight: 400;  
        z-index: 1; /* 다른 요소들보다 위에 위치하도록 설정 */
    }

    input::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
`;

const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default Add;
