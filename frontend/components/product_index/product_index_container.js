import { connect } from 'react-redux'
import { getAllProducts} from '../../actions/product_actions'
import ProductIndex from './product_index'


const mapStateToProps = state => {
    
    return {
    allProducts: Object.values(state.entities.products)
}};

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)