import React from 'react';
import ReactRouter from 'react-router';
import routes from './routes';


ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root) {
  React.render(<Root/>, document.getElementById('app'));
});
