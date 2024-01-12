import React, { useState } from 'react';
import './assets/css/styles.css'
import software from "./assets/img/software.png"


export default function App() {
  const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className="container">

      {/* Login Form */}
      <div className="form">

        <h2>Login</h2>

        <form action='#'>
          
          <div className="inputs">

            <span class="material-symbols-outlined">Email</span>
            <input type="text"
            name="email"
            id="email" placeholder='Entre com o seu email' required/>            
          </div>

          <div className="inputs">
            
            <span class="material-symbols-outlined">lock</span>
            <input type={showPassword ? 'text' : 'password'}            
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required/>

            <span class="material-symbols-outlined eye"
            alt={showPassword ? 'Esconder senha' : 'Mostrar senha'}
            onClick={handleTogglePassword}>
              visibility_off
            </span>            
          </div>

          <div className="forgot">
            <a href="">Esqueceu a Senha?</a>            
          </div>          
            
          <div className="inputs">
            <input type="submit" value="Entrar" id="submit"/>
          </div>
          
          <div className="sigup">
            <p>Não tem uma Conta? <a href="#" className="create">Crie uma agora</a></p>
          </div>                   
        </form>
      </div>
      {/* End Login Form */}
      {/* Login Img */}
      <div className="login-img">

        <img src={ software } alt="Software img" />
      </div>
      {/* End Login Img */}
    </div>
  )
}


