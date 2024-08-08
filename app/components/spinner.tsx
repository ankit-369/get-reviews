import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Galaxy = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  animation: ${spin} 3s linear infinite;
`;

const Orbit = styled.div<{ delay: number; size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid transparent;
  border-top: 2px solid #61dafb;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  animation-delay: ${props => props.delay}s;

  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-top: ${props => -props.size / 2}px;
  margin-left: ${props => -props.size / 2}px;
`;

const Star = styled.div<{ top: number; left: number; size: number }>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: #fff;
  border-radius: 50%;
  animation: ${spin} 3s linear infinite reverse;
`;

const GalaxySpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Galaxy>
        <Orbit delay={0} size={80} />
        <Orbit delay={0.2} size={60} />
        <Orbit delay={0.4} size={40} />
        <Star top={10} left={10} size={2} />
        <Star top={20} left={80} size={3} />
        <Star top={70} left={30} size={2} />
        <Star top={50} left={60} size={4} />
      </Galaxy>
    </SpinnerContainer>
  );
};

export default GalaxySpinner;