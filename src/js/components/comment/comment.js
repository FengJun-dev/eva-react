import React from 'react';


class CommentList extends React.Component {
    constructor() {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            comments: DataSource.getComments()
        };
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
            comments: DataSource.getComments()
        });
    }

    render() {
        return (
            <div className="comment-list">
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        );
    }
}

/* const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);*/

export default CommentList;