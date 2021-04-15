import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import contactOperation from '../redux/contacts/contacts-operation';
import selectors from '../redux/selectors'


class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, deleteCantact } = this.props;
    return (
      <div>
        <ul className={styles.contactList}>
          {contacts &&
            contacts.map(({ id, name, number }) => (
              <li className={styles.contactCard} key={id}>
                {name} : {number}
                <button onClick={() => deleteCantact(id)}>Удалить</button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.filteredContacts(state),
});
const mapDispatchToProps = dispatch => ({
  deleteCantact: id => dispatch(contactOperation.deleteContacts(id)),
  fetchContacts: () => dispatch(contactOperation.getContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteCantact: propTypes.func.isRequired,
};
