import React from 'react';

import PureRenderComponent from './pure-render';
import Auth from './auth';
import Card from './card';

export default class App extends PureRenderComponent {
  render = () =>
    <div className="app-component">
      <Auth {...this.props} />
      {this.props.state.user && <Card {...this.props} />}
    </div>
}
