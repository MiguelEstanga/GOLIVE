import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./view/Login/Login";
import EducatorsAndSchedules from "./view/educatorsAndSchedules/EducatorsAndSchedules";
import Welcome2d from "./view/welcome2d/Welcome2d";
import OnlivePage from "./view/onLivePage/OnlivePage";
import Cronograma from './view/cronograma/Cronograma';
import { SmartMoney } from './view/SmartMoney/SmartMoney';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Welcome2d" element={<Welcome2d />} />
        <Route path="/educators-and-schedules" element={<EducatorsAndSchedules />} />
        <Route path="/on-live-page" element={<OnlivePage />} />
        <Route path="/smart-money" element={ <SmartMoney />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
