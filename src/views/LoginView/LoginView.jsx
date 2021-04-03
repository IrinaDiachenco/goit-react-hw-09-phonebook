import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './LoginView.module.css';
import Slide from '@material-ui/core/Slide';

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);

export default function LoginView() {
  // state = {
  //   email: '',
  //   password: '',
  // };
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };
  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onLogin(this.state);
  //   this.setState({ name: '', email: '', password: '' });
  // };
  //  const { email, password } = this.state;

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  }; 

    return (
      <div className={styles.container}>
        <Slide direction="right" in={true} timeout={300} mountOnEnter unmountOnExit>
          <h1 className={styles.tittle}>Log in</h1>
          </Slide>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
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
          <input  className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />

          <button className={styles.button} type="submit">Log in</button>
        </form>
      </div>
    );
  }

