function palavrasSimples() {
  var palavrasSimples = ['Ave'
                        ,'Arara'
                        ,'Avestur'
                        ,'Banana'
                        ,'Bacana'
                        ,'Babaca'
                        ,'Carro'
                        ,'Carne'
                        ,'Dado'
                        ,'gabinte'
                        ,'gabrieala'
                        ,'Gado'
                        ,'Gato'
                        ,'Gafanhoto'
                        ,'Geladeira'
                        ,'Gaivota'
                        ,'Galera'
                        ,'Galeria'
                        ,'Game'
                        ,'Gama'
                        ,'Ganho'
                        ,'Garganta'
                        ,'Gari'
                        ,'Garimpo'
                        ,'Galo'
                        ,'Nabo'
                        ,'Nação'
                        ,'Nádega'
                        ,'Nadir'
                        ,'Nariz'
                        ,'Nascer'
                        ,'Nata'
                        ,'Natação'
                        ];
  return palavrasSimples;
}

function palavrasComplexas() {
  var palavrasComplexas = ['Abuso de poder'
                        ,'Abuso sexual'
                        ,'Acre'
                        ,'Acusados'
                        ,'Administração Pública'
                        ,'Adolescente'
                        ,'Advocacia'
                        ,'advogado'
                        ,'Aeronáutica'
                        ,'aliciar'
                        ,'União'
                        ,'Estado'
                        ,'Distrito Federal'
                        ,'Municipio'
                        ,'Nato'
                        ,'Naturalizado'
                        ,'Constituiente'
                        ,'Republicano'
                        ];
  return palavrasComplexas;
}

function getLista(qtdpalavras,dicionario) {
  var lista = [];
  if(dicionario=="Simples"){
    lista = palavrasSimples();
  }else{
    lista = palavrasComplexas();
  }
  var selected = [];
  for (var i = 0; i < qtdpalavras; i++){
      selected[i] = lista[Math.floor(Math.random() * lista.length)];
  }
  return selected;
}

function limparLista() {
    document.getElementById("lista").innerHTML = "";
}

function gerarLista() {
  var qtdpalavras = document.getElementById('qtdpalavras').value;
  var dicionario = document.getElementById('dicionario').value;
  var lista = getLista(qtdpalavras,dicionario);
  var divListaHtmml = '<ul>';
  for (var i = 0; i < lista.length; i++){
      divListaHtmml = divListaHtmml+'<li>'+lista[i]+'</li>';
  }
  divListaHtmml = divListaHtmml+'</ul>';
  document.getElementById("lista").innerHTML = divListaHtmml;
}
