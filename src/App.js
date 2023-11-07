import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/main/main';
import { Dash } from './components/dashboard/dash';
import { Provider } from 'react-redux';
import { Store } from './Store/store';
import { Description } from './components/description/description';
import { Fav } from './components/favourite/fav';
import {Mycoursepur } from './components/mycource/mycourse';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
   <Main/>
   <Routes>
    <Route path="/" element={<Dash/>}/>
    <Route path="/description/:id" element={<Description/>}/>
    <Route path="/mycourse" element={<Mycoursepur/>}/>
    <Route path="/fav" element={<Fav/>}/>
   </Routes>
   </BrowserRouter>
    </Provider>
   
  );
}

export default App;
