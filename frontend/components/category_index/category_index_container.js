import { connect } from 'react-redux'
import { fetchCategories } from "../../actions/categories_actions";
import CategoryIndex from "./category_index";



const mapStateToProps = state => {
    return {
    allCategories: Object.values(state.entities.categories)
}};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex)