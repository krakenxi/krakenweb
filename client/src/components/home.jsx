import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import TimeInfo from './TimeInfo';
import InfoDisplay from './InfoDisplay';

function Home({ discordLink }) {
  return (
    <Row className="min-vh-100 flex-column flex-lg-row">
      <Col>
        <TimeInfo />
        <InfoDisplay title="Welcome to Kraken!">
          <Card.Text>
            <a href={discordLink} target="_blank" rel="noreferrer">
              Join our Discord
            </a>{' '}
            to learn more!
          </Card.Text>
        </InfoDisplay>
      </Col>
    </Row>
  );
}

export default Home;
