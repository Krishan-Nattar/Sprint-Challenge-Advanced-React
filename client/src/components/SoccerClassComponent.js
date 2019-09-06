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

  componentDidMount() {
    // console.log('running axios...')
    axios.get("http://localhost:5000/api/players").then(res => {
        this.setState({data:res.data});
    });
  }

  render() {
    return <div>
        soccer
        {(this.state.data) ? <SoccerData data={this.state.data} /> : null}
        
        </div>;
  }
}

export default SoccerClassComponent;
