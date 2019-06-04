import React from 'react';
import HeaderData from '../component/headerData.js';

const Myheader = (props) => {
    console.log(props)
    return   <HeaderData myclicks={props.clickeds}/>                
}
export default Myheader