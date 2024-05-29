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
          <Route path="*" element={<Notfound />} />
        </Routes>

      </Suspense>
    </Router>
  );
}

export default App;
