import React from 'react';
// import {ListGroup, ListGroupItem} from 'react-bootstrap'

// const data = {};
const Products = {
    first_product: {
        main_category: 'food',
        sub_category: "hot pot",
        average_price: '10.99',
        stocked: true,
        name: 'hh',
        title: 'haha',
        region: "Guangzhou",
        comment: ""
    }
};


class IndexProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = this.props;
        return (
            <div className="product-info">
                <a href="#" className="product-name">
                    <span className="product-name">
                        {product[name]}
                    </span>
                </a>
                <div className="product-area-info">
                    <span className="product-area">
                        {product[region]}
                    </span>
                    <span className="sub-category">
                        {product[sub_category]}
                    </span>
                </div>
                <div className="avg-price">
                    <span>{product[average_price]}</span>
                </div>
            </div>
        )
    }
}


class IndexProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product-content">
                {Products.map((product, i) =>
                    <Product key={product.id} product={product} />)}
            </div>
        )
    }
}


export default IndexProductList;