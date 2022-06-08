import {useState} from "react";

import { Grid ,Button} from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../style.css";
import {Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Appbar from "../students/Appbar";
import { TeacherPost } from "./Data";
import { useEffect } from "react";
const useStyle = makeStyles({
  LgBtn: {
    backgroundColor: " #F9BE02 !important",
    marginLeft: "10px !important",
    border: "1px solid white !important",
    padding: "5px 20px !important",
    color: "white !important",
  },
  
  hero: {
    width: "75% !important",
    padding: "2% 15%",
    margin: "0px auto",
    display:'flex',
    justifyContent:'space-between',
    
  },
 main:{
   marginTop:'8%'
 },
  
  activityHr:{
      height:'2px',
      backgroundColor:'white'
  },
  topRecent:{
      color:'lightGray',
      marginBottom:'5px'

  },
  mainActivity:{
      backgroundColor:'white',
      width:'100%',
      minWidth:'600px',
      minHeight:'200px',
      marginTop:'15px !important',
      border:'1px solid gray',
      
  },
post:{
  fontWeight:'500',
    padding:'10px'
},
hr:{
    width:'100%',
    height:'2px',
    backgroundColor:'gray',
    border:'none',
    marginTop:'10px'
},
createPostSection:{

    // minHeight:'420px',
    padding:'20px 30px',
    display:'flex',
    width:'100%',
    justifyContent:'space-between'
    
},
createPostText:{
    fontWeight:'600'
},
createPostField:{
  width:'400px',
 

},
createPostInput:{
    width:'100%',
    minHeight:'100px',
    resize:'none',
    outLine:'none'
},
submit:{
   backgroundColor:'#097ff2 !important',
    width:'100%',
    color:'white !important',
    height:'30px',
    margin:'0 10px !important'
 
},
submittedActivity:{
    minHeight:'300px',

},
postHeader:{
    display:'flex',
    alignItems:'center',
    padding:'10px 20px'
},
Title:{
    padding:'10px 20px',
    fontSize:'16px',
    fontWeight:'400',
    textDecoration:'underLine',
  },
  message:{
    padding:'10px 20px',
    fontSize:'14px',
    fontWeight:'300',

  },
recentActivity:{
   paddingTop:'20px'
}

});
function TeacherHome(props) {
  const classes = useStyle();
  
  const [posts,setposts]=useState([])
  const [postCreate,setpostcreate]=useState(' ')
const updatePost=(e)=>{
  setpostcreate(e.target.value)

  
}
const createPost=()=>{
if(postCreate===' '){
  alert('please input some message')
}
else{
  setposts([...posts,postCreate])
  setpostcreate(' ')
}
}


  return (
    <>
      <div className="main">
       <Appbar name='teacher'/>
        <Grid container className={classes.hero}>
      <div className={classes.main}>
      <Grid item xs={12} md={12} className={classes.recentActivity}>
            <Typography variant="p" className={classes.topRecent}>
                Recent Activity
            </Typography>
            <hr className={classes.activityHr} />
        </Grid>
        <Grid container xs={12} md={12} className={classes.mainActivity}>
        {/* teacher Activity posts */}
      <p className={classes.post}>Post:{props.name}</p>
      <hr className={classes.hr}/>

<div className={classes.createPostSection}>
<div className={classes.createPostText}>Create Post:</div>
<div className={classes.createPostField}>
<textarea  className={classes.createPostInput}  type="text" value={postCreate} onChange={updatePost}/></div>
</div>
<Button className={classes.submit} onClick={createPost}>Submit</Button>
<hr className={classes.hr} />
<Grid item className={classes.submittedActivity}>
{/* //////////////////////// Submitted post */}
{posts.map((post,index)=>{
  return <div key={index}>
  <div className={classes.postHeader} >
    <h5 className={classes.name}>Ali zeb</h5>
<ArrowRightIcon/>
    <h5 className={classes.subject}>JavaScript</h5>
</div>
<h5 className={classes.Title}>Dear Students:</h5>
<p className={classes.message}>{post}.
</p>
{/* <p className={classes.message}>
{posts.message2}
</p> */}
<hr className={classes.hr} />
  </div>
})}



{/* //////////////////////// Submitted post End*/}
</Grid>


  {/* teacher Activity posts End*/}
        </Grid>

      </div>
         
        </Grid>
      </div>
    </>
  );
}

export default TeacherHome;
