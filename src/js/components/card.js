import React from 'react';

import PureRenderComponent from './pure-render';

import '../../style/components/card.styl';

export default class Card extends PureRenderComponent {
  render = () =>
    <div
     className="card-component"
     onClick={this.launch}
     style={{ 'margin-top': -this.props.state.payload * 10 }}
    >
      Payload: {this.props.state.payload}
    </div>

  launch = () => this.props.dispatch.launch(this.props.state.payload + 1)
}
