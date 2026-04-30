// "use client";
// import React from 'react';

// import Link from 'next/link';
// import { useForm } from 'react-hook-form';

// const RegisterPage = () => {
//     const { register, handleSubmit ,formState:{errors} } = useForm();


//     const handleLoginFunc = (data) => {
       
//   console.log(data);
//   console.log(errors);

//   const {name,photo,password,email}= data;
//       console.log(name,photo,password,email);
      

//     };



//     return (
//         <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
//             <div className='p-4 rounded-xl bg-white'>
//                 <h2 className='font-bold text-3xl text-center mb-6'>Login Your account</h2>

//                 <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
//                      <fieldset className="fieldset">
//                         <legend className="fieldset-legend">Name</legend>
//                         <input  type="text" className="input" placeholder="Inter Your Name" {...register("name", { required: true })} />
//                            {errors.name && <p>Error name</p>}
//                     </fieldset>

//                      <fieldset className="fieldset">
//                         <legend className="fieldset-legend">Photo URL</legend>
//                         <input  type="text" className="input" placeholder="Inter Your Photo url" {...register("photo", { required: true })} />
//                            {errors.Photo && <p>Error Photo</p>}
//                     </fieldset>

//                     <fieldset className="fieldset">
//                         <legend className="fieldset-legend">Email</legend>
//                         <input  type="email" className="input" placeholder="Inter Your Email" {...register("email")} />

//                     </fieldset>
//                     <fieldset className="fieldset">
//                         <legend className="fieldset-legend">Password</legend>
//                         <input  type="password" className="input" placeholder="Inter Your Password" {...register("password", { required: true })} />
//                            {errors.password && <p>Error pasword</p>}
//                     </fieldset>
//                     <button className="btn bg-slate-800 text-white w-full">Register</button>
//                 </form>
//                 <p className='mt-2'>Dont have an account? <Link className='text-blue-500' href={"/login"}>Login</Link> </p>

//             </div>
//         </div>
//     );
// };

// export default RegisterPage;


import React from 'react';

const page = () => {
    return (
        <div>
            <h2>Register Page</h2>
        </div>
    );
};

export default page;