import React from 'react';
import SkillList from './../components/SkillList';
import Header from './../components/Header';
import PersonalStatement from './../components/PersonalStatement';
import ProjectList from './../components/ProjectList';
import InvolvementList from './../components/InvolvementList';
import Education from './../components/Education';
import Footer from './../components/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <PersonalStatement/>
      <SkillList/>
      <InvolvementList/>
      <ProjectList/>
      <Education/>
      <Footer/>
    </React.Fragment>
  );
}