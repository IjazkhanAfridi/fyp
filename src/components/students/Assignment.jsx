import {Link }from 'react-router-dom'
import Appbar from './Appbar'
import {Grid} from '@mui/material';
import {VideoCameraFront,Feed,UploadFile} from '@mui/icons-material';


import Sidebar from './Sidebar'

const CourseDetail = () => {
 

  return (
    <>
<div className='courseDetail'>
<Appbar/>
<Grid className="courseInnerSection" xs={12} md={12}>
<Sidebar/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    <VideoCameraFront className='callIcon'/>

    </div>
    <hr className='courseHr'/>
    {/* //////////// assignment */}
    <div className='courseContent'>
<Feed className='courseIcon'/>
<h4 className='courseText'>
Assignment No <span>1</span>
</h4>
<div className='uploadAssignment'>
<input type="text" id='upload' accept=".jpg,.png,.pdf"  className='chooseAssignmentInput' />
<label for="upload" className='uploadIcon'title='upload file' ><span >Choose File</span><UploadFile  style={{fontSize:'30px',color:'blue'}}/></label>
</div>
    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
    <div className='courseContent'>
<Feed className='courseIcon'/>
<h4 className='courseText'>
Assignment No <span>2</span>
</h4>
<div className='uploadAssignment'>
<input type="text" id='upload' accept=".jpg,.png,.pdf"  className='chooseAssignmentInput' />
<label for="upload" className='uploadIcon'title='upload file' ><span >Choose File</span><UploadFile  style={{fontSize:'30px',color:'blue'}}/></label>
</div>
    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
    <div className='courseContent'>
<Feed className='courseIcon'/>
<h4 className='courseText'>
Assignment No <span>3</span>
</h4>
<div className='uploadAssignment'>
<input type="text" id='upload' accept=".jpg,.png,.pdf"  className='chooseAssignmentInput' />
<label for="upload" className='uploadIcon'title='upload file' ><span >Choose File</span><UploadFile  style={{fontSize:'30px',color:'blue'}}/></label>
</div>
    </div>
<hr style={{width:'95%',margin:'0 auto'}}/>
  
    {/* //////////// assignment end */}

</Grid>

</Grid>

</div>

    </>
  )
}

export default CourseDetail