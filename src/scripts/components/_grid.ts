/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Client from '../utilities/_client';

const renderGrid = () => {
  const client = new Client();

  client.getAllItem();
};

export default renderGrid;
