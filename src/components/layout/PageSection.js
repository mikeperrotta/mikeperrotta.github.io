// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import type { Node } from 'react';

const applyBgStyles = ({
  bgColor, bgImage, bgSize, bgImagePosition, blur, flipHorizontal
}) => {
  if (bgImage) {
    let transform = flipHorizontal ? 'scaleX(-1)' : '';
    if (blur) {
      transform += ' scale(1.1)';
    }
    return css`
      background-color: ${bgColor};
      background-image: url(${bgImage});
      background-position: ${bgImagePosition || 'center'};
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
  height: ${(props) => (props.height)};
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

// "padding" adds space between the window edge and the content when the window size is really small
export const PageSectionInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const PageSectionBackgroundWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  ${(props) => applyBgStyles(props)}
  top: ${(props) => props.top};
`;

type Props = {
  bgColor ? :string;
  bgImage ? :string;
  bgSize ? :string;
  bgImagePosition ? :string;
  blur ? :int;
  children :Node;
  flipHorizontal ? :boolean;
  height ? :string;
  top ? :string;
};

const PageSection = ({
  bgColor,
  bgImage,
  bgSize,
  bgImagePosition,
  height,
  blur,
  flipHorizontal,
  children,
  top
} :Props) => (
  <PageSectionOuterWrapper height={height}>
    <PageSectionBackgroundWrapper
        bgColor={bgColor}
        bgImage={bgImage}
        bgSize={bgSize}
        bgImagePosition={bgImagePosition}
        blur={blur}
        flipHorizontal={flipHorizontal}
        top={top} />
    <PageSectionInnerWrapper>
      { children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

PageSection.defaultProps = {
  bgColor: undefined,
  bgImage: undefined,
  bgSize: undefined,
  bgImagePosition: undefined,
  blur: 0,
  flipHorizontal: false,
  height: 'auto',
  top: '0px',
};

export default PageSection;
