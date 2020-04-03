import "./index.less";
import React from "react";
import { useAuth0 } from "auth0";

function GlobalHeaderRight(props){
    const { loading, user } = useAuth0();
    console.log(user)
    if(loading || !user){
        return <div>Loading...</div>
    }
    return <div>
        right content
    </div>
}

export default GlobalHeaderRight;