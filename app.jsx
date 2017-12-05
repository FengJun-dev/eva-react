import React, {Component} from 'react'

class App extends Component{
    render() {
        return (
            <div className="app-container">

                <ul className="route-ul">
                    <li className="route-li first"><Link to="/">Index</Link></li>
                    <li className="route-li"><Link to="/Article">Articles</Link></li>
                    <li className="route-li"><Link to="/">data</Link></li>
                    <li className="route-li"><Link to="/">Pending</Link></li>
                </ul>

                <div className="context-container">
                    {this.props.children}
                </div>

                <div className="foot-container">
                    <span>haha</span>
                    <span>hehe</span>
                    <span>lala</span>
                </div>
            </div>
        )
    }
}

