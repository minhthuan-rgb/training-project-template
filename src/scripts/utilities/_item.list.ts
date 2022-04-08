/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import File from './_file.model';
import Folder from './_folder.model';

export default class ItemList {
  itemList: Array<Folder | File>;

  constructor() {
    this.itemList = [];
  }

  getAllItem() {
    return this.itemList;
  }

  getItemById(id: number): any {
    this.itemList.forEach(item => {
      if (item.id === id) {
        return item;
      }
    });
    return null;
  }

  addItem = (item: Folder | File) => {
    this.itemList.push(item);
  };

  removeItem = (id: number) => {
    for (let i = 0; i < this.itemList.length; ++i) {
      if (this.itemList[i].id === id) {
        this.itemList.splice(i, 1);
      }
    }
  };

  updateItem = (upItem: Folder | File) => {
    this.itemList.forEach(item => {
      if (item.id === upItem.id) {
        item.name = upItem.name;
        item.createdAt = upItem.createdAt;
        item.createdBy = upItem.createdBy;
        item.modifiedAt = upItem.modifiedAt;
        item.modifiedBy = upItem.modifiedBy;
      }
    });
  };
}
