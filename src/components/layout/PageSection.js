// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import type { Node } from 'react';

const applyBgStyles = ({ bgColor, bgImage, bgSize }) => {
  if (bgImage) {
    return css`
      background-image: url(${bgImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: ${bgSize || 'cover'};
    `;
  }
  if (bgColor) {
    return css`
      background-color: ${bgColor};
      background-size: ${bgSize || 'auto'};
    `;
  }
  return css`
    background: none;
  `;
};

// "min-width" because this container needs to stretch to 100% of the width of the window
export const PageSectionOuterWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-width: 100%;
  position: relative;
`;

// "padding" adds space between the window edge and the content when the window size is really small
export const PageSectionInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: 768px) {
    align-items: stretch;
    width: 85%;
  }
`;

const PageSectionBackgroundWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  ${(props) => applyBgStyles(props)}
`;

type Props = {
  bgColor ? :string;
  bgImage ? :string;
  bgSize ? :string;
  children :Node;
};

const PageSection = ({
  bgColor,
  bgImage,
  bgSize,
  children
} :Props) => (
  <PageSectionOuterWrapper>
    <PageSectionBackgroundWrapper bgColor={bgColor} bgImage={bgImage} bgSize={bgSize} />
    <PageSectionInnerWrapper>
      { children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

PageSection.defaultProps = {
  bgColor: undefined,
  bgImage: undefined,
  bgSize: undefined
};

export default PageSection;
