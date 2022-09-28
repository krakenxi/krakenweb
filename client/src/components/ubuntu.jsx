import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import InfoDisplay from './InfoDisplay';

function install(props) {
  const { info } = props;

  return (
    <>
      <Row className="my-3">
        <Col>
          <InfoDisplay title="Downloading and installing Wine and Winetricks" className="my-3">
            <Card.Text>
              WineHQ has Pre-built packages for Wine on its{' '}
              <b>
                <a href={info.source1} rel="noopener noreferrer" target="_blank">
                  website
                </a>
              </b>{' '}
              .
              <br />
              We’ll be using the Staging branch as it has the best compatibility with Ashita.
            </Card.Text>
            <Card.Text>
              Once the whole installation is complete, execute PlayOnline Viewer. If an update is available, click on "Next", then:
              <ul>
                <li>Add the WineHQ repository and install Wine. Open a shell session and run the following:</li>
                <code>
                  sudo dpkg --add-architecture i386 <br />
                  wget -nc https://dl.winehq.org/wine-builds/winehq.key <br />
                  sudo apt-key add winehq.key <br />
                  sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ bionic main' <br />
                  sudo add-apt-repository ppa:cybermax-dexter/sdl2-backport <br />
                  sudo apt update <br />
                  sudo apt install --install-recommends winehq-staging cabextract p7zip-full
                </code>
                <li>Download and mark executable the latest version of winetricks. In a shell session run the following:</li>
                <code>
                  mkdir ~/bin <br />
                  cd ~/bin <br />
                  wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks <br />
                  chmod +x winetricks
                </code>
              </ul>
            </Card.Text>
          </InfoDisplay>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <InfoDisplay title="Configuring your Wine container for FFXI w/ Ashita">
            <Card.Text>
              <ul>
                <li>Create a new wine prefix for this install.</li>
                <li>Launch Wine Config:</li>
                <code>WINEARCH=win32 WINEPREFIX=~/.wine-ffxi winecfg</code>
                <li>
                  You will get a few pop ups, including a warning that Wine Mono is not installed. If you are prompted to install Wine Mono, cancel the prompt
                  (we will be using Native .NET instead of Mono). You can install Gekko when prompted.
                </li>
                <li>
                  In the Wine configuration window, ensure your Windows version is set to Windows 7 and click ok (this is visible on the Applications tab at the
                  bottom).
                </li>
                <li>Install the dependencies that Ashita requires using Winetricks:</li>
                <code>WINEPREFIX=~/.wine-ffxi ~/bin/winetricks --force vcrun2010 vcrun2012 vcrun2013 vcrun2015 vcrun2017 dotnet40 dotnet452</code>
                <li>
                  You will receive a series of prompts to install the Microsoft VC Runtimes and Dotnet 4.0 and 4.5. You can use the default install options
                  after accepting the EULA on each prompt.
                </li>
                <li>
                  After all the installs complete you may get a prompt that “Windows needs to reboot”, you can choose “Reboot Now” which will reload the wine
                  server in the background. You do not have to actually reboot your PC.
                </li>
                <li>Relaunch Wine Config, and change it back to a Windows 7 prefix. The framework update will have shifted it to Windows 2003.</li>
                <code>WINEARCH=win32 WINEPREFIX=~/.wine-ffxi winecfg</code>
              </ul>
            </Card.Text>
          </InfoDisplay>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <InfoDisplay title="Download and Install Final Fantasy XI">
            <Card.Text>
              <ul>
                <li>Download the Installer Files:</li>
                <code>
                  mkdir -p ~/Downloads/ffxi <br />
                  cd ~/Downloads/ffxi <br />
                  wget https://gdl.square-enix.com/ffxi/download/us/FFXIFullSetup_US.part1.exe <br />
                  wget https://gdl.square-enix.com/ffxi/download/us/FFXIFullSetup_US.part2.rar <br />
                  wget https://gdl.square-enix.com/ffxi/download/us/FFXIFullSetup_US.part3.rar <br />
                  wget https://gdl.square-enix.com/ffxi/download/us/FFXIFullSetup_US.part4.rar <br />
                  wget https://gdl.square-enix.com/ffxi/download/us/FFXIFullSetup_US.part5.rar
                </code>
                <li>Unpack the installer.</li>
                <code>WINEPREFIX=~/.wine-ffxi wine ~/Downloads/ffxi/FFXIFullSetup_US.part1.exe</code>
                <li>
                  You will be prompted for a location to unpack the files. The default path should be the directory you downloaded the files, add a /unpack to
                  the path, e.g.:
                </li>
                <code>Z:\home\username\Downloads\ffxi\unpack</code>
                <li>Once the unpack job is done, launch the installer:</li>
                <code>
                  cd ~/Downloads/ffxi/unpack/FFXIFullSetup_US/ <br />
                  WINEPREFIX=~/.wine-ffxi wine ./FFXISetup.exe
                </code>
                <li>Select PlayOnline Viewer and Final Fantasy XI and click Install .</li>
                <li>
                  The PlayOnline Viewer Setup window will launch, accept the license and next through the defaults. Note, the text in the EULA may not display
                  correctly.
                </li>
                <li>
                  The FINAL FANTASY XI Setup window will appear after a while, it will hang for multiple minutes computing space requirements (this is normal).
                  Next your way through the dialogs using defaults, and wait while the installation completes (this may take quite some time).
                </li>
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
    source1: 'https://wiki.winehq.org/Ubuntu',
    source2: '',
  },
};

export default install;
