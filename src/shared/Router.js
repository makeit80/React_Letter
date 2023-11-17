import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";
import fakeData from '../components/fakeData.json'
import { PagesContext } from "../context/PagesContext";

const Router = () => {
    const [inputList, setInputList] = useState(fakeData)

    return (
        <PagesContext.Provider value={{ inputList, setInputList }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home
                        inputList={inputList}
                        setInputList={setInputList}>
                    </Home>}></Route>

                    <Route path="Detail/:id" element={<Detail
                        inputList={inputList}
                        setInputList={setInputList}>
                    </Detail>}></Route>
                </Routes>
            </BrowserRouter>
        </PagesContext.Provider>


    )
}


export default Router;

