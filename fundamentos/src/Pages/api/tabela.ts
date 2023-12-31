import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const colunas = +(req.query.colunas || 10);
  const linhas = +(req.query.linhas || 10);

  res.status(200).send(`
  <html>
  <head>
    <title>Tabela</title>
    <meta charset="utf-8">
    <style>
      html {
            background-color: #333;
            color: #eee;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        font-size: 2rem
      }
    </style>
  </head>
  <body>
    <table border="1">
      ${linhasEColunas(colunas, linhas)}
      </table>
  </body>
</html>
    `);
}

function linhasEColunas(colunas: number, linhas: number) {
  let html = "";
  for (let l = 0; l < linhas; l++) {
    html += "<tr>";
    for (let c = 0; c < colunas; c++) {
      html += `<td>${l + 1}x${c + 1}</td>`;
    }
    html += "</tr>";
  }
  return html;
}
