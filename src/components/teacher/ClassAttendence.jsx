import {Link }from 'react-router-dom'
import Appbar from '../students/Appbar'
import {Button, Grid} from '@mui/material';
import {Close} from '@mui/icons-material'
import Sidebar from '../students/Sidebar'
import { useState } from 'react';

const ClassAttendence = () => {
    const [showAttendece,setshowAttendece]=useState(false)
    const [taken,setTaken]=useState('Not Taken');
    const [time,setTime]=useState()
 const takeAttendence=()=>{
     if(!showAttendece){
         setshowAttendece(true)
         setTaken('Taken');
         let today=new Date()
         let date=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +'/'+today.getDate() +'/'+(today.getMonth()+1)+'/'+today.getFullYear()
         setTime(date)
     }
     else
     {
         setshowAttendece(false)
     }
 }

  return (
    <>
<div className='courseDetail'>
<Appbar name='teacher' />
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar name='teacher'/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>Attendence</h2>
   

    </div>
    <hr className='courseHr'/>
    {/* //////////// attndence */}
    <div className='courseContent'>
    {/* hiddent attendece sheet start */}
<div className={showAttendece?'QuizResultShow':'QuizResultHide'}>
<div className="attendenceSheetHeader">


 <input type="text" placeholder='Topic Name' className='attendeceTopicInput'  />

<Close className='quizResultIcon' onClick={takeAttendence}/>
<hr /></div>
<div className="attendenceSheetBody">
<div className="attendece">
    <div className="studentName"><h4>Students Name:</h4>
    <ol className='attendenceList'>
        <li className='attendenceItem'>Fazli Azim</li>
        <li className='attendenceItem'>Abid Khan</li>
        <li className='attendenceItem'>Ijaz Khan</li>
        <li className='attendenceItem'>Ali Khan</li>
    </ol>
    </div>
    <div className="present"><h4>Present:</h4>
    <ol className='attendenceList'>
        <li className='attendenceItem'><input type="radio" name='attendence1' /></li>
        <li className='attendenceItem'><input type="radio" name='attendence2' /></li>
        <li className='attendenceItem'><input type="radio" name='attendence3' /></li>
        <li className='attendenceItem'><input type="radio" name='attendence4' /></li>
      
    </ol></div>
    <div className="absent"><h4>Absent:</h4>
    <ol className='attendenceList'>
    <li className='attendenceItem'><input type="radio" name='attendence1'/></li>
    <li className='attendenceItem'><input type="radio"name='attendence2' /></li>
    <li className='attendenceItem'><input type="radio"name='attendence3' /></li>
    <li className='attendenceItem'><input type="radio"name='attendence4' /></li>

    </ol>
    </div>
    <div className="leave"><h4>Leave:</h4>
    <ol className='attendenceList'>
    <li className='attendenceItem'><input type="radio" name='attendence1' /></li>
    <li className='attendenceItem'><input type="radio" name='attendence2' /></li>
    <li className='attendenceItem'><input type="radio" name='attendence3' /></li>
    <li className='attendenceItem'><input type="radio" name='attendence4' /></li>

    </ol>
    </div>
</div>

</div>

</div>
{/* hiddent attendence sheet End */}

    {/* main activity */}
  <div className='activitySection'>
  <Button className='attendeceBtn' onClick={takeAttendence}>Attendence</Button>
  <div className='attendenceActivity'>
    <p className='schedule'>Scheduled on: <spane className='activitySpan'>{time}</spane></p>
    <p className='schedule'>Topic: <spane className='activitySpan'>Concept of JavaScript</spane></p>
    <p className='schedule'>Attendence: <spane className='activitySpan' >{taken}</spane></p>
    </div>
  
  </div>
  
   
    {/* activity end */}
   
</div>

  
    {/* //////////// assignment end */}

</Grid>

</Grid>

</div>

    </>
  )
}

export default ClassAttendence