import React from 'react';
import CatHead from './IndexPageProductsCat';
import IndexProductList from './IndexPageProductsContent';


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


const Category = {
    'food':  ['hot pot','haha'],
    'film': ['comedy', 'tur']
};


class IndexProducts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cat-index">
                <CatHead sub_cat_list={sub_cat_list} />
                <IndexProductList Products={Products}/>
            </div>
        )
    }
}

class IndexProductsShown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Category = this.props;
        const cat_list = [];
        for (const cat in Category) {
            const sub_cat = Category[cat];
            cat_list.push(sub_cat);
        }
        return (
            <div>
                {cat_list.map((sub_cat_list) =>
                    <IndexProducts sub_cat_list={sub_cat_list} />)}
            </div>
        )
    }
}


export default IndexProductsShown;