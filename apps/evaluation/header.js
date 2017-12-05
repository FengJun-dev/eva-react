import React, {Component} from 'react';


class Evaheader extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    };
    render(){
        return(
            <div className="eva-header">
                hehe
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-content" href="#"> Evaluation </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

module.exports = Evaheader;