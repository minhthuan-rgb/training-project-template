/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Client from '../utilities/_client';

const renderGrid = () => {
  const modal: HTMLElement = document.querySelector('#formModal');
  const closeBtns: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.modal .btn-close',
  );
  const newFolder: HTMLElement = document.querySelector('#newFolder');
  const newFile: HTMLElement = document.querySelector('#newFile');
  const uploadModal: HTMLElement = document.querySelector(
    '#uploadModal',
  );
  const closeBtn: HTMLElement = document.querySelector(
    '.upload .btn-close',
  );
  const uploadFile: HTMLElement = document.querySelector(
    '#uploadFile',
  );
  const client = new Client();

  client.getAllItem();

  closeBtns.forEach(btn => {
    btn.onclick = () => {
      modal.style.display = 'none';
    };
  });

  newFolder.onclick = () => {
    client.openModal(false, true, null);
  };

  newFile.onclick = () => {
    client.openModal(true, true, null);
  };

  closeBtn.onclick = () => {
    uploadModal.style.display = 'none';
  };

  uploadFile.onclick = () => {
    client.openUpload();
  };
};

export default renderGrid;
