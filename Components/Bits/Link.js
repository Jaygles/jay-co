import * as React from 'react';
import * as Text from './Text';
import Link from 'next/link';

export default class CustomLink extends React.Component {
  render() {
    const { target } = this.props;
    if (this.props.onClick) {
      return (
        <span
          className={this.props.className}
          style={this.props.style}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </span>
      );
    }

    return (
      <Link href={this.props.href} as={this.props.as}>
        <a
          target={target}
          className={this.props.className}
          style={this.props.style}
        >
          {this.props.children}
        </a>
      </Link>
    );
  }
}