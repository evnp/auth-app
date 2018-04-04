import React from 'react';

import PureRenderComponent from './pure-render';
import Card from './card';

import '../../style/components/root.styl';

export default class Root extends PureRenderComponent {
  render = () =>
    <div className="root-component">
      <Card {...this.props} />
    </div>
}
