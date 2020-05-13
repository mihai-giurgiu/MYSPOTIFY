import React from 'react';
import './LabelInput.css' 
//import { faHome } from "@fortawesome/react-fontawesome";
//import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";

//import { ReactComponent } from '*.svg';

// const LabelInput = (props) =>{

//     let value = '';

//     const onChange = (e) =>{
//         console.log(e.target.value); 
//         value = e.target.value
//     }

// return (
//     <div>
//         <label htmlFor = {props.id}>
//             {props.label}
//         </label><input 
//             type = "text"
//             placeholder = {props.placeholder}
//             id = {props.id}
//             value = {props.value}
//         />
//     </div>

//     );

// };

class LabelInput extends React.Component{
    state = {};

    constructor(props){
        super(props);

        this.state.value = this.props.defaultValue;

        console.log("LabelInput - Inside Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LabelInput - Inside getDerivedStateFromProps", props, state); 
    }

    componentDidMount(){

        console.log("LabelInput - Inside component did mount"); 
    }

    shouldComponentUpdate(nextProps, nextSteps){
        console.log("shouldComponentUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate")
    }

    onChangeHandler = e => {
        console.log(e.target.value);
        const value = e.target.value

        this.props.change(this.props.id, value)

        this.setState({
            value: value
        });
    };

    render() {
        const style = {
            marginBottom: '10px',
            color: 'blue',
            fontSize: '20px',
            fontFamily: 'Roboto'
        }

        console.log("LabelInput - Inside Rander");
        return (
            <div className="label-input input-group" >
                <label 
                    htmlFor = {this.props.id} 
                    style = {style}>
                    
                    {this.props.label}
                </label>
                <input 
                    type = "text"
                    placeholder = {this.props.placeholder}
                    id = {this.props.id}
                    value = {this.state.value}
                    onChange = {this.onChangeHandler}
                    className ="form-control"
                />
                {/* <FontAwesomeIcon
                    icon={ faHome }
                />  */}
            </div>
        
            );

    }};


export default LabelInput;