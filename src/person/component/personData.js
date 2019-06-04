import React from 'react';
import '../style/person.css'

// class person extends Component{

// }
const PersonData = (props) => {
    // console.log(props)
    return <div className='title'>
                <p className='name' onClick={props.myclick}>大家好，我是<span className="red">{props.name}</span>,我有<span className="red">{props.count}</span>个作品！</p> 
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} defaultValue={props.name}/>
            </div>
    
    
}
export default PersonData