import { FieldError, FieldErrors, FieldErrorsImpl, FieldValues, Merge, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";

export interface BaseDataInput {
    id: string,
    label: string,
    placeholder: string,
    errs : Errors
}

export interface InputProps extends BaseDataInput {
    register : UseFormRegister<FieldValues>,
    errorMsg : string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
}

export interface FormProps {
    register : UseFormRegister<FieldValues>, 
    handleSubmit : UseFormHandleSubmit<FieldValues, undefined>, 
    errors : FieldErrors<FieldValues>,
    reset : UseFormReset<FieldValues>,
    setStatus : React.Dispatch<React.SetStateAction<string>>
}
type Errors = {
    required? : string | boolean,
    min? : {
        value : number,
        message : string
    } | number,
    max? : {
        value : number,
        message : string
    } | number,
    minLength? : {
        value : number,
        message : string
    } | number,
    maxLength? : {
        value : number,
        message : string
    } | number,
    pattern? : {
        value : RegExp
        message : string
    } | RegExp
}