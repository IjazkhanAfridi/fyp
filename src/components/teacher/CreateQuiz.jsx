import {Link }from 'react-router-dom'
import Appbar from '../students/Appbar'
import {Grid,Card,Button,TextareaAutosize} from '@mui/material';
import {VideoCameraFront,Close} from '@mui/icons-material';
import { useState ,useEffect} from 'react';

import Sidebar from '../students/Sidebar'

const CreateQuiz = () => {
    const [addMaterial,setAddmaterial]=useState(false)
    const[question,setQuestion]=useState('');
    const[createdQuestion,setcreatedQuestion]=useState('');
    const[optionOne,setOptionOne]=useState('');
    const[optionTwo,setOptionTwo]=useState('');
    const[optionThree,setOptionThree]=useState('');

    const addMateriaShow=()=>{
   if(!addMaterial){
       setAddmaterial(true)
   }else{
       setAddmaterial(false)}
    }
 
    /////////////// create question function
    const createQuestion=(e)=>{
        setcreatedQuestion(e.target.value)
    }
    const questionAdd=()=>{
        setQuestion(createdQuestion)
        if(!addMaterial){
            setAddmaterial(true)
        }else{
            setAddmaterial(false)}
  
       
    }
    const optionKey=(e)=>{
        setOptionOne(e.target.value)
    }
    const optionKey1=(e)=>{
        setOptionTwo(e.target.value)
    }
    const optionKey2=(e)=>{
        setOptionThree(e.target.value)
    }
   ////////////////// Show Result function
   const [showResult,setshowResult]=useState(false)
   const ResultShow=()=>{
  if(!showResult){
    setshowResult(true)
  }else{
    setshowResult(false)}
   }
  return (
    <>
<div className='courseDetail'>
<Appbar name='teacher' />
<Grid className="courseInnerSection" itme xs={12} md={12}>
<Sidebar name='teacher'/>
<Grid className="mainContent" xs={12} md={9}> 
    
    <div className="courseDetailTopHeader">
        <h2 className='courseName'>JavaScript</h2>
    <VideoCameraFront className='callIcon'/>

    </div>
    <hr className='courseHr'/>
    {/* //////////// assignment */}
    <div className='courseContent'>
<Button className='addMaterialBtn' onClick={addMateriaShow}>Create Quiz</Button>
<Button className='addMaterialBtn' onClick={ResultShow} >Check Result</Button>

    </div>



    {/* ///////////////////   create quiz hidden Section */}
<div className= {addMaterial?'addMaterialSectionHeroShow':'addMaterialSectionHero'}>
<div className='addMaterialSection'>
          <Card className='joinCourseCard'>
            <div className='topBar'>
              <p> Create Quiz</p>
              <Close className='courseClose' onClick={addMateriaShow} />
            </div>
            <div className='courseBody'>
              <p className='accessP'>Question:</p>
              <input type="text" className='courseInput' onChange={createQuestion}/>
            </div>
            <div className='courseBody'>
            <ol className='CreateQuestion'>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="1"/> <span style={{marginLeft:'5px'}}><input type='text' onChange={optionKey} /></span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="1"/> <span style={{marginLeft:'5px'}}><input type='text' onChange={optionKey1}/></span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="1"/> <span style={{marginLeft:'5px'}}><input type='text' onChange={optionKey2}/></span></li>

   </ol>
            </div>
           

            <div className='buttons'>
            
                <Button className='joinBtn' onClick={questionAdd}>Create</Button>
              
              <Button className='cancelBtn' onClick={addMateriaShow}>Cancel</Button>
            </div>
          </Card>
          </div>
          </div>
{/* ///////////////////    create quiz hidden Section  End*/}
{/* hiddent quiz result assignment start */}
<div className={showResult?'QuizResultShow':'QuizResultHide'}>
<div className="QuizReslutTopHeader">

 <h3>Assignment No: <span>1</span> </h3>

<Close className='quizResultIcon' onClick={ResultShow}/>
<hr /></div>
<div className="QuizResultBody">
  <div className="resultLeft">
   <h3>Title : <span id='quizTitle'>Quiz</span></h3>
   <p>

   </p>
  </div>
<hr />
  <div className="resultRight">
    <div className="resultRightTop">
      <h3>Submitted By:</h3>
    </div>
    <hr />
    <ul className='quizResultList'>
      <li className='quizResultItem'>Abid Khan <span>4/5</span></li>
      <li className='quizResultItem'>Ijaz Khan <span>5/5</span></li>
      <li className='quizResultItem'>Amir Khan <span>3/5</span></li>
     
    </ul>
  </div>
</div>

</div>
{/* hiddent submitted assignment End */}
<hr style={{width:'95%',margin:'0 auto'}}/>
    <div className='courseContent'>
   <div className="questions">
   <p className='quizQuestion'><span className='questionCount'>1</span> {question}</p>
   <ol className='questionOptionsList'>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="1"/> <span style={{marginLeft:'5px'}}>{optionOne}</span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="2"/> <span style={{marginLeft:'5px'}}>{optionTwo}</span></li>
   <li className='optionItem'>  <input type="radio" id="html" name="question1" value="3"/> <span style={{marginLeft:'5px'}}>{optionThree}</span></li>
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

export default CreateQuiz