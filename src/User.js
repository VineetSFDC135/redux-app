import React from 'react';
 const user= (props) => {
    console.log('Props Data '+props.data);

    return(
        <div>
            <h1>This is Parent User  component for the App.js </h1>
            {props.data.map((user)=>{

                return user.name+' ';
            })}
        </div>
    );
     
};

export default user;
