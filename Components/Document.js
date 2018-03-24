import Head from 'next/head';
import * as React from 'react';
import withEmotion from '../higher-order/withEmotion';

class Document extends React.Component {
  static defaultProps = {
    title: "Jay's Blog",
    description:
      "Kansas City Web Developer Jay Sullivan's blog. It is built with NextJS, Postgres with Sequelize, and React with Redux",
  };

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <meta name="sourceApp" content="mobileWeb" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
        </Head>
        {this.props.children}
      </div>
    );
  }
}

export default withEmotion()(Document);
