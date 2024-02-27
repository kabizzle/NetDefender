export interface ILevel {
  id: string;
  completed: boolean;
  points: number;
  name: string;
}

export interface ILevels extends ILevel, Array<ILevel> {}
