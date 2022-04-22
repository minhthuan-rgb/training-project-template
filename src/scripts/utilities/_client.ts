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

  // #region ItemList
  getAllItem = async () => {
    document.querySelector('#itemList').innerHTML = '';
    this.itemList = await this.httpClient.getAllItemsFromAPI();
    this.renderItemList();
  };

  renderItemList = () => {
    // const html = items.map ((item) => `html`).join('');
    let html = '';

    this.itemList.forEach(item => {
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
        this.deleteItem(
          this.itemList[i].id,
          this.itemList[i].hasOwnProperty('extension'),
        );
      });
      editBtns[i].addEventListener('click', () => {
        this.openModal(
          this.itemList[i].hasOwnProperty('extension'),
          false,
          this.itemList[i],
        );
      });
    }
  };
  //#endregion

  // #region Form Modal
  openModal = (
    isFile: boolean,
    isNew: boolean,
    item: Folder | CFile,
  ) => {
    let htmlBodyLastChild = '';
    if (!isFile) {
      this.item = new Folder();
      this.isFile = false;
      if (isNew) {
        this.isEdit = false;
        this.item.createdBy = document.querySelector(
          '#username',
        ).textContent;
      } else {
        this.isEdit = true;
        this.item = item;
      }

      htmlBodyLastChild = `<div class="form-group">
                            <p>Sub Folders</p>`;

      this.folderList = this.itemList.filter(
        item =>
          !item.hasOwnProperty('extension') &&
          item.id !== this.item.id,
      );

      if (this.folderList.length > 0) {
        htmlBodyLastChild += `<select id="subFolders" name="subFolders" class="form-control">
                                <option selected value="none">None</option>`;
        this.folderList.forEach(item => {
          htmlBodyLastChild += `<option value="${item.id}" ${
            this.item.subFolderId !== 0
              ? this.item.subFolderId === item.id
                ? 'selected'
                : ''
              : ''
          }>${item.name}</option>`;
        });
        htmlBodyLastChild += `</select>`;
      } else {
        htmlBodyLastChild += `<p>None</p>`;
      }

      htmlBodyLastChild += `</div>
                          </div>`;
    } else {
      this.isFile = true;
      this.item = new CFile();
      if (isNew) {
        this.isEdit = false;
        this.item.createdBy = document.querySelector(
          '#username',
        ).textContent;
        [this.item.name, this.item.extension] = this.splitFileName(
          'TestFile.xlsx',
        );
      } else {
        this.isEdit = true;
        this.item = item;
        [this.item.name, this.item.extension] = this.splitFileName(
          this.item.name,
        );
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
  };

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
                      disabled
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
                      disabled
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

    this.item.id = +itemId.value;
    this.item.name = name.value;
    this.item.createdAt = createdAt.value;
    this.item.createdBy = createdBy.value;
    this.item.modifiedAt = 'A few seconds ago';
    this.item.modifiedBy = document.querySelector(
      '#username',
    ).textContent;

    if (this.isFile) {
      const extension: HTMLInputElement = document.querySelector(
        '#extension',
      );
      this.item.extension = extension.value;
      this.item.name = `${this.item.name}.${this.item.extension}`;
    } else {
      if (this.folderList.length > 0) {
        const subFolders = Array.from(
          <HTMLOptionsCollection>(
            document.querySelector('#subFolders').children
          ),
        );
        subFolders.forEach(subFolder => {
          if (subFolder.selected === true) {
            if (subFolder.value === 'none') this.item.subFolderId = 0;
            else this.item.subFolderId = +subFolder.value;
          }
        });
      } else this.item.subFolderId = 0;
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
  // #endregion

  //#region Upload Modal
  openUpload = () => {
    document
      .querySelector('#uploadModal')
      .setAttribute('style', 'display: block;');

    const btnUpload: HTMLElement = document.querySelector(
      '#btnUpload',
    );

    btnUpload.onclick = () => {
      btnUpload.setAttribute('disabled', 'true');
      this.confirmUpload();
    };
  };

  confirmUpload = () => {
    const myFile: HTMLInputElement = document.querySelector(
      '#myFile',
    );
    this.item = new CFile();
    [this.item.name, this.item.extension] = this.splitFileName(
      myFile.files[0].name,
    );
    this.item.createdBy = document.querySelector(
      '#username',
    ).textContent;
    this.item.name = `${this.item.name}.${this.item.extension}`;
    this.addItem();
  };

  hideUpload = () => {
    document
      .querySelector('#uploadModal')
      .setAttribute('style', 'display: none;');
    (<HTMLInputElement>document.querySelector('#myFile')).value = '';
    this.reloadUploadBtn();
  };

  reloadUploadBtn = () => {
    document
      .querySelector('#btnUpload')
      .removeAttribute('disabled');
  };

  //#endregion

  // #region Method
  addItem = async () => {
    await this.httpClient.addItemToAPI(this.item).then(message => {
      if (message === true) {
        this.hideUpload();
        this.hideModal();
        alert('Successfully Added');
      } else {
        this.reloadModalBtn();
        this.reloadUploadBtn();
        alert('Unsuccessfully Add');
      }
    });
  };

  updateItem = async () => {
    await this.httpClient.updateItemToAPI(this.item).then(message => {
      if (message === true) {
        this.hideModal();
        alert('Successfully Updated');
      } else {
        this.reloadModalBtn();
        alert('Unsuccessfully Update');
      }
    });
  };

  deleteItem = async (id: number, isFile: boolean) => {
    if (confirm('Are you sure to delete this item?')) {
      await this.httpClient
        .removeItemToAPI(id, isFile)
        .then(message => {
          if (message === true) alert('Successfully Deleted');
          else alert('Unsuccessfully Delete');
        });
      this.getAllItem();
    }
  };

  splitFileName(fullName: string) {
    return [
      fullName.slice(0, fullName.lastIndexOf('.')),
      fullName.slice(fullName.lastIndexOf('.') + 1),
    ];
  }

  // function to test async/ await
  getFolderItems = async () => {
    try {
      this.folderList = await this.httpClient.getFolderItems(
        this.item.id,
      );
      console.log(this.folderList);
    } catch (ex) {
      alert(ex);
    }
  };
  // #endregion
}
