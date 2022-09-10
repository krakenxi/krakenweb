import React from 'react';
import { Link } from '@reach/router';
import { Row, Col } from 'react-bootstrap';
import InfoDisplay from './InfoDisplay';

const troubleshoot = () => {
  return (
    <>
      <Row className="my-3">
        <Col>
          <InfoDisplay title="Troubleshooting">
            <table className="ui celled table">
              <thead>
                <tr>
                  <th>Error</th>
                  <th>Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3001/3101</td>
                  <td>
                    Client side - <br />
                    Close client -> Wait 5 minutes -> Reconnect <br />
                    Try restarting your network adapter or router. If unsure how to do that, power cycle your computer and router.
                  </td>
                </tr>
                <tr>
                  <td>3113</td>
                  <td>Try exiting your browser. If that doesn't help then try rebooting your pc.</td>
                </tr>
                <tr>
                  <td>3305</td>
                  <td>Close client -> Wait 5 minutes -> Reconnect</td>
                </tr>
                <tr>
                  <td>0033</td>
                  <td>Run the NetworkFix.bat.</td>
                </tr>
              </tbody>
            </table>
          </InfoDisplay>
        </Col>
      </Row>
    </>
  );
};

export default troubleshoot;
