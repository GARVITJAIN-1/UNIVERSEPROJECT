import logo from './logo.svg';
import './App.css';
import Hero from './pages/Hero';
import Sun from './pages/Sun';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';
import Footer from './pages/Footer';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (<div>
    <div className='h-full'>
    <Hero></Hero>
    <Sun></Sun>
    <Mercury></Mercury>
    <Venus></Venus>
    <Earth></Earth>
    <Mars></Mars>
    <Jupiter></Jupiter>
    <Saturn></Saturn>
    <Uranus></Uranus>
    <Neptune></Neptune>
    <Footer></Footer>
        {/* <section id="hero"><Hero /></section>
        <section id="sun"><Sun /></section>
        <section id="mercury"><Mercury /></section>
        <section id="venus"><Venus /></section>
        <section id="earth"><Earth /></section>
        <section id="mars"><Mars /></section>
        <section id="jupiter"><Jupiter /></section>
        <section id="saturn"><Saturn /></section>
        <section id="uranus"><Uranus /></section>
        <section id="neptune"><Neptune /></section>
        <Footer /> */}
    </div>
    {/* <Routes>
      <Route path="/" element={<Hero></Hero>}></Route>
      <Route path="/Sun" element={<Sun></Sun>}></Route>
      <Route path="/Mercury" element={<Mercury></Mercury>}></Route>
      <Route path="/Venus" element={<Venus></Venus>}></Route>
      <Route path="/Earth" element={ <Earth></Earth>}></Route>
      <Route path="/Mars" element={ <Mars></Mars>}></Route>
      <Route path="/Jupiter" element={ <Jupiter></Jupiter>}></Route>
      <Route path="/Saturn" element={ <Saturn></Saturn>}></Route>
      <Route path="/Uranus" element={  <Uranus></Uranus>}></Route>
      <Route path="/Neptune" element={  <Neptune></Neptune> }></Route>
    </Routes> */}
    </div>
  );
}

export default App;
