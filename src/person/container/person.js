import React from 'react';
import PersonData from '../component/personData';

// 无状态组件
const person = (props) => {
    // console.log(props)
    return <div>
                {
            props.persons.map((word,index) =>(
                <PersonData
                changed={(event) => props.changed(event,word.id)} 
                myclick={() => props.clicked(index)}
                name={word.name} count={word.count} key={index}>
                夏小峰啊啊啊
                </PersonData>
            ))
            }
  </div>  
}
export default person