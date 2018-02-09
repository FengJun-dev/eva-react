import React from 'react';
import Detail from '../Detail';
// import {}


cattag = {name: 'hotpot'};




class CatTag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cattag = this.props;
        return (
            <div className="cat-tag">
                <a href={cattag.name}>
                    <span className="tag-item">{cattag.name}</span>
                </a>
            </div>
        )
    }
}


class CatHead extends React.Component {
    render() {
        return (
            <div>
                <div className="cat-title">

                <CatTag cattag={cattag}/>
                <a href=
            </div>

        )
    }
}


class IndexPageItemList extends React.Component {
    render() {
        return (
            <div classID="cat-food-index" className="cat">
                <div>

                </div>
            </div>
        )
    }
}