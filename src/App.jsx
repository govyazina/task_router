import './App.css';
import Header from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import {CardList} from "./components/CardList/CardList";
import {GlobalContext} from "./contexts/globalContext";
import {useReducer} from "react";
import {reducer} from "./reducer/reducer";

function App() {
    const initialState = {
        list: [],
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <GlobalContext.Provider value={{state, dispatch}}>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/add' element={<AddCard/>}/>
                    <Route path='/list' element={<CardList/>}/>
                </Routes>
            </GlobalContext.Provider>
        </>
    );
}

export default App;
