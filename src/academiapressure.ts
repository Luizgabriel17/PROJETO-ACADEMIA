import { Aluno } from './aluno';
import { Instrutor } from './instrutor';
import { Exercício } from './exercicio';
import { PlanoTreino } from './PlanoTreino';

// Alunos
const aluno1 = new Aluno("Luiz Henrique", 16);
const aluno2 = new Aluno("Dudu Pressão", 16);
const aluno3 = new Aluno("Tchuca", 15);
const aluno4 = new Aluno("Divino", 18);

// Instrutores
const instrutor1 = new Instrutor("Tati", 30, "Estagiária em Educação Física");
const instrutor2 = new Instrutor("Cariane", 34, "Licenciatura em Educação Física");
const instrutor3 = new Instrutor("Balestrin", 28, "Estagiário em Educação Física");
const instrutor4 = new Instrutor("Gracyanne", 36, "Mestrado em Educação Física");

// Exercícios e Funções
const cardio1 = new Exercício("Esteira 15 min", "Exercício aeróbico", "1x");
const cardio2 = new Exercício("Bike 25 min", "Exercício aeróbico", "1x");
const cardio3 = new Exercício("Escada 15 min", "Exercício aeróbico", "1x");
const cardio4 = new Exercício("Elíptico 20 min", "Exercício aeróbico", "1x");
const cardio5 = new Exercício("Bike ergonômica 20 min", "Exercício aeróbico", "1x");

// Peito
const peito1 = new Exercício("Supino Reto (Barra ou Halter)", "Trabalha a parte central do peitoral maior e o tríceps.", "4 x 12");
const peito2 = new Exercício("Supino inclinado (barra ou halteres)", "Foca na parte superior do peitoral maior.", "3 x 15");
const peito3 = new Exercício("Supino declinado", "Foca na parte inferior do peitoral maior.", "4 x 12");
const peito4 = new Exercício("Crucifixo (reto ou inclinado)", "Isola os músculos peitorais, trabalhando a abertura e contração.", "3 x 15");

// Costas
const costa1 = new Exercício("Puxada frontal (Pegada pronada aberta)", "Trabalha o latíssimo do dorso, dando largura às costas.", "3 x 15");
const costa2 = new Exercício("Remada baixa", "O latíssimo do dorso, trapézio, romboide maior e posterior do deltoide são ativados neste exercício, sendo o bíceps sinergista no movimento.", "4 x 12");
const costa3 = new Exercício("Barra fixa", "Trabalha o latíssimo do dorso, bíceps e estabilizadores.", "3 x 15");
const costa4 = new Exercício("Remada Cavalinho", "Têm como objetivo trabalhar os músculos dorsais, tornando-os maiores e mais fortes. Latíssimo do dorso, trapézio, deltoide posterior e romboides são trabalhados neste exercício.", "4 x 12");

// Ombros
const ombros1 = new Exercício("Desenvolvimento com Halteres", "Foca no deltoide anterior e lateral.", "4 x 12");
const ombros2 = new Exercício("Elevação Lateral com Halteres", "Trabalha o deltoide lateral, ajudando a largura dos ombros.", "3 x 15");
const ombros3 = new Exercício("Elevação frontal", "Fortalece o deltoide anterior e melhora a estabilidade do ombro.", "4 x 12");
const ombros4 = new Exercício("Crucifixo inverso (máquina ou halteres)", "Foca no deltoide posterior.", "3 x 15");

// Tríceps
const triceps1 = new Exercício("Tríceps testa (barra ou halteres)", "Foco no tríceps braquial.", "3 x 15");
const triceps2 = new Exercício("Tríceps corda (Polia)", "Isola e define o tríceps.", "4 x 12");
const triceps3 = new Exercício("Mergulho em paralelas (Dips)", "Trabalha tríceps, peitorais e deltoides anteriores.", "3 x 15");
const triceps4 = new Exercício("Tríceps Francês (Polia ou Halteres)", "Foco no tríceps braquial, estabilizadores do ombro e antebraços.", "4 x 12");

// Bíceps
const biceps1 = new Exercício ("Rosca Direta (Barra W)", "Trabalha o bíceps braquial.", "4 x 12");
const biceps2 = new Exercício ("Rosca Alternada (Halteres)", "Foca no bíceps, com trabalho unilateral.","3 x 15");
const biceps3 = new Exercício ("Rosca Martelo (Halteres)", "Fortalece o braquiorradial e o braquial.", "4 x 12");
const biceps4 = new Exercício ("Rosca Scott (Máquina ou Barra)", "Isola e define o bíceps.", "3 x 20");

//  Pernas
const pernas1 = new Exercício ("Agachamento Livre", "Trabalha quadríceps, glúteos, e estabilizadores.", "3 x 15");
const pernas2 = new Exercício ("Leg Press 45°", "Desenvolve quadríceps e glúteos.", "4 x 12");
const pernas3 = new Exercício ("Stiff (Barra)", "Trabalha isquiotibiais e glúteos.", "3 x 15");
const pernas4 = new Exercício ("Cadeira Extensora", "Trabalha quadríceps.", "4 x 12");

// Abdômen
const ab1 = new Exercício("Abdominal Reto", "Fortalece o core e melhora a estabilidade.", "5 x 10");
const ab2 = new Exercício("Prancha", "Trabalha a resistência e a estabilidade do core.", "1 min");
const ab3 = new Exercício("Roll-out (roda abdominal)", "Fortalece todo o core com ênfase no reto abdominal.", "4 x 12");
const ab4 = new Exercício("Abdominal na Máquina", "Fortalece o core e melhora a estabilidade.", "4 x 12");

// Planos de Treino
const planoHipertrofia = new PlanoTreino(
  "Hipertrofia",
  "Plano com ênfase em ganho de massa muscular."
);

const planoEmagrecimento = new PlanoTreino(
  "Emagrecimento",
  "Plano com ênfase em perda gordura e ativação total do metabolismo."
);

const planoStrong = new PlanoTreino(
  "Strong",
  "Plano com foco em ganho de Força física."
);

// Configuração do sistema
console.log("\n=== Informações do Aluno ===");
aluno2.exibirInformacoes();
planoHipertrofia.exibirInformacoesPlan();

console.log("\n=== Informações do Instrutor ===");
instrutor3.exibirInformacoes();

console.log("\n=== Informações do Treino de Hoje (Costas e Bíceps) ===");

console.log("\nMomento de Cardio");

cardio3.exibirInformacoesExerc();

console.log("\nTreino de Costas");

costa1.exibirInformacoesExerc();
costa2.exibirInformacoesExerc();
costa4.exibirInformacoesExerc();

console.log("\nTreino de Bíceps");

biceps3.exibirInformacoesExerc();
biceps4.exibirInformacoesExerc();
biceps1.exibirInformacoesExerc();

console.log("\n=== Informações do Aluno ===");
aluno1.exibirInformacoes();
planoEmagrecimento.exibirInformacoesPlan();

console.log("\n=== Informações do Instrutor ===");
instrutor1.exibirInformacoes();

console.log("\n=== Informações do Treino de Hoje (Peito e Tríceps) ===");

console.log("\nMomento de Cardio");

cardio1.exibirInformacoesExerc();

console.log("\nTreino de Peito");

peito1.exibirInformacoesExerc();
peito3.exibirInformacoesExerc();
peito2.exibirInformacoesExerc();

console.log("\nTreino de Tríceps");

triceps3.exibirInformacoesExerc();
triceps1.exibirInformacoesExerc();
triceps4.exibirInformacoesExerc();