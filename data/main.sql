CREATE DATABASE saas_nodejs;

USE saas_nodejs;

CREATE TABLE users_master(
    sr          INT             auto_increment primary key,
    fname       VARCHAR(25),     
    lname       VARCHAR(25),
    email       VARCHAR(255),
    phone       VARCHAR(15),
    pwd         VARCHAR(255),
    salt        VARCHAR(5),
    act_code    VARCHAR(10),
    rec_stat    VARCHAR(1),
    create_ts   TIMESTAMP(6)       DEFAULT CURRENT_TIMESTAMP(6)
);