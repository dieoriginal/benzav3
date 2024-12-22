"use client";
import { FC, ReactNode } from 'react';
import { Text } from '@geist-ui/react';

interface CustomHeadingProps {
  children: ReactNode;
}

const CustomHeading: FC<CustomHeadingProps> = ({ children }) => {
  return <Text h1>{children}</Text>;
};

export default CustomHeading;
