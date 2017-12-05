import React, {Component} from 'react';


class ArticleBox extends Component {

    constructor(props){
        super(props);

        this.state = {
            tags: []
        };
    };

    componentWillMount(){
        let tagsArr = [];
        tagsArr = this.props.tag;
        this.setState({
            tags:tagsArr
        })
    }
    componentWillReceiveProps(nextProps){
        let tagsArr = [];
        tagsArr = nextProps.tag.split(',');
        this.setState({
            tags:tagsArr
        })
    }
    render(){
        const link = '../article/' + this.props.id;
        let clsName = "articles -";
        switch (this.props.classification ){
            case 'Origin':
                clsName += 'Original';
                break;
            case 'Repost':
                clsName += 'Repost';
                break;
            case 'Translate':
                clsName += 'Translation';
        }

        return(
            <div className="article-box">
                <h2 className="item-head">
                    <span className={clsName}> </span>
                    <a href={link} target="_blank">{this.props.title}</a>
                </h2>
                <p> {this.props.timestamp} By {this.props.author}</p>
                {
                    this.state.tags.map(function (item, index) {
                        return <span key={index} className="eva-tag">{item}</span>
                    })
                }
                <p>{this.props.body.toString().slice(0,100)} </p>
            </div>
                )
    }
}

class ArticleBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

    };

    getContent() {
        const data = {
            page: 1
        };
    }

    componentWillMount() {
        this.getContent();
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                {
                    this.state.data.map(function (item, index) {
                        return (
                            <ArticleBox key={index}
                                     title={item.title}
                                     body={item.body}
                                     id={item.id}
                                     tag={item.tag}
                                     author={item.author}
                                     timestamp={item.timestamp}/>
                        )
                    })
                }
            </div>
        )
    }
}

module.exports = ArticleBoard;