export interface ITask {
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
}
