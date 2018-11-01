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
                        ,'Gabinte'
                        ,'Gabrieala'
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
                        ,'Bumbum'
                        ];
  return palavrasSimples;
}

function palavrasComplexas() {
  var palavrasComplexas = ['Abduzir'
                          ,'Acre'
                          ,'Acrimônia'
                          ,'Acusados'
                          ,'Adolescente'
                          ,'Adstrito'
                          ,'Advocacia'
                          ,'Aeronáutica'
                          ,'Aliciar'
                          ,'Belicoso'
                          ,'Capcioso'
                          ,'Chistoso'
                          ,'Coalizão'
                          ,'Cominar'
                          ,'Consociação'
                          ,'Constituiente'
                          ,'Corolário'
                          ,'Dissentir'
                          ,'Eflúvio'
                          ,'Elucubrações'
                          ,'Empedernido'
                          ,'Engodar'
                          ,'Estado'
                          ,'Exórdio'
                          ,'Homizio'
                          ,'Idiossincrasia'
                          ,'Igneo'
                          ,'Influição'
                          ,'Jaez'
                          ,'Lauto'
                          ,'Loquaz'
                          ,'Mediatário'
                          ,'Municipio'
                          ,'Nato'
                          ,'Naturalizado'
                          ,'Próbrio'
                          ,'Oscular'
                          ,'Pecúlio'
                          ,'Perdulário'
                          ,'Pernóstico'
                          ,'Plaga'
                          ,'Procrastinar'
                          ,'Prolegômenos'
                          ,'Quimera'
                          ,'Republicano'
                          ,'Rubicundo'
                          ,'Tergiversar'
                          ,'Ufanismo'
                          ,'União'
                          ,'Vicissitudes'
                          ,'Vitupério'
                        ];
  return palavrasComplexas;
}

function palavrasConstituicao() {
  var palavrasConstituicao = ['Abuso de poder'
                        ,'Abuso sexual'
                        ,'Acre'
                        ,'Acusados'
                        ,'Administração Pública'
                        ,'Adolescente'
                        ,'Advocacia'
                        ,'Advogado'
                        ,'Aeronáutica'
                        ,'Aliciar'
                        ,'União'
                        ,'Estado'
                        ,'Distrito Federal'
                        ,'Municipio'
                        ,'Nato'
                        ,'Naturalizado'
                        ,'Constituiente'
                        ,'Republicano'
                        ,'Independência'
                        ,'Nacional'
                        ,'Defesa'
                        ,'República Federativa do Brasil'
                        ,'Garantias Fundamentais'
                        ,'Constituição'
                        ,'Comunicação'
                        ,'Militares'
                        ,'Zonas'
                        ];
  return palavrasConstituicao;
}

function palavrasComputacao() {
  var palavrasComputacao = ['Access Point'
                          ,'ADSL'
                          ,'Adware'
                          ,'Antivírus'
                          ,'Arquivos'
                          ,'Artefato'
                          ,'Assinatura digital'
                          ,'Autoridade certificadora'
                          ,'Backdoor'
                          ,'Banda'
                          ,'Bandwidth'
                          ,'Bluetooth'
                          ,'Bot'
                          ,'Cable modem'
                          ,'Cavalo de tróia'
                          ,'Certificados'
                          ,'Código'
                          ,'Código malicioso'
                          ,'Computador'
                          ,'Internet'
                          ,'Monitor'
                          ,'Mouse'
                          ,'Notebook'
                          ,'Rede'
                          ,'Rede sem fio'
                          ,'Software'
                          ,'Software livre'
                          ,'Spyware'
                          ,'Teclado'
                          ,'Transmissão de dados'
                          ,'Virus'
                          ,'Worms'
                        ];
  return palavrasComputacao;
}

function checksIsTrue(aChk) {
      var result = false;
      var count = 0;
	    for (var i=0;i<aChk.length;i++){
	        if (aChk[i].checked == true){
	            count = count + 1;
	        }
	    }
      if(count > 0){
        result = true;
      }
      return result;
	}

function arrayRemoveDuplicados(array) {
  var novaArr = array.filter(function(este, i) {
      return array.indexOf(este) == i;
  });
  return  novaArr;
}

function getListPalavras(checkPalavras) {
  var palavras = [];
  if(checkPalavras[0].checked == true){
    var listPalavras = palavrasSimples();
    palavras = palavras.concat(listPalavras);
  }
  if(checkPalavras[1].checked == true){
    var listPalavras = palavrasComplexas();
    palavras = palavras.concat(listPalavras);
  }
  if(checkPalavras[2].checked == true){
    var listPalavras = palavrasConstituicao();
    palavras = palavras.concat(listPalavras);
  }
  if(checkPalavras[3].checked == true){
    var listPalavras = palavrasComputacao();
    palavras = palavras.concat(listPalavras);
  }
  return palavras;
}

function getLista(qtdpalavras,checkPalavras) {
  var lista = getListPalavras(checkPalavras);
  var selected = [];
  if(lista.length==0){
    document.getElementById("lista").innerHTML = "ERRO: Palavras não encontradas";
  }else{
    do{
      var index = Math.floor(Math.random() * lista.length);
      selected.push(lista[index]);
      selected = arrayRemoveDuplicados(selected);
    }while(selected.length < qtdpalavras);
  }
  return selected;
}

function geraDivListaHtmml(tipLista,lista) {
  var divListaHtmml = ' ';
  for (var i = 0; i < lista.length; i++){
      divListaHtmml = divListaHtmml+'<li>'+lista[i]+'</li>';
  }
  if(tipLista==true){
    divListaHtmml = '<ul>'+divListaHtmml+'</ul>';
  }else{
    divListaHtmml = '<ol>'+divListaHtmml+'</ol>';
  }
  return divListaHtmml;
}

function limparLista() {
    document.getElementById("lista").innerHTML = "";
}

function gerarLista() {
  var checkPalavras = document.getElementsByName('dicionario');
  if(checksIsTrue(checkPalavras)==false){
    document.getElementById('lista').innerHTML = "ERRO: INFORME UM TIPO DE PALAVRA";
  }else{
    var qtdpalavras = document.getElementById('qtdpalavras').value;
    var lista       = getLista(qtdpalavras,checkPalavras);
    var ordem    = document.getElementsByName('ordem');
    var ordemAlfabetica = ordem[1].checked;
    if(ordemAlfabetica){
      lista = lista.sort();
    }
    var tipLista    = document.getElementsByName('tipLista');
    var tipListaTopico = tipLista[0].checked;
    var divListaHtmml = geraDivListaHtmml(tipListaTopico,lista);
    document.getElementById("lista").innerHTML = divListaHtmml;
  }
}
