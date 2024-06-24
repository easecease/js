var HTML = "<table border=1 width=100%>";
for (j=1;j<10;j++){
    HTML += "<tr>";
    for (i=1;i<10;i++){
            HTML += "<td align=center>" + i*j + "</td>";
        }
        HTML += "</tr>";
}
HTML += "</table>";
document.getElementById("list").innerHTML = HTML;



