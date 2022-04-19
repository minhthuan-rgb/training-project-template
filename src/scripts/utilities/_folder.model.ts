/* eslint-disable import/no-unresolved */
import Base from './_base.model';

export default class Folder extends Base {
  subFolders: Folder;

  constructor(
    id: number = 0,
    name: string = '',
    createAt: string = '',
    createdBy: string = '',
    modifiedAt: string = '',
    modifiedBy: string = '',
    subFolders: Folder = null,
  ) {
    super(id, name, createAt, createdBy, modifiedAt, modifiedBy);
    this.subFolders = subFolders;
  }
}
