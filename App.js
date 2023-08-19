import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from './TaskDetails.js';
import View from './ViewDetails.js';
import Edit from './EditTaskPage.js';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Task />} />
          <Route path={"/View/:id"} element={<View />} />
          <Route path={"/Edit/:id"} element={<Edit />}></Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App