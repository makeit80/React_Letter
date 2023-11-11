import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Letter from './Letter'
import fakeData from './fakeData.json'

function Form({ shownMember }) {

    const [nameInput, setNameInput] = useState('')
    const [contentInput, setContentInput] = useState('')

    const [inputList, setInputList] = useState(fakeData)

    function onClickHandler() {
        const List = { //prop drilling check
            // createdAt : ,// TODO : 현재 날짜 데이터 가져오기
            nickname: nameInput,
            // avatar : ,// TODO : 랜덤 이미지 생성 기능 구현
            // writedTo : ,
            content: contentInput,
            id: inputList.length + 1 // TODO: uuid() 로 변경
        }
        setInputList([...inputList, List])
    }

    useEffect(() => {
        console.log('바뀌었다!')
    }, [shownMember])

    return (
        <>
            <StForm>
                <StSection>
                    <StLabel>멤버</StLabel>
                    <StSelect>
                        <StOption>개코</StOption>
                        <StOption>최자</StOption>
                    </StSelect>
                </StSection>
                <StSection>
                    <StLabel>닉네임</StLabel>
                    <StInput value={nameInput} onChange={(e) => { setNameInput(e.target.value) }}></StInput>
                </StSection>
                <StSection>
                    <StLabel>내용</StLabel>
                    <StInput value={contentInput} onChange={(e) => { setContentInput(e.target.value) }}></StInput>
                </StSection>
                <StDiv>
                    <StButton onClick={onClickHandler}>등록</StButton>
                </StDiv>
            </StForm>
            {

                inputList
                    .filter(function (value) {
                        return value.writedTo === shownMember
                    })
                    .map((item, index) => {
                        return (
                            <Letter
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