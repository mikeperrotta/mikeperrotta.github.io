// @flow
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const SquareWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  border-radius: .75%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
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
      transform: scale(1.0625);
    `;
  }
  return css`
    transform: scale(1.02);
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
  color: ${NEUTRALS.LIGHT_TEXT};
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
  external :boolean;
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
    const { image, link, external } = project;
    const { projectText, isMouseOver } = this.state;
    const Square = () => (
      <SquareWrapper
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
    if (external) {
      return (
        <a
            href={link}
            rel="noreferrer noopener"
            target="_blank"
            style={{ textDecoration: 'none' }}>
          <Square />
        </a>
      );
    }
    return (
      <NavLink
          to={link}
          style={{ textDecoration: 'none' }}>
        <Square />
      </NavLink>
    );
  }
}

export default ProjectSquare;
