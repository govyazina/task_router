import './App.css';
import Header from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import {CardList} from "./components/CardList/CardList";

function App() {
  return (
    <>
      <Header/>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/add' element={<AddCard/>} />
            <Route path='/list' element={<CardList/>} />
        </Routes>

    </>
  );
}

export default App;
