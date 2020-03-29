import React from 'react'
import DocumentTitle from 'components/DocumentTitle'
function UserLayout(props){
    return (
        <DocumentTitle title="User layout">
            <div>User layout</div>
            {props.children}
        </DocumentTitle>
    )
}
export default UserLayout;