import RoutesApp from "./routes";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './componets/footer/footer';

function App() {
  return (
    <div className="app">
      <ToastContainer autoClose="1000"/>
      <RoutesApp/>
      <Footer/>
    </div>
  );
}

export default App;
