export interface ILevel {
    id: number;
    completed: boolean;
    points: number;
    name: string;
}

export interface ILevels extends ILevel, Array<ILevel> {}
