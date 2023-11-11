import React from 'react'
import styled from "styled-components"

function Letter(prop) {
    return (
        <div>
            <StDiv>
                <StUl>
                    <StLi>
                        <StSection>
                            <StFigure>
                                <StImg src={prop.avatar}></StImg>
                            </StFigure>
                            <StDiv>
                                <StSpan>{`닉네임 : ${prop.nickname}`}</StSpan>
                                <StTime></StTime>
                            </StDiv>
                        </StSection>
                        <StP>{`내용 : ${prop.content}`}</StP>
                    </StLi>
                </StUl>
            </StDiv>
        </div>
    )
}

const StDiv = styled.div`

`
const StUl = styled.ul`
  
`
const StLi = styled.li`
  
`
const StSection = styled.section`
  
`
const StFigure = styled.figure`
  
`
const StImg = styled.img`
  
`
const StSpan = styled.span`
  
`
const StTime = styled.time`
  
`
const StP = styled.p`
  
`

export default Letter