import * as React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import { css } from 'react-emotion';

const baseStyles = css`
  position: relative;
`;

const inputStyles = css`
  width: 100%;
  outline: 0;
  border: 0;
  border-bottom: 1px dashed #ececec;
  padding: 40px 0 16px 0;
  font-family: 'IBM Plex Serif', serif;
  font-size: 16px;
  background-color: #f9f9f9;
  &:focus {
    border: 0;
    border-bottom: 1px dashed #0000ff;
  }
`;

export default class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    onKeyUp: () => {},
  };

  _handleKeyUp = (e) => {
    if (e.which === 13) {
      this.props.onSubmit(e);
      return;
    }

    this.props.onKeyUp(e);
  };

  componentDidMount = () => {
    if (this.props.autoFocus) {
      this.refs.input.focus();
    }
  };

  render() {
    return (
      <div className={baseStyles}>
        {this.props.label ? <Label>{this.props.label}</Label> : undefined}
        <input
          ref="input"
          autoComplete="off"
          className={inputStyles}
          onChange={this.props.onChange}
          onKeyUp={this._handleKeyUp}
          placeholder={this.props.placeholder}
          value={this.props.value}
          name={this.props.name}
          type={this.props.type}
        />
      </div>
    );
  }
}
