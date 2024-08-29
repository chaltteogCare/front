import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Mobile } from "../styles/Global_d"; 
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';

const Schedule = () => {
    const navigate = useNavigate(); 
    const location = useLocation();
    const [schedules, setSchedules] = useState([]);
    
    useEffect(() => {
        // API 호출하여 일정 가져오기
        const fetchSchedules = async () => {
            try {
                const response = await fetch('/api/schedules');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSchedules(data);
            } catch (error) {
                console.error('일정 가져오기 실패:', error);
            }
        };

        fetchSchedules();

        if (location.state) {
            const { name, time } = location.state; 
            setSchedules(prevSchedules => [...prevSchedules, { name, time }]);
        }
    }, [location.state]);

    const handleClick = () => {
        navigate("/Sadd"); 
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
                        <div id='B_Btn' onClick={() => navigate("/Main")}>
                            <img src="/images/Btn_back.svg" alt="Back Button" />
                        </div>
                        <img id="logo" src="/images/main/logo_s.svg" />
                    </div>

                    <div id="title">오늘의 일정</div>

                    {schedules.map((schedule, index) => (
                        <div key={index} id="TimeBox" style={{ marginTop: "10px", left: "10px", position: 'relative' }}>
                            <img src="/images/Schedule/box.svg" style={{ width: "95%", height: "auto" }} />
                            <p id="Date" style={{ position: "absolute", top: "10px", left: "30px", textAlign: "left", margin: 0 }}>{schedule.scheduleTime}</p>
                            <p id="name" style={{ position: "absolute", top: "15px", left: "170px", textAlign: "left", margin: 0 }}>{schedule.name}</p>
                            <img id="Delete_btn" src="/images/Schedule/bbtn.svg" style={{ position: "absolute", top: '5px', right: '30px', width: '1cm', height: '1cm' }} />
                        </div>
                    ))}

                    <div id='Add_Btn' onClick={handleClick}>
                        <img src="/images/Schedule/add_Btn.svg" alt="Add Button" />
                    </div>
                </ContainerM>
            </Mobile>
        </motion.div>
    );
};

const ContainerM = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 390px;
    background-color: #FFF7F0;
    overflow-x: hidden;

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
        position: absolute; 
        bottom: 20px; 
        left: 20px;
    }
`;

export default Schedule;
