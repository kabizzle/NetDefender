export interface IStudent {
	name: string;
	username: string;
	student_number?: string; // student_number is optional for now, as students may not want to get graded from game. This needs to be discussed further.
	tutorial_completed: boolean;
	public_key: string;
	levels: [
        { id: number; completed: boolean; points: number; },
        { id: number; completed: boolean; points: number; },
        { id: number; completed: boolean; points: number; },
        { id: number; completed: boolean; points: number; },
        { id: number; completed: boolean; points: number; }
    ];
	rating: number;
}
