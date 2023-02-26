import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const FriendCard = (props) => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    const {friend, setfriend} = useState(false);

    return(
        isAuthenticated && (
            <div class="usercard">
                <img class = "usim" src={props.img} />
                <box2>
                    <h2 class ="usname">{props.name}</h2> 
                    <button class ="fadd" onClick={() => setfriend(!friend)}>Remove</button>
                </box2>
                
            </div>
            
       
    )
    )

}

export default FriendCard