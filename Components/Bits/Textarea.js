import * as React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import { css } from 'react-emotion';

const textareaStyles = css`
  width: 100%;
  margin-top: 20px;
  resize: none;
  outline: 0;
  border: 0;
  background-color: #f9f9f9;
  font-family: 'IBM Plex Serif', serif;
  &:focus {
    outline: 0;
    border: 0;
  }
`;

export default class Textarea extends React.Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    fontSize: PropTypes.string,
    height: PropTypes.number,
    fontWeight: PropTypes.number,
  };

  static defaultProps = {
    autoFocus: false,
    onChange: () => {},
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    height: 24,
  };

  _textarea = undefined;

  state = {
    height: this.props.height,
  };

  componentDidMount() {
    const { scrollHeight } = this._textarea;
    this.setState({
      height:
        scrollHeight > this.props.height ? scrollHeight : this.props.height,
    });

    if (this.props.autoFocus) {
      this._textarea.focus();
    }
  }

  _handleChange = (e) => {
    const { scrollHeight } = this._textarea;
    if (scrollHeight - this.state.height > 10) {
      this.setState({
        height:
          scrollHeight > this.state.height ? scrollHeight : this.state.height,
      });
    }
    this.props.onChange(e);
  };

  render() {
    const style = {
      minHeight: this.state.height,
      fontSize: this.props.fontSize,
      fontWeight: this.props.fontWeight,
      lineHeight: this.props.lineHeight,
    };

    return (
      <textarea
        style={style}
        ref={(c) => (this._textarea = c)}
        autoComplete="off"
        className={textareaStyles}
        placeholder={this.props.placeholder}
        onChange={this._handleChange}
        value={this.props.value}
        name={this.props.name}
      />
    );
  }
}
