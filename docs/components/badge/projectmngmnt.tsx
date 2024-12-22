"use client";
import { Badge } from "@nextui-org/react";
import React, { FC, forwardRef } from 'react';

const ProjectManagementBadge: FC = forwardRef((props, ref) => {
  return <Badge ref={ref}>Project Management</Badge>;
});

export default ProjectManagementBadge;
