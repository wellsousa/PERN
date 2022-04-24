create schema blog;

drop table blog.posts

create table blog.posts(
    id serial primary key,
    title text not null,
    content text not null,
    date timestamp default now()
)

