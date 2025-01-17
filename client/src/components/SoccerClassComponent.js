import React from "react";
import axios from "axios";
import SoccerData from "./SoccerData";

class SoccerClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      this.setState({ data: res.data });
    });
  }

  componentWillUnmount(){
      
  }

  render() {
    return (
      <div>
        {this.state.data ? <SoccerData data={this.state.data} /> : null}
      </div>
    );
  }
}

export default SoccerClassComponent;
