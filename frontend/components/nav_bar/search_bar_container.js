import { connect } from 'react-redux'
import SearchBar from './search_bar'
import { fetchSearchProducts } from '../../actions/search_products_actions';

const mapDispatchToProps = dispatch => ({
    fetchSearchProducts: searchQuery => dispatch(fetchSearchProducts(searchQuery)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
