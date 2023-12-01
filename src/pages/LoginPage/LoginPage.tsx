import React, { type FC } from 'react';
import Textfield from '../../components/Textfield/Textfield';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/Button/Button';
import { useNavigate } from "react-router-dom";


interface LoginSchema {
  email: string;
  password: string | number;
}



// const handel = (data: LoginSchema):void  => {
//   const navigate = useNavigate()

//   const users = localStorage.getItem('users');
//   if (users !== null) {
//     const listUsers = JSON.parse(users);
//     if (data.email === listUsers.email && data.password === listUsers.password) {
//       navigate('/') 
//       console.log("jjjjjjjjjjj");
//     }
//   }
// };

const loginSchema = yup.object({
  email: yup.string().email().required('email is a required field'),
  password: yup.string().required('password is a required field')
});

const LoginPage: FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  return (
    <div className="flex bg-slate-100 h-screen">
      <img src="public\flowerImg.jpg" alt="" className="bg-teal-500 flex-1 relative object-cover" />
      <div className=" absolute  top-3/4 left-10">
        <h2 className=" text-xl font-extrabold">“1st Fashion Brand in Indonesia”</h2>
        <p className="text-lg font-normal pl-2 ">fashionholic.com</p>
      </div>
      <form
        onSubmit={handleSubmit((data: LoginSchema):void  => {
           try {
            const users = localStorage.getItem('users');
            if (users !== null) {
              const listUsers = JSON.parse(users);
              listUsers.forEach((user : LoginSchema) => {
                if (data.email === user.email && data.password === user.password) {
                  navigate('/') 
                 }
              });
              
            }
           } catch (error) {
            console.log("eroerrr dari",errors)
           }
          })}
        className="flex flex-col flex-1  items-center justify-center w-full"
        action="">
        <h1 className=" text-4xl font-extrabold mb-10 pt-12">Login</h1>
        <Textfield
          type="email"
          placeholder="Example: Mones.Keshavarz@gmail.com"
          label="Enter Your Email"
          helperText={<>{errors.email?.message}</>}
          validation={register('email')}
        />
        <Textfield
          helperText={<>{errors.password?.message}</>}
          type="password"
          label="Enter Your Password"
          validation={register('password')}
        />
        <Button variant="contained">Login</Button>
      </form>
    </div>
  );
};
export default LoginPage;
