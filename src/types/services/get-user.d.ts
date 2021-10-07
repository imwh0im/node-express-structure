export interface IGetUser {
  id: number;
  name: string;
  isActive: 'enabled' | 'disabled';
  createdAt: string;
}