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
          "/api/user/login",
          {
            password: password,
            name: name,
          }
        );

        // 데이터가 뭐 들어가 있는지 확인을 위한 console창
        console.log(response.data.split("Bearer")[1]);  // 토큰값 확인
        console.log(password);  // 비밀번호 확인
        console.log(name);    // id 확인

        //로그인 성공 시
        if (response.status === 200) {
          const token = response.data.token; // 토큰 받기
          const userId = response.data.userId; // userId 받기

          // 'Bearer ' 문자열을 분리하고 token만 저장
          localStorage.setItem("token", token.split("Bearer ")[1]);
          localStorage.setItem("userId", userId);

          // 토큰 값 출력
          console.log("토큰 값: ", token, ", 아이디: ", userId);

          navigate("/Main"); // 로그인하면 홈 페이지로 이동
        } else {
            alert("로그인 실패함");
        }
      } catch (error) {
          if (error.response && error.response.status === 403) {
              alert("아이디 또는 비밀번호가 잘못되었습니다.");
          } else {
              alert("로그인 도중 문제가 발생했습니다. 다시 시도해주세요.");
          }
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
                            type="password" 
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
