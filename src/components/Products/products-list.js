import React from 'react';
import Product from '../Product/product';
import { getProducts } from '../../apis/william-sonoma.api';

class ProductList extends React.Component {

    componentDidMount() {
        const proucts = getProducts();
        console.log(proucts)
      }
    
    render() {
        return (
            <div className="product-list">
                <Product></Product>
            </div>
        )};
}

export default ProductList;
