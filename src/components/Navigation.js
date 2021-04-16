import React, {lazy} from 'react'; 
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import authSelectors from '../redux/auth/auth-selectors'
//components
const PrivateRoute = lazy(() => import('../components/PrivateRoute'/*WebpackChunkName: "PrivateRoute"*/)) 
const PublicRoute = lazy(() => import('./PublicRoutes'/*WebpackChunkName: "PublicRoute"*/)) 
const Home = lazy(() => import('../views/HomeViews'/*WebpackChunkName: "Home"*/)) 
const Contacts = lazy(() => import('../views/ContactsViews'/*WebpackChunkName: "Contacts"*/)) 
const Login = lazy(() => import('../views/LoginViews'/*WebpackChunkName: "Login"*/)) 
const Registrazion = lazy(() => import('../views/Registrazion'/*WebpackChunkName: "Registrazion"*/)) 
const AuthNav = lazy(() => import('./AuthNav'/*WebpackChunkName: "AuthNav"*/)) 
const UserMenu = lazy(() => import('./userMenu'/*WebpackChunkName: "UserMenu"*/)) 

const Navigation = ({getUsername, logOut, getUser}) => {

    return (<> 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Brand href="#home"><NavLink to='/'>Home</NavLink></Navbar.Brand>
           <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
              {getUser && <Nav.Link href="#features">
                     <NavLink to='/contacts'>contacts</NavLink>
                     </Nav.Link>}
               </Nav>
              {getUsername ? <UserMenu getUsername={getUsername} logOut={logOut}/> : <AuthNav/>} 
          </Navbar.Collapse> 
   </Navbar>
     
    <Route path="/" exact component={Home} />
      <PrivateRoute path="/contacts" component={Contacts} />
      <PublicRoute path="/login" component={Login}/>
      <PublicRoute path="/registrazion" component={Registrazion}  />
     
    </>)
}

const mapStateToProps = state => ({
  getUsername: authSelectors.getUsername(state),
  getUser: authSelectors.getIsLoggedIn(state)
})
export default connect(mapStateToProps, null)(Navigation)