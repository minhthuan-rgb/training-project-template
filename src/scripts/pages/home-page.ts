/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import Folder from '../utilities/_folder.model';
import File from '../utilities/_file.model';
import ItemList from '../utilities/_item.list';

ready(() => {
  const initialItemList = (list: ItemList) => {
    const item1 = new Folder(
      1,
      'CAS',
      'April 08',
      'Minh Thuan',
      'April 30',
      'Megan Bowen',
    );

    const item2 = new File(
      2,
      'CoasterAndBargeLoading.xlsx',
      'April 08',
      'Minh Thuan',
      'A few seconds ago',
      'Administrator',
      'xlsx',
    );

    const item3 = new File(
      3,
      'RevenueByServices.xlsx',
      'April 08',
      'Minh Thuan',
      'A few seconds ago',
      'Administrator',
      'xlsx',
    );

    const item4 = new File(
      4,
      'RevenueByServices2016.xlsx',
      'April 08',
      'Minh Thuan',
      'A few seconds ago',
      'Administrator',
      'xlsx',
    );

    const item5 = new File(
      5,
      'RevenueByServices2017.xlsx',
      'April 08',
      'Minh Thuan',
      'A few seconds ago',
      'Administrator',
      'xlsx',
    );

    list.addItem(item1);
    list.addItem(item2);
    list.addItem(item3);
    list.addItem(item4);
    list.addItem(item5);
  };

  const baseItemList = new ItemList();
  initialItemList(baseItemList);

  sessionStorage.setItem(
    'ItemList',
    JSON.stringify(baseItemList.itemList),
  );

  console.log(JSON.parse(sessionStorage.getItem('ItemList')));
  renderGrid();
});
