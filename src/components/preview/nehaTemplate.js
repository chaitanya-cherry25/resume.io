import { useSelector } from "react-redux";
import "../../styles/nehaTemplate.scss"


const NehaTemplate = () => {
    const personalDetails = useSelector((state) => state.PersonalDetails.value)
    const educationDetails = useSelector((state) => state.Education.value)
    const summaryDetails = useSelector((state) => state.Summary.value)
    const skillsDetails = useSelector((state) => state.Skill.value)
    const employmentDetails = useSelector((state) => state.Employment.value)

    return (
        <div className="resume-cont">
            <div className="left">
                <div className="profileImg"><img className="imgg" src={personalDetails.photo} /></div>
                <div className="names">
                    <p>{personalDetails.firstName}</p>
                    <p>{personalDetails.lastName}</p>
                </div> 
                <div className="box">
                    <div className="heading">
                        <p>contact</p>
                    </div>
                    <p className="p1"><span>Title: {personalDetails.jobTitle}</span></p>
                    <p className="p1"><span>Email: {personalDetails.email}</span></p>
                    <p className="p1"><span>Phone: +91 {personalDetails.phone}</span></p>
                    <p className="p1"><span>Country: {personalDetails.country}</span></p>
                    <p className="p1"><span>City: {personalDetails.city}</span></p>
                </div>

                <div className="box">
                    <div className="heading">
                        <p>Education</p>
                    </div>
                    <p className="p1">
                        {educationDetails.map((e) => {
                            return(
                                <div>
                                    <p>School: {e.school}</p>
                                    <p>Degree: {e.degree}</p>
                                    <p>Start: {e.start}</p>
                                    <p>End: {e.end}</p>
                                    <p>City: {e.city}</p>
                                    <p>{e.description}</p>
                                </div>
                            )
                        })
                        }
                    </p>
                </div>
                <br/>


            </div>

            <div className="right">
            <div className="nameDiv">
                <h1></h1>
                <h1></h1>
            </div>
    
            <div className="box2">
            <div className="heading">
                        <p>PROFESSIONAL SUMMARY</p>
                    </div>
                <p className="p1">{summaryDetails}</p>
            </div>
    
            <div className="box2">
                    <div className="heading">
                        <p>EMPLOYMENT</p>
                    </div>
                    <p className="p1">
                        {employmentDetails.map((e) => {
                            return(
                                <div>
                                    <p>Job Title: {e.jobTitle}</p>
                                    <p>Employer: {e.employer}</p>
                                    <p>Start: {e.start}</p>
                                    <p>End: {e.end}</p>
                                    <p>City: {e.city}</p>
                                    <p>{e.description}</p>
                                </div>
                            )
                        })
                        }
                    </p>
                </div>
    
    
            <div className="box2">
                    <div className="heading">
                        <p>INTERPERSONAL SKILLS</p>
                    </div>

                    <p className="p1">
                        {skillsDetails.map((e) => {
                            return(
                                <div>
                                    <p>Skill: {e.skill}</p>
                                    <p>Level: {e.level}</p>
                                </div>
                            )
                        })
                        }
                    </p>

                </div>
    
        </div>
        </div>
    )
}

export default NehaTemplate;