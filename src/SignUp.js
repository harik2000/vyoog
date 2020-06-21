import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import VyoogLogo from './vyoog.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import firebase from 'firebase';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="screen">

      <div className="Menulogo">
        <img src={VyoogLogo} alt="Vyoog Logo" className="logo"/>
        <div className="VyoogTitle">Vyoog</div>
      </div>


      <Card style={{ width: '28rem' }} className="card">
      <Card.Body>
        <h4 className="card_title">Create your Vyoog account</h4>
        <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formBasicEmail" className="form">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="form">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" />
            </Form.Group>
            
            <Button variant="dark" type="submit" className="button">
                Create Account
            </Button>
        </Form>
        </Card.Body>
      </Card>

      <p className="footer_text">Have an account? <Link to="/login">Sign in</Link></p>


    </div>
  );
};

export default withRouter(SignUp);
