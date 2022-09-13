import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import avatar from '../data/avatar.jpg';
import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className='nav-item absolute right-5 md:right-30 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>
            User Profile
          </p>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color='rgb(153, 171, 180)'
          size='2xl'
          borderRadius='50%'
          bgHoverColor='light-gray'
        />
      </div>
      <div className='flex items-center gap-5 border-b-1 border-color mt-6 pb-6'>
        <img className='rounded-full w-24 h-24' src={avatar} />
        <div>
          <p className='font-semibold text-xl dark:text-gray-200'>
            Michael Roberts
          </p>
          <p className='text-gray-500 dark:text-gray-400 text-sm'>
            Administrator
          </p>
          <p className='text-gray-500 dark:text-gray-400 text-xs font-semibold'>
            info@shop.com
          </p>
        </div>
      </div>
      <div>
        {userProfileData?.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-5 border-b-1 border-color p-4 cursor-pointer dark:hover:bg-[#42464D]'
          >
            <Button
              icon={item.icon}
              size='xl'
              bgHoverColor='light-gray'
              color={item.iconColor}
              bgColor={item.iconBg}
              borderRadius='10px'
            />

            <div>
              <p className='font-semibold dark:text-gray-200'>{item.title}</p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5'>
        <Button
          text='See all messages'
          bgColor={currentColor}
          color='white'
          borderRadius='10px'
          width='full'
        />
      </div>
    </div>
  );
};

export default UserProfile;
