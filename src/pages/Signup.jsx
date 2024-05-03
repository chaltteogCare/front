import React from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";

const Signup = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Mobile>
                <ContainerM>
                    <div id="logo">
                        <img src='images/Slogo.svg' alt='Logo'></img>
                    </div>

                    <div id="title">
                        관리자 회원가입
                    </div>
                    
                    {/* Input Group: 성함 */}
                    <InputGroup>
                        <label htmlFor="name">성함</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="성함을 입력해주세요."
                        />
                    </InputGroup>
               
                    {/* Input Group: 전화번호 */}
                    <InputGroup>
                        <label htmlFor="phonenumber">전화번호</label>
                        <input
                            name="phonenumber"
                            type="text"
                            placeholder="010-XXXX-XXXX 형식으로 입력해주세요."
                        />
                    </InputGroup>

                    {/* Input Group: 비밀번호 */}
                    <InputGroup>
                        <label htmlFor="passwd">비밀번호</label>
                        <input
                            name="passwd"
                            type="password"
                            placeholder="영문+숫자 8자 이상으로 설정해주세요."
                        />
                    </InputGroup>

                    {/* Input Group: 비밀번호 확인 */}
                    <InputGroup>
                        <label htmlFor="passwdCheck">비밀번호 확인</label>
                        <input
                            name="passwdCheck"
                            type="password"
                            placeholder="비밀번호를 한 번 더 입력해주세요."
                        />
                    </InputGroup>

                    {/* Input Group: 관할 소속 */}
                    <InputGroup>
                        <label htmlFor="team">관할 소속</label>
                        <input
                            name="team"
                            type="text"
                            placeholder="관할 소속을 입력해주요."
                        />
                    </InputGroup>

                    <div id='btn'>
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
    background-color: #FFF7F0;
    flex-direction: column;
    padding: 8px;
    min-height: 100vh;
    display: flex;
    position: relative;

    #title {
        color: #333;
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 40px; /* 타이틀과 입력 필드 사이의 간격을 조정 */
    }

    #btn {
        margin-top: 20px;
        display: flex;
        justify-content: center; /* 버튼 중앙 정렬 */
    }
`;

const InputGroup = styled.div`
    margin-bottom: 20px; /* 각 입력 필드 그룹 간 마진 설정 */
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* label이 input의 바로 위쪽 왼쪽에 위치하도록 설정 */
    margin-left: 25px; /* 왼쪽 화면 기준으로 오른쪽으로 30px 움직이도록 조정 */

    input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 15px;
        font-size: 16px;
        display: block; /* 블록 레벨 요소로 만듦으로써 width 100% 가능 */
        margin-top: 10px; /* label 바로 아래 위치 */
    }
    ::placeholder {
        color: gray;
        font-size: 13px;
    }

    label {
        color: #333;
        font-size: 14px;
        font-weight: bold;
        align-self: flex-start; /* label이 배치될 위치를 왼쪽으로 정렬 */
    }
`;


const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default Signup;
