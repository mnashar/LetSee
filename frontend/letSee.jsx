//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
//test
// import * as SessionApiUtil from './util/session_api_util';
// import * as SessionActions from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

    // for testing only must be deleted
    // window.getState= store.getState;
    // window.dispatch=store.dispatch;
    
    // window.login = SessionApiUtil.login;
    // window.logout = SessionApiUtil.logout;
    // window.signup = SessionApiUtil.signup;

    // window.logins = SessionActions.login;

});
