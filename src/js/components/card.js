import React from 'react';

import PureRenderComponent from './pure-render';

import '../../style/components/card.styl';

export default class Card extends PureRenderComponent {
  render = () =>
    <div className="card-component">
      {this.props.state.user &&
        <div>{this.props.state.user.email}</div>
      }
    </div>
}
