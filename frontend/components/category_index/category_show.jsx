import React from 'react';
import PublicProductIdxItem from '../product_index/public_product_item'

class CategoryShow extends React.Component {
    componentDidMount(){
        this.props.fetchCategory(this.props.match.params.categoryId);
        // this.props.fetchShops();
        this.props.getAllProducts();
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId){
            this.props.fetchCategory(this.props.match.params.categoryId);
            // this.props.fetchShops();
            this.props.getAllProducts();
        }
    }

    toProductPage(product) {
        event.preventDefault();
        return (event) => {
            event.preventDefault();
            this.props.history.push(`/shops/${product.shopId}/products/${product.id}`)
        }
    }

    render(){
        let {category, products} = this.props;
        
        return (
                <ul className="grid-container">
                {products.map(product => {
                        return (
                            <li key={"productLi_" + product.id}>
                                <div className="grid-item">
                                    <PublicProductIdxItem
                                        product={product}
                                        key={product.id}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
        )
    }

}



export default CategoryShow;