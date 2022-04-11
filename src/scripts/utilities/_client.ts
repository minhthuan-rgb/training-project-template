/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-prototype-builtins */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
import CFile from './_file.model';
import Folder from './_folder.model';
import HttpClient from './_http.client';

export default class Client {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
    this.httpClient.initialItemList();
  }

  getAllItem = () => {
    this.httpClient
      .getAllItem()
      .then((data: Array<Folder | CFile>) => {
        this.renderItemList(data);
      })
      .catch(error => {
        alert(error);
      });
  };

  renderItemList = (itemList: Array<Folder | CFile>) => {
    // const html = items.map ((item) => `html`).join('');

    let html = '';

    itemList.forEach(item => {
      const iconClass = item.hasOwnProperty('extension')
        ? 'fa-file-excel'
        : 'fa-folder-open';
      const recentHint =
        item.modifiedAt === 'A few seconds ago'
          ? '<i class="fab fa-yelp"></i>'
          : '';

      html += `<tr>
                <td><i class="fas ${iconClass}"></i></td>
                <td>${recentHint}${item.name}</td>
                <td>${item.modifiedAt}</td>
                <td>${item.modifiedBy}</td>
                <td>
                  <button class="btn btn-edit">Edit</button>
                  <button class="btn btn-delete">Delete</button>
                </td>
                <td></td>
              </tr>`;
    });

    document.querySelector('#item-list').innerHTML = html;

    const deleteBtns = document.querySelectorAll('.btn-delete');
    const editBtns = document.querySelectorAll('.btn-edit');

    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener('click', () => {
        if (confirm('Are you sure to delete this item?')) {
          this.httpClient
            .removeItem(itemList[i].id)
            .then(message => {
              alert(message);
            })
            .catch(error => {
              alert(error);
            });
          this.getAllItem();
        }
      });
      editBtns[i].addEventListener('click', () => {
        console.log('Edit');
      });
    }
  };
}
