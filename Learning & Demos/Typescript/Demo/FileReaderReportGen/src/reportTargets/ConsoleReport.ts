import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  constructor(public reportName: string) {}
  print(report: string, reportName: string): void {
    console.log(`${this.reportName} - ${report}`);
  }
}
