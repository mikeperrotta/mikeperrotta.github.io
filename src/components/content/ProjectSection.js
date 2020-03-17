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
  justify-content: center;
  opacity: 0.9;
  text-align: center;
  width: 100%;
`;

const TextContainer = styled.div`
  flex-direction: column;
  margin: 100px;
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
  margin: 30px;
  padding: 100px;
  height: 90%;
  width: 90%;
  position: relative;
`;

type Props = {
  header ? :string;
  description ? :string;
  image ? :string;
  imageOnLeft ? :boolean;
};

/* react component */
function ProjectSection({
  header,
  description,
  image,
  imageOnLeft
} :Props) {
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
        <Image image={image} />
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

ProjectSection.defaultProps = {
  header: '',
  description: '',
  image: undefined,
  imageOnLeft: true,
};

export default ProjectSection;