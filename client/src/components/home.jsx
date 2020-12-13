import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import YellBox from './yellbox';
import News from './newsbox';
import { useMediaQuery } from 'react-responsive';

function Home(props) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Row className="min-vh-100 flex-column flex-lg-row">
      <Col>
        <News />
      </Col>
   </Row>
  );
}

export default Home;
