import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal'
import NavBarContainer from './/nav_bar/nav_bar_container'
import GreetingContainer from './greeting/greeting_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <header>
            <title>Letsy</title>
            <Link to="/" className="logo">
                <h1 >Letsy</h1>
            </Link>
            <GreetingContainer />
        </header>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;