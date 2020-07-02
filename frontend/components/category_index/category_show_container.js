import { connect } from "react-redux";
import { fetchCategory } from "../../actions/categories_actions";
import CategoryShow from "./category_show";
// import { fetchShops } from "../../actions/shops_actions";
import { selectCategoryProducts } from "../../reducers/selectors";
import { getAllProducts } from '../../actions/product_actions';


const mapStateToProps = function(state, ownProps){
    // alert("aaa");
    // debugger;
    return ({
        category: state.entities.categories[ownProps.match.params.categoryId],
        // shops: state.entities.shops,
        products: selectCategoryProducts(state.entities.products, ownProps.match.params.categoryId)
    });
}

const mapDispatchToProps = dispatch => ({
    fetchCategory: id => dispatch(fetchCategory(id)),
    // fetchShops: () => dispatch(fetchShops()),
    getAllProducts: () => dispatch(getAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);