import { useDispatch, useSelector } from "react-redux";
import Template from "./charanTemplate";
import NehaTemplate from "./nehaTemplate";
import ResumePreview from "./resumePreview";
import { selectTemplate } from "../../redux/slices/templateSlice";
import { useState } from "react";
import { Button } from "reactstrap";



const Resume = () => {
    const template = useSelector((state) => state.Template.value);
    const dispatch = useDispatch();
    // const templates = {
    //     ResumePreview,
    //     NehaTemplate,
    //     Template,
    // }
    // const [temp,setTemp] = useState(ResumePreview);
    const handleClick = (arg) => {
        dispatch(selectTemplate(arg));

    }
    return (<div>
        <div style={{display:"flex",marginBottom:"1rem"}}>
            <div onClick={() => handleClick("Chatianya")} style={{overflow:"hidden",maxWidth:"200px",maxHeight:"200px" }}>
               {/* <canvas width={200} height={300}> */}
                <ResumePreview />

               {/* </canvas> */}
            </div>
            <div onClick={() => handleClick("Neha")} style={{overflow:"hidden",maxWidth:"200px",maxHeight:"200px" }}>
                <NehaTemplate />
            </div>
            <div onClick={() => handleClick("Charan")} style={{ overflow:"hidden",maxWidth:"200px",maxHeight:"200px" }}>
                <Template />
            </div>
        </div>
        {template === "Chatianya" && <ResumePreview />}
        {template === "Neha" && <NehaTemplate />}
        {template === "Charan" && <Template />}
    </div>)
}

export default Resume;