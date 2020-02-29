// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação

function adicionarAluno(nome){
    
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    
    alunosDaEscola.push({nome: nome, notas:[], cursos:[], faltas: 0});
    return ("Aluno incluído com sucesso!")
}
   
function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    return alunosDaEscola;
}
function buscarAluno(nome){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback,
    tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    let encontrados =[]
    encontrados = alunosDaEscola.filter(aluno => {
        if (nome == aluno.nome) { return aluno} })
    
    if (encontrados.length == 0){
        console.log ("Aluno não encontrado no sistema.");
    } else {
        console.log("Aluno encontrado no sistema!");
        
    }
    return encontrados;
}
function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, 
    e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
    let busca = buscarAluno(aluno.nome);
    if (busca.length == 0){
            console.log("Matrícula não pôde ser efetuada. Aluno não cadastrado");
        } else {
        alunosDaEscola.forEach(estudante => {
            if (estudante.nome == aluno.nome) {
                estudante.cursos = {nomeDoCurso: curso, dataMatricula: new Date}
                console.log("Aluno matriculado com sucesso!");
            }
        })
    }

}
function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. 
     Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa.
     Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
   let busca = buscarAluno(aluno.nome);
   if (busca.length == 0){
           console.log("Falta não pôde ser aplicada. Aluno não cadastrado");
       } else {
           alunosDaEscola.map(estudante => {
               if ((estudante.nome == aluno.nome) && !(estudante.cursos.length == 0)) {
                   estudante.faltas += 1;
                   console.log("Falta aplicada com sucesso!")
                } 
            })
        }
    
}
    
function aplicarNota(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. 
     Você deverá adicionar uma nota ao aluno na sua lista de notas. 
     Você deverá dar um feedback ao concluir a tarefa. 
     Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
   let busca = buscarAluno(aluno.nome);
   if (busca.length == 0){
           console.log("Nota não pôde ser aplicada. Aluno não cadastrado");
       } else {
           alunosDaEscola.map(estudante => {
               if ((estudante.nome == aluno.nome) && !(estudante.cursos.length == 0)) {
                   estudante.notas.push(8.5);
                   console.log("Nota aplicada com sucesso!")
                } 
            })
        }
}
  
function aprovarAluno(aluno){
     /* 
     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não.
     Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
     Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
     */
   let busca = buscarAluno(aluno.nome);
   if (busca.length == 0){
           console.log("Ocorreu um erro! Aluno não cadastrado");

        } else {
           
            let estudante = busca[0];
            if ((estudante.cursos.length > 0) && (estudante.notas.length > 0)) {
                let media = (estudante.notas.reduce( (total, nota) => {total+nota})) / estudante.notas.length;
                if (estudante.faltas <= 3 && media > 7) {
                    console.log("Este aluno foi Aprovado!")
                    } else {
                        console.log("Este aluno foi Reprovado!")
                    }
            }
        
         
            
        }

}

// TESTES DE FUNÇÃO

alunoTeste = {nome: "Melody", notas:[], cursos:[], faltas: 0}
alunoErro = {nome: "Facebookson", notas:[], cursos:[], faltas: 0}
console.log(adicionarAluno("Melody"))
console.log(listarAlunos())
console.log(buscarAluno("Melody"))
console.log(buscarAluno("Facebookson"))
matricularAluno(alunoTeste,"Debugando seu Code");

aplicarFalta(alunoTeste);
aplicarNota(alunoTeste);
console.log("\n Verificando notas com Erro:\n")

aprovarAluno(alunoErro);
// Loop aprovarAluno
console.log("\n Verificando notas:\n")
alunosDaEscola.map( aluno => 
    { console.log(aluno.nome + " sendo verificado")
        aprovarAluno(aluno);}
)



