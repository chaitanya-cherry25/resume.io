import { useSelector } from "react-redux/es/hooks/useSelector";
import "../../styles/resumepreview.scss"



const ResumePreview=()=>{
  const personalDetails=useSelector((state)=>state.PersonalDetails.value)
  const skillDetails=useSelector((state)=>state.Skill.value)
  const SummaryDetails=useSelector((state)=>state.Summary.value)
  const educationDetails=useSelector((state)=>state.Education.value)
  const employDetails=useSelector((state)=>state.Employment.value)

return(


   <div  className="parent-container">

        <div className="left-preview">
      
      <div style={{ display:"flex", justifyContent:"center", marginTop:"1rem"}} >
      <img style={{height:"8rem",borderRadius:"50%", width:"8rem"}} src={personalDetails.photo}/>
      </div>

<br></br>
        <div style={{display:"flex", flexDirection:"column"}}>
       <div style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
       <p style={{color:"aliceblue"}}>{personalDetails.firstName}</p>
        <p style={{color:"aliceblue"}}>{personalDetails.lastName}</p>
       </div>
        <div style={{textAlign:"center",color:"aliceblue"}}>{personalDetails.jobTitle} </div>
        </div>
<br></br>
<br></br>
        <div>
          <h4 style={{backgroundColor:"orange",padding:"1rem"}}>Details</h4>
          <br></br>
          <b>Email:</b> <p style={{color:"aliceblue"}}>{personalDetails.email}</p>
          <b>Phone Number:</b><p style={{color:"aliceblue"}}>{personalDetails.phone}</p>
          <b>Country:</b><p style={{color:"aliceblue"}}>{personalDetails.country}</p>
          <b>City:</b><p style={{color:"aliceblue"}}>{personalDetails.city}</p>
          <b>Email:</b><p style={{color:"aliceblue"}}>{personalDetails.email}</p>
        </div>

        <br></br>
<br></br>
        <div>

          <h4 style={{backgroundColor:"orange",padding:"1rem"}}>skills</h4>
          <br></br>
          {skillDetails.map((e)=>{
            return (<div style={{display:"flex", gap:"2rem"}}>
          <b style={{color:"black"}}>{e.skills}</b>
          <p style={{color:"aliceblue"}}>{e.level}</p>
          </div>
            )
          })}
          
        </div>
<br/>
<br/>

        <div>
        <h4 style={{backgroundColor:"orange",padding:"1rem"}}>Languages known</h4>
        <br/>

          <ul>
<li style={{color:"aliceblue", fontSize:"1rem",fontWeight:"bold"}}>English</li>
<li style={{color:"aliceblue", fontSize:"1rem",fontWeight:"bold"}}>Hindi</li>
<li style={{color:"aliceblue", fontSize:"1rem",fontWeight:"bold"}}>Telugu</li>
<li style={{color:"aliceblue", fontSize:"1rem",fontWeight:"bold"}}>Tamil</li>
<li style={{color:"aliceblue", fontSize:"1rem",fontWeight:"bold"}}>French</li>

          </ul>
        </div>
  </div>



  <div className="right-preview">

    <div>
  <h2 style={{backgroundColor:"orange"}}>Profile</h2>
  <p>{SummaryDetails}</p>
    </div>
<br/>
    <div>
  <h2 style={{backgroundColor:"orange"}}>Education</h2>
  {educationDetails.map((e)=>{
            return (
            <div>
          <p><b>School:</b>{e.school}</p>
          <p><b>Degree:</b>{e.degree}</p>
          <div style={{display:'flex', gap:"3rem"}}>
          <p><b>start:</b>{e.start}</p>
          <p><b>End:</b> {e.end}</p>
          </div>
          <p><b>city:</b>{e.city}</p>

          <h4>Description</h4>
            <p>{e.description}</p>
          </div>
            )
          })}
    </div>
<br/>
<br/>

    <div>
  <h2 style={{backgroundColor:"orange"}}>Employment</h2>
  {employDetails.map((e)=>{
            return (
            <div>
          <p><b>Job Profile:</b>{e.jobTitle}</p>
          <p><b>Company:</b>{e.company}</p>
          <div style={{display:'flex', gap:"3rem"}}>
          <p><b>start:</b>{e.start}</p>
          <p><b>End:</b> {e.end}</p>
          </div>
          <p><b>city:</b>{e.city}</p>

          <h4>Description</h4>
            <p>{e.description}</p>
            
          </div>
          
            )
          })}
    </div>
   
  </div>

      
    </div>
    


   
  )
}

export default ResumePreview;