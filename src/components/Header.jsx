import React, { useState } from 'react'
import styled from "styled-components"
import InputForm from '../components/InputForm'



function Header({inputList, setInputList}) {

    // Q&A : useEffect를 활용해 변수의 값이 바뀔 때마다 state를 변경할 수는 없을까?
    // let shownMember = 'Geako'

    const [member, setMember] = useState('Geako')

    return (
        <>
            <StHeader>
                <StTitle>다이나믹 듀오 팬레터</StTitle>
                <StUl>
                    <StLi onClick={() => {setMember('Geako')}}>개코</StLi>
                    <StLi onClick={() => {setMember('Choiza')}}>최자</StLi>
                </StUl>
            </StHeader>
            <InputForm shownMember={member}
            inputList={inputList} 
            setInputList={setInputList}
            ></InputForm>
        </>

    )
}

// TODO : width, height min, max값 정해주기
// TODO : 중앙 정렬 전역스타일링으로 빼기
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