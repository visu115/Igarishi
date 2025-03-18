import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/Mainlayout/MainLayout";
import Home from "./Pages/Home";
// import LoginPage from "./pages/login/LoginPage";
// import DashBoardPage from "./pages/dashboard/DashBoardPage";
// import Flats from "./pages/flats/Flats";
// import Visitors from "./pages/visitors/Visitors";
// import NoPage from "./pages/nopage/NoPage";

// import LoginRoleAuthGuard from "./components/auth/LoginRoleAuthGuard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route
            // path="/admin"
            element={
              <LoginRoleAuthGuard allowedRoles={["Admin", "Security"]} />
            }
          > */}
          {/* <Route index element={<DashBoardPage />}></Route> */}
          {/* <Route path="flats" element={<Flats />}></Route> */}
          {/* <Route path="/visitors" element={<Visitors />}></Route> */}
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/" element={<Home />} />
        </Route>

        {/* </Route> */}
        {/* <Route path="/login" element={<LoginPage />}></Route> */}
        {/* <Route
          // path="/admin"
          element={<LoginRoleAuthGuard allowedRoles={["Security"]} />}
        >
            <Route index element={<DashBoardPage />}></Route>
            <Route path="flats" element={<Flats />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;