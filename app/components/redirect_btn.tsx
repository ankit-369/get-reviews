"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

interface SigninButtonProps {
    value: string;
    redirect:string;
    classname:string;
}

export const Redirect_btn: React.FC<SigninButtonProps> = ({ value, redirect , classname}) => {
   const router = useRouter();

   const handleClick = () => {
    router.push(redirect);
};
    return (
        <button 
        className={classname}
            
        onClick={handleClick}>
            {value}
        </button>
    );
};
