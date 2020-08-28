class AppError {
  constructor(response, statusCode = 400) {
    let msg = '';
    if (response && response.status === 500) {
      msg = 'Senha incorreta';
    } else if (response && response.data && response.data.message) {
      msg = response.data.message;
    } else {
      msg = 'Ocorreu um erro. Tente novamente';
    }
    this.message = msg;
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
