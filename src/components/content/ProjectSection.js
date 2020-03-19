// @flow
import React from 'react';
import styled from 'styled-components';

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

const Image = styled.div`
  background-color: transparent;
  background-image: url(${(props) => (props.image)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 90%;
  width: ${(props) => (props.imageWidth || '30%')};
  position: relative;
`;

type Props = {
  section :Object;
};

/* react component */
function ProjectSection({ section } :Props) {
  const {
    header,
    description,
    image,
    imageOnLeft,
    imageWidth,
  } = section;
  const textContainer = (
    <TextContainer>
      <HeaderText>
        { header }
      </HeaderText>
      <DescriptionText>
        { description }
      </DescriptionText>
    </TextContainer>
  );
  let content;
  if (!image) {
    content = textContainer;
  }
  else if (imageOnLeft) {
    content = (
      <>
        <Image image={image} imageWidth={imageWidth} />
        { textContainer }
      </>
    );
  }
  else {
    content = (
      <>
        { textContainer }
        <Image image={image} />
      </>
    );
  }
  return (
    <Content>
      { content }
    </Content>
  );
}

export default ProjectSection;
