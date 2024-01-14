import { Header } from "components/Header/Header";
import { AppContainer } from "./styled-components";
import { Navigate, Route, Routes  } from "react-router-dom";
import { HomeDashboard } from "components/HomeDashboard";
import "./reset.css";

export function App() {
  return (
    <AppContainer>
      <Header/>
        <Routes>
          <Route path={'/'}  element={<Navigate to="/home" replace />}/>
          <Route path={'/home'}  element={<HomeDashboard/>}/>
          <Route path={'/card'}  element={<div>Card Page</div>}/>
          <Route path={'/statements'}  element={<div>Statements Page</div>}/>
          <Route path="*" element={<Navigate to="/home" replace />}/>
        </Routes>
    </AppContainer>
  );
}

 