import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/tgamache13`)
      .then(result => {
        this.setState({
          user: result.data
        })
        console.log(result)
      })
      .catch(error =>  {
        console.log('error', error)
      })

      axios
      .get(`https://api.github.com/users/tgamache13/followers`)
        .then(result => {
          this.setState({
            followers: result.data
          })
          console.log(result)
          })
          .catch(error => {
            console.log('error', error)
          }) 
  }
  render() {
    return (
      <div>
        <img src={this.state.user.avatar_url} />
        <h1>{this.state.user.name}</h1>
        <h3>{this.state.user.bio}</h3>
        <h3>{this.state.user.location}</h3>
        <h3>{this.state.user.login}</h3>
        <h3>{this.state.user.url}</h3>
        <div>
          {this.state.followers.map((follower, index) => (
            <div key={index}>
            <img  src={follower.avatar_url} />
            <h2> {follower.login}</h2>
            <h3>{follower.url}</h3>
          </div>
          ))}
            
        </div>
       
      </div>
    )
  
  }
}
export default App;