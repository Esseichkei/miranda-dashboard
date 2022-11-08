import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/main";
import { Login } from "./components/login/main";
import { Bookings } from "./components/bookings/main";
import { Rooms } from "./components/rooms/main";
import { Users } from "./components/users/main";
import { Contact } from "./components/contact/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/bookings" element={<Bookings/>} />
        <Route path="/bookings/:id" element={<Bookings/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/rooms/:id" element={<Rooms/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/users/:id" element={<Users/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/contact/:id" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
