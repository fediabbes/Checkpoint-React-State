import "./App.css";
import imgg from "./escobar.jpg";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      person: {
        fullname: "PABLO ESCOBAR",
        profession: "Drug Dealer",
        bio: "Header Of Medelin Cartel ",
        img: imgg,
        
      },
      x:0,
      showProfile: false,
    };
  }
  componentDidMount() {
    document.title = "Hey Profile";


    setInterval(() => {
      this.setState({x:this.state.x+1})
    }, 1000);
  }

  btnshowProfile() {
    this.setState({
      showProfile: !this.state.showProfile,
    });
  }

  render() {
    return (
      <div className="body">
        {this.state.showProfile && (
          <div>
            <img src={this.state.person.img} alt="free"></img>
            <h2>{this.state.person.fullname}</h2>
            <h3>{this.state.person.profession}</h3>
            <h4>{this.state.person.bio}</h4>
            <h1>{this.state.x}</h1>
          </div>
        )}
        <button onClick={() => this.btnshowProfile()}> {this.state.showProfile ? 'Hide Profile'   :"Show Profile"} </button>
      </div>
    );
  }
}

export default App;
