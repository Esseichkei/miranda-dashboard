import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/main";
import { Login } from "./components/login/main";
import { Bookings } from "./components/bookings/main";
import { BookingsSingle } from "./components/bookings/single";
import { Rooms } from "./components/rooms/main";
import { RoomsSingle } from "./components/rooms/single";
import { Users } from "./components/users/main";
import { UsersSingle } from "./components/users/single";
import { Contact } from "./components/contact/main";
import { ContactSingle } from "./components/contact/single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/bookings" element={<Bookings/>} />
        <Route path="/bookings/:id" element={<BookingsSingle/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/rooms/:id" element={<RoomsSingle/>} />
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
  );
}

export default App;
