"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import NavigationBar from '../../components/Nav';
import projectComponents from '../../components/ProjectDetails';

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id;
  
  const ProjectComponent = projectComponents[id];

  if (!ProjectComponent) {
    return (
      <div className="w-full h-full flex flex-col items-center">
        <NavigationBar />
        <div className="w-2/3 mt-32 text-center">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <p className="mt-4">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  
  return <ProjectComponent />;
}