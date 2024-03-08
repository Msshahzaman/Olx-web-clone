import logo from './logo.svg';
import './App.css';
import Router from './config/router';
import Header from './Homepage/Header';
import Footer from './Homepage/Footer';
import { Provider} from "react-redux";



function App() {
  return (
  

<Provider store={store}>
    <div className="App">
      <Router />
    </div>
    </Provider>


  );
}

export default App;
