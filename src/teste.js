// Importar a classe CaixaDaLanchonete do arquivo correspondente
import { CaixaDaLanchonete } from './caixa-da-lanchonete.js';

// Criar uma instância da classe CaixaDaLanchonete
const caixa = new CaixaDaLanchonete();

// Criar um pedido com mais de um item distinto
const pedido = [
    { codigo: 'chantily', quantidade: 1 },
];

// Chamar o método calcularValorDaCompra com os argumentos adequados
const valorTotal = caixa.calcularValorDaCompra('credito', pedido);

// Exibir o resultado no terminal
console.log(valorTotal);