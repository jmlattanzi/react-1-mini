import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value) {
    this.setState({
      picture: value
    })
  }

  updateName(value) {
    this.setState({
      name: value
    })
  }

  addFriend() {
    const {friends, picture, name} = this.state
    let newFriends = friends.slice()
    newFriends.push({picture, name})

    this.setState({ friends: newFriends, picture: '', name: ''})
  }

  render() {
    const friends = this.state.friends.map((friend, index) => (
      <div key={`friend-${index}-${friend.name}`} className="FriendBox">
        <img width="100px" src={friend.picture} alt=""/>
        <span>{friend.name}</span>
      </div>
    ))

    return (
      <div className="App">
        <h1>the gang's all here</h1>
        <div className="Input">
          <input 
            className="InputArea"
            type="text" 
            placeholder="picture" 
            onChange={(e) => this.updatePicture(e.target.value)}/>

          <input 
            className="InputArea"
            type="text" 
            placeholder="name" 
            onChange={(e) => this.updateName(e.target.value)}/>

          <button onClick={() => this.addFriend()}>add friend</button>
        </div>

        <div className="Friends">
          {friends}
        </div>
      </div>
    );
  }
}

export default App;
