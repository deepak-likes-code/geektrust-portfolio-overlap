import fs from 'fs';
import { lineParser } from './utils/processor';
const filename: string = process.argv[2]

fs.readFile(filename, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    for (const line of lines) {
        lineParser(line);
    }
})