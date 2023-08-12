import React from 'react';
import Herocard from './Herocard';
import Specialsection from './Specialsection';
import Testmonals from './Testmonals';
import About from './About';

export default function Home() {
  return (
    <div>
      <Herocard/>
      <Specialsection/>
      <Testmonals />
      <About/>
    </div>
  );
}
