const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "reports/cucumber",  
reportPath: "./reports/htmlreport",
metadata: {
browser: {
name: "chrome",
},
platform: {
name: "windows",
version: "10",
},
},
});