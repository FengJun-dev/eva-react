import React from 'react';
import Detail from '../Detail';
// import {}


const Products = [
    {main_category: 'food', sub_category:"hot pot", price: '10.99', stocked: true, name: 'ticket', title:'haha'},
];

/*const Category = [
    {main_category: {'food': {sub_category: ['hot pot','haha']}}},
    {'film': ['comedy', 'tur']}
];*/

const Category = {'food': {sub_category: ['hot pot']}};


class CatTag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sub_cat_list = this.props;
        return (
            <div className="cat-tag">
                {sub_cat_list.map((sub_cat) =>
                    <a href={sub_cat}>
                        <span className="tag-item">{sub_cat}</span>
                    </a>)}
            </div>
        )
    }
}


class CatHead extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const main_cat = this.props;
        return (
            <div className="main-cat-title">
                <div className="title-content">
                    {main_cat}
                </div>
                <CatTag sub_cat_list={main_cat[sub_category]}/>
            </div>
        )
    }
}


export default CatHead;