import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import { PagesContext } from '../context/PagesContext';

function Detail() {
  // Basic
  const params = useParams();
  const navigate = useNavigate();
  const data = useContext(PagesContext);

  const targetData = data.inputList.find((value) => {
    return value.id === params.id;
  });

  // Remove
  function onClickRemoveHandler (value) {
    if (window.confirm("삭제하시겠습니까?")) {
      const data = value.filter((list) => list.id !== params.id)
      data.setInputList(data)
      alert("삭제 완료")
      navigate("/")
    } else {
    	alert("취소되었습니다.");
    }

    // TODO : Session Storage를 활용해 삭제 후 돌아갔을 때 해당 멤버 리스트 유지
    // TODO : 삭제 후 뒤로가기 시 이전 주소를 기억해 오류 나는 문제 해결
  }

  // Edit
  const [editState, setEditState] = useState(false);
  const [editValueState, setEditValueState] = useState(targetData.content)
  const buttonNameSwitch = editState ? '완료' : '수정'

  function onClickEditHandler () {
    editState ? setEditState(false) : setEditState(true)
    if (editState === true) {
      setEditState(false);
      const updatedLetters = data.inputList.map((item) => 
        item.id === params.id ? {...item, content: editValueState} : item
      );
      data.setInputList(updatedLetters);
      // Q&A : 기존 배열을 풀어서 넣지 않고 적용해도 됨? 왜..?
    }
  }

  function onChangeHandler (e) {
    setEditValueState(e.target.value)
  }

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Link to={'/'}>Home</Link>
      <StSection>
        <StDiv>
          <StFigure>
            <img src={targetData.avatar}></img>
          </StFigure>
          <StLabel>닉네임 : {targetData.nickname}</StLabel>
        </StDiv>
        <StTime>작성일 : {targetData.createdAt}</StTime>
        <StP>To. {targetData.writedTo}</StP>
        {editState ? <StTextarea value={editValueState} onChange={onChangeHandler}></StTextarea> : <StP>{editValueState}</StP> }
      </StSection>
      <StButton onClick={onClickEditHandler}>{buttonNameSwitch}</StButton>
      <StButton onClick={() => {onClickRemoveHandler(data.inputList)}}>삭제</StButton>
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