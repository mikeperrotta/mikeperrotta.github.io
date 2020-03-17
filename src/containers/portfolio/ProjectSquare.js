// @flow
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const SquareWrapper = styled(NavLink)`
  align-items: center;
  background-color: transparent;
  border-radius: .75%;
  display: flex;
  height: 340px;
  justify-content: center;
  margin: 15px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  width: 340px;
`;

const applyBgStyles = ({ isMouseOver }) => {
  if (isMouseOver) {
    return css`
      filter: brightness(30%);
      transform: scale(1.0625) rotate(90deg);
    `;
  }
  return css`
    transform: scale(1.02) rotate(90deg);
  `;
};

const BackgroundImage = styled.div`
  background-color: transparent;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  transition: filter .2s, transform .2s;
  width: 100%;

  ${(props) => applyBgStyles(props)}
`;

const ProjectText = styled.div`
  color: ${NEUTRALS.LIGHT_GRAY};
  font-family: Muli;
  font-size: 42px;
  font-style: normal;
  font-weight: 300;
  line-height: 49px;
  padding: 25px;
  z-index: 200;
`;

type Project = {
  image :string;
  text :string;
  link :string;
};

type ProjectProps = {
  project :Project;
};

type State = {
  projectText :string;
  isMouseOver :boolean;
};

/* react component */
class ProjectSquare extends Component<ProjectProps, State> {

  constructor(props :ProjectProps) {
    super(props);

    this.state = {
      isMouseOver: false,
      projectText: '',
    };
  }

  onMouseOver = () => {
    const { project } = this.props;
    const { text } = project;
    this.setState({ isMouseOver: true, projectText: text });
  }

  onMouseOut = () => {
    this.setState({ isMouseOver: false, projectText: '' });
  }

  render() {
    const { project } = this.props;
    const { image, link } = project;
    const { projectText, isMouseOver } = this.state;
    return (
      <SquareWrapper
          to={link}
          onMouseEnter={this.onMouseOver}
          onMouseLeave={this.onMouseOut}>
        <BackgroundImage
            image={image}
            isMouseOver={isMouseOver} />
        <ProjectText>
          { projectText }
        </ProjectText>
      </SquareWrapper>
    );
  }
}

export default ProjectSquare;
