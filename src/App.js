import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/main/main';
import { Dash } from './components/dashboard/dash';
import { Provider } from 'react-redux';
import { Store } from './Store/store';
import { Description } from './components/description/description';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
   <Main/>
   <Routes>
    <Route path="/" element={<Dash/>}/>
    <Route path="/description/:id" element={<Description/>}/>
   </Routes>
   </BrowserRouter>
    </Provider>
   
  );
}

export default App;
