import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mobile, PC } from "../styles/Global_d"; 
import styled from "styled-components";

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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Mobile>
                <ContainerM>
                    <div id='Slogo'>
                        <img src="/images/Slogo.svg" alt="Signup Button"></img>
                    </div>
                    {/* 사용자의 이름을 보여주는 부분 */}
                    <div id='title'>
                        {name}
                    </div>
                    {/* 사용자의 소속을 보여주는 부분을 추가합니다. */}
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

                    <div id='btn_L'>
                        <img src="/images/My/Btn_logout.svg" alt="Signup Button"></img>
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
    align-items: center; /* 이 부분을 추가해주세요 */

    #Slogo {
        align-self: flex-start; /* Flex 컨테이너 내에서 왼쪽 정렬 */
        width: 100%; /* 너비를 100%로 설정하여 div의 전체 너비를 차지하게 함 */
        text-align: left; /* 이미지를 왼쪽으로 정렬 */
    }
    
    #title {
        color: brown; /* 홍길동 글자색을 갈색으로 변경 */
        font-size: 40px;
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 20px; /* 타이틀과 입력 필드 사이의 간격을 조정 */
    }

    #affiliation {
        color: grey; /* 서울시 소속의 글자색을 회색으로 변경 */
        font-size: 13px; /* 크기를 10px로 변경 */
        margin-top: 10px;
        margin-bottom: 20px; /* 타이틀과 입력 필드 사이의 간격을 조정 */
    }

    #btn_M, #btn_L {
        margin-top: 20px;
        display: flex;
        justify-content: center; /* 버튼 중앙 정렬 */
    }

    input {
        margin-top: 20px;
        padding: 10px;
        width: 300px;
        border: 1px solid brown; /* 갈색 테두리 */
        background-color: transparent; /* 내부 색 투명 */
        border-radius: 15px;
        font-size: 16px;
        display: block; /* 블록 레벨 요소로 만듦으로써 width 100% 가능 */
        margin-bottom: 10px; /* 입력 필드 사이의 간격을 조정 */
    }
`;

const ContainerP = styled.div`
    min-height: 100vh;
    background-color: #FFF7F0;
`;

export default My;
