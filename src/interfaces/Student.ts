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
      { id: string; completed: boolean; points: number; name: string },
      { id: string; completed: boolean; points: number; name: string }
    ],
    [{ id: string; completed: boolean; points: number; name: string }],
    [{ id: string; completed: boolean; points: number; name: string }],
    [{ id: string; completed: boolean; points: number; name: string }],
    [{ id: string; completed: boolean; points: number; name: string }]
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
      { id: 'quiz1', completed: false, points: 10, name: 'Quiz: Identify Attacks' },
      { id: 'flashcards1', completed: false, points: 10, name: 'Flashcards: Attack Types' }
    ],
    [{ id: '2', completed: false, points: 10, name: 'Level 2: Caesar Cipher' }],
    [{ id: '3', completed: false, points: 20, name: 'Level 3: RSA encryption' }],
    [{ id: '4', completed: false, points: 20, name: 'Level 4: Web of Trust' }],
    [{ id: '5', completed: false, points: 20, name: 'Level 5: Capture the flag' }]
  ],
  rating: 5,
  points: 0,
  id: ''
};
