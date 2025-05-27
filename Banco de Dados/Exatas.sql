Create database Exatas;
use Exatas;

CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('Aluno') NOT NULL,
    funcao VARCHAR(50),
    grupo_permissao VARCHAR(100)
);

CREATE TABLE Assinaturas (
    id SERIAL PRIMARY KEY,
    aluno_id INT NOT NULL REFERENCES Usuarios(id),
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    UNIQUE (aluno_id, data_inicio)
);

CREATE TABLE Cursos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL UNIQUE,
    descricao TEXT,
    carga_horaria_minutos INT,
    nivel ENUM('Basico', 'Intermediario', 'Avancado') NOT NULL,
    mentor_id INT REFERENCES Usuarios(id)
);

CREATE TABLE Matriculas (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES Usuarios(id),
    curso_id INT REFERENCES Cursos(id),
    progresso_geral NUMERIC(5,2) DEFAULT 0.0,
    data_matricula TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(aluno_id, curso_id)
);

CREATE TABLE Modulos (
    id SERIAL PRIMARY KEY,
    curso_id INT REFERENCES Cursos(id),
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    ordem INT NOT NULL,
    UNIQUE(curso_id, ordem)
);

CREATE TABLE Aulas (
    id SERIAL PRIMARY KEY,
    modulo_id INT REFERENCES Modulos(id),
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    duracao_minutos INT,
    ordem INT NOT NULL,
    video_url TEXT,
    UNIQUE(modulo_id, ordem)
);

CREATE TABLE Progresso_Aulas (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES Usuarios(id),
    aula_id INT REFERENCES Aulas(id),
    percentual_conclusao NUMERIC(5,2) DEFAULT 0.0,
    data_ultima_interacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(aluno_id, aula_id)
);

CREATE TABLE Topicos_Forum (
    id SERIAL PRIMARY KEY,
    aula_id INT REFERENCES Aulas(id),
    autor_id INT REFERENCES Usuarios(id),
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Mensagens_Forum (
    id SERIAL PRIMARY KEY,
    topico_id INT REFERENCES Topicos_Forum(id),
    autor_id INT REFERENCES Usuarios(id),
    texto TEXT NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    parent_mensagem_id INT REFERENCES Mensagens_Forum(id)
);

CREATE TABLE Exercicios (
    id SERIAL PRIMARY KEY,
    aula_id INT REFERENCES Aulas(id),
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT
);

CREATE TABLE Questoes (
    id SERIAL PRIMARY KEY,
    exercicio_id INT REFERENCES Exercicios(id),
    enunciado TEXT NOT NULL,
    tipo ENUM('Multipla Escolha', 'Aberta') NOT NULL,
    peso_progresso NUMERIC(4,2) DEFAULT 1.0
);

CREATE TABLE Alternativas (
    id SERIAL PRIMARY KEY,
    questao_id INT REFERENCES Questoes(id),
    texto TEXT NOT NULL,
    correta BOOLEAN DEFAULT FALSE
);

CREATE TABLE Respostas (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES Usuarios(id),
    questao_id INT REFERENCES Questoes(id),
    alternativa_id INT REFERENCES Alternativas(id),
    resposta_aberta TEXT,
    correta BOOLEAN,
    data_resposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(aluno_id, questao_id)
);

CREATE TABLE Desempenhos (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES Usuarios(id),
    exercicio_id INT REFERENCES Exercicios(id),
    nota NUMERIC(5,2),
    aprovado BOOLEAN,
    data_avaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(aluno_id, exercicio_id)
);
