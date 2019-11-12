import React from 'react';
import styled from 'styled-components';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const SquareWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${NEUTRALS.WHITE};
  margin: 10px;
`;

/* react component */
const ProjectSquare = () => (
  <SquareWrapper />
);

export default ProjectSquare;
