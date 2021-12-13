CREATE DATABASE hublocal;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(200) NOT NULL,
    user_email VARCHAR(200) NOT NULL,
    user_password VARCHAR(200) NOT NULL
);

CREATE TABLE empresas (
    id serial NOT NULL,
    user_id uuid NOT NULL,
    nome varchar(300) NOT NULL, 
    cnpj integer NOT NULL, 
    descricao varchar(1000) NOT NULL,
    published_date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

CREATE TABLE locais (
    id serial NOT NULL,
    empresa_id serial NOT NULL,
    responsavel_id serial NOT NULL,
    nome varchar(300) NOT NULL, 
    endereco varchar(1000) NOT NULL,
    published_date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (empresa_id) REFERENCES empresas(id)
                        ON DELETE CASCADE,
    FOREIGN KEY (responsavel_id) REFERENCES responsaveis(id)
                        ON DELETE CASCADE
);

CREATE TABLE responsaveis (
    id serial NOT NULL,
    empresa_id serial NOT NULL,
    nome varchar(300) NOT NULL, 
    telefone integer NOT NULL, 
    endereco varchar(1000) NOT NULL,
    published_date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (empresa_id)
        REFERENCES empresas(id)
        ON DELETE CASCADE
);