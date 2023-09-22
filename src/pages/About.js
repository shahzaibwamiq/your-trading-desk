import React from 'react';
import Bestfeaturesec from '../components/Bestfeaturesec';
import Bestplatformsec from '../components/Bestplatformsec';
import Videosec from '../components/Videosec';
function About() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <h1>About</h1>
          <ul>
            <li>
              <a href="index">Home</a>
            </li>
            <li>
              <i className="fas fa-caret-right"></i>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
        </div>
      </section>
      <Bestplatformsec/>
      <Bestfeaturesec/>
      <Videosec/>
    </>
  );
}

export default About;
