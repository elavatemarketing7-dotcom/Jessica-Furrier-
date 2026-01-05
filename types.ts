
export enum AppState {
  INITIAL = 'INITIAL',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  LANDING = 'LANDING'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}
