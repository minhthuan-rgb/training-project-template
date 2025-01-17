export default class Base {
  id: number;

  name: string;

  createdAt: string;

  createdBy: string;

  modifiedAt: string;

  modifiedBy: string;

  constructor(
    id: number,
    name: string,
    createdAt: string,
    createdBy: string,
    modifiedAt: string,
    modifiedBy: string,
  ) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.modifiedAt = modifiedAt;
    this.modifiedBy = modifiedBy;
  }
}
