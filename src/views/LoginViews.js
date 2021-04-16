import React, {Component} from 'react'; 
import propTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  onSubmiteForm = event => {
    event.preventDefault();
    this.props.login(this.state)

    this.resetForm()
  }
  resetForm = () => {
    this.setState({ email: '', password: '' });
  };
  inputChange = event => {
    const { currentTarget } = event;
    this.setState({ [currentTarget.name]: currentTarget.value });
  };
    render () {
      return (<> 
        <h1> Login</h1>
        <div> 
            <Form onSubmit={this.onSubmiteForm}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={this.inputChange} name='email' value={this.state.email} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label >Password</Form.Label>
              <Form.Control onChange={this.inputChange} name='password'  value={this.state.password}  type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form></div> </>)
    }
}
const mapDispatchToProps = {
  login: authOperations.logIn
};
export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  login: propTypes.func
}