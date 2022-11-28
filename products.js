const produtos = [
    {nome:"notebook", categoria:"computador", valor:4500.00},
    {nome:"memoria ram", categoria:"memoria", valor:475.00},
    {nome:"HD sata", categoria:"armazenamento", valor:350.00},
    {nome:"mouse", categoria:"periferico", valor:60.00},
    {nome:"teclado", categoria:"periferico", valor:100.00},
    {nome:"SSD ", categoria:"armazenamento", valor:970.00},
    {nome:"cpu", categoria:"processador", valor:45000.00}]
    
    function listar_por_categoria (categoria) {
        let lista = produtos.filter(produtos=> produtos.categoria == categoria);
        return console.log(lista);
    }

listar_por_categoria("periferico"); // inserir string da categoria