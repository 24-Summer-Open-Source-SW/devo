import './App.css';
import {Route, Router, Routes} from 'react-router-dom';
import Main from './pages/main';
import Join from './pages/join';
import AddMemo from './pages/addMemo';
import DetailedMemo from './pages/detailedMemo';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/join" element={<Join/>}/>
      <Route path="/addmemo" element={<AddMemo/>}/>
      <Route path="/detailedmemo" element={<DetailedMemo/>}/>
    </Routes>
    </>
  );
}

export default App;
