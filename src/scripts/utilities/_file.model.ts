/* eslint-disable import/no-unresolved */
import Base from './_base.model';

export default class CFile extends Base {
  extension: string;

  constructor(
    id: number = 0,
    name: string = '',
    createdAt: string = 'A few second ago',
    createdBy: string = '',
    modifiedAt: string = 'Never',
    modifiedBy: string = 'None',
    extension: string = '',
  ) {
    super(id, name, createdAt, createdBy, modifiedAt, modifiedBy);
    this.extension = extension;
  }
}
