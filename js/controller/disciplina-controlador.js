class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const nomeDisciplina = document.querySelector("#nome").value;
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(codigoDisciplina, nomeDisciplina);
            alert('Disciplina inserida com sucesso!');
        } else {
            alert('Disciplina não cadastrada!');
        }
    }

    mostrarDisciplinaNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }

    inserirAlunoNaDisciplina(disciplina, aluno) {
        const alunos = disciplina.alunos;
        if (!alunos.includes(aluno)) {
            alunos.push(aluno);
            console.log("Aluno adicionado à disciplina");
        } else {
            console.log("Aluno já está matriculado na disciplina");
            }
        }
        
        
}

