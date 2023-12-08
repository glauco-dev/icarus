const { exec } = require('child_process');
const app = require('express')();
// const { v4 } = require('uuid');
const PocketBase = require('pocketbase/cjs')
const fetch = require('cross-fetch'); 


app.get('/api', (req, res) => {
  // const path = `/api/item/${v4()}`;
  // res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  // res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
  // return new PocketBase();
  exec('/pocketbase serve', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o binário: ${error}`);
      return res.status(500).send('Erro interno do servidor');
    }
    console.log(`Saída do binário: ${stdout}`);
    res.status(200).send('Binário executado com sucesso');
  });
});


module.exports = app;


// module.exports = (req, res) => {
//   exec('/pocketbase serve', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Erro ao executar o binário: ${error}`);
//       return res.status(500).send('Erro interno do servidor');
//     }
//     console.log(`Saída do binário: ${stdout}`);
//     res.status(200).send('Binário executado com sucesso');
//   });
// };