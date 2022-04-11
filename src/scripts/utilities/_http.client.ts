/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import CFile from './_file.model';
import Folder from './_folder.model';

export default class HttpClient {
  constructor() {
    this.initialItemList();
  }

  getAllItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = JSON.parse(sessionStorage.getItem('data'));
        if (result) resolve(Array.from(result));
        else reject('No Data');
      }, 1000);
    });
  };

  getItemById = (id: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result: Array<Folder | CFile> = JSON.parse(
          sessionStorage.getItem('data'),
        );
        const foundItem = result.find(item => item.id === id);
        if (foundItem) resolve(foundItem);
        else reject('Not Found');
      }, 1000);
    });
  };

  addItem = (addItem: Folder | CFile) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result: Array<Folder | CFile> = JSON.parse(
          sessionStorage.getItem('data'),
        );
        if (result.find(item => item.name === addItem.name))
          reject('Item Already Exists!');
        else {
          result.push(addItem);
          sessionStorage.setItem('data', JSON.stringify(result));
          resolve('Successfully Added!');
        }
      }, 1000);
    });
  };

  updateItem = (upItem: Folder | CFile) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result: Array<Folder | CFile> = JSON.parse(
          sessionStorage.getItem('data'),
        );
        const foundItem = result.find(item => item.id === upItem.id);
        if (foundItem) {
          const index = result.indexOf(foundItem);
          [
            result[index].name,
            result[index].createdAt,
            result[index].createdBy,
            result[index].modifiedAt,
            result[index].modifiedBy,
          ] = [
            upItem.name,
            upItem.createdAt,
            upItem.createdBy,
            upItem.modifiedAt,
            upItem.modifiedBy,
          ];
          sessionStorage.setItem('data', JSON.stringify(result));
          resolve('Successfully Updated!');
        } else reject('Item Not Found!');
      }, 1000);
    });
  };

  removeItem = (id: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result: Array<Folder | CFile> = JSON.parse(
          sessionStorage.getItem('data'),
        );
        const foundItem = result.find(item => item.id === id);
        if (foundItem) {
          result.splice(result.indexOf(foundItem), 1);
          sessionStorage.setItem('data', JSON.stringify(result));
          resolve('Successfully Deleted!');
        } else reject('Item Not Found!');
      }, 1000);
    });
  };

  initialItemList = () => {
    const data = [];

    const item1 = new Folder(
      1,
      'CAS',
      'April 08',
      'Minh Thuan',
      'April 30',
      'Megan Bowen',
    );

    const item2 = new CFile(
      2,
      'CoasterAndBargeLoading.xlsx',
      'April 08',
      'Minh Thuan',
      'A few seconds ago',
      'Administrator',
      'xlsx',
    );

    const item3 = new CFile(
      3,
      'RevenueByServices.xlsx',
      'April 08',
      'Minh Thuan',
      'A few seconds ago',
      'Administrator',
      'xlsx',
    );

    const item4 = new CFile(
      4,
      'RevenueByServices2016.xlsx',
      'April 08',
      'Minh Thuan',
      'A few seconds ago',
      'Administrator',
      'xlsx',
    );

    const item5 = new CFile(
      5,
      'RevenueByServices2017.xlsx',
      'April 08',
      'Minh Thuan',
      'A few seconds ago',
      'Administrator',
      'xlsx',
    );

    data.push(item1);
    data.push(item2);
    data.push(item3);
    data.push(item4);
    data.push(item5);

    sessionStorage.setItem('data', JSON.stringify(data));
  };
}
