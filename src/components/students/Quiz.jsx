import {Link }from 'react-router-dom'
import Appbar from './Appbar'
import {Grid} from '@mui/material';
import {VideoCameraFront,Feed,UploadFile} from '@mui/icons-material';


import Sidebar from './Sidebar'

const Quiz = () => {
 

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
   <div className="questions">
   <p className='quizQuestion'><span className='questionCount'>1</span> How many continents are there?</p>
   <ol className='questionOptionsList'>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="1"/> <span style={{marginLeft:'5px'}}>1</span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="2"/> <span style={{marginLeft:'5px'}}>2</span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="3"/> <span style={{marginLeft:'5px'}}>3</span></li>
   </ol>
   </div>
</div>
<hr style={{width:'95%',margin:'0 auto'}}/>
    <div className='courseContent'>
   <div className="questions">
   <p className='quizQuestion'><span className='questionCount'>2</span>What country has the largest population in the world?
</p>
   <ol className='questionOptionsList'>
   <li className='optionItem'>  <input type="radio" id="html" name="question2" value="1"/> <span style={{marginLeft:'5px'}}>China</span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question2" value="2"/> <span style={{marginLeft:'5px'}}>USA</span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question2" value="3"/> <span style={{marginLeft:'5px'}}>Pakistan</span></li>
   </ol>
   </div>
</div>
<hr style={{width:'95%',margin:'0 auto'}}/>
    <div className='courseContent'>
   <div className="questions">
   <p className='quizQuestion'><span className='questionCount'>3</span> What is the longest river in the world?</p>
   <ol className='questionOptionsList'>
   <li className='optionItem'>  <input type="radio" id="html" name="question" value="1"/> <span style={{marginLeft:'5px'}}>Yellow river</span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question" value="2"/> <span style={{marginLeft:'5px'}}>Amazon River</span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question" value="3"/> <span style={{marginLeft:'5px'}}>Nile River</span></li>
   </ol>
   </div>
</div>
<hr style={{width:'95%',margin:'0 auto'}}/>
  <button className='submitQuiz'>Submit</button>
    {/* //////////// assignment end */}

</Grid>

</Grid>

</div>

    </>
  )
}

export default Quiz