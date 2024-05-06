

import './App.css'


import Style_01_Display from "./pages/Style_01_Display.tsx";

import {Route, Routes} from "react-router-dom";


function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Style_01_Display/>}/>
          <Route path={'/cv'} element={<Style_01_Display/>}/>
      </Routes>
    </>
  )
}

export default App
