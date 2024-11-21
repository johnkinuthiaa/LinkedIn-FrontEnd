
import './App.css'

import Body from "./components/Body.jsx";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import MyNetwork from "./pages/MyNetwork.jsx";
import Jobs from "./pages/Jobs.jsx";
import Messaging from "./pages/Messaging.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";


function App() {
  return (
      <Routes>
          <Route path="/home" element={<Body/>}/>
          <Route path={"/myNetwork"} element={<MyNetwork/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/messaging" element={<Messaging/>}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"*"} element={ <ErrorPage/>}></Route>
      </Routes>

        //   <Body />
  )
}

export default App
