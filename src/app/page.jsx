"use client"
import React from 'react';
import NavigationBar from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

export default function Page() {
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