import React from 'react';
import Card from 'react-bootstrap/Card';
import InfoDisplay from '../InfoDisplay';
import Contributing from './contributing';
import { Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <InfoDisplay
            title={
              "Goal!"
            }
          >
            <Card.Text>
              Looking for that old school feel and challenge but still want to be able to experience some of the newer content?
              Then look no further than Chaos!
            </Card.Text>
          </InfoDisplay>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <InfoDisplay title="Server Settings">
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Settings</th>
                  <th>Chaos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Level Cap</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td>Expansions</td>
                  <td>Currently only up to ToAU</td>
                </tr>
                <tr>
                  <td>Exp</td>
                  <td>Era Exp</td>
                </tr>
                <tr>
                  <td>Movement Speed</td>
                  <td>Era Speed</td>
                </tr>
                <tr>
                  <td>Fame</td>
                  <td>Era Fame</td>
                </tr>
                <tr>
                  <td>Auction House</td>
                  <td>Unlimited Listings</td>
                </tr>
                <tr>
                  <td>Items</td>
                  <td>Removed Out of Era items.</td>
                </tr>
                <tr>
                  <td>Mobs</td>
                  <td>
                    Mobs walk back.
                    Out of era drops removed or moved back to an Era setting.
                    Mob levels readjusted back to Era levels.
                  </td>
                </tr>
                <tr>
                  <td>Trusts</td>
                  <td>Enabled</td>
                </tr>
                <tr>
                  <td>Homepoints</td>
                  <td>
                    MogHouse Homepoint available.
                    Only in Towns outside of Cities.
                    Can only set as Homepoint.
                  </td>
                </tr>
              </tbody>
            </table>
          </InfoDisplay>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <InfoDisplay title="How can I help?">
            <Card.Text>
              There are several ways to help. You can fill out bug reports,
              report players who are cheating by using the in-game ticketing
              system, volunteer as a staff member, contribute code, et. cetera.
            </Card.Text>
          </InfoDisplay>
        </Col>
      </Row>
    </>
  );
};

export default About;
