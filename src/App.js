import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/ContextHelper";
import RoutesForCustomer from "./routes/customer"



function App() {
  return (    
    <div>
      <BrowserRouter basename="/">
        <Context.Provider value="Nguyen Van E">
          <RoutesForCustomer> </RoutesForCustomer>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
