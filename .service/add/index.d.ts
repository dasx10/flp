export default function (): {
  (value: any, next: string): string;
  (value: string, next: any): string;
  (value: number, next: number): number;
  (value: boolean, next: boolean): number;
  (value: any, next: any): any;
}
