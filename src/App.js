import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/main";
import { Login } from "./components/login/Login";
import { Bookings } from "./components/bookings/main";
import { BookingsSingle } from "./components/bookings/single";
import { Rooms } from "./components/rooms/Rooms";
import { SingleRoom } from "./components/rooms/SingleRoom";
import { Users } from "./components/users/main";
import { UsersSingle } from "./components/users/single";
import { Contact } from "./components/contact/main";
import { ContactSingle } from "./components/contact/single";
import { AuthContext } from "./components/auth";
import { useState } from "react";

function App() {
  const [authData, authDataSetter] = useState(sessionStorage.getItem('loggedIn') !== undefined ? sessionStorage.getItem('loggedIn') : false)
  function isLoggedIn() {
    return authData;
  }
  function logIn(user, password) {
    if (user === 'cat' && password === 'meow') {
        authDataSetter(true);
        sessionStorage.setItem('loggedIn', 'true');
        return true;
    }
    else {
        return false;
    }
  }
  function logOut() {
    authDataSetter(false);
    sessionStorage.removeItem('loggedIn');
    return false;
  }
  return (
    <AuthContext.Provider value={ {isLoggedIn: isLoggedIn,
        logIn: logIn,
        logOut: logOut,
      }
    }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/bookings/:id" element={<BookingsSingle/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/rooms/:id" element={<SingleRoom/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/users/:id" element={<UsersSingle/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/contact/:id" element={<ContactSingle/>} />
          <Route
            path="*"
            element={
                <main style={{ padding: "16px" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
