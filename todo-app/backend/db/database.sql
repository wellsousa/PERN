
CREATE DATABASE PersonalTasks;

DROP TABLE TTodo;

/*
    PRIORITY
    0 - sem prioridade
    1 - baixa
    2 - media
    3 - alta
*/
CREATE TABLE TTodo (
	id SERIAL NOT NULL,
    label varchar(30) NULL,
	description varchar(256) NULL,
    cod_priority int NULL,
	CONSTRAINT ttodo_pkey PRIMARY KEY (id)
);


