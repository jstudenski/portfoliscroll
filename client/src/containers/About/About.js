import React from 'react';
import './About.css';
import signature from '../../images/signature.svg';

const About = () => (
  <div className="about">
    <div className="bio">
      <p className="mini">Hello</p>
      <br /><br /><br />
      <p>
      Hello, I’m Jeff Studenski and I’m an aspiring bilingual Full-stack Web Developer who currently works as a Conceptual Prototyper. My present role is all about streamlining and optimizing project efficiency, and I strive to leverage that skill in my web development career. And no matter what I’m taking on professionally, learning something new is always at the forefront of my mind, and innovation and ingenuity consistently drive me to greater heights.
      A native Minnesotan, the internet has been my life for as long as I can remember. My creative problem solving aptitude has also been a part of me since I was a kid. Naturally, this is why I gravitate towards web developing—it’s the perfect fusion between two things I love. Now, my sights are set on merging my technical, analytical, and problem­-solving expertise to transform ideas into cutting-edge production­-ready web applications.
      In addition to attending a six-month Coding Bootcamp program, I hold a B.F.A. in Graphic Design from the University of Minnesota.
      </p>
      <img src={signature} alt="signature" />
    </div>
  </div>

);

export default About;
