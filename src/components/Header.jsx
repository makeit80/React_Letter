import React from 'react'
import styled from "styled-components"



function Header() {

    // TODO : width, height min,max 값 정해주기
    // TODO : 멤버 버튼 absolute %로 비율 위치에 맞춰서 정렬. (vh, vw 말고)
    const StHeader = styled.header`
    background-color: gray;
    height: 30vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
    const StTitle = styled.h1`
    font-size: 35px;
    font-weight: bold;
    color: black;

    padding-bottom: 10vh;
    `
    const StUl = styled.ul`
    background-color: white;
    width: 40vw;
    height: 10vh;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    `
    const StLi = styled.li`
    margin: 5vw;
    `

    return (
        <StHeader>
            <StTitle>다이나믹 듀오 팬레터</StTitle>
            <StUl>
                <StLi>개코</StLi>
                <StLi>최자</StLi>
            </StUl>
        </StHeader>
    )
}

export default Header