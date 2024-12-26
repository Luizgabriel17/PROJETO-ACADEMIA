"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = require("./aluno");
const instrutor_1 = require("./instrutor");
const exercicio_1 = require("./exercicio");
const PlanoTreino_1 = require("./PlanoTreino");
// Alunos
const aluno1 = new aluno_1.Aluno("Luiz Henrique", 16);
const aluno2 = new aluno_1.Aluno("Dudu Pressão", 16);
const aluno3 = new aluno_1.Aluno("Tchuca", 15);
const aluno4 = new aluno_1.Aluno("Divino", 18);
// Instrutores
const instrutor1 = new instrutor_1.Instrutor("Tati", 30, "Estagiária em Educação Física");
const instrutor2 = new instrutor_1.Instrutor("Cariane", 34, "Licenciatura em Educação Física");
const instrutor3 = new instrutor_1.Instrutor("Balestrin", 28, "Estagiário em Educação Física");
const instrutor4 = new instrutor_1.Instrutor("Gracyanne", 36, "Mestrado em Educação Física");
// Exercícios e Funções
const cardio1 = new exercicio_1.Exercício("Esteira 15 min", "Exercício aeróbico", "1x");
const cardio2 = new exercicio_1.Exercício("Bike 25 min", "Exercício aeróbico", "1x");
const cardio3 = new exercicio_1.Exercício("Escada 15 min", "Exercício aeróbico", "1x");
const cardio4 = new exercicio_1.Exercício("Elíptico 20 min", "Exercício aeróbico", "1x");
const cardio5 = new exercicio_1.Exercício("Bike ergonômica 20 min", "Exercício aeróbico", "1x");
// Peito
const peito1 = new exercicio_1.Exercício("Supino Reto (Barra ou Halter)", "Trabalha a parte central do peitoral maior e o tríceps.", "4 x 12");
const peito2 = new exercicio_1.Exercício("Supino inclinado (barra ou halteres)", "Foca na parte superior do peitoral maior.", "3 x 15");
const peito3 = new exercicio_1.Exercício("Supino declinado", "Foca na parte inferior do peitoral maior.", "4 x 12");
const peito4 = new exercicio_1.Exercício("Crucifixo (reto ou inclinado)", "Isola os músculos peitorais, trabalhando a abertura e contração.", "3 x 15");
// Costas
const costa1 = new exercicio_1.Exercício("Puxada frontal (Pegada pronada aberta)", "Trabalha o latíssimo do dorso, dando largura às costas.", "3 x 15");
const costa2 = new exercicio_1.Exercício("Remada baixa", "O latíssimo do dorso, trapézio, romboide maior e posterior do deltoide são ativados neste exercício, sendo o bíceps sinergista no movimento.", "4 x 12");
const costa3 = new exercicio_1.Exercício("Barra fixa", "Trabalha o latíssimo do dorso, bíceps e estabilizadores.", "3 x 15");
const costa4 = new exercicio_1.Exercício("Remada Cavalinho", "Têm como objetivo trabalhar os músculos dorsais, tornando-os maiores e mais fortes. Latíssimo do dorso, trapézio, deltoide posterior e romboides são trabalhados neste exercício.", "4 x 12");
// Ombros
const ombros1 = new exercicio_1.Exercício("Desenvolvimento com Halteres", "Foca no deltoide anterior e lateral.", "4 x 12");
const ombros2 = new exercicio_1.Exercício("Elevação Lateral com Halteres", "Trabalha o deltoide lateral, ajudando a largura dos ombros.", "3 x 15");
const ombros3 = new exercicio_1.Exercício("Elevação frontal", "Fortalece o deltoide anterior e melhora a estabilidade do ombro.", "4 x 12");
const ombros4 = new exercicio_1.Exercício("Crucifixo inverso (máquina ou halteres)", "Foca no deltoide posterior.", "3 x 15");
// Tríceps
const triceps1 = new exercicio_1.Exercício("Tríceps testa (barra ou halteres)", "Foco no tríceps braquial.", "3 x 15");
const triceps2 = new exercicio_1.Exercício("Tríceps corda (Polia)", "Isola e define o tríceps.", "4 x 12");
const triceps3 = new exercicio_1.Exercício("Mergulho em paralelas (Dips)", "Trabalha tríceps, peitorais e deltoides anteriores.", "3 x 15");
const triceps4 = new exercicio_1.Exercício("Tríceps Francês (Polia ou Halteres)", "Foco no tríceps braquial, estabilizadores do ombro e antebraços.", "4 x 12");
// Bíceps
const biceps1 = new exercicio_1.Exercício("Rosca Direta (Barra W)", "Trabalha o bíceps braquial.", "4 x 12");
const biceps2 = new exercicio_1.Exercício("Rosca Alternada (Halteres)", "Foca no bíceps, com trabalho unilateral.", "3 x 15");
const biceps3 = new exercicio_1.Exercício("Rosca Martelo (Halteres)", "Fortalece o braquiorradial e o braquial.", "4 x 12");
const biceps4 = new exercicio_1.Exercício("Rosca Scott (Máquina ou Barra)", "Isola e define o bíceps.", "3 x 20");
//  Pernas
const pernas1 = new exercicio_1.Exercício("Agachamento Livre", "Trabalha quadríceps, glúteos, e estabilizadores.", "3 x 15");
const pernas2 = new exercicio_1.Exercício("Leg Press 45°", "Desenvolve quadríceps e glúteos.", "4 x 12");
const pernas3 = new exercicio_1.Exercício("Stiff (Barra)", "Trabalha isquiotibiais e glúteos.", "3 x 15");
const pernas4 = new exercicio_1.Exercício("Cadeira Extensora", "Trabalha quadríceps.", "4 x 12");
// Abdômen
const ab1 = new exercicio_1.Exercício("Abdominal Reto", "Fortalece o core e melhora a estabilidade.", "5 x 10");
const ab2 = new exercicio_1.Exercício("Prancha", "Trabalha a resistência e a estabilidade do core.", "1 min");
const ab3 = new exercicio_1.Exercício("Roll-out (roda abdominal)", "Fortalece todo o core com ênfase no reto abdominal.", "4 x 12");
const ab4 = new exercicio_1.Exercício("Abdominal na Máquina", "Fortalece o core e melhora a estabilidade.", "4 x 12");
// Planos de Treino
const planoHipertrofia = new PlanoTreino_1.PlanoTreino("Hipertrofia", "Plano com ênfase em ganho de massa muscular.");
const planoEmagrecimento = new PlanoTreino_1.PlanoTreino("Emagrecimento", "Plano com ênfase em perda gordura e ativação total do metabolismo.");
const planoStrong = new PlanoTreino_1.PlanoTreino("Strong", "Plano com foco em ganho de Força física.");
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
