import logo from './logo.svg';
import './App.css';
import FunctionalOne from './training/FunctionalOne';
import ClassOne from './training/ClassOne';
import Props from './training/Props';
import States from './training/States';
import UseStates from './training/UseStates';
import UseEffect from './training/UseEffect';
import UseEffectTwo from './training/UseEffectTwo';
import UserRef from './training/UseRef';
import UserRefOne from './training/UseRefOne';
import UseContext from './training/UseContext';
import UserContext from './training/UserContext';
import EventHandling from './training/EventHandling';
import Coba from './training/Coba';
import LooppingList from './training/LoopingList';
import Styling from './training/Styling';
import Calculator from './Calculator';
import Gambar from './Gambar';
import Api from './Api';
import Routers from './Routers';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Weather from './Weather';

function App() {
  return (
    <div>
      <Router>
        <Routers /> {/* Komponen navigasi dengan link*/}
        <div>
          <Routes>
            <Route exact path='/' element={<LooppingList />} />
            <Route path='/props' element={<Props />} />
            <Route path='/states' element={<States />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/api' element={<Api />} />
          </Routes>
        </div>
      </Router>
      {/* <Routers /> */}
      {/* <Api /> */}
      {/* <Weather /> */}
      {/* <Gambar /> */}
      {/* <Calculator /> */}
      {/* <Coba />
      <LooppingList />
      <Styling /> */}
      {/* <EventHandling />
      <UserContext />
      <UseContext />
      <FunctionalOne />
      <ClassOne />
      <Props />
      <States />
      <UseStates />
      <UseEffect />
      <UseEffectTwo />
      <UserRef />
      <UserRefOne /> */}
    </div>
  );
}

export default App;
