import React from 'react';
import {Navbar} from 'react-bootstrap';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}




const Items = [
    {main_category: 'food', sub_category:"hot pot", price: '10.99', stocked: true, name: 'ticket', title:'haha'},
];


export default SearchBar;