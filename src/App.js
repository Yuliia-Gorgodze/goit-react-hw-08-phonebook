import React, { Component, Suspense } from 'react';
import propTypes from 'prop-types'
import { Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import { connect } from 'react-redux';
import authOperations from './redux/auth/auth-operations'
import styles from './styles.module.css';

class App extends Component {
  componentDidMount () {
    this.props.getUser()
  }
  render() {
    return (
      <Suspense fallback={<p>Загружаем.... </p>}>
        <Switch>
       <Navigation logOut={this.props.logOut}/>
      </Switch>
      </Suspense>
    );
  }
}

const mapDispatchToProps = {
logOut: authOperations.logOut,
getUser: authOperations.getCurrentUser,
}
export default connect(null, mapDispatchToProps)(App);


App.propTypes = {
  logOut: propTypes.func,
  getUser: propTypes.func
}