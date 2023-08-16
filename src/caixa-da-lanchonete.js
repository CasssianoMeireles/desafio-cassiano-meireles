import { cardapio } from "./cardapio";

class CaixaDaLanchonete {

    calcularValorDaCompra(formaDePagamento, itens) {
        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        let temSanduiche = false;
        let temCafe = false;
        let temQueijo = false;
        let temChantily = false;
        let valorDaCompra = 0;

        for (const pedidoString of itens) {
            const [codigo, quantidade] = pedidoString.split(',');
            const item = cardapio.find(itemCardapio => itemCardapio.codigo === codigo);

            if (!item) {
                return 'Item inválido!';
            } else if (parseInt(quantidade) === 0) {
                return 'Quantidade inválida!';
            }

            if (codigo === 'sanduiche') {
                temSanduiche = true;
            }
            if (codigo === 'cafe') {
                temCafe = true;
            }
            if (codigo === 'queijo') {
                temQueijo = true;
            }
            if (codigo === 'chantily') {
                temChantily = true;
            }

            valorDaCompra += item.valor * parseFloat(quantidade);
        }

        if ((temQueijo && !temSanduiche) || (temChantily && !temCafe)) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        if (formaDePagamento === 'dinheiro') {
            valorDaCompra *= 0.95;
        } else if (formaDePagamento === 'credito') {
            valorDaCompra *= 1.03;
        } else if (!['dinheiro', 'debito', 'credito'].includes(formaDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        return `R$ ${valorDaCompra.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };