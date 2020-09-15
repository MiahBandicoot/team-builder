import React, {useState} from 'react'


const initial = {
    name:'',
    email:'',
    role:'',

}
const Form = (props) =>{
    const {list, setList} = props
    const [content, setContent] =  useState(initial)
    function handleC(vent){
        const {name,value}=vent.target
        setContent({
            ...content,
            [name]:value,
        })
    }
    function Submission(vent){
        vent.preventDefault()
        const newMember = {
            name:content.name.trim(),
            email:content.email.trim(),
            role:content.role.trim(),
        }
        if(!newMember.name||!newMember.email||!newMember.role)
         {return}
        setList([newMember, ...list])
        setContent(initial)

    }
    return (
        <form onSubmit = {Submission}>
        <input
            name = 'name' 
            type = 'text'
            placeholder = 'Enter Name'
            value = {content.name}
            onChange = {handleC}

        />
        <input
        name = 'email'
        type = 'email'
        placeholder = 'Enter Email'
        value = {content.email}
        onChange = {handleC}
        />
        <select name = 'role' value = {content.role} onChange = {handleC}>
            <option value = ''>Select a fish</option>
            <option value = 'Burger'>Burger</option>
            <option value = 'Blizzard'>Blizzard</option>
            </select>   
            <button>Submit</button>
        </form>
    )
}
export default Form