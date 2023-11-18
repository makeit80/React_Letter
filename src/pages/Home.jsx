import styled from "styled-components"
import InputForm from '../components/InputForm'
import Letter from '../components/Letter'
import Header from '../components/Header'

import { useDispatch, useSelector } from "react-redux"
import { GeakoBtn, ChoizaBtn } from '../redux/modules/members'



function Home() {
  const members = useSelector((state) => {
    return state.members;
  })
  const dataList = useSelector((state) => {
    return state.dataProcess
  })
  const dispatch = useDispatch();

  // Q&A : useEffect를 활용해 변수의 값이 바뀔 때마다 state를 변경할 수는 없을까?
  // 꼭 useState를 써야하는걸까?
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
          <StLi className='Geako' onClick={() => { dispatch({ type: GeakoBtn }) }}>개코</StLi>
          <StLi className='Choiza' onClick={() => { dispatch({ type: ChoizaBtn }) }}>최자</StLi>
        </StUl>

        {/* Input */}
        <InputForm></InputForm>

        {/* Letter */}
        {
          dataList.value
            .filter(function (value) {
              return value.writedTo === members.member;
            })
            .map((item) => {
              return (
                  <Letter
                  id={item.id}
                  nickname={item.nickname}
                  content={item.content}
                  avatar={item.avatar}
                  createdAt={item.createdAt}
                  >
                  </Letter>
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