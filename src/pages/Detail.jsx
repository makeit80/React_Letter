import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';

import { useDispatch, useSelector } from "react-redux"
import { editData } from '../redux/modules/dataStorage';


function Detail() {
  // Basic
  const params = useParams();
  const navigate = useNavigate();

  const dataList = useSelector((state) => {
    return state.dataProcess
  })
  const dispatch = useDispatch();

  const targetData = dataList.value.find((value) => {
    return value.id === params.id;
  });

  // Remove
  function onClickRemoveHandler(value) {
    if (window.confirm("삭제하시겠습니까?")) {
      const data = value.filter((list) => list.id !== params.id)
      dispatch(editData(data))
      navigate("/")
      alert("삭제 완료")
    } else {
      alert("취소되었습니다.");
    }

    // TODO : 삭제 후 뒤로가기 시 이전 주소를 기억해 오류 나는 문제 해결
  }

  // Edit
  const [editState, setEditState] = useState(false);
  const [editValueState, setEditValueState] = useState(targetData.content)
  const buttonNameSwitch = editState ? '완료' : '수정'

  function onClickEditHandler() {
    setEditState(editState => !editState)
    if (editState === true) {
      const updatedLetters = dataList.value.map((item) =>
        item.id === params.id ? { ...item, content: editValueState } : item
      );
      dispatch(editData(updatedLetters))
      setEditState(false);
    }
  }
  function onChangeHandler(e) {
    setEditValueState(e.target.value)
  }



  return (
    <div>
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
        {editState ? <StTextarea value={editValueState} onChange={onChangeHandler}></StTextarea> : <StP>{editValueState}</StP>}
      </StSection>
      <StButton onClick={onClickEditHandler}>{buttonNameSwitch}</StButton>
      <StButton onClick={() => { onClickRemoveHandler(dataList.value) }}>삭제</StButton>
    </div>
  )
}


const StSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`

const StButton = styled.button`
  
`

const StDiv = styled.div`
  
`

const StLabel = styled.label`
  
`

const StFigure = styled.figure`
width: 200px;
height: 200px;
`

const StP = styled.p`
  width: 500px;
  
`

const StTextarea = styled.textarea`
    width: 500px;
    height: 200px;

    font-size: 20px;
    letter-spacing: 2.1px;
`

const StTime = styled.time`
  
`


export default Detail