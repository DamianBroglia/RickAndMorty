import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav.jsx"
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"
import Favorites from "./components/Favorites.jsx"
import Filtered from "./components/Filtered"
import NavFilter from "./components/NavFilter"


function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'DamianBroglia@gmail.com';
  const password = 'D@m14n.B';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
      alert("Bienvenidos a la app de Rick & Morty")
    } else {
      alert("Username o password incorrectas")
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const [characters, setCharacters] = useState([])
  const location = useLocation()

  function onSearch(id) {
    fetch(`http://localhost:3001/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            alert(`Ya tienes seleccionado a ${data.name}`)
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  //----------------------------------------------------------------

  const [filterChar, setFilterChar] = useState()
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [species, setSpecies] = useState("")
  const [gender, setGender] = useState("")

  function filter(name) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setFilterChar(data.results);
          setName(name)
        } else {
          window.alert('No hay personajes con ese nombre');
        }
      });
  }

  function filterStatus(status) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setFilterChar(data.results);
          setStatus(status)
        } else {
          window.alert('No hay personajes con esas caracteristicas');
        }
      });
  }

  function filterSpecies(species) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setFilterChar(data.results);
          setSpecies(species)
        } else {
          window.alert('No hay personajes con esas caracteristicas');
        }
      });
  }

  function filterGender(gender) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setFilterChar(data.results);
          setGender(gender)
        } else {
          window.alert('No hay personajes con esas caracteristicas');
        }
      });
  }


  //----------------------------------------------------------------

  function onClose(id) {
    setCharacters(oldChar => oldChar.filter(c => c.id !== id))
  }
  function onCloseTwo(id) {
    setFilterChar(oldChar => oldChar.filter(c => c.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} filter={filter} /> : null}
      {location.pathname === "/filtered" ? <NavFilter filter={filter}
        filterSpecies={filterSpecies}
        filterGender={filterGender}
        filterStatus={filterStatus} /> : null}
      <Routes>
        <Route path='/' element={<Form login={login} />}></Route>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/filtered' element={<Filtered filterChar={filterChar} onClose={onCloseTwo} />}></Route>
        <Route path='/favorites' element={<Favorites characters={characters} filterChar={filterChar} onClose={onClose} />}></Route>
        <Route path="/Detail/:detailid" element={<Detail />}></Route>
      </Routes>
    </div>
  )
}



export default App;
