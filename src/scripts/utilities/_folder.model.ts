/* eslint-disable import/no-unresolved */
import Base from './_base.model';

export default class Folder extends Base {
  subFolders: Array<Folder>;

  constructor(
    id: number,
    name: string,
    createAt: string,
    createdBy: string,
    modifiedAt: string,
    modifiedBy: string,
    subFolders: Array<Folder> = [],
  ) {
    super(id, name, createAt, createdBy, modifiedAt, modifiedBy);
    this.subFolders = subFolders;
  }
}
