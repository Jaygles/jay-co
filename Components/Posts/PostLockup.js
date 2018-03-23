import * as React from 'react';
import * as Strings from '../../common/strings';
import * as Text from '../Text';
import BorderedItem from '../BorderedItem';

export default class PostLockup extends React.Component {
  render() {
    return (
      <aside style={{ marginTop: 8 }}>
        <BorderedItem>
          <strong>{Strings.toDate(this.props.createdAt)}</strong>
        </BorderedItem>
      </aside>
    );
  }
}
