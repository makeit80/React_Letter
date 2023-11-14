import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components"

function Letter({id, avatar, nickname, content}) {
    const navigate = useNavigate();
    return (
        <div>
            <StDiv >
                <StUl>
                    <StLi onClick={() => {navigate(`/Detail/${id}`)}}>
                        <StSection>
                            <StFigure>
                                <StImg src={avatar}></StImg>
                            </StFigure>
                            <StDiv>
                                <StSpan>{`닉네임 : ${nickname}`}</StSpan>
                                <StTime></StTime>
                            </StDiv>
                        </StSection>
                        <StP>{`내용 : ${content}`}</StP>
                    </StLi>
                </StUl>
            </StDiv>
        </div>
    )
}

// TODO : 중앙정렬 전역스타일링 가져오기
const StDiv = styled.div`
background-color: gray;
width: 100vw;
`
const StUl = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const StLi = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

border: 2px solid yellow;
width: 700px;

`
const StSection = styled.section`
width: 600px;
height: 300px;
border: 2px solid black;
`
const StFigure = styled.figure`
`
const StImg = styled.img`
border-radius: 50%;

`
const StSpan = styled.span`
  
`
const StTime = styled.time`
  
`
const StP = styled.p`
border: 2px solid red;
height: 200px;
`

export default Letter