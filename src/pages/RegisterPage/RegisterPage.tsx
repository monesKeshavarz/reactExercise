import React, { useState, type FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import Textfield from '../../components/Textfield/Textfield';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RadioButton from '../../components/RadioButton/RadioButton';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

interface RegisterSchema {
   userName: string;
   email: string;
   address: string;
   phone: string;
   gender: 'man' | 'Woman';
   password: string | number;
   repeatPassword: string | number;
 }

const registerSchema = yup.object({
  userName: yup.string().required('userName is a required field'),
  email: yup.string().required('email is a required field').email(),
  address: yup.string(),
  phone: yup.string(),
  password: yup.string().required('password is a required field').min(3).max(8),
  repeatPassword: yup.string().required('repeatPassword is a required field').min(3).max(8),
 gender: yup.string().required()
});

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const [genderState, setGenderState] = useState("man");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  return (
    <div className="flex bg-slate-100 h-screen">
      <img src="public\flowerImg.jpg" alt="" className="bg-teal-500 flex-1 relative object-cover" />
      <div className=" absolute  top-3/4 left-10">
        <h2 className=" text-xl font-extrabold">“1st Fashion Brand in Indonesia”</h2>
        <p className="text-lg font-normal pl-2 ">fashionholic.com</p>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          setValue('gender', data.gender); 
         try {
          const existingUsersString = localStorage.getItem('users');
          const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];
          const updatedUsers = [...existingUsers, data];
          localStorage.setItem('users', JSON.stringify(updatedUsers));
         } catch (error) {
          console.log("Error processing user data:",error);
         }
         navigate('/login')
        })}
        className="flex flex-col flex-1  items-center justify-center w-full overflow-y-scroll py-5 pt-10"
        action="">
        <h1 className=" text-4xl font-extrabold mb-10 pt-12">Register</h1>
        <Textfield
          helperText={<>{errors.userName?.message}</>}
          validation={register('userName')}
          type="text"
          label="Enter Your UserName"
        />
        <Textfield
          type="email"
          placeholder="Example: Mones.Keshavarz@gmail.com"
          label="Enter Your Email"
          helperText={<>{errors.email?.message}</>}
          validation={register('email')}
        />
        <Textfield type="text" label="Enter Your Address" validation={register('address')} />
        <Textfield type="text" label="Enter Your PhoneNumber" validation={register('phone')} />
        <Textfield
          helperText={<>{errors.password?.message}</>}
          type="password"
          label="Enter Your Password"
          validation={register('password')}
        />
        <Textfield
          helperText={<>{errors.repeatPassword?.message}</>}
          type="password"
          label="Repeat the password"
          validation={register('repeatPassword')}
        />

        <div className="w-2/4  flex items-center justify-between">
          <RadioButton
            label="man"
            value="man"
            validation={register('gender')}
            onClick={() => setValue('gender', 'man')}
            checked
          />
          <RadioButton
            label="Woman"
            value="Woman"
            validation={register('gender')}
            onClick={() => setValue('gender', 'Woman')}
          />
        </div>

        <Button variant="contained">submit</Button>
      </form>
    </div>
  );
};
export default RegisterPage;
