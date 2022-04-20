/* eslint-disable import/no-unresolved */
import Base from './_base.model';

export default class Folder extends Base {
  subFolderId: number;

  constructor(
    id: number = 0,
    name: string = '',
    createdAt: string = '',
    createdBy: string = '',
    modifiedAt: string = '',
    modifiedBy: string = '',
    subFolderId: number = 0,
  ) {
    super(id, name, createdAt, createdBy, modifiedAt, modifiedBy);
    this.subFolderId = subFolderId;
  }
}
