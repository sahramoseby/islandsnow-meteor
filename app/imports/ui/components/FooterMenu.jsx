import React from 'react';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';

export default class FooterMenu extends React.Component {
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
