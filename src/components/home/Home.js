import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div class="home-div"> 
                <h1 class="home-heading">Carter County Library</h1>
                <h3 class="home-subheading">116 W Main St, Grayson, KY</h3>
                <picture> 
                    <img src={require('./library.jpg')} alt="library" />
                </picture>
            </div>
        )
    }
}

export default Home