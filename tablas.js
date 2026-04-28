document.write("<table border=1 <tr>")
for (let x = 1; x <= 12; x++) {
    document.write("<td align='center'><table border=1")
    for (let m = 1; m <= 10; m++) {

        if (m % 2 == 0) {
            document.write("<tr bgcolor='#AAF'>")
        } else {
            document.write("<tr bgcolor='#AFF'>")
        }
        document.write("<td>" + x + "</td><td>X</td><td>" + m + "</td><td>=</td><td>" + m * x + "</td>");
        document.write("</tr>")
    }
    document.write("</table></td>")
    if (x % 4 == 0) {
        document.write("</tr><tr>")
    }
}
document.write("</tr> </table>")