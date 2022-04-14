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

  itemList: Array<Folder | CFile>;

  folderList: Array<Folder | CFile>;

  constructor() {
    this.httpClient = new HttpClient();
    this.httpClient.initialItemList();
  }

  getAllItem = () => {
    this.httpClient
      .getAllItems()
      .then((data: Array<Folder | CFile>) => {
        this.renderItemList(data);
        this.itemList = data;
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

  openModal = (isFile: boolean, isNew: boolean, item: Folder | CFile) => {
    let htmlBodyLastChild = '';
    if (!isFile) {
      this.item = new Folder(0, '', '', '', '', '', []);
      this.isFile = false;
      if (isNew) {
        this.isEdit = false;
        this.item.id = 0;
        this.item.name = 'Test Folder';
        this.item.createdAt = 'A few seconds ago';
        this.item.createdBy = 'Minh Thuan';
        this.item.modifiedAt = 'A few seconds ago';
        this.item.modifiedBy = 'Minh Thuan';
        this.item.subFolders = [];
      } else {
        this.isEdit = true;
        this.item = item;
      }

      htmlBodyLastChild = `<div class="form-group">
                            <p>Sub Folders</p>
                            <div class="form-control">`;

      this.folderList = this.itemList.filter(
        item =>
          !item.hasOwnProperty('extension') &&
          item.id !== this.item.id,
      );

      this.folderList = this.folderList.filter(
        (folder: Folder) =>
          !folder.subFolders.find(
            subFolder => subFolder.id === this.item.id,
          ),
      );

      console.log(this.folderList);

      if (this.folderList.length > 0) {
        this.folderList.forEach(item => {
          htmlBodyLastChild += `<label>
                                  <input name="subFolder" type="checkbox" class="input-checkbox" value="${
                                    item.id
                                  }" ${
            this.item.subFolders.find(
              (folder: Folder) => folder.id === item.id,
            )
              ? 'checked'
              : ''
          }>${item.name}
                                </label>`;
        });
      } else {
        htmlBodyLastChild += `<p>None</>`;
      }

      htmlBodyLastChild += `</div>
                          </div>`;
    } else {
      this.isFile = true;
      this.item = new CFile(0, '', '', '', '', '', '');
      if (isNew) {
        this.isEdit = false;
        this.item.id = 0;
        this.item.name = 'TestFile.xlsx';
        this.item.createdAt = 'A few seconds ago';
        this.item.createdBy = 'Minh Thuan';
        this.item.modifiedAt = 'A few seconds ago';
        this.item.modifiedBy = 'Minh Thuan';
        this.item.extension = this.getExtension(this.item.name);
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

    this.renderModal(htmlBodyLastChild);

    // Show Modal
    document
      .querySelector('#formModal')
      .setAttribute('style', 'display: block;');
  }

  renderModal = (htmlBodyLastChild: string) => {
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
      this.confirmModal();
    };
  };

  confirmModal = () => {
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
    this.item.id = +itemId.value;
    this.item.name = name.value;
    this.item.createdAt = createdAt.value;
    this.item.createdBy = createdBy.value;
    this.item.modifiedAt = modifiedAt.value;
    this.item.modifiedBy = modifiedBy.value;

    if (this.isFile) {
      const extension: HTMLInputElement = document.querySelector(
        '#extension',
      );
      extension.value = this.getExtension(this.item.name);
      this.item.extension = extension.value;
    } else {
      const subFolders = document.getElementsByName('subFolder');

      subFolders.forEach(subFolder => {
        const temp = <HTMLInputElement>subFolder;
        let subFolders: Array<Folder> = [];
        if (temp.checked === true) {
          subFolders.push(
            <Folder>(
              this.folderList.find(
                folder => folder.id === +temp.value,
              )
            ),
          );
        }
        this.item.subFolders = subFolders;
      });
    }

    if (this.isEdit) this.updateItem();
    else this.addItem();
  };

  hideModal = () => {
    this.getAllItem();
    document
      .querySelector('#formModal')
      .setAttribute('style', 'display: none;');
    this.reloadModalBtn();
  };

  reloadModalBtn = () => {
    document
      .querySelector('#modalFooter #btnConfirm')
      .setAttribute('style', 'cursor: pointer;');
  };

  addItem = () => {
    this.httpClient
      .addItem(this.item)
      .then(message => {
        this.hideModal();
        alert(message);
      })
      .catch(error => {
        this.reloadModalBtn();
        alert(error);
      });
  };

  updateItem = () => {
    this.httpClient
      .updateItem(this.item)
      .then(message => {
        this.hideModal();
        alert(message);
      })
      .catch(error => {
        this.reloadModalBtn();
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

  getExtension(fileName: string){
    return fileName.slice(fileName.lastIndexOf('.') + 1);
  }

  // function to test async/ await
  getFolderItems = async () => {
    try {
      this.folderList = await this.httpClient.getFolderItems(this.item.id);
      console.log(this.folderList);
    } catch (ex) {
      alert(ex);
    }
  };
}
