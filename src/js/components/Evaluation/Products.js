import React from 'react';
// import {ListGroup, ListGroupItem} from 'react-bootstrap'

// const data = {};
const products = [
    {
        productname: '1',
        productcontent: 'hello world',
        producttime: 'October',
        productprice:'$10',
        productcategory:'food',
        productintroduction:'cho',
    }

];


class Product extends React.Component {
    render() {
        const {product} = this.props;
        return (
            <div>
                <h2>{product.productcategory}</h2>
                <a className={products.category + "-title"} href="#">
                    <h3>{product.productname}</h3>>
                    <h4>{product.productcontent}</h4>
                    <span>{product.productprice}</span>
                </a>
            </div>
        )
    }
}


class ProductList extends React.Component {
    render() {
        return (
            <div className="product-list">
                {products.map((product, i) => <Product key={product.id} product={product} />)}
            </div>
        )
    }
}


export {ProductList};