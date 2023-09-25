import React from 'react';
import Bestfeaturesec from '../components/Bestfeaturesec';
import Bestplatformsec from '../components/Bestplatformsec';
import Videosec from '../components/Videosec';
import Breadcrumbs from '../components/Breadcrumbs';
function About() {
  return (
    <>
        <Breadcrumbs pageTitle="About Us"  /> 
      <Bestplatformsec/>
      <Bestfeaturesec/>
      <Videosec/>
    </>
  );
}

export default About;
