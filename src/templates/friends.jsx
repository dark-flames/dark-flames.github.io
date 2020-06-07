import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import MainHeader from '../components/MainHeader/MainHeader'
import MainNav from '../components/MainNav/MainNav'
import BlogLogo from '../components/BlogLogo/BlogLogo'
import MenuButton from '../components/MenuButton/MenuButton'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/Footer/Footer'
import SiteWrapper from '../components/SiteWrapper/SiteWrapper'
import Navigation from '../components/Navigation/Navigation'
import Drawer from '../components/Drawer/Drawer'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import FriendListing from '../components/FriendListing/FriendListing'
import FriendFormatting from '../components/FriendFormatting/FriendFormatting'

class FriendsPage extends Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    const { menuOpen } = this.state;
    evt.stopPropagation();
    if (menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const {
      location,
      data: { allFriendsJson }
    } = this.props;
    const friends = allFriendsJson.edges;
    const { menuOpen } = this.state;
    return (
      <Layout location={location}>
        <Drawer className="friends-container" isOpen={menuOpen}>
        <Helmet title={`Friends | ${config.siteTitle}`} />
        <Navigation config={config} onClose={this.handleOnClose} />
        <SiteWrapper>
          <MainHeader className="post-head" cover={config.siteCover}>
            <MainNav>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>
          <MainContent>
            <FriendFormatting>
              <h1>Friends</h1>
              <hr/>
              <FriendListing friends={friends}/>
            </FriendFormatting>

          </MainContent>
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
query FriendsQuery {
  allFriendsJson {
    edges {
      node {
        url
        name
        image
        bio
      }
    }
  }
}
`

export default FriendsPage;
