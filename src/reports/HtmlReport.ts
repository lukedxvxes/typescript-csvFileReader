import fs from 'fs';
import {OutputTarget} from '../Summary';

export class HtmlReport implements OutputTarget {
    constructor(public pathName: string) {}

    print(report: string): void {
        const html = `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Analysis Report</title>
            </head>
            <body>
                <div style="max-width:1100px; margin: 0 auto;">
                    <h1>Analysis Report</h1>
                    <p>${report}</p>
                </div>
            </body>
            </html>
        `;

        fs.writeFileSync(this.pathName, html);
    }
}
