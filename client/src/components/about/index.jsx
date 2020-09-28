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
          <InfoDisplay title="How is Chaos different from retail?">
            <Card.Text>
              Changes made to Chaos to give the Era-75 Cap feeling and experience.
            </Card.Text>
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Retail</th>
                  <th>Chaos</th>
                  <th>Reasoning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Retail Exp</td>
                  <td>Era Exp</td>
                  <td>difficulty</td>
                </tr>
                <tr>
                  <td>Retail Fame</td>
                  <td>Era Fame</td>
                  <td>difficulty</td>
                </tr>
                <tr>
                  <td>
                    All Expansions
                  </td>
                  <td>Currently only up to ToAU</td>
                  <td>development</td>
                </tr>
                <tr>
                <td>
                    The auction house is limited to 7 listings and items expire
                    after 3 real life days
                  </td>
                  <td>
                    The auction house has unlimited listings and items expire
                    after 90 real life days
                  </td>
                  <td>economy</td>
                </tr>
                <tr>
                  <td>
                    Retail mob drops and levels.
                  </td>
                  <td>
                    Out of era drops removed or moved back to an Era setting.
                    Mob levels readjusted back to Era levels.
                  </td>
                  <td>economy</td>
                </tr>
                <tr>
                  <td>
                    Retail Guild Shop items.
                  </td>
                  <td>
                    Removed out of Era items.
                  </td>
                </tr>
                <td>economy</td>
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
