const nome = String;
const idade = Number; 
const bom = Boolean;
const obras = undefined

const nome1 = "ludwig von mises";
const idade1 = 92;
const bom1 = true;
const obras1 = ['-Socialismo: Uma Análise Econômica e Sociológica\n-A Mentalidade Anticapitalista\n-The Theory of Money and Credit'];

const nome2 = "Friedrich August von Hayek";
const idade2 = 92;
const bom2 = true;
const obras2 = ['\n-O Caminho da Servidão\n-Os Fundamentos da Liberdade \n-Desestatização do dinheiro'];

const nome3 = "Adam Smith";
const idade3 = 67;
const bom3 = true;
const obras3 = ['\n-A mão invisível\n-A Riqueza das Nações'];


const ludwigVonMises = (`nome: ${nome1.toUpperCase()}: \nIdade: ${idade1} \nTem boas óbras?: ${bom1} \nObras:${obras1}`);
console.log(ludwigVonMises);

const friedrichHayek = (`nome: ${nome2.toUpperCase()}: \nIdade: ${idade2} \nTem boas óbras?: ${bom2} \nObras:${obras2}`);
console.log(friedrichHayek);

const adamSmith = (`nome: ${nome3.toUpperCase()}: \nIdade: ${idade3} \nTem boas óbras?: ${bom3} \nObras:${obras2}`);
console.log(adamSmith);

const verificação = bom1 && bom2 && bom3;
console.log(verificação);

const media = (idade1+idade2+idade3)/3;
const valorDaSoma = console.log(media);
