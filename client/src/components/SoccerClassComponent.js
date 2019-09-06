import React from 'react';
import axios from 'axios';


class SoccerClassComponent extends React.Component {
    state = {  }



    componentDidMount(){
            axios
            .get('http://localhost:5000/api/players')
            .then(res=>{
                console.log(res.data);
            })
    }



    render() { 


        
        return ( 
        
        <div>

            soccer
        </div> 
        );
    }
}
 
export default SoccerClassComponent;