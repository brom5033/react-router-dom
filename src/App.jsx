import { Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import AuthLayout from "./routes/AuthLayout";
import Team from "./routes/Team";
import Random from "./routes/Random";
// import TeamTask from "./routes/TeamTask";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>Home</>} />
        <Route path="about" element={<>About</>} />
        <Route path="dashboard" element={<>Dashboard</>} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<>Login</>} />
          <Route path="logout" element={<>Logout</>} />
        </Route>
        <Route path="*" element={<Random />} />
        <Route path="team/:teamId" element={<Team />} />
        <Route path="team/new" element={<>New Team</>} />
        {/* <Route path="team/:teamId/task/:teamId" element={<TeamTask />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
