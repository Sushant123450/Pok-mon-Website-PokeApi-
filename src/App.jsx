import Home from './Components/Home.jsx';
import SearchPage from './Components/SearchPage.jsx';
import TopBar from './Components/TopBar.jsx';
import { Route, Routes } from "react-router-dom";
import { AppContext } from './context/AppContext.jsx';
import { useContext } from 'react';

function App() {
  const { searchResult } = useContext(AppContext);
  return (
    <div >
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage props={searchResult} />} />
      </Routes>
    </div>
  )
}

export default App