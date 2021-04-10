import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import InfoDisplay from './InfoDisplay';
import { Row, Col, Table } from 'react-bootstrap';

const Rules = ({ list }) => {
  const { terms, rules, software, yells, discord } = list;

  const seperateLines = string => {
    const lines = string.split('\n');
    if (lines.length <= 1) return string;

    return lines.map(l => <p className="gm_lineseperate">{l}</p>);
  };

  return (
    <>
      <Row className="my-3">
        <Col>
          <InfoDisplay title="Rules">
            <Card.Text>
              The main goal is to have fun.  But in order to achieve this and keep the peace,
              a few rules are expected to be followed.  Please look over them before
              playing on Chaos.
            </Card.Text>
            <ol>
              {rules.list.map((t, i) => (
                <li key={`term_${i}`}>{t}</li>
              ))}
            </ol>
            <small>Updated {rules.updated}</small>
          </InfoDisplay>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <InfoDisplay title="Yell and Shout Rules">
            <ol>
              {yells.list.map((t, i) => (
                <li key={`term_${i}`}>{t}</li>
              ))}
            </ol>
            <small>Updated {yells.updated}</small>
          </InfoDisplay>
        </Col>
      </Row>

      {/*<Row className="my-3">
        <Col>
          <InfoDisplay title="Third-party software">
            <Card.Text>
              Listed below is a list of approved Plugins or Addons that
              can be used on Chaos.  If it is not listed below, please
              refrain from using it on Chaos.
            </Card.Text>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Software/Addon</th>
                  <th>Windower</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {software.list.map((s, i) => (
                  <tr key={`addon_${i}`}>
                    <td>{s.item}</td>
                    <td>
                      {s.windower || (
                        <small>
                          <i>n/a</i>
                        </small>
                      )}
                    </td>
                    <td>{s.allowed ? <b>Allowed</b> : <b>Disallowed</b>}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <small>Updated {software.updated}</small>
          </InfoDisplay>
        </Col>
      </Row>*/}
    </>
  );
};

const ListWithUpdated = PropTypes.shape({
  updated: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
});

Rules.propTypes = {
  list: PropTypes.shape({
    allowed: ListWithUpdated,
    disallowed: ListWithUpdated,
    discord: ListWithUpdated,
    rules: ListWithUpdated,
    terms: ListWithUpdated,
    yells: ListWithUpdated,
  }).isRequired,
};

Rules.defaultProps = {
  allowed: {},
  disallowed: {},
  discord: {},
  rules: {},
  terms: {},
  yells: {},
};

export default Rules;
