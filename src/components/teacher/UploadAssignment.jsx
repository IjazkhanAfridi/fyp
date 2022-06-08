import {Link }from 'react-router-dom'
import Appbar from '../students/Appbar'
import {Grid,Button,Card,TextareaAutosize} from '@mui/material';
import {VideoCameraFront,Close,Feed,} from '@mui/icons-material';
import { useState } from 'react';

import Sidebar from '../students/Sidebar'

const UploadAssignment = () => {
  const [addAssignment,setAddAssignment]=useState(false)
  const addAssignmentShow=()=>{
 if(!addAssignment){
     setAddAssignment(true)
 }else{
     setAddAssignment(false)}
  }
 
    const [showsubmitAssigment,setsubmitAssignment]=useState(false)
    const submittAssignmentShow=()=>{
   if(!showsubmitAssigment){
    setsubmitAssignment(true)
   }else{
    setsubmitAssignment(false)}
    }
  return (
    <>
<div className='courseDetail'>
<Appbar name='teacher' />
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar name='teacher'/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    <VideoCameraFront className='callIcon'/>

    </div>
    <hr className='courseHr'/>
    {/* //////////// assignment */}
    <div className='courseContent'>
<Button className='addMaterialBtn' onClick={addAssignmentShow}>Add Assignment</Button>
    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
{/* ///////////////////   Add Assignment hidden Section */}
<div className= {addAssignment?'addMaterialSectionHeroShow':'addMaterialSectionHero'}>
<div className='addMaterialSection'>
          <Card className='joinCourseCard'>
            <div className='topBar'>
              <p> Add Assignment</p>
              <Close className='courseClose' onClick={addAssignmentShow} />
            </div>
            <div className='courseBody'>
              <p className='accessP'>Name:</p>
              <input type="text" className='courseInput' />
            </div>
            <div className='courseBody'>
              <p className='accessP'>Description: </p>
              <TextareaAutosize type="text" className='courseDescription' />
            </div>
            <div className='courseBody'>
              <p className='accessP'>Due Date : </p>

              <input type="date" className='courseInput' />
            </div>

            <div className='buttons'>
              <Link to="/courses">
                <Button className='joinBtn'>Join</Button>
              </Link>
              <Button className='cancelBtn' onClick={addAssignmentShow}>Cancel</Button>
            </div>
          </Card>
          </div>
          </div>
{/* ///////////////////   Add Assignment hidden Section  End*/}
{/* hiddent submitted assignment start */}
<div className={showsubmitAssigment?'submittedAssignmentSectionShow':'submittedAssignmentSection'}>
<div className="topheader">

 <h3>Assignment No: <span>1</span> </h3>

<Close className='topIcon' onClick={submittAssignmentShow}/>
<hr /></div>
<div className="submittedBodySection">
  <div className="submittedLeft">
   <h3>Title : <span id='assignmentTitle'>Assignment</span></h3>
   <p>

   </p>
  </div>
<hr />
  <div className="submittedRight">
    <div className="submittedRightTop">
      <h3>Submitted By:</h3>
    </div>
    <hr />
    <ul className='submittedAssignmentList'>
      <li className='submittedAssignmentItem'>Abid Khan</li>
      <li className='submittedAssignmentItem'>Abid Khan</li>
      <li className='submittedAssignmentItem'>Abid Khan</li>
    </ul>
  </div>
</div>

</div>
{/* hiddent submitted assignment End */}
<hr style={{width:'95%',margin:'0 auto'}}/>
    <div className='courseContent' onClick={submittAssignmentShow}>
<Feed className='courseIcon'/>
<h4 className='courseText'>
Assignment No <span>2</span>
</h4>

    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
    <div className='courseContent' onClick={submittAssignmentShow}>
<Feed className='courseIcon'/>
<h4 className='courseText'>
Assignment No <span>3</span>
</h4>

    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
  
    {/* //////////// assignment end */}

</Grid>

</Grid>

</div>

    </>
  )
}

export default UploadAssignment