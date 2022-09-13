import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from '@reach/router';
import { Row, Col } from 'react-bootstrap';
import InfoDisplay from '../InfoDisplay';

const About = () => {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <InfoDisplay title="About">
            <Card.Text>
              Looking for that old school feel and challenge but still want to be able to experience some of the newer content? Then look no further than
              Kraken!
              <br />
              If interested in playing on this server, follow the{' '}
              <b>
                <Link to="/install">Installation</Link>
              </b>{' '}
              guide! It will guide you with everything you need to setup the client and start playing today!
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
                  <th>Kraken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Level Cap</td>
                  <td>
                    75. <br />
                    <i>Note: May be increased later on.</i>
                  </td>
                </tr>
                <tr>
                  <td>Expansions</td>
                  <td>
                    Currently only up to ToAU. <br />
<<<<<<< HEAD
                    <i>Note: May be expanded at a later date.</i>
=======
                    <i>Note: May be expanded later on.</i>
                    <br />
                    RoV and RoE are Enabled. Spark shops are not available.
>>>>>>> parent of 9e6816d (kxi)
                  </td>
                </tr>
                <tr>
                  <td>Exp</td>
                  <td>Era Exp.</td>
                </tr>
                <tr>
                  <td>Movement Speed</td>
                  <td>Era Speed.</td>
                </tr>
                <tr>
                  <td>Fame</td>
                  <td>Era Fame.</td>
                </tr>
                <tr>
                  <td>Auction House</td>
                  <td>Unlimited Listings and posted for 30 days.</td>
                </tr>
                <tr>
                  <td>Items</td>
                  <td>Removed Out of Era items.</td>
                </tr>
                <tr>
                  <td>Mobs</td>
                  <td>Era settings and levels.</td>
                </tr>
                <tr>
                  <td>Trusts</td>
                  <td>Enabled.</td>
                </tr>
                <tr>
                  <td>Homepoints</td>
                  <td>Homepoints are available but teleportation to and from others are disabled.</td>
                </tr>
                <tr>
                  <td>Custom</td>
                  <td>
                    Extra Trusts are earned through various ways. <i>** Job, Mission, Quest, NM **</i> <br />
                    Some Trusts will slightly differ from retail in behavior.
                  </td>
                </tr>
              </tbody>
            </table>
          </InfoDisplay>
        </Col>
      </Row>

      {/*
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
    */}
    </>
  );
};

export default About;
