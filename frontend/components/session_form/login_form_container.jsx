import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import SessionForm from './session_form'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: "Sign In",
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    processForm: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => {
        debugger;
       return dispatch(closeModal())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)