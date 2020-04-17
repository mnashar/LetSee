import React from 'react'
import { connect } from 'react-redux'
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'
import { closeModal } from '../../actions/modal_actions'

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null
    }

    let component;

    switch (modal) {
        case "Sign Up":
            component = <SignupFormContainer />;
            break;
        case "Sign In":
            component = <LoginFormContainer />;
            break;
        default:
            return null
    }
    return (
        <div className="modal-background" >
            <div className="close" onClick={closeModal}>X</div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        // debugger;
        return dispatch(closeModal())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)
