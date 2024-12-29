import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./Pages/RegisterPage.jsx";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage.jsx";
import TasksPage from "./Pages/TasksPage.jsx";
import TaskFormPage from "./Pages/TaskFormPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";

import ProtectedRoutes from "./ProtectedRoutes.jsx";
import { TaskProvider } from "./context/TasksContext.jsx";
import Navbar from "./Components/NavBar.jsx";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <main className="container mx-auto px-10">
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-tasks" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
