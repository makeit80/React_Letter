import React from 'react'
import styled from "styled-components"

function Letter(prop) {

    

    return (
        <div>
            test
            <StDiv>
                <StUl>
                    <StLi>
                        <StSection>
                            <StFigure>
                                <StImg></StImg>
                            </StFigure>
                            <StDiv>
                                <StSpan>{prop.name}</StSpan>
                                <StTime></StTime>
                            </StDiv>
                        </StSection>
                        <StP>{prop.content}</StP>
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