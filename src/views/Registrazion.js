import React, { Component } from 'react'; 
import propTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import registerOperation from '../redux/auth/auth-operations'


class Registrazion extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }
  onSubmiteForm = event => {
    event.preventDefault();
    this.props.register(this.state)
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
        <h1>Registrazion</h1> 
         <div>
         <Form onSubmit={this.onSubmiteForm}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={this.inputChange} value={this.state.name} name='name' type="name" placeholder="Enter name" />
              <Form.Text className="text-muted">
                We'll add your name
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={this.inputChange} value={this.state.email} name='email' type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  onChange={this.inputChange} value={this.state.password} name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
             </div> </>)
    }
}

const mapDispatchToProps = {
  register: registerOperation.register
};
export default connect(null, mapDispatchToProps)(Registrazion);

Registrazion.propTypes = {
  register: propTypes.func
}