import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="home-div"> 
                <h1 className="home-heading">Carter County Library</h1>
                <h3 className="home-subheading">116 W Main St, Grayson, KY</h3>
                <picture> 
                    <img src={require('./library.jpg')} alt="library" />
                </picture>
            </div>
        )
    }
}

export default Home