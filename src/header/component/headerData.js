import React from 'react';

const HeaderData = (props) => {
    console.log(props)
    return <div>
                 <h1>Hello World</h1>
                 <button onClick={props.myclicks}>点击切换</button>
            </div>
    
    
}
export default HeaderData