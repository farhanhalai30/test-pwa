import React, { Component } from "react";
import Router from "next/router";
import Head from "next/head";

class Header extends Component {
  state = { loading: false };

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      this.setState({ loading: true });
    };
    Router.onRouteChangeComplete = () => {
      this.setState({ loading: false });
    };
    Router.onRouteChangeError = () => {
      this.setState({ loading: false });
    };
  }

  render() {
    return (
      <div className="header">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="An example PWA" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#302ecd" />
          <title>Sentimeta PWA</title>
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="/.next/static/style.css" />
        </Head>
        <Loader loading={this.state.loading} />
      </div>
    );
  }
}

const Loader = ({ loading }) => (
  <div className={loading ? "loading-show" : ""} id="loader-bar" />
);

export default Header;
