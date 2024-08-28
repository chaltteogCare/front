import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";

const Login = () => {
    const navigate = useNavigate();

    const onClickSignup = () => {
        navigate("/Signup");
    };

    // 백엔드 연동 코드
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
      if (!name || !password) {
        alert("아이디와 비밀번호를 입력해주세요.");
        return; // Stop further execution
      }
  
      try {
        const response = await axios.post(
          "http://54.180.243.159:8080//api/user/login",
          {
            password: password,
            name: name,
          }
        );
  
        const isSuccess = response.data.isSuccess;
        if (isSuccess) {
          const userId = response.data.result.userId; // 아이디 받기
          localStorage.setItem("userId", userId); // 아이디 저장
          const token = response.data.result.token; // 토큰 받기
          localStorage.setItem("token", token); // 토큰 저장
          navigate("/Main"); // 로그인 성공 시 홈 페이지로 이동
        } else {
          // Handle login failure
          const errorCode = response.data.code;
          const errorMessage = response.data.message;
  
          if (errorCode === 404) {
            alert("존재하지 않은 아이디입니다.");
          } else if (errorCode === 401) {
            alert("잘못된 비밀번호입니다.");
          } else {
            alert(`로그인 실패: ${errorMessage}`);
          }
        }
      } catch (error) {
        alert("아이디와 비밀번호를 다시 확인해주세요.");
        console.error("로그인 실패:", error);
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
                    <div id="title">
                        <img src="/images/login/m_title.svg" style={{ position: "relative", top: "40px", left: "30px" }}/>
                    </div>
                    <div>
                        <input style={{ position: "relative", top: "60px", left: "60px" }}
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="아이디"
                        />
                        <input style={{ position: "relative", top: "70px", left: "60px" }}
                            value={password}
                            type="password" // 비밀번호 입력란 수정
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호"
                        />
                    </div>
                    <div>
                        <img src="/images/login/m_membership.svg" style={{ position: "relative", top: "90px", left: "170px" }} onClick={onClickSignup}/>
                    </div>
                    <div>
                        <img src="/images/login/m_btn.svg" style={{ position: "relative", top: "140px", left: "67px" }} onClick={handleLogin}/>
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
