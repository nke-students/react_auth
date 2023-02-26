import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Start = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return(
        !isAuthenticated && ( <>
      <pref>
        FacePibara Project.
      </pref>

       </>
    )
    )
}

export default Start