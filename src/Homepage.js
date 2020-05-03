import React from 'react'; 

// const Homepage = (props) =>{
//     return (<div class="card_category">
//         <span>
//             <i>Icon</i>
//         </span>
//         <p>Party</p>
//     </div>
//     );
// };

const Homepage = (props) =>{
    return (<div class="card_category">
        <label htmlFor = {props.id}>
            {props.label}
        </label>
        <span>
            <i>{props.icon}</i>
        </span>
        <p>{props.description}</p>
    </div>
    );
};

export default Homepage;