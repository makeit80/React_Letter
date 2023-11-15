import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';

function Detail({inputList, setInputList}) {
  // Basic
  const params = useParams();
  const navigate = useNavigate();

  const data = inputList.find((value) => {
    return value.id === params.id;
  });

  // Remove
  function onClickRemoveHandler (value) {
    // TODO : alert 취소 버튼 구현
    const data = value.filter((list) => list.id !== params.id)
    setInputList(data)
    // TODO : Session Storage를 활용해 삭제 후 돌아갔을 때 해당 멤버 리스트 유지
    // TODO : 삭제 후 뒤로가기 시 이전 주소를 기억해 오류 나는 문제 해결
    navigate("/")
  }

  // Edit
  const [editState, setEditState] = useState(false);
  const [editValueState, setEditValueState] = useState(data.content)

  function onChangeHandler (e) {
    setEditValueState(e.target.value)
  }

  function onClickEditHandler () {
    editState === false ? setEditState(true) : setEditState(false)
  }

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Link to={'/'}>Home</Link>
      <StSection>
        <StDiv>
          <StFigure>
            <img src={data.avatar}></img>
          </StFigure>
          <StLabel>닉네임 : {data.nickname}</StLabel>
        </StDiv>
        <StTime>작성일 : {data.createdAt}</StTime>
        <StP>To. {data.writedTo}</StP>
        {editState === false ? <StP>{editValueState}</StP> : <StTextarea value={editValueState} onChange={onChangeHandler}></StTextarea>}
      </StSection>
      <StButton onClick={() => {onClickEditHandler(inputList)}}>수정</StButton>
      <StButton onClick={() => {onClickRemoveHandler(inputList)}}>삭제</StButton>
    </div>
  )
}


const StSection = styled.section`
  
`

const StButton = styled.button`
  
` 

const StDiv = styled.div`
  
`

const StLabel = styled.label`
  
`

const StFigure = styled.figure`
  
`

const StP = styled.p`
  
`

const StTextarea = styled.textarea`
  
`

const StTime = styled.time`
  
`


export default Detail