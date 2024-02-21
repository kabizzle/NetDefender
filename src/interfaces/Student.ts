export interface IStudent {
  name: string;
  username: string;
  student_number?: string; // student_number is optional for now, as students may not want to get graded from game. This needs to be discussed further.
  tutorial_completed: boolean;
  public_key: string;
  rating: number;
  points: number;
  levels: [
    [
      { id: number; completed: boolean; points: number; name: string },
      { id: number; completed: boolean; points: number; name: string }
    ],
    [{ id: number; completed: boolean; points: number; name: string }],
    [{ id: number; completed: boolean; points: number; name: string }],
    [{ id: number; completed: boolean; points: number; name: string }],
    [{ id: number; completed: boolean; points: number; name: string }]
  ];
  id: string;
}

export const defaultStudent: IStudent = {
  name: '',
  username: '',
  student_number: '', // student_number is optional for now, as students may not want to get graded from game. This needs to be discussed further.
  tutorial_completed: false,
  public_key: '',
  levels: [
    [
      { id: 1, completed: false, points: 10, name: '' },
      { id: 2, completed: false, points: 10, name: '' }
    ],
    [{ id: 3, completed: false, points: 20, name: '' }],
    [{ id: 4, completed: false, points: 20, name: '' }],
    [{ id: 5, completed: false, points: 20, name: '' }],
    [{ id: 6, completed: false, points: 20, name: '' }]
  ],
  rating: 5,
  points: 0,
  id: ''
};
