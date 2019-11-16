import React from 'react';
import styled from 'styled-components';

import { NEUTRALS } from '../../core/styles/Colors';

/* styled components */
const SquareWrapper = styled.div`
  background-color: ${NEUTRALS.LIGHT_GRAY};
  height: 200px;
  margin: 10px;
  width: 200px;
`;

/* react component */
const ProjectSquare = () => (
  <SquareWrapper />
);

export default ProjectSquare;
