import React from 'react';
import DocumentTitle from 'components/DocumentTitle'

export default function (props){
    console.log(props)
    return (<DocumentTitle title="Dashboard">
        <div>Dashbard</div>
    </DocumentTitle>)
}