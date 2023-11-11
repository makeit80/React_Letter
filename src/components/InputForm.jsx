import React, { useState } from 'react'
import styled from "styled-components"
import Letter from './Letter'

function Form() {

    const [nameInput, setNameInput] = useState('')
    const [contentInput, setContentInput] = useState('')

    const [inputList, setInputList] = useState([])

    function onClickHandler() {
        const List = { //prop drilling check
            id: inputList.length + 1, // TODO: uuid() 로 변경
            name: nameInput,
            content: contentInput,
            isDone: false
        }
        setInputList([...inputList, List])
    }


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
                    .map((item, index) => {
                        return (
                            <Letter
                                id={item.id}
                                name={item.name}
                                content={item.content}
                                isDone={item.isDone}
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