// @flow

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Document, Page, pdfjs } from 'react-pdf';

import AppHomePageMenu from '../app/AppHomePageMenu';
import Footer from '../../components/content/Footer';
import ResumePdf from '../../assets/resume/resume.pdf';
import ScrollToTopOnMount from '../../core/router/RouterHelpers';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const maxResumeWidth = 900;

const Resume = () => {

  const getPdfWidth = (windowWidth) => Math.min(windowWidth - 40, maxResumeWidth);

  const [pdfWidth, setPdfWidth] = useState(getPdfWidth(window.innerWidth));

  const handleResize = () => {
    setPdfWidth(getPdfWidth(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', () => handleResize);
    };
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <AppHomePageMenu isProjectMenu />
      <Content>
        <Document file={ResumePdf}>
          <div style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)' }}>
            <Page pageNumber={1} width={pdfWidth} />
          </div>
        </Document>
      </Content>
      <Footer />
    </>
  );
};

export default Resume;
