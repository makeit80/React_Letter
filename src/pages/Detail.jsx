import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';

function Detail({inputList, setInputList}) {
  const params = useParams();
  const navigate = useNavigate();

  const data = inputList.find((value) => {
    return value.id === params.id;
  });

  const [editState, setEditState] = useState(false);
  const [editValueState, setEditValueState] = useState(data.content)


  function onClickRemoveHandler (value) {
    const data = value.filter((list) => list.id !== params.id)
    setInputList(data)
    // TODO : Session Storage를 활용해 삭제 후 돌아갔을 때 해당 멤버 리스트 유지
    navigate("/")
  }

  function onClickEditHandler (value) {
    editState === false ? setEditState(true) : setEditState(false)
  }

  function onChangeHandler (e) {
    setEditValueState(e.target.value)
  }

  return (
    <div>
      <Link to={'/'}>Home</Link>
      <StSection>
        <StDiv>
          <StFigure>
            <Stimg src={data.avatar}></Stimg>
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

const Stimg = styled.img`
border-radius: 50%;

`

const StP = styled.p`
  
`

const StTextarea = styled.textarea`
  
`

const StTime = styled.time`
  
`


export default Detail