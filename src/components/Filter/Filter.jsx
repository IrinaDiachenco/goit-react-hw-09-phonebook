import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contact/contact-actions';
import selectors from '../../redux/contact/contact-selectors';

// const mapStateToProps = state => ({
//   value: selectors.getFilter(state),
//   contacts: selectors.getAllContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const onChange = e => dispatch(changeFilter(e.target.value));
  
  return (
    <input
      className={styles.input}
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Enter name for Search'
    />
  )
};

