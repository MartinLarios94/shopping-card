import React, { useEffect, useState } from "react";
import { users } from "../../data/users";

const Login = props => {
  const { isLogged, token, login } = props;

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if(isLogged) {
      props.history.push('/home')
    }
  }, [isLogged, props.history])

  const { userName, password } = user;

  const handleChange = (value, field) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = users.findIndex((user) => user.username === userName);

    if (index < 0) {
      setMessage("Username does not exist");
      setTimeout(() => {
        setMessage('')
      }, 2000);
      return;
    } 
    
    const existUser = users[index]

    if (index >= 0) {
      if (existUser.password !== password) {
        setMessage('Password Incorrect')
        setTimeout(() => {
          setMessage('')
        }, 2000);
      }
    }

    login(JSON.stringify(existUser))

  };

  return (
    <div className="form-user">
      {message !== "" ? <div className="alert-error">{message}</div> : null}
      <div className="form-container">
        <h1>Iniciar Sesion</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="user">Usuario</label>
            <input
              type="text"
              name="user"
              id="user"
              value={userName}
              placeholder="Ingrese su nombre de usuario"
              className="input-text"
              onChange={({ target: { value } }) =>
                handleChange(value, "userName")
              }
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Ingrese su contraseña"
              className="input-password"
              onChange={({ target: { value } }) =>
                handleChange(value, "password")
              }
            />
          </div>

          <div>
            <input
              type="submit"
              className="btn btn-block btn-primario"
              value="Iniciar Sesión"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
