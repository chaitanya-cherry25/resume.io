import ResumeEditor from "../components/editor/resumeEditor";
import Resume from "../components/preview/resume";

import "../styles/resumePage.scss";

const ResumePage = () => {
  return (
    <div className="resumePage-container">
      <ResumeEditor />
      <Resume />
    </div>
  );
};

export default ResumePage;
