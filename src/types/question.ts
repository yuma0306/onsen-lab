/**
 * Types
 */
export interface QuestionType {
  id: number;
  text: string;
  yes: {
    next: number | null;
    result: number | null;
  };
  no: {
    next: number | null;
    result: number | null;
  };
}
