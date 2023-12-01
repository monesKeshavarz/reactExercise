import axios from 'axios';
import React, { ReactNode, type FC, useState, useEffect } from 'react';

type UserType = {
  email: string,
  name: string
};

const HomePape: React.FC = (): any => {
  const [users, setUsers] = useState<UserType[]>();

  const listUser = () => {
    const users = localStorage.getItem('users');
    if (users !== null) {
      const listUsers = JSON.parse(users);
      setUsers(listUsers);
    }
  };
  const userData = async (): Promise<void> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      setUsers(users);
      console.log(users);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    listUser();
    userData();
  }, []);

  return (
    <>
    <div className='h-screen  overflow-x-hidden flex flex-wrap overflow-scroll  bg-slate-100  text-slate-900 pt-20'>
        {
          users?.map((item , index) => {
            return(
              <div key={index} className='w-1/4 h-fit flex flex-col bg-slate-50 rounded p-4 mb-4 border mx-2'>
                
                <h1 className='w-full text-lg font-medium'>
                {
                  item.name 
                }
                </h1>

                <p className='w-full text-md font-extralight'>
                  {item.email}
                  </p>
                 
              </div>
            )
          })
        }
    </div>
      
    </>
  );
};
export default HomePape;
