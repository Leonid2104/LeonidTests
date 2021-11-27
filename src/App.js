import './App.css';
import WrapperContainer from './Components/Wrapper/WrapperContainer';
import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from './Components/Header/HeaderContainer';
function App() {
  return (
    <div>
    <HeaderContainer/>
    <WrapperContainer/>
    </div>
  );
}

export default App;
