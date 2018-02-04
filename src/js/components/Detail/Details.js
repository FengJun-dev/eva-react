import React from 'react';


const detail = [];


class DetailTableHead extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th width="50%">name</th>
                    <th width="50%">quantity</th>
                    <th width="50%">unit-price</th>
                </tr>
            </thead>
        )
    }
}


class DetailTableBody extends React.Component {
    render() {
        const detail = this.props;
        return (
            <tbody>
                <tr>
                    <td>{detail.productname}</td>
                    <td className="tc">{detail.productname}</td>
                    <td className="tc">{detail.productprice}</td>
                </tr>
            </tbody>
        )
    }
}


class DetailTable extends React.Component {
    render() {
        return (
            <div className="detail">
                <table className="detail-table">
                    <DetailTableHead />
                    {detail.map((detailproduct, i) => <DetailTableBody key={detailproduct.id} detail={detailproduct} />)}
                </table>
            </div>
            )
    }
}

export default DetailTable;