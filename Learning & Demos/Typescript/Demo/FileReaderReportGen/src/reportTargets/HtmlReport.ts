import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  constructor(public reportName: string) {}
  print(report: string): void {
    const name = this.reportName.split('.')[0];
    const html = `
    <div>
        <h1>${name}</h1>
        <div>${report}</div>
    </div>
    `;
    fs.writeFileSync(this.reportName, html);
  }
}
