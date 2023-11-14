import React from 'react'
import Header from '../components/Header'

function Home({inputList, setInputList}) {
  return (
    <div>
      <Header                 
      inputList={inputList} 
      setInputList={setInputList}>
      </Header>
    </div>
  )
}

export default Home