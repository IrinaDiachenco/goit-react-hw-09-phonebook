import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contact/contact-operations';
import selectors from '../../redux/contact/contact-selectors';

// const mapStateToProps = state => ({
//   contacts: selectors.getVisibleContacts(state),
// });
// const mapDispatchToProps = dispatch => ({
//   onRemove: id => dispatch(deleteContact(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getVisibleContacts);

    return (
      <>
        <TransitionGroup component="ul" className={styles.list}>
          {contacts.map(({ name, number, id }) => {
            return (
              <CSSTransition
                key={id}
                classNames={styles}
                timeout={300}
                unmountOnExit
              >
                <li key={id}>
                  {name}: {number} <button className={styles.button} id={id} onClick={() => dispatch(deleteContact(id))}>x</button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

