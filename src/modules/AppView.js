import React from 'react';

import Navigator from './navigation/Navigator';

export default function AppView(props) {
  console.warn(props.item);
  return <Navigator onNavigationStateChange={() => {}} uriPrefix="/app" />;
}
