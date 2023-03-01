// Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validaCliente(cliente) {
    if (typeof cliente !== 'string') {
      return 'O parâmetro passado deve ser do tipo "string"!';
    } else {
      return true;
    }
  }