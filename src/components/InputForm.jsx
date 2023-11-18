import React, { useState } from 'react'
import styled from "styled-components"

import { useDispatch, useSelector } from "react-redux"
import { GeakoOption, ChoizaOption } from '../redux/modules/option';
import { nameValue, nameReset } from '../redux/modules/nameInput';
import { contentValue, contentReset } from '../redux/modules/contentInput';
import { insertData } from '../redux/modules/dataStorage';


function Form() {
    // Basic
    const members = useSelector((state) => {
        return state.option;
      })
    const nickname = useSelector((state) => {
        return state.nameInput
    })
    const content = useSelector((state) => {
        return state.contentInput
    })
    const dataList = useSelector((state) => {
        return state.dataProcess
    })
    const dispatch = useDispatch();

    // Q&A : option Reducer를 건드렸는데 
    // 왜 Home Components의 members Reducer와 연결된 Button이 동작하면 여기 콘솔이 찍히는거지?

    function onChangeHandler(e) {
        const name = e.target.name
        const value = e.target.value
        if (name === 'nickname') {
            dispatch(nameValue(value))
        } else if (name === 'content') {
            dispatch(contentValue(value))
        } else if (name === 'member') {
            dispatch({ type: value})
        }
    }
    // TODO : 로컬스토리지 활용해서 데이터 저장하기

    // Form
    function vaildationCheckHandler() {
        if (members.option === "") {
            alert('멤버를 선택해주세요.')
            return false;
        } else if (nickname.value === "") {
            alert('이름을 입력해주세요.')
            return false;
        } else if (content.value === "") {
            alert('내용을 입력해주세요.')
            return false;
        } else if (nickname.value.length >= 20) {
            alert('최대 20글자까지 작성할 수 있습니다.')
            return false;
        } else if (content.value.length >= 100) {
            alert('최대 100글자까지 작성할 수 있습니다.')
            return false;
        } else {
            return true;
        }
    }


    function onClickSubmitHandler(e) {
        e.preventDefault();
        if (vaildationCheckHandler()) {
            const List = { 
                createdAt: Date.now(),// TODO : 현재 날짜 데이터 가져오기
                nickname: nickname.value,
                // avatar : ,// TODO : 랜덤 이미지 생성 기능 구현
                writedTo: members.option,
                content: content.value,
                id: String(dataList.value.length + 1) // TODO: uuid() 로 변경
            }
            dispatch(insertData(List))
            dispatch(nameReset())
            dispatch(contentReset())
        }
    }



    // Toggle
    const [toggle, setToggle] = useState(false);

    function onClickToggleHandler() {
        setToggle(toggle => !toggle)
        console.log(toggle)
    }
    function toggleHandler(toggle) {
        if (toggle === false) {
            return "hideToggle"
        } else {
            return "showToggle"
        }
        // Q&A : toggle === false ? "hideToggle" : "showToggle"; 이거 왜 안됨?
    }
    function toggleNameHandler(toggle) {
        if (toggle === false) {
            return "펼치기"
        } else {
            return "접기"
        }
    }



    // HTML
    return (
        <>
            <StButton onClick={onClickToggleHandler}>{toggleNameHandler(toggle)}</StButton>
            <StForm className={toggleHandler(toggle)}>
                <StSection>
                    <StLabel>멤버 </StLabel>
                    <StSelect name='member' onChange={onChangeHandler} value={members.option}>
                        <StOption value={""}>멤버 선택</StOption>
                        <StOption value={GeakoOption}>개코</StOption>
                        <StOption value={ChoizaOption}>최자</StOption>
                    </StSelect>
                </StSection>
                <StSection>
                    <StLabel>닉네임</StLabel>
                    <StInput name='nickname' value={nickname.value} onChange={onChangeHandler}></StInput>
                </StSection>
                <StSection>
                    <StLabel>내용</StLabel>
                    <StInput name='content' value={content.value} onChange={onChangeHandler}></StInput>
                </StSection>
                <StDiv>
                    <button onClick={onClickSubmitHandler}>등록</button>
                </StDiv>
            </StForm>
        </>
    )
}



// Style
const StForm = styled.form`
background-color: gray;

height: 50vh;
width: 700px;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 30px;

border-radius: 10px;

/* TODO : transition 적용할 수 있게 변경 */
&.hideToggle {
display: none;

}

&.showToggle {

}
`
const StSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

padding: 10px;

`
const StLabel = styled.label`
font-weight: bold;
padding: 10px;
`
const StSelect = styled.select`
width: 200px;
height: 30px;
border: 1px solid #555555;
border-radius: 3px;

text-align: center;

-webkit-appearance: none;

/* TODO : option border 설정 */
/* TODO : transition 설정 */
`

const StOption = styled.option`

`
const StInput = styled.input`
width: 180px;
height: 20px;
/* TODO : border 제거 */
/* TODO : Input CSS 자료 수집 */
`
const StDiv = styled.div`
    
`
const StButton = styled.button`
width: 700px;
height: 100px;
margin: 20px;

border: none;
border-radius: 10px;

font-size: 20px;
font-weight: bold;
letter-spacing: 1.2px;
color: #555555;

cursor: pointer;

&:hover {
box-shadow: 3px 3px 5px 3px #dddddd;
transition: 0.5s;
}
`
export default Form