export interface areaType {
  id: number;
  yes: {
    next: number | null;
    result: number | null;
  };
  no: {
    next: number | null;
    result: number | null;
  };
}
