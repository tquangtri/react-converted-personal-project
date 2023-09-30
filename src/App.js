import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/ContextHelper";
import { BrowserRouter } from "react-router-dom";
import RoutesForCustomer from "./routes/customer"



function App() {
  return (    
    <div>
      <BrowserRouter basename="/">
        <Context.Provider value="Nguyen Van E">
          <NavBar></NavBar>
          <RoutesForCustomer> </RoutesForCustomer>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
