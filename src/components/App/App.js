import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "../../components";
import { ROUTES } from "../../routes";
import { HomePage, DriftPage, TimeAttackPage, ForzaPage } from "./../../Pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.DRIFT} element={<DriftPage />} />
        <Route path={ROUTES.TIMEATTACK} element={<TimeAttackPage />} />
        <Route path={ROUTES.FORZA} element={<ForzaPage />} />
      </Routes>
    </BrowserRouter>
  );
};
