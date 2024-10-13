import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import Landing from "./pages/Landing";
import BlogPage from "./pages/BlogPage";
import Courses from "./pages/Courses";
import Careers from "./pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
          <Route element={<DashBoard />} >
          <Route path="/" index element={<Landing />} />
        <Route path="/blogpage" element={<BlogPage />} />
        </Route>
        {/* <Route path="/membershippage" element={<MemberShipPage />} /> */}
        <Route path="/courses" element={<Courses />} />
       {/* <Route path="/coursedetail" element={<CourseDetail />} /> */}
        {/* <Route path="/checkoutpage" element={<CheckOutPage />} /> */}
        {/* <Route path="/blogdetail" element={<BlogDetail />} /> */}
        {/* <Route path="/coursecalendercreate1" element={<CourseCalenderCreate1 />} /> */}
        {/* <Route path="/coursecalendercreate2" element={<CourseCalenderCreate2 />} /> */}
        {/* <Route path="/meeting" element={<Meeting />} /> */}
        {/* <Route path="/search" element={<Search />} /> */}
        {/* <Route path="/literaturecourse" element={<LiteratureCourse />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
