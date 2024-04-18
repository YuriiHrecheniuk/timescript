// ./src/index.ts

import log from '@ajar/marker';
import { formatDate } from "./date-formatter.js"; // <-- .js

// example usage...

// Outputs the current date in "YYYY-MM-DD" format
const fmt1 = formatDate("YYYY-MM-DD", new Date());
console.log({fmt1});

// Outputs "11-Jan-24"
const fmt2 = formatDate("DD-MMM-YY", new Date("2024-01-11"));
console.log({fmt2});

log.info('formatDate("YYYY-MM-DD", new Date()) ->',fmt1);
log.cyan('formatDate("DD-MMM-YY", new Date("2024-01-11")) ->',fmt2);