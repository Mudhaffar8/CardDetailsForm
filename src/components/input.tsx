import { InputProps } from "../utils/interfaces";

export const Input = ({ id, label, placeholder, register, errs, errorMsg }: InputProps) => (
    <div className='w-full'>
        <label 
            htmlFor={id} 
            className="uppercase text-[0.65rem] tracking-widest dark:text-slate-100"
        >
            {label}
        </label><br/>
        <input 
            type="text" 
            id={id}
            placeholder={placeholder}
            className="outline outline-1 outline-slate-400 dark:outline-slate-800 dark:bg-slate-600
            focus:outline-2 focus:outline-neutral-one dark:text-slate-200
            px-3 py-2 rounded w-full mt-2"
            {...register(id, errs)}
        />
        <small className="text-primary-three">
            {typeof errorMsg === 'string' ? errorMsg : undefined}
        </small>
    </div>
)