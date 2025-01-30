// filepath: /c:/Users/Manim/CypressProjects/merge-reports.js
const { exec } = require('child_process');
const marge = require('mochawesome-report-generator');
const fs = require('fs');

const mergeCommand = 'mochawesome-merge cypress/report/mochawesome-report/*.json';
const outputFilePath = 'cypress/report/mochawesome-report/merged-report.json';

exec(mergeCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing merge command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }

  fs.writeFileSync(outputFilePath, stdout, { encoding: 'ascii' });

  const report = JSON.parse(stdout);
  marge.create(report, {
    reportDir: 'cypress/report/mochawesome-report',
    reportFilename: 'merged-report'
  }).then(() => {
    console.log('Merged report generated successfully.');
  }).catch(err => {
    console.error('Error generating merged report:', err);
  });
});