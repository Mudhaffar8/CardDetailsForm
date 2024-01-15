import { formData } from "../data/formData";
import { Input } from "./input";
import { FormProps } from "../utils/interfaces";

export const Form = ({ register, handleSubmit, errors, reset, setStatus} : FormProps) => (
  <div className="max-w-sm mx-auto">
    <form 
        onSubmit={handleSubmit((data) => {
          console.log(data);
          setStatus("submitted");
          reset();
        })}
    >
      <div className="custom-grid">
        {Object.keys(formData).map((d, i) => (
          <Input 
            id={formData[d].id} 
            key={i}
            label={formData[d].label} 
            placeholder={formData[d].placeholder}
            register={register}
            errs={formData[d].errs}
            errorMsg={errors[formData[d].id]?.message}
          />
        ))}
      </div>
      <button type="submit"
        className="w-full py-3 mt-4 rounded-md bg-neutral-three 
          text-white text-center
          hover:opacity-80">
        Confirm
      </button>
    </form>
  </div>
)