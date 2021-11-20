import React from 'react';
import v4 from 'react-uuid'

const list = [1,2,5,'yy',66,43,3,3,"error",5,5]

class StateExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(k){
        this.setState ({
            value: this.state.value + k
        })
    }
    
    render(){
        const up = 1;
        const down = -1;
        console.log(this.state)
        return(
            <div>
               StateExample 
               <p>
                   {this.state.value}
               </p>
               <button onClick={()=> this.handleClick(up)}>
                   +
               </button>
               <button onClick={()=> this.handleClick(down)}>
                   -
               </button>
             {list.map((element) => {
                 const key = v4();
                 console.log(key)
                 return<p key={key}>Element:{element}</p>  
             }
             
             )}

            </div>

        )
    }
}
export default StateExample;