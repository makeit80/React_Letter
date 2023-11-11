import React, { useEffect } from 'react'
import styled from "styled-components"
import InputForm from '../components/InputForm'



function Header() {
    let shownMember = 'Geako'
    function memberShownHandler (member) {
        member === 'Choiza' ? shownMember = 'Choiza' : shownMember = 'Geako'
        console.log(shownMember)
    }


    return (
        <>
            <StHeader>
                <StTitle>다이나믹 듀오 팬레터</StTitle>
                <StUl>
                    <StLi onClick={() => {memberShownHandler('Geako')}}>개코</StLi>
                    <StLi onClick={() => {memberShownHandler('Choiza')}}>최자</StLi>
                </StUl>
            </StHeader>
            <InputForm shownMember={shownMember}></InputForm>
        </>

    )
}

// TODO : width, height min값 정해주기
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
    justify-content: space-around;
    flex-direction: row;
    `
const StLi = styled.li`
    background-color: gray;
    width: 7vw;
    height: 4vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    cursor: pointer;

    &:hover {
        background-color: #565656;
        color: white;
        transition: 0.5s;
    }
    `

export default Header