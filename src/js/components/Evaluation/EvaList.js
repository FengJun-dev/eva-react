import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

// const data = {};

class EvaList extends React.Component {
    render() {
        const data = props.data;
        const listItems = data.map((item) =>
            <li key={item.id}>
                {item.text}
            </li>
        );

        return(
            <ListGroup>
                <listGroupItem header="Heading 1">
                    this.listItem
                    {this.listItems}
                </listGroupItem>
            </ListGroup>
        )
    }
}