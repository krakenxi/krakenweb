import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Card, Container, Row, Col } from 'react-bootstrap';
import InfoDisplay from './InfoDisplay';

function install(props) {
  const { info } = props;

    return (
      <>
        <Row className="my-3">
          <Col>
            <InfoDisplay title="Fresh Install & Update" className="my-3">
              <Card.Text>
                Official link to download <b><a href={info.source1} rel="noopener noreferrer" target="_blank">US installation files</a></b> (get all of them). These files include updates until April 2019.
                <br />
                Extract the files first by executing the "FFXIFullSetup_US.part1.exe" then proceed to the installation through "FFXISetup.exe" (freshly extracted).
                </Card.Text>
                <Card.Text>
                Once the whole installation is complete, execute PlayOnline Viewer. If an update is available, click on "Next", then:
                <ul>
                  <li>Select "Update" ; once this is done, click on "OK" then "Next". PlayOnline Viewer should restart automatically.</li>
                  <li>Select "For PlayOnline Members!".</li>
                  <li>On the next screen, enter id like 1234ABCD or ABCD1234 (4 letters 4 numbers it doesn't care about the order, doesn't matter if they're accurate or not) in the "Member Name" and "PlayOnline ID" fields. If you wish to use your retail or trial account, you can input that.</li>
                  <li>Click on "Register" > "Yes" > "OK" > "Exit" and finally "Yes".</li>
                </ul>

                Check that DirectPlay is enabled.
                <br />
                This step is for Windows 10 users and can be skipped otherwise.
                <ul>
                  <li>To enable DirectPlay, first press the Windpws key + R keyboard shortcut to open Run.</li>
                  <li>Then enter "Control Panel" in Run, and click the OK button.</li>
                  <li>Click "Programs and Features".</li>
                  <li>Click "Turn Windows features on or off".</li>
                  <li>Double-click "Legacy Components" to expand it.</li>
                  <li>Check the DirectPlay check box (if it is not already marked).</li>
                </ul>
                Configure game technical optiones.
                <ul>
                  <li>Start Menu > PlayOnline > FINAL FANTASY XI Config; or</li>
                  <li>(Root FFXI Install Directory)/PlayOnline/SquareEnix/FINAL FANTASY XI/Tools/FINAL FANTASY XI Config</li>
                </ul>
              </Card.Text>
            </InfoDisplay>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <InfoDisplay title="Connecting to Retail">
              <Card.Text>
                To be capable of connecting to a Project Topaz server, you must be able to update your local install of Final Fantasy XI.
                <br />
                To do this, you must connect - or have connected - to SquareEnix's retail servers at least once.
                <br />
                You may connect to the official retail servers in the following ways:
                <ul>
                  <li>Connect to retail with your existing retail subscription.</li>
                  <li>Purchase a copy of Final Fantasy XI, which comes with a 30-day subscription.</li>
                  <li><b><a href={info.source1} rel="noopener noreferrer" target="_blank">Activate a trial account provided by SquareEnix</a></b>
                  <br />
                  When you do so, you will be emailed an activation key. This key may be used like a normal activation key.</li>
                </ul>
              </Card.Text>
            </InfoDisplay>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <InfoDisplay title="Client Updates">
              <Card.Text>
                After having connected to retail at least once since installing Final Fantasy XI, you may then update it at any time by deleting a file on your local installation and using "Check Files" from the PlayOnline Viewer.
                <br />
                You may use this method even if your previous subscription to retail is inactive.
                <ul>
                  <li>Inside the \PlayOnline\SquareEnix\FINAL FANTASY XI\ROM\0 folder > delete the 0.dat file.</li>
                  <li>Execute PlayOnline Viewer.</li>
                  <li>Click on "Check Files" from the list on the left.</li>
                  <li>Select "FINAL FANTASY XI" in the drop-down menu ("PlayOnline Viewer" is selected by default) then click on "Check Files".
                  <br />
                  Be sure that you are checking Final Fantasy XI and not the PlayOnline Viewer.</li>
                  <li>If Final Fantasy XI is not an option available in the drop-down menu from the "Check Files" menu, you have not connected to retail since installing the client.</li>
                  <li>PlayOnline Viewer will find errors, click on "File Repair" then "Yes".</li>
                  <li>Once everything is done, click on "OK" then "Exit Viewer" and "Yes".</li>
                </ul>
              </Card.Text>
            </InfoDisplay>
          </Col>
        </Row>

        <Row className="mz-3">
          <Col>
            <InfoDisplay title="Launcher Config">
              <Card.Text>
                After confirming that your client can connect to a server, you can use one of the popular third-party launchers for ease-of-use and additional features.
                <br />
                <b>Launching via Ashita</b>
                <ul>
                  <li>Download <b><a href={info.source1} rel="noopener noreferrer" target="_blank">Ashita</a></b>.</li>
                  <li>Run Ashita as administrator.</li>
                  <li>Click on the Plus icon to make a new configuration, then edit the file line with the file path to your xiloader (can use the ... to browse).</li>
                  <li>In the command line, place your server details as:</li>
                  <code>
                  --server krakenxi.ddns.net --user Username --pass Password
                  </code>
                  <li>Choose "Window" to adjust your resolution if need be.</li>
                  <li>Click the paper icon to save, launch with the red arrow.</li>
                </ul>
             <b>Launching via Windower</b>
                <ul>
                  <li>Download <b><a href={info.source1} rel="noopener noreferrer" target="_blank">Windower</a></b>.</li>
                  <li>Execute Windower as an administrator and it will download updates automatically.</li>
                  <li>Click on the pen to edit the "Default Profile" and modify its options at your will.</li>
                  <li>Open the settings.xml file and set your options as followed (don't forget to save changes):</li>
                <code>
                    profile name="Username"
                    <br />
                    --server krakenxi.ddns.net --user Username --pass Password
                    <br />
                    HDD:\path\to\xiloader.exe
                    <br />
                    /profile
                </code>
                <br />
                  <li>Execute Windower.exe.</li>
                  <li>Select your profile and click on the arrow (bottom right), it will launch xiloader.</li>
                </ul>
              </Card.Text>
            </InfoDisplay>
          </Col>
        </Row>
      </>
    );
  }


install.propTypes = {
  info: PropTypes.shape({
    bootloader: PropTypes.string.isRequired,
    discord: PropTypes.string.isRequired,
    source1: PropTypes.string.isRequired,
    source2: PropTypes.string.isRequired,
  }),
};

install.defaultProps = {
  info: {
    bootloader: '',
    discord: '',
    source1: '',
    source2: '',
  },
};

export default install;
