module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "darkflames", // The default and fallback author ID used for blog posts without a defined author.
  friendsDir: "friends",
  siteTitle: "Darkflames Blog", // Site title.
  siteTitleAlt: "Developer / 业余摄影 / 胶片爱好者", // Alternative site title for SEO.
  siteLogo:
    "https://s.gravatar.com/avatar/9151e9b4581ec2930fdaad9677fbc748?s=80", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://www.dark-flames.dev", // Domain of your website without pathPrefix.
  pathPrefix: "./", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Developer / 业余摄影 / 胶片爱好者", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Darkflames", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-69412347-2", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/dark-flames",
    "https://twitter.com/Darkf1ames",
    "mailto: darkf1ames@pm.me",
    "https://t.me/Dark_flames"
  ],
  postDefaultCategoryID: "Blog", // Default category for posts.
  postDefaultCover: "https://i.ibb.co/D5GBVk5/DSC07132-s.jpg",
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/dark-flames",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Darkf1ames",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto: darkf1ames@pm.me",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Darkflames Blog" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
