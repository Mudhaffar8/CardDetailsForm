import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Cards } from "./components/cards";
import { Form } from "./components/form";
import { SubmitUI } from "./components/submitUI";

function App() {
  const [ status, setStatus ] = useState("typing");
  const { register, handleSubmit, watch, formState: {errors}, reset } = useForm();

  return (
    <div className="w-full lg:h-screen grid grid-cols-1 lg:grid-cols-3 dark:bg-slate-800">
      <div className="w-full lg:h-full h-56 relative
          bg-[image:var(--bg-mobile)] lg:bg-[image:var(--bg-desktop)] 
          bg-cover"
      >
        <Cards watch={watch} />
      </div>
      <div className="lg:col-span-2 lg:my-auto mt-16 mx-6 lg:ml-44 mb-4">
        {status === "typing" &&
          <Form 
            register={register} 
            handleSubmit={handleSubmit} 
            errors={errors} 
            reset={reset}
            setStatus={setStatus}
          />
        }
        {status === "submitted" &&
          <SubmitUI setStatus={setStatus} />
        }
      </div>
    </div>
  );
}


export default App
