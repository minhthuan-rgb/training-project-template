/* eslint-disable import/no-unresolved */
import Base from './_base.model';

export default class CFile extends Base {
  extension: string;

  constructor(
    id: number = 0,
    name: string = '',
    createdAt: string = '',
    createdBy: string = '',
    modifiedAt: string = '',
    modifiedBy: string = '',
    extension: string = '',
  ) {
    super(id, name, createdAt, createdBy, modifiedAt, modifiedBy);
    this.extension = extension;
  }
}
