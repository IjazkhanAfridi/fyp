import {Link }from 'react-router-dom'
import Appbar from './Appbar'
import {Grid} from '@mui/material';
import {VideoCameraFront,Feed,UploadFile} from '@mui/icons-material';


import Sidebar from './Sidebar'

const Attendence = () => {
 

  return (
    <>
<div className='courseDetail'>
<Appbar/>
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>Attendence</h2>
   

    </div>
    <hr className='courseHr'/>
    {/* //////////// assignment */}
    <div className='courseContent'>
    <div className='attendenceDetails'>
        <h5>Attendence Summary</h5>
        <ul className='attendenceDetailList'>
            <li className='attendenceDetailItem'>
            Total Class: <span>12</span>
            </li>
            <li className='attendenceDetailItem'>
            Taken Class: <span>9</span>
            </li>
            <li className='attendenceDetailItem'>
            Present Days: <span>6</span>
            </li>
            <li className='attendenceDetailItem'>
            Absent Days: <span>1</span>
            </li>
            <li className='attendenceDetailItem'>
            Leave Days: <span>2</span>
            </li>
        </ul>
      
    </div>
    {/* main activity */}
  <div className='activitySection'>
  <div className='attendenceActivity'>
    <p className='schedule'>Scheduled on: <spane className='activitySpan'>20 Feb 2022-12:00AM</spane></p>
    <p className='schedule'>Topic: <spane className='activitySpan'>Concept of JavaScript</spane></p>
    <p className='schedule'>Attendence: <spane className='activitySpan'>Present</spane></p>
    </div>
  <div className='attendenceActivity'>
    <p className='schedule'>Scheduled on: <spane className='activitySpan'>20 Feb 2022-12:00AM</spane></p>
    <p className='schedule'>Topic: <spane className='activitySpan'>Concept of JavaScript</spane></p>
    <p className='schedule'>Attendence: <spane className='activitySpan'>Present</spane></p>
    </div>
  <div className='attendenceActivity'>
    <p className='schedule'>Scheduled on: <spane className='activitySpan'>20 Feb 2022-12:00AM</spane></p>
    <p className='schedule'>Topic: <spane className='activitySpan'>Concept of JavaScript</spane></p>
    <p className='schedule'>Attendence: <spane className='activitySpan'>Present</spane></p>
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

export default Attendence