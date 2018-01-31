import React from 'react';
// import {ListGroup, ListGroupItem} from 'react-bootstrap'

// const data = {};
const products = [
    {productname: '1', productcontent: 'hello world', producttime: 'October'}

];


class Product extends React.Component {
    render() {
        const {product} = this.props;
        return (
            <div>
                <div>product name: {product.productname}</div>
                <div>product content: {product.productcontent}</div>
                <div>product time: {product.producttime}</div>
            </div>
        )
    }
}


class ProductList extends React.Component {
    render() {
        return (
            <div className="product-list">
                {products.map((product, i) => <Product key={i} product={product} />)}
            </div>
        )
    }
}


export default ProductList;