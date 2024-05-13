-- Instalar la extensión uuid-ossp para generar UUIDs automáticamente
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear la tabla users con columnas obligatorias y fecha de registro automática
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    register_date TIMESTAMP DEFAULT now() NOT NULL,
    save_pokemon INTEGER[] NULL,
    avatar_path TEXT DEFAULT 'user.webp'
);

-- Crear la tabla delete_users
CREATE TABLE delete_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    register_date TIMESTAMP NOT NULL,
    avatar_path TEXT
);

-- Crear la tabla change_users
CREATE TABLE change_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_user UUID NOT NULL,
    field_modified TEXT NOT NULL,
    old_value TEXT NOT NULL,
    new_value TEXT NOT NULL,
    change_date TIMESTAMP DEFAULT now() NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id)
);

-- Crear la función PL/pgSQL para el trigger before_delete_user
CREATE OR REPLACE FUNCTION before_delete_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO delete_users (email, username, password, name, register_date, avatar_path)
    VALUES (OLD.email, OLD.username, OLD.password, OLD.name, OLD.register_date, OLD.avatar_path);
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Crear el trigger before_delete_user
CREATE TRIGGER before_delete_user
BEFORE DELETE ON users
FOR EACH ROW
EXECUTE FUNCTION before_delete_user();

-- Crear la función PL/pgSQL para el trigger before_update_user
CREATE OR REPLACE FUNCTION before_update_user()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.username IS DISTINCT FROM NEW.username THEN
        INSERT INTO change_users (id_user, field_modified, old_value, new_value)
        VALUES (OLD.id, 'username', OLD.username, NEW.username);
    END IF;

    IF OLD.email IS DISTINCT FROM NEW.email THEN
        INSERT INTO change_users (id_user, field_modified, old_value, new_value)
        VALUES (OLD.id, 'email', OLD.email, NEW.email);
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear el trigger before_update_user
CREATE TRIGGER before_update_user
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION before_update_user();

-- Seed de usuarios
INSERT INTO users (email, username, password, name, save_pokemon, avatar_path)
VALUES 
    ('p@p.es,popopopopop,$2b$10$qRxxYKcnBRcoDTIdTUQVjuNdiIy3tAvMLXIrfH5tBrCZgAyBRP/e6,pop,,user.webp'),
    ('admin@mail.com,admin,$2b$10$xAr3/AmtF7I3.gz59MWtG.J/NI7h7eOtNeMY28vJvBk0R.dohKyOC,admin,,admin.jpg')