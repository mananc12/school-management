import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";

import StudentManager from "./StudentManager";
import TeacherManager from "./TeacherList";
import CourseList from "./CourseList";
import AdmitCard from "./AdmitCard";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
<Routes>
 <Route path='/' element={<App />}/>

<Route path='/registeration' element={<StudentManager/>} />
<Route path='/teachers' element={<TeacherManager/>} />
<Route path='/courses' element={<CourseList/>} />
<Route path='/admit-card' element={<AdmitCard/>} />

</Routes>
</BrowserRouter>
);
