import React from 'react';
import axios from 'axios';
import GitHubCalendar from 'react-github-calendar';
import './styles.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }
  defaultTheme = {
    background: 'transparent',
    text:'white',
    grade4: '#196127',
    grade3: '#239a3b',
    grade2: '#7bc96f',
    grade1: '#c6e48b',
    grade0: '#ebedf0'
  };
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
      <div class="container">
        <img src={this.state.user.avatar_url} />
      
        <h1>{this.state.user.name}</h1>
        <h3>{this.state.user.bio}</h3>
        <h3>{this.state.user.location}</h3>
        <h3>{this.state.user.login}</h3>
        
        <a href="https://api.github.com/users/{this.state.user.login}">{this.state.user.url}</a>
        
        {/* <div class='calendar'>
        
           <GitHubCalendar id='calendar' theme={this.defaultTheme} username={this.state.user.login}/>
          <script>GitHubCalendar(".calendar", "tgamache13")</script>
          
        </div> */}
      <div className='followers'>
          {this.state.followers.map((follower, index) => (
            <div key={index}>
            <img  src={follower.avatar_url} />
            <h2> {follower.login}</h2>
            {/* <h3>{follower.url}</h3> */}
          </div>
          ))}
            
        </div>
       
      </div>
    )
  
  }
}
export default App;