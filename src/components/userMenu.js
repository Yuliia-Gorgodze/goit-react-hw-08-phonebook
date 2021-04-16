import propTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import styles from '../components/Navigation.module.css'
export default function UserMenu({getUsername, logOut}) {

    return (
      <>
        <span className={styles.userName}>Hello, {getUsername }</span>
        <Button variant="danger" onClick={logOut}>LogOut</Button> 
      </>
    );
  }

  UserMenu.propTypes = {
    getUsername: propTypes.string.isRequired,
    logOut: propTypes.func.isRequired
  }