"use client";
import { Button } from '@geist-ui/react';
import CustomHeading from './CustomHeading';
import { forwardRef } from 'react';

const MyComponent = forwardRef((props, ref) => (
  <div ref={ref}>
    <Button type="success">Geist Button</Button>
  </div>
));

export default MyComponent;
