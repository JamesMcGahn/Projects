import { MatchData } from './Matchdata';
import { WinAnalyser } from './analyzers/WinAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  reportName: string;
  print(report: string, reportName: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinAnalyser(team), new HtmlReport('Standard Wins Report.html'));
  }
  constructor(public analyzer: Analyser, public outputTarget: OutputTarget) {}

  buildandPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output, this.outputTarget.reportName);
  }
}
