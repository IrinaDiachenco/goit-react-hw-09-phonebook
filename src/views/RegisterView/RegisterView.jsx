import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';
import Slide from '@material-ui/core/Slide';

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);

export default function RegisterView() {
  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };
  const handleChangeName = ({ target }) => {
    setName(target.value);
  };
  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   onRegister(this.state);
  //   this.setState({ name: '', email: '', password: '' });
  // };  
  //   const { name, email, password } = this.state;
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

    return (
      <div className={styles.container}>
        <Slide direction="right" in={true} timeout={300} mountOnEnter unmountOnExit>
          <h1 className={styles.tittle}>Check in</h1>
          </Slide>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Name
             
          </label>
          <input  className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChangeName}
            />

          <label className={styles.label}>
            Mail
             
          </label>
          <input  className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />

          <label className={styles.label}>
            Password
             
          </label>
          <input className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />

          <button className={styles.button} type="submit">Register</button>
        </form>
      </div>
    );
  }




