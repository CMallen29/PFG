-- Instalar la extensión uuid-ossp para generar UUIDs automáticamente
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear la tabla users con columnas obligatorias y fecha de registro automática
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    register_date TIMESTAMP DEFAULT now() NOT NULL,
    avatar_path VARCHAR(255)
);

-- Crear la tabla delete_users
CREATE TABLE delete_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    register_date TIMESTAMP NOT NULL,
    avatar_path VARCHAR(255)
);

-- Crear la tabla change_users
CREATE TABLE change_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    id_user UUID NOT NULL,
    field_modified VARCHAR(50) NOT NULL,
    old_value VARCHAR(255) NOT NULL,
    new_value VARCHAR(255) NOT NULL,
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
