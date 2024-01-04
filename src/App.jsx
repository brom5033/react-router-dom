import { Routes, Route} from "react-router-dom";
import Layout from "./routes/Layout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<>Home</>} />
          <Route path="about" element={<>About</>} />
          <Route path="dashboard" element={<>Dashboard</>} />
          <Route element={<></>}>
            <Route path="login" element={<>Login</>} />
            <Route path="logout" element={<>Logout</>} />
          </Route>
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
  );
}

export default App;
