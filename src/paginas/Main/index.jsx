import { useState } from 'react';
import './styles.css';
import Logo from '../../assets/logo2.svg';

function Main() {
 
  return (
    <div className='container-main'>
      <div className='logo'>
        <img src={Logo} alt="logo"/>
        <h1>Reading Table</h1>
      </div>
      <div className='content-main'>
        <h1>Chega de se <span>perder ou esquecer</span>, ao acompanhar sua obra <span>favorita.</span></h1>
        <h3>Organize suas series, animes, livros, mangas e mais, em um só lugar.</h3>
        <div className='buttons-main'>
          <button className='btn-big btn-blue'>Logar</button>
          <button className='btn-big btn-blue'>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default Main
