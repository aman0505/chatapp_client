import { React, Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// const Home =lazy(()=>import("./pages/Home"))
// const Login =lazy(()=>import("./pages/Login"))
import Home from "./pages/Home";
import Login from './pages/Login'
import Chats from "./pages/Chats";
import Groups from "./pages/groups";
import Uservalidate from "./components/auth/Uservalidate";
import Notfound from "./pages/Notfound";

import { Layoutloader } from "./components/layout/Loaders";
const AdminDashboard = lazy(()=> import("./pages/admin/AdminDashboard")  )
const AdminLogin =lazy(()=> import("./pages/admin/AdminLogin")  )
const UserManagment =lazy(()=> import("./pages/admin/UserManagment")  )
const ChatManagment =lazy(()=> import("./pages/admin/ChatManagment")  )
const MessageManagment =lazy(()=> import("./pages/admin/MessageManagment")  )






function App() {
  // const Home = lazy(() => import("./pages/Home"))

  const user = true

  return (
    <Router>
      <Suspense fallback={<Layoutloader/>}>
        <Routes>


          <Route element={<Uservalidate user={user} redirect="/login" />}>
            <Route path="/" element={<Home />} />

            <Route path="/chats/:chatid" element={<Chats />} />
            <Route path="/groups" element={<Groups />} />

          </Route>

          <Route path="/login" element={<Uservalidate user={!user} redirect="/">
            <Login />
          </Uservalidate>} />


          <Route path="/admin" element={<AdminLogin/>}/>
          <Route  path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route  path="/admin/users-managment" element={<UserManagment/>}/>
          <Route  path="/admin/chats-managment" element={<ChatManagment/>}/>
          
          <Route  path="/admin/messages" element={<MessageManagment/>}/>
          
          <Route path="*" element={<Notfound />} />
        </Routes>

      </Suspense>
    </Router>
  );
}

export default App;
