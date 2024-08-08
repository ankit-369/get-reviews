import React from 'react';

interface SigninButtonProps {
    value: string;
    onClick: () => void;
}

export const SigninButton: React.FC<SigninButtonProps> = ({ value, onClick }) => {
    return (
        <button 
        className=""
            
        onClick={onClick}>
            {value}
        </button>
    );
};
