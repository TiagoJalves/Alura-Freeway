let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro1;
let imagemCarro2;

let somDaTrilha;
let SomDaColisao;
let SomDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro1 = loadImage("imagens/carro-2.png")
  imagemCarro2 = loadImage("imagens/carro-3.png");
  imagemCarros= [imagemCarro, imagemCarro1, imagemCarro2,imagemCarro, imagemCarro1, imagemCarro2]
  somDaTrilha = loadSound("Sons/trilha.mp3");
  SomDaColisao = loadSound("Sons/colidiu.mp3");
  SomDoPonto = loadSound("Sons/pontos.wav");
}