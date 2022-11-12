import {React,useState,setState} from 'react'
import DropdownText from './DropdownText'

export default function Dropdown({Texte,principes}) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open);
  }
  let toggleClassCheck = open ? 'active' : null;
  return (
    <>
    <div className='Dropdown-container'>
        <p className='Dropdown-p'>{Texte}</p>
        <img src={require("../../assets/Images/arrow_back_ios-24px 2.png")} 
        onClick={handleOpen} className={toggleClassCheck}/>
    </div>
    {open ?(
           <DropdownText principes={principes}/>
        ) : null}
    </>
  )
}
