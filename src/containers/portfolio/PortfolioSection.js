import React from 'react';

import PageSection from '../../components/layout/PageSection';
import ProjectSection from '../../components/content/ProjectSection';
import PROJECTS from './Projects';

/* react component */
const PortfolioSection = () => (
  <div id="projects">
    {
      PROJECTS.map((section) => (
        <PageSection bgColor={section.bgColor} height="550px" key={section.name}>
          <ProjectSection
              section={section} />
        </PageSection>
      ))
    }
  </div>
);

export default PortfolioSection;
