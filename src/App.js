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
import { useReducer } from "react";
import { Provider } from "react-redux";
import { store } from "./components/store";
import { Page } from "./pages/Page";

function App() {
  const authReducer = (state, action) => {
    switch(action.type) {
      case 'login':
        sessionStorage.setItem('loggedIn', true);
        return {...state, authenticated: true};
      case 'logout':
        sessionStorage.removeItem('loggedIn');
        return {...state, authenticated: false};
      case 'changeUsername':
        return {...state, username: action.payload.username};
      case 'changeEmail':
        return {...state, password: action.payload.email};
      default:
        return {...state};
    }
  };
  const [authState, authDispatch] = useReducer(authReducer, {authenticated: sessionStorage.getItem('loggedIn') !== undefined ? sessionStorage.getItem('loggedIn') : false, username: 'cat', email: 'cat@catmail.com'})
  
  return (
    <Provider store={store}>
      <AuthContext.Provider value={ {authState: authState,
          authDispatch: authDispatch
        }
      }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/bookings/:id" element={<BookingsSingle/>} />
            <Route path="/rooms" element={<Rooms/>} />
            <Route path="/rooms/item/" element={<Page/>}>
              <Route path=":id" element={<SingleRoom/>}/>
            </Route>
            <Route path="/rooms/:page" element={<Rooms/>} />
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
    </Provider>
  );
}

export default App;
