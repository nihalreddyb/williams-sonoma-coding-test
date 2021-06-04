import React from 'react';
import Product from '../Product/product';
import { getProducts } from '../../apis/william-sonoma.api';
import './products-list.css';

class ProductList extends React.Component {
    
    state = {productList: []};

    async componentDidMount() {
       const products = await getProducts();
       this.setState({productList: products.groups})
    }

    componentDidUpdate() {

    }

    renderProducts = () => {
        const renderedProducts = this.state.productList.map(productItem => {
            return <Product key={productItem.id} className="productItem" product={productItem}></Product>
        })
        console.log(renderedProducts);

        return renderedProducts;
    }
    
    render() {
        return (
            <div className="product-list">
                {this.renderProducts()}
            </div>
        )};
}

export default ProductList;
