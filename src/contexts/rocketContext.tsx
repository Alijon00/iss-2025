import React, { createContext, useContext, useState } from 'react';

interface RocketContextType {
  isRocketFlying: boolean;
  startRocket: () => void;
}

const RocketContext = createContext<RocketContextType | undefined>(undefined);

export const RocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isRocketFlying, setIsRocketFlying] = useState(false);

  const startRocket = () => {
    setIsRocketFlying(prev => !prev); // Переключаем состояние
  };

  return (
    <RocketContext.Provider value={{ isRocketFlying, startRocket }}>
      {children}
    </RocketContext.Provider>
  );
};

export const useRocket = () => {
  const context = useContext(RocketContext);
  if (context === undefined) {
    throw new Error('useRocket must be used within a RocketProvider');
  }
  return context;
};