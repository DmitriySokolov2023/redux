import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Component1 from "./components/Component1";


function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)

    const addCash = (cash) => {
        dispatch({type:'ADD_CASH', payload:cash})
    }
    const getCash = (cash) => {
        dispatch({type:'GET_CASH', payload:cash})
    }
    return (
        <div className="App">
            <div>
                <div>{cash}</div>
                <div style={{display: "flex"}}>
                    <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                    <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                </div>
            </div>
            <Component1/>
        </div>
    );
}

export default App;
