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
      const listUsers: UserType[] = JSON.parse(users);
      setUsers(listUsers);
    }
  };
  const userData = async (): Promise<void> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const user: UserType[] = await response.json();
      setUsers((prevUsers)=>(prevUsers!==undefined ? [...prevUsers ,...user]: user));
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
    <main className='h-screen  bg-slate-100 '>
    <div className=' flex flex-wrap mx-auto max-w-screen-xl  overflow-x-hidden   text-slate-900 pt-20'>
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
    </main>
      
    </>
  );
};
export default HomePape;
