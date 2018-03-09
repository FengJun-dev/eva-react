import React from 'react';


class BriefInfo extends React.Component {
    render() {
        const briefinfo = this.props;
        return (
            <div className="brief-info">
                <span id="commentCount" className="item">
                    {briefinfo.commentcount}
                </span>
                <span id="avgPrice" className="item">
                    {briefinfo.averageprice}
                </span>
                <span id="comment_score">
                    <span className="item">
                        {briefinfo.tastescore}
                    </span>
                    <span className="item">
                        {briefinfo.servescore}
                    </span>
                </span>
            </div>
        )
    }
}



class BasicInfo extends React.Component {
    render() {
        const basicinfo = this.props;
        return (
            <div className="basic-info">
                <h1 className="shop-name">{basicinfo.shopname}</h1>
                <BriefInfo briefinfo={basicinfo} />
            </div>

        )
    }
}