"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import NavigationBar from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import projectComponents from './components/ProjectDetails';

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <NavigationBar />
      <div className="w-2/3">
        <div className="w-full h-auto p-3 flex justify-center mt-20">
          <About />
        </div>
        <div className="w-full h-auto items-center justify-center mt-10">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <Projects />
        </div>
      </div>
    </div>
  );
}

function ProjectDetailRouter() {
  const { id } = useParams();
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

export default function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailRouter />} />
      </Routes>
    </Router>
  );
}