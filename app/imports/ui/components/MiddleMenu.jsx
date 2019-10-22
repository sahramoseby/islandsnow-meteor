import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Hoodies</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Hoodies</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>Hoodies</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>Hoodies</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
