import React from 'react';
import './product.css';

class Product extends React.Component {

    renderHeadImage = (heroImage) => {
        if(heroImage) {
            return (
                <img alt="product-item" className="product-image" src={heroImage.href}></img>
            );
        } return <div className="empty-card-image"></div>
    }

    getRenderedPrice = (priceDetails) => {
        if(priceDetails.price) {
            return(
                <p className="item-price">
                    <strong>Price: ${priceDetails.price.selling}</strong>
                </p>
            );
        } else {
            return (
                <p className="item-price">
                    <strong>Price:  ${priceDetails.priceRange.selling.low} - ${priceDetails.priceRange.selling.high}</strong>
                </p>
            );
        }
    }

    render() {
        return(
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-header">
                        <div className="card-image">{this.renderHeadImage(this.props.product.hero)}</div>
                    </div>
                    <div className="card-content">
                        <div className="card-title">{this.props.product.name}</div>
                        <div className="card-description">{this.getRenderedPrice(this.props.product)}</div>
                    </div>
                    <div className="card-footer">
                           <a className="product-link-button" target="_blank" rel="noreferer" href={this.props.product.links.www}>View Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;