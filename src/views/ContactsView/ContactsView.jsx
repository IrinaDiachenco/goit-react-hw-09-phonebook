import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import styles from './ContactView.module.css';
import Loader from '../../components/Loader/Loader';
import selectors from '../../redux/contact/contact-selectors';
import { fetchContacts } from '../../redux/contact/contact-operations';
import Slide from '@material-ui/core/Slide';

// const mapStateToProps = state => ({
//   isLoading: selectors.getLoading(state),
// });

// const mapDispatchToProps = {
//   fetchContacts: fetchContacts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactView);

export default function ContactView() {
  const dispatch = useDispatch();
    const isLoading = useSelector(selectors.getLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
      <>
        
      {isLoading && <Loader />}
      <div className={styles.container}>
          <Slide direction="right" in={true} timeout={300} mountOnEnter unmountOnExit>
            <h1 className={styles.tittle}>Phonebook</h1>
            </Slide>

        <ContactForm />
        <div className={styles.filter}>
          <h2>find contact</h2>
          <Filter />
        </div>
        <ContactList />
        </div>
      </>
    );
  }





