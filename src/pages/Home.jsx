import React, { useContext, useState } from 'react'
import styled from "styled-components"
import InputForm from '../components/InputForm'
import Letter from '../components/Letter'
import Header from '../components/Header'
import { PagesContext } from '../context/PagesContext'
import { HomeContext } from '../context/HomeContext'


function Home() {
  const Geako = 'Geako'
  const Choiza = 'Choiza'
  const [member, setMember] = useState(Geako)
  const data = useContext(PagesContext);

  // Q&A : useEffect를 활용해 변수의 값이 바뀔 때마다 state를 변경할 수는 없을까?
  // let shownMember = 'Geako'
  // useEffect(() => {
  //     console.log('바뀌었다!')
  // }, [shownMember])

  return (
    <div>
      <Header />
      <StBody>
        {/* Button */}
        <StUl>
          <StLi className='Geako' onClick={() => { setMember(Geako) }}>개코</StLi>
          <StLi className='Choiza' onClick={() => { setMember(Choiza) }}>최자</StLi>
        </StUl>

        {/* Input */}
        <InputForm></InputForm>

        {/* Letter */}
        {
          data.inputList
            .filter(function (value) {
              return value.writedTo === member;
            })
            .map((item) => {
              return (
                <HomeContext.Provider value={{
                id : item.id, 
                nickname: item.nickname,
                content: item.content,
                avatar: item.avatar,
                createdAt: item.createdAt
                }}>
                  <Letter></Letter>
                </HomeContext.Provider>
              )
            })
        }
      </StBody>

    </div>
  )
}

const StBody = styled.body`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StUl = styled.ul`
    width: 100vw;   
    height: 300px; 
    position: relative;
    text-align: center;
    `
const StLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: gray;
    width: 7vw;
    height: 4vh;

    bottom:50%;

    cursor: pointer;

    &:hover {
    background-color: #565656;
    color: white;
    transition: 0.5s;
    }

    position: absolute;
    
    &.Geako {
      left:30%;
    }

    &.Choiza {
      right: 30%;
    }

    &.toggle {
      right: 50%
    }
    /* TODO : Geako, Choiza 사진 넣기 */
    `
export default Home