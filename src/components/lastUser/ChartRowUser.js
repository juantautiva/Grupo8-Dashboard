import React from 'react';


function ChartRowUser(props){
    return (
                <tr>
                    <td>{props.first_name + ' ' + props.last_name}</td>
                    <td>{props.email}</td>                 
                </tr>
            )
    }
    
        

export default ChartRowUser;