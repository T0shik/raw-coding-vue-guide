import Vue from 'vue'
import Form from "./Form";
import TextField from "./TextField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import SubmitButton from "./SubmitButton";


[
    Form,
    TextField,
    SelectField,
    TextAreaField,
    SubmitButton
].forEach(c => {
    Vue.component(c.name, c);
})