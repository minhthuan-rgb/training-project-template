/* eslint-disable no-shadow */
/* eslint-disable no-constant-condition */
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

  isEdit: boolean = true;

  isFile: boolean = true;

  item: any;

  constructor() {
    this.httpClient = new HttpClient();
    this.httpClient.initialItemList();
  }

  getAllItem = () => {
    this.httpClient
      .getAllItems()
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

    document.querySelector('#itemList').innerHTML = html;

    const deleteBtns: NodeListOf<HTMLElement> = document.querySelectorAll(
      '.btn-delete',
    );
    const editBtns: NodeListOf<HTMLElement> = document.querySelectorAll(
      '.btn-edit',
    );

    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener('click', () => {
        this.deleteItem(itemList[i].id);
      });
      editBtns[i].addEventListener('click', () => {
        this.openModal(
          itemList[i].hasOwnProperty('extension'),
          false,
          itemList[i],
        );
      });
    }
  };

  openModal(isFile: boolean, isNew: boolean, item: Folder | CFile) {
    let htmlBodyLastChild = 'abc';
    if (!isFile) {
      this.item = new Folder(0, '', '', '', '', '', []);
      this.isFile = false;
      if (isNew) {
        this.isEdit = false;
        [
          this.item.id,
          this.item.name,
          this.item.createdAt,
          this.item.createdBy,
          this.item.modifiedAt,
          this.item.modifiedBy,
          this.item.subFolders,
        ] = [
          0,
          'Test Folder',
          'A few seconds ago',
          'Minh Thuan',
          'A few seconds ago',
          'Minh Thuan',
          [],
        ];
      } else {
        this.isEdit = true;
        this.item = item;
      }

      this.httpClient
        .getFolderItems(this.item.id)
        .then((data: Array<Folder>) => {
          htmlBodyLastChild = `<div class="form-group">
                                <p>Sub Folders</p>`;
          data.forEach(item => {
            htmlBodyLastChild += `<label>
                                    <input name="folderId" type="checkbox" class="input-checkbox" value="${item.id}">${item.name}
                                  </label>`;
          });
          htmlBodyLastChild += `</div>`;
        })
        .catch(error => {
          console.log(error);
          htmlBodyLastChild = `<div class="form-group">
                                <p>Sub Folders</p>
                                <p>None</p>
                              </div>`;
        });

      console.log(htmlBodyLastChild);
    } else {
      this.isFile = true;
      this.item = new CFile(0, '', '', '', '', '', '');
      if (isNew) {
        [
          this.item.id,
          this.item.name,
          this.item.createdAt,
          this.item.createdBy,
          this.item.modifiedAt,
          this.item.modifiedBy,
          this.item.extension,
        ] = [
          0,
          'Test File',
          'A few seconds ago',
          'Minh Thuan',
          'A few seconds ago',
          'Minh Thuan',
          'xlsx',
        ];
      } else {
        this.isEdit = true;
        this.item = item;
      }
      htmlBodyLastChild = `<div class="form-group">
                            <label for="extension">Extension</label>
                            <input
                              class="form-control"
                              id="extension"
                              type="text"
                              name="Extension"
                              value="${this.item.extension}"
                            />
                          </div>`;
    }

    // Header config
    const headerText = `${this.isEdit ? 'Update' : 'Add New'} ${
      this.isFile ? 'File' : 'Folder'
    } ${this.isEdit ? this.item.id : ''}`;

    document.querySelector('#modalHeader').textContent = headerText;

    // Body config
    let htmlBody = `<div class="form-group">
                      <label for="itemId">ID</label>
                      <input
                        class="form-control"
                        id="itemId"
                        type="number"
                        name="ID"
                        disabled
                        value="${this.item.id}"
                      />
                    </div>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        class="form-control"
                        id="name"
                        type="text"
                        name="Name"
                        value="${this.item.name}"
                      />
                    </div>
                    <div class="form-group">
                    <label for="modifiedAt">Modified At</label>
                    <input
                      class="form-control"
                      id="modifiedAt"
                      type="text"
                      name="ModifiedAt"
                      disabled
                      value="${this.item.modifiedAt}"
                    />
                  </div>
                  <div class="form-group">
                    <label for="modifiedBy">Modified By</label>
                    <input
                      class="form-control"
                      id="modifiedBy"
                      type="text"
                      name="ModifiedBy"
                      value="${this.item.modifiedBy}"
                    />
                  </div>
                  <div class="form-group">
                    <label for="createdAt">Created At</label>
                    <input
                      class="form-control"
                      id="createdAt"
                      type="text"
                      name="CreateAt"
                      disabled
                      value="${this.item.createdAt}"
                    />
                  </div>
                  <div class="form-group">
                    <label class="" for="createdBy">Created By</label>
                    <input
                      class="form-control"
                      id="createdBy"
                      type="text"
                      name="CreateBy"
                      value="${this.item.createdBy}"
                    />
                  </div>`;

    htmlBody += htmlBodyLastChild;

    document.querySelector('#modalForm').innerHTML = htmlBody;

    if (!this.isEdit)
      document
        .querySelector('#modalForm .form-group:first-child')
        .setAttribute('style', 'display: none;');

    // Footer config
    const btnConfirm: HTMLElement = document.querySelector(
      '#modalFooter #btnConfirm',
    );
    btnConfirm.textContent = this.isEdit ? 'Save' : 'Add';

    btnConfirm.onclick = () => {
      btnConfirm.setAttribute('style', 'cursor: not-allowed;');
      const itemId: HTMLInputElement = document.querySelector(
        '#itemId',
      );
      const name: HTMLInputElement = document.querySelector('#name');
      const createdAt: HTMLInputElement = document.querySelector(
        '#createdAt',
      );
      const createdBy: HTMLInputElement = document.querySelector(
        '#createdBy',
      );
      const modifiedAt: HTMLInputElement = document.querySelector(
        '#modifiedAt',
      );
      const modifiedBy: HTMLInputElement = document.querySelector(
        '#modifiedBy',
      );
      [
        this.item.id,
        this.item.name,
        this.item.createdAt,
        this.item.createdBy,
        this.item.modifiedAt,
        this.item.modifiedBy,
      ] = [
        +itemId.value,
        name.value,
        createdAt.value,
        createdBy.value,
        modifiedAt.value,
        modifiedBy.value,
      ];

      if (this.isFile) {
        const extension: HTMLInputElement = document.querySelector(
          '#extension',
        );
        this.item.extension = extension.value;
      } else {
        const subFolders: HTMLInputElement = document.querySelector(
          '#subFolders',
        );
        this.item.subFolders = subFolders.value;
      }

      if (this.isEdit) {
        this.updateItem();
      } else {
        this.addItem();
      }
    };

    // Show Modal
    document
      .querySelector('#formModal')
      .setAttribute('style', 'display: block;');
  }

  addItem = () => {
    this.httpClient
      .addItem(this.item)
      .then(message => {
        this.reloadModal();
        alert(message);
      })
      .catch(error => {
        alert(error);
      });
  };

  updateItem = () => {
    this.httpClient
      .updateItem(this.item)
      .then(message => {
        this.reloadModal();
        alert(message);
      })
      .catch(error => {
        alert(error);
      });
  };

  deleteItem = (id: number) => {
    if (confirm('Are you sure to delete this item?')) {
      this.httpClient
        .removeItem(id)
        .then(message => {
          alert(message);
        })
        .catch(error => {
          alert(error);
        });
      this.getAllItem();
    }
  };

  reloadModal = () => {
    this.getAllItem();
    document
      .querySelector('#formModal')
      .setAttribute('style', 'display: none;');
    document
      .querySelector('#modalFooter #btnConfirm')
      .setAttribute('style', 'cursor: pointer;');
  };
}
