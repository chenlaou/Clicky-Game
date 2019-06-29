import React from "react";
import "./App.css";
import FriendCard from "/.components/FriendCard";
import Nav from "/.components/Nav";
import Wrapper from "/.components/Wrapper";
import Title from "./components/Title";

import Row from "./Row";
import friends from "./friends.json";

//set state to friends json array
class App extends Component {
  state = {
    friends
  };

  // filters friends state with an id not equal to the id that is removed
  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  //map over friends sate and render a friend card component for each friend object
  render() {
    return (
      <wrapper>
        <nav>Marvel Memory Game</nav>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </wrapper>
    );
  }
}

export default App;
