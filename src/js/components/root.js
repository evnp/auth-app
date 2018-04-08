import React from 'react';

import PureRenderComponent from './pure-render';
import App from './app';

import '../../style/components/root.styl';

export default class extends PureRenderComponent {
  render = () =>
    <div className="app-component">
      <App {...this.props} />
    </div>
}
