import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Dropdown from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
        <Container>
        <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
        <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
        <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
        <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
        <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
        <Menu.Item fitted><Icon name="search"/></Menu.Item>
        <Menu.Item fitted><Icon name="user"/></Menu.Item>
        <Dropdown item text="MY CART 0" icon="shop">
        <Dropdown.Menu>
        <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Container>
    </Menu>
  );
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <img src='//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749'
    className="ui centered image" alt="pics"/>
  );
  }
}

class MiddleMenu extends React.Component {
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

class FullWidthImage extends React.Component {
  render() {
    return (
        <img src="//cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?9243197903709543590"
    className="ui fluid image" alt="pics"/>

  );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns={3} divided>
    <Grid.Column>
    <Grid.Column>About Us</Grid.Column>
    <Grid.Column>Store Locations</Grid.Column>
    <Grid.Column>Employment</Grid.Column>
    <Grid.Column>Videos</Grid.Column>
    <Grid.Column>Shipping & Returns</Grid.Column>
    <Grid.Column>Terms & Conditions</Grid.Column>
    <Grid.Column>Privacy Policy</Grid.Column>
    </Grid.Column>

    <Grid.Column>
    <Grid.Column>Men</Grid.Column>
    <Grid.Column>Women</Grid.Column>
    <Grid.Column>Kids</Grid.Column>
    <Grid.Column>Brands</Grid.Column>
    <Grid.Column>Sale</Grid.Column>
    </Grid.Column>

    <Grid.Column>
    <Grid.Column>Join our mailing lists for updates</Grid.Column>
                                            <Grid.Column>Sign up to receive our email updates!</Grid.Column>
    <Input
    label={{ basic: true, content: 'mail' }}
    labelPosition='right'
    placeholder='Enter Email Address'
        />
        </Grid.Column>
        </Grid>
  );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
        </div>
  );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
