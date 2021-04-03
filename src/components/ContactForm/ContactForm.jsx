import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contact/contact-operations';
import selectors from '../../redux/contact/contact-selectors';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

// const mapStateToProps = (state) => ({
//         contacts: selectors.getAllContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//     onAdd: (name, number) =>
//         dispatch(addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

export default function ContactForm() {
//     static propTypes = {
//     onAdd: PropTypes.func.isRequired,
//   };
//     state = {
//         name: "",
//         number: "",
//         error: null,
//     };
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  //const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

    // handleChangeForm = ({target}) => {
    //     const { name, value } = target
    //     this.setState({ [name]: value })
    // };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
        e.preventDefault()

        //const { name, number } = this.state;
        //const { onAdd } = this.props;
        const isValidateForm = validateForm()

        if (!isValidateForm)
            dispatch(addContact(name, number));
            resetForm()    
    };

  const validateForm = () => {
        // const { name, number } = this.state;
        
        // const { contacts } = this.props;  
        const isExistContact = !!contacts.find((items) => items.name.toLowerCase() === name.toLowerCase());
        
        if (!name || !number) {
            setErrorMessage('Some filed is empty');
            return setTimeout(() => {
                setErrorMessage(null);
            }, 2000);
            
        }
        if (isExistContact) {
            setErrorMessage('Contact is already exist');
            return setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
        }
        
    } 

  const resetForm = () => {
      setName('');
      setNumber('');
    };

        //const { name, number, error } = this.state;       
        return (
            <>
                <Slide direction="left" in={errorMessage !== null} timeout={250} >
                    <div className={styles.alert}>
                        <Alert severity="warning">{errorMessage}</Alert>
                        </div>
                    </Slide>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <label className={styles.label}>name</label>
                <input className={styles.input} type="text" name="name" placeholder="Enter name" value={name} onChange={handleChangeName} />   
                <label className={styles.label}>number</label>
                <input className={styles.input} type="tel" name="number" placeholder="Enter number number" value={number} onChange={handleChangeNumber} />    
                <button className={styles.button} type='submit'>Add Contact</button>   
            </form>
           </>
        )
    }


