import logo from './logo.svg';
import './App.css';
import ArtistaCreate from './views/Artistas/ArtistaCreate';
import ArtistaForm from './views/Artistas/ArtistaForm';
import Login from './views/Login/Login';
import SignUp from './views/Login/SignUp';
import './App.css';import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ArtistaAll from './views/Artistas/ArtistaAll';
import ArtistaShow from './views/Artistas/ArtistaShow';
import ArtistaEdit from './views/Artistas/ArtistaEdit';
import Layout from './layout/Layout';
import Artistas from './views/Artistas/Artistas';

function App() {
  return (
    <Layout>
      <div className='container' >
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/registrarse" element={<SignUp/>}/>
                <Route path="/artistas" element={<Artistas/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/artistas/todos" element={<ArtistaAll/>}/>
                <Route path="/artistas/:id" element={<ArtistaShow/>}/>
                <Route path="/artistas/new" element={<ArtistaCreate/>}/>
                <Route path="/artistas/:id/edit" element={<ArtistaEdit/>}/>
          </Routes> 
        </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
