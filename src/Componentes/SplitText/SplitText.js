import React from 'react';
import './SplitText.css';

//Code found in https://fossheim.io/writing/posts/react-text-splitting-animations/

class SplitText extends React.Component{
    render(){
        return(
            
            <span aria-label={this.props.copy} role={this.props.role}>
                {
                    
                    this.props.copy.split("").map(function(char, index){
                        let style = {"animationDelay": ( parseFloat(this.props.delay) + index / 10) + "s"}
                        return <span
                                    className="animacion"
                                    aria-hidden="true"
                                    key={index}
                                    style={style}>
                                        {char}
                                </span>
                    }.bind(this))
                }
            </span>

            
        );
    }
}

export default SplitText;
