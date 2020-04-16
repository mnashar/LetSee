import { connect } from 'react-redux'
import { getAllProducts, getSearchProducts} from '../../actions/product_actions'
import ProductIndex from './product_index'



const mapStateToProps = state => {
    
    // const products=
    return {
    allProducts: Object.values(state.entities.products)


}};

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    getSearchProducts: (query) => dispatch(getSearchProducts(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)