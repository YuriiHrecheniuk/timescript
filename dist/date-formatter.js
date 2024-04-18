/* List of all available parsing tokens
-----------------------------------------
Input   Example             Description
-----------------------------------------
YY	    01	                Two-digit year
YYYY	  2001	              Four-digit year
MM	    01-12	              Month, 2-digits
MMM	    Jan-Dec	            The abbreviated month name
D	      1-31	              Day of month
DD	    01-31	              Day of month, 2-digits
*/
const MONTHS = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
];
export function formatDate(format, date) {
    if (format.includes('.'))
        throw "Invalid format string. Use YY, YYYY, MMM, MM, DD, D seperated by '-'";
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();
    return format
        .replace("YYYY", year.toString())
        .replace("YY", year.toString().slice(-2))
        .replace("MMM", MONTHS[monthIndex].toString())
        .replace("MM", (monthIndex + 1).toString().padStart(2, "0"))
        .replace("DD", day.toString().padStart(2, "0"))
        .replace("D", day.toString());
}
