import { FieldError, FieldErrorsImpl, FieldValues, Merge, useForm, UseFormRegister } from "react-hook-form";
import { useState } from 'react';

interface BaseDataInput {
  id: string,
  label: string,
  placeholder: string,
  errs : Errors
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

interface InputProps extends BaseDataInput {
  register : UseFormRegister<FieldValues>,
  errorMsg : string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
}

const baseData : {[index: string]: BaseDataInput} = {
  cardHolderName : {
    id: "cardHolderName",
    label: "Cardholder Name",
    placeholder: "e.g. Jane Appleseed",
    errs : {
      required: "Field cannot be empty",
      pattern : {
        value:/^[a-zA-Z]{2,} [a-zA-Z]{2,}$/,
        message: "Incorrect Format"
      }
    }
  },
  cardNumber : {
    id: "cardNumber",
    label: "Card Number",
    placeholder: "e.g. 1234 5678 9123 0000",
    errs : {
      required: "Field cannot be empty",
      pattern : {
        value:/^\d{4}-\d{4}-\d{4}-\d{4}$|^\d{4} \d{4} \d{4} \d{4}$/,
        message: "Wrong Format, Numbers Only"
      }
    }
  },
  expiryMonth : {
    id: "expiryMonth",
    label: "Exp. Date",
    placeholder: "MM",
    errs : {
      required: "Can't be blank",
      min: {
        value: 0,
        message: "Value must be within 0-12"
      },
      max: {
        value: 12,
        message: "Value must be within 0-12"
      },
      pattern : {
        value:/^\d{2}$/,
        message: "Format must be in MM and contain only numbers"
      }
    }
  },
  expiryYear : {
    id: "expiryYear",
    label: "(MM/YY)",
    placeholder: "YY",
    errs : {
      required: "Can't be blank",
      min: {
        value: 0,
        message: "Value must be within 0-12"
      },
      max: {
        value: 99,
        message: "Value must be within 0-12"
      },
      pattern : {
        value:/^\d{2}$/,
        message: "Format must be in YY and contain only numberes"
      }
    }
  },
  cvc : {
    id: "cvc",
    label: "cvc",
    placeholder: "e.g. 123",
    errs : {
      required: "Can't be blank",
      pattern : {
        value:/^\d{3}$/,
        message: "Format must be in YY and contain only numberes"
      }
    }
  },
}

const Input = ({ id, label, placeholder, register, errs, errorMsg }: InputProps) => (
  <div className='w-full'>
    <label htmlFor={id} className="uppercase text-[0.65rem] tracking-widest dark:text-slate-100">
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

function App() {
  const { register, handleSubmit, watch, formState: {errors}, reset } = useForm();
  const [ status, setStatus ] = useState("typing");

  return (
    <div className="w-full lg:h-screen grid grid-cols-1 lg:grid-cols-3 dark:bg-slate-800">
      <div className="w-full lg:h-full h-56 relative
          bg-[image:var(--bg-mobile)] lg:bg-[image:var(--bg-desktop)] 
          bg-cover">
        <div className="absolute h-[250px] lg:h-[335px] w-[350px] 
            left-1/2 top-1/2 -translate-y-[37%] -translate-x-1/2
            lg:left-full lg:-translate-y-1/2">
          <div className="absolute right-0 max-lg:top-0 lg:bottom-0">
            <img src="/src/images/bg-card-back.png" 
              alt="card-back" 
              width="290"
            />
						<small className="text-white absolute right-[12%] top-[44%] text-xs">
              {watch("cvc") || "000"}
						</small>
          </div>
          <div className="absolute max-lg:bottom-0 left-0 lg:top-0">
            <img src="/src/images/bg-card-front.png" 
              alt="card-front" 
              width="290"
            />
            <img src="/src/images/card-logo.svg" 
              alt="card-logo" 
              className="absolute left-4 top-4"
              width="50"
            />
						<small className="text-white absolute left-[8%] top-[48%] text-lg">
              {watch("cardNumber") || "0000 0000 0000 0000"}
						</small>
						<small className="text-white absolute left-[8%] bottom-[14%] text-[0.65rem]">
							{watch("cardHolderName") || "Jane Appleseed"}
						</small>
						<small className="text-white absolute right-[8%] bottom-[14%] text-[0.65rem]">
              {watch("expiryMonth") || "00"}/{watch("expiryYear") || "00"}
						</small>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 lg:my-auto mt-16 mx-6 lg:ml-44 mb-4">
        {status === "typing" &&
          <div className="max-w-sm mx-auto">
              <form 
                onSubmit={handleSubmit((data) => {
                console.log(data);
                setStatus("submitted");
                reset();
              })}
              >
              <div className="custom-grid">
                {Object.keys(baseData).map((d, i) => (
                  <Input 
                    id={baseData[d].id} 
                    key={i}
                    label={baseData[d].label} 
                    placeholder={baseData[d].placeholder}
                    register={register}
                    errs={baseData[d].errs}
                    errorMsg={errors[baseData[d].id]?.message}
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
        }
        {status === "submitted" &&
          <div className="max-w-xs mx-auto">
            <div className="space-y-4">
              <img src="/src/images/icon-complete.svg" 
                  alt="Icon-complete"
                  className="mx-auto" 
              />
              <h1 className="uppercase text-xl text-center">Thank You!</h1>
              <p className="text-center text-neutral-two text-sm">We've added your card details!</p>
            </div>
            <button type="button" 
              className="w-full py-2 mt-6 rounded-md bg-neutral-three 
              text-white text-center
              hover:opacity-80"
              onClick={() => setStatus("typing")}>
                Continue
              </button>
          </div>
        }
      </div>
    </div>
  );
}


export default App
