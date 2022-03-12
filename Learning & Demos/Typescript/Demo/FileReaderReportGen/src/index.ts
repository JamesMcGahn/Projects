import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinAnalyser } from './analyzers/WinAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinAnalyser('Man United'), new ConsoleReport('Wins Report'));
summary.buildandPrintReport(matchReader.matches);

const htmlSummary = new Summary(new WinAnalyser('Man United'), new HtmlReport('Wins Reports.html'));
htmlSummary.buildandPrintReport(matchReader.matches);

const summary2 = Summary.winsAnalysisWithHtmlReport('Man United');
summary2.buildandPrintReport(matchReader.matches);
