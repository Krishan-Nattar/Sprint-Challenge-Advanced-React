import React from 'react';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';


class SoccerClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data: null
        }
    }
    // state = {  }



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