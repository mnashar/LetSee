import React from 'react';
import { Provider } from 'react-redux';


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
            {/* <script src="https://code.iconify.design/1/1.0.5/iconify.min.js"></script> */}
            <title>Letsy</title>
           
        </header>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;