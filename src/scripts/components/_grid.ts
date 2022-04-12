/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Client from '../utilities/_client';

const renderGrid = () => {
  const client = new Client();

  client.getAllItem();

  const modal: HTMLElement = document.querySelector('#formModal');

  const closeBtns: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.modal .btn-close',
  );

  closeBtns.forEach(btn => {
    btn.onclick = () => {
      modal.style.display = 'none';
    };
  });

  const newFolder: HTMLElement = document.querySelector('#newFolder');

  const newFile: HTMLElement = document.querySelector('#newFile');

  newFolder.onclick = () => {
    client.openModal(false, true, null);
  };

  newFile.onclick = () => {
    client.openModal(true, true, null);
  };
};

export default renderGrid;
