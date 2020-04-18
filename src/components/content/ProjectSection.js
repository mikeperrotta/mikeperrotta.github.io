// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS, NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 200;
  height: 100%;
  justify-content: space-evenly;
  opacity: 0.9;
  text-align: center;
  width: 100%;
`;

const TextContainer = styled.div`
  flex-direction: column;
  width: 30%;
`;

const HeaderText = styled.div`
  margin: 10px 0px;
  font-weight: 600;
`;

const DescriptionText = styled.div`
  margin: 30px 0px;
`;

const buttonStyles = css`
  background-color: ${COLORS.ACCENT_COLOR};
  border-radius: 15px;
  border: none;
  color: ${NEUTRALS.LIGHT_TEXT}
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.25px;
  outline: none;
  padding: 10px 15px;
  text-decoration: none;

  &:hover {
    background-color: ${COLORS.ACCENT_COLOR_1};
  }

  &:active {
    background-color: ${COLORS.ACCENT_COLOR_2};
  }
`;

const ExternalLinkButton = styled.a`
  ${buttonStyles}
`;

const InternalLinkButton = styled(NavLink)`
  ${buttonStyles}
`;

const Image = styled.div`
  background-color: transparent;
  background-image: url(${(props) => (props.image)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: ${(props) => (props.shadow || 'none')};
  height: ${(props) => (props.imageHeight || 'calc(100% - 120px)')};
  position: relative;
  width: ${(props) => (props.imageWidth || '30%')};
`;

type Props = {
  section :Object;
};

/* react component */
const ProjectSection = ({ section } :Props) => {
  const {
    buttonText,
    description,
    external,
    header,
    image,
    imageHeight,
    imageOnLeft,
    imageWidth,
    link,
    shadow,
  } = section;
  const textContainer = (
    <TextContainer>
      <HeaderText>
        { header }
      </HeaderText>
      <DescriptionText>
        { description }
      </DescriptionText>
      { buttonText && (
        external
          ? (
            <ExternalLinkButton
                href={link}
                rel="noreferrer noopener"
                target="_blank">
              { buttonText }
            </ExternalLinkButton>
          )
          : <InternalLinkButton to={link}>{ buttonText }</InternalLinkButton>
      )}
    </TextContainer>
  );
  let content = textContainer;
  if (image) {
    const imageComponent = (
      <Image
          image={image}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          shadow={shadow} />
    );
    content = imageOnLeft ? (
      <>
        { imageComponent }
        { textContainer }
      </>
    ) : (
      <>
        { textContainer }
        { imageComponent }
      </>
    );
  }
  return (
    <Content>
      { content }
    </Content>
  );
};

export default ProjectSection;
