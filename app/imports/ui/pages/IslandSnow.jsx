import React from 'react';
import TopMenu from '../components/TopMenu';
import IslandSnowLogo from '../components/IslandSnowLogo';
import MiddleMenu from '../components/MiddleMenu';
import FullWidthImage from '../components/FullWidthImage';
import FooterMenu from '../components/FooterMenu';

export default class IslandSnow extends React.Component {

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
