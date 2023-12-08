const { exec } = require('child_process');

module.exports = (req, res) => {
  exec('/pocketbase serve', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o binário: ${error}`);
      return res.status(500).send('Erro interno do servidor');
    }
    console.log(`Saída do binário: ${stdout}`);
    res.status(200).send('Binário executado com sucesso');
  });
};