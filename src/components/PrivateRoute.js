import {  connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types'
import  authSelectors  from '../redux/auth/auth-selectors';


const  PrivateRoute = ({
  component: Component,
  redirectTo = '/',
  getUser,
  ...routeProps
 
}) =>  <Route 
        {...routeProps}
            render={ props => getUser ? <Component {...props}/> : <Redirect to={redirectTo} />}
        />
    
const mapStateToProps = state => ({
    getUser: authSelectors.getIsLoggedIn(state)
})
export default connect(mapStateToProps)(PrivateRoute)

PrivateRoute.propTypes = {
  getUser: propTypes.bool.isRequired
}