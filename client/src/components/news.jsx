import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import YellBox from './yellbox';
import NewsBox from './newsbox';

function News() {
  // eslint-disable-next-line no-unused-vars
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Row className="min-vh-100 flex-column flex-lg-row">
      <Col>
        <NewsBox />
      </Col>
    </Row>
  );
}

export default News;
