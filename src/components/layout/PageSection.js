// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import type { Node } from 'react';

const applyBgStyles = ({
  bgColor, bgImage, bgSize, blur, flipHorizontal
}) => {
  if (bgImage) {
    let transform = flipHorizontal ? 'scaleX(-1)' : '';
    if (blur) {
      transform += ' scale(1.1)';
    }
    return css`
      background-image: url(${bgImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: ${bgSize || 'cover'};
      filter: blur(${blur}px);
      transform: ${transform};
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
  width: 100%;
  position: relative;
  height: ${(props) => (props.fullScreen ? '100%' : 'auto')}
`;

// "padding" adds space between the window edge and the content when the window size is really small
export const PageSectionInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  @media only screen and (min-width: 768px) {
    align-items: stretch;
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
  fullScreen ? :boolean;
  blur ? :int;
  flipHorizontal ? :boolean;
  children :Node;
};

const PageSection = ({
  bgColor,
  bgImage,
  bgSize,
  fullScreen,
  blur,
  flipHorizontal,
  children
} :Props) => (
  <PageSectionOuterWrapper fullScreen={fullScreen}>
    <PageSectionBackgroundWrapper
        bgColor={bgColor}
        bgImage={bgImage}
        bgSize={bgSize}
        blur={blur}
        flipHorizontal={flipHorizontal} />
    <PageSectionInnerWrapper>
      { children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

PageSection.defaultProps = {
  bgColor: undefined,
  bgImage: undefined,
  bgSize: undefined,
  fullScreen: false,
  blur: 0,
  flipHorizontal: false,
};

export default PageSection;
