import { configureStore } from "@reduxjs/toolkit";
import personalDetailsSlice from "./slices/personalDetailsSlice";
import summarySlice from "./slices/summarySlice";
import educationSlice from "./slices/educationSlice";
import employmentSlice from "./slices/employmentSlice";
import skillsSlice from "./slices/skillsSlice";
import templateSlice from "./slices/templateSlice";

export default configureStore({
    reducer : {
        PersonalDetails : personalDetailsSlice,
        Summary: summarySlice,
        Education: educationSlice,
        Employment: employmentSlice,
        Skill: skillsSlice,
        Template: templateSlice
    }
})