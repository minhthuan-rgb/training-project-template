/* eslint-disable no-shadow */
/* eslint-disable no-else-return */
/* eslint-disable no-throw-literal */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import CFile from './_file.model';
import Folder from './_folder.model';

export default class HttpClient {
  constructor() {
    this.initialItemList();
  }

  getAllItems = () => {
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
        else reject('Item Not Found');
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
          addItem.id = result.length + 1;
          result.push(addItem);
          sessionStorage.setItem('data', JSON.stringify(result));
          resolve('Successfully Added!');
        }
      }, 1000);
    });
  };

  updateItem = (upItem: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result: Array<any> = JSON.parse(
          sessionStorage.getItem('data'),
        );
        const foundItem = result.find(item => item.id === upItem.id);
        if (foundItem) {
          const index = result.indexOf(foundItem);
          result[index].name = upItem.name;
          result[index].createdAt = upItem.createdAt;
          result[index].createdBy = upItem.createdBy;
          result[index].modifiedAt = upItem.modifiedAt;
          result[index].modifiedBy = upItem.modifiedBy;

          if (upItem.hasOwnProperty('extension'))
            result[index].extension = upItem.extension;
          else result[index].subFolders = upItem.subFolders;
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

  getFolderItems = async (id: number) => {
    const mockDelay = async () => {
      return new Promise(resolve =>
        setTimeout(() => resolve('abc'), 1000),
      );
    };

    await mockDelay();

    const result: Array<Folder | CFile> = JSON.parse(
      sessionStorage.getItem('data'),
    );

    let folderItems = result.filter(
      item => !item.hasOwnProperty('extension') && item.id !== id,
    );

    folderItems = folderItems.filter(
      (folder: Folder) =>
        !folder.subFolders.find(subFolder => subFolder.id === id),
    );

    if (folderItems) return folderItems;
    else throw 'No Folder Item Found.';
  };
}
