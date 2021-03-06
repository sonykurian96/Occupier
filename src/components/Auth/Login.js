import React from 'react'
import firebase from '../../firebase'
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errors: [],
    loading: false
  }
  displayerrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true })
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
          console.log(signedInUser)
        })
        .catch(err => {
          console.error(err)
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          })
        })
    }
  }
  isFormValid = ({ email, password }) => email && password
  handleInputError = (errors, inputName) => {
    return errors.some(error => 
      error.message.toLowerCase().includes(inputName)
      ) ? (
        'error'
      ) : (
        ''
      )
  }
  render() {
    const {
      email,
      password,
      errors,
      loading
    } = this.state
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="orange" textAlign="center">
            <img style={{width:390,height:100}} src={require("./alogo.png")} alt='error'/>
            Login with your organization ID
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                className={this.handleInputError(errors, 'email')}
                type="email"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                className={this.handleInputError(errors, 'password')}
                type="password"
              />
              <Button
                disabled={loading}
                className={loading ? 'loading' : ''}
                color="orange"
                fluid
                size="large"
              >
                Submit
              </Button>
              <Message>Connect - Communicate - Collaborate</Message>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayerrors(errors)}
            </Message>
          )}
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login
