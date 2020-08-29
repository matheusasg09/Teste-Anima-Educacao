class AppError {
  constructor(response, statusCode = 400) {
    let msg = '';
    if (response && response.status === 404) {
      msg = 'Erro ao listar colaboradroes.';
    } else {
      msg = 'Ocorreu um erro. Tente novamente';
    }
    this.message = msg;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
