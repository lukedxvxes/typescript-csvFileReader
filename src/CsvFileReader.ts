import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public path: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.path, {
                encoding: 'utf8',
            })
            .split('\n')
            .map((line: string): string[] => {
                return line.split(',');
            });
    }
}
