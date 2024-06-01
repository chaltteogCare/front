import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";

const Login = () => {
    const navigate = useNavigate();

    const onClickMain = () => {
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
                    <div id="title">
                        <img src="/images/login/m_title.svg" style={{ position: "relative", top: "40px", left: "30px" }}/>
                    </div>
                    <div>
                        <input style={{ position: "relative", top: "60px", left: "60px" }}
                            name="id"
                            type="text"
                            placeholder="아이디"
                        />
                        <input style={{ position: "relative", top: "70px", left: "60px" }}
                            name="passwd"
                            type="text"
                            placeholder="비밀번호"
                        />
                    </div>
                    <div>
                        <img src="/images/login/m_membership.svg" style={{ position: "relative", top: "90px", left: "170px" }}/>
                    </div>
                    <div>
                        <img src="/images/login/m_btn.svg" style={{ position: "relative", top: "140px", left: "67px" }} onClick={onClickMain}/>
                        <img src="/images/login/m_k_btn.svg" style={{ position: "relative", top: "155px", left: "67px" }}/>
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

    input {
    width: 250px;
    height: 31px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: transparent;
    color: black;
    font-family: "HBIOS-SYS";
    text-align: left;
    font-size: 13px;
  }

  ::placeholder {
    color: gray;
    font-size: 13px;
  }
`;

const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default Login;
