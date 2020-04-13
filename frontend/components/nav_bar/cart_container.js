import { connect } from 'react-redux'
import Cart from './cart'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

export default connect(mapStateToProps, null)(Cart)