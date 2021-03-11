import fs from 'fs';

// Generic type used to allow for variable data type to be passed to the class as the data type
// - think function arguments
// :  <T>

export abstract class CsvFileReader<T> {
    data: T[] = [];

    abstract mapRow(row: string[]): T;
    abstract path: string;

    read(): void {
        this.data = fs
            .readFileSync(this.path, {
                encoding: 'utf8',
            })
            .split('\n')
            .map((line: string): string[] => {
                return line.split(',');
            })
            .map(this.mapRow);
    }
}
