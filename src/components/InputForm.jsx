import React, { useState } from 'react'
import styled from "styled-components"
import Letter from './Letter'
import fakeData from './fakeData.json'

function Form({ shownMember, inputList, setInputList }) {

    const [nameInput, setNameInput] = useState('')
    const [contentInput, setContentInput] = useState('')
    const [member, setMember] = useState("");

    // TODO : 로컬스토리지 활용해서 데이터 저장하기

    function onChangeHandler(e) {
        const name = e.target.name
        const value = e.target.value
        if (name === 'nickname') {
            setNameInput(value)
        } else if (name === 'content') {
            setContentInput(value)
        } else if (name === 'member') {
            setMember(value)
        }
    }

    function onClickHandler(event) {
        event.preventDefault();
        // TODO : 첫 선택이 vaildation check가 안됨. 문제 해결
        if (member === "") {
            alert('멤버를 선택해주세요!')
        } else {
            const List = { //prop drilling check
                // createdAt : ,// TODO : 현재 날짜 데이터 가져오기
                nickname: nameInput,
                // avatar : ,// TODO : 랜덤 이미지 생성 기능 구현
                writedTo: member,
                content: contentInput,
                id: inputList.length + 1 // TODO: uuid() 로 변경
            }
            setInputList([...inputList, List]);
        }

    }

    // Q&A : useEffect를 활용해 변수의 값이 바뀔 때마다 state를 변경할 수는 없을까?
    // useEffect(() => {
    //     console.log('바뀌었다!')
    // }, [shownMember])

    return (
        <>
            <StForm>
                <StSection>
                    <StLabel>멤버</StLabel>
                    <StSelect name='member' onChange={onChangeHandler} value={member}>
                        <StOption value={""}>멤버 선택</StOption>
                        <StOption value={'Geako'}>개코</StOption>
                        <StOption value={'Choiza'}>최자</StOption>
                    </StSelect>
                </StSection>
                <StSection>
                    <StLabel>닉네임</StLabel>
                    <StInput name='nickname' value={nameInput} onChange={onChangeHandler}></StInput>
                </StSection>
                <StSection>
                    <StLabel>내용</StLabel>
                    <StInput name='content' value={contentInput} onChange={onChangeHandler}></StInput>
                </StSection>
                <StDiv>
                    <StButton onClick={onClickHandler}>등록</StButton>
                </StDiv>
            </StForm>

            {
                inputList
                    .filter(function (value) {
                        return value.writedTo === shownMember;
                    })
                    .map((item) => {
                        return (
                            <Letter
                                key={item.id}
                                id={item.id}
                                nickname={item.nickname}
                                content={item.content}
                                avatar={item.avatar}
                            >
                            </Letter>
                        )
                    })
            }
        </>
    )
}

const StForm = styled.form`

`
const StSection = styled.section`

`
const StLabel = styled.label`

`
const StSelect = styled.select`
    
`
const StOption = styled.option`
    
`
const StInput = styled.input`
    
`
const StDiv = styled.div`
    
`
const StButton = styled.button`
    
`
export default Form