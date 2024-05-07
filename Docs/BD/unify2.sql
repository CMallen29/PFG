-- Instalar la extensión uuid-ossp para generar UUIDs automáticamente
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

-- Crear la tabla plataformas
CREATE TABLE platforms (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT
);

-- Crear la tabla género
CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT
);

-- Crear la tabla desarrollador
CREATE TABLE developers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT
);

-- Crear la tabla editor
CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT
);

-- Crear la tabla PEGI
CREATE TABLE pegis (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT
);

-- Crear la tabla modo de juego
CREATE TABLE game_modes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT
);

-- Crear la tabla games
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT,
    platform INT,
    genre INT,
    developer INT,
    publisher INT,
    pegi INT,
    game_mode INT,
    release_date DATE,
    FOREIGN KEY (platform) REFERENCES platforms(id),
    FOREIGN KEY (genre) REFERENCES genres(id),
    FOREIGN KEY (developer) REFERENCES developers(id),
    FOREIGN KEY (publisher) REFERENCES publishers(id),
    FOREIGN KEY (pegi) REFERENCES pegis(id),
    FOREIGN KEY (game_mode) REFERENCES game_modes(id)
);


-- Crear la tabla users con columnas obligatorias y fecha de registro automática
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT DEFAULT username,
    register_date TIMESTAMP DEFAULT now() NOT NULL,
    avatar_path TEXT,
    rol BOOLEAN DEFAULT FALSE,
    games_user INT,
    FOREIGN KEY (games_user) REFERENCES games(id)
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

-- Insertar datos en users
INSERT INTO users (email, username, password, name)
VALUES ('user3@user3.com', 'user3', 'user3', 'user3');

INSERT INTO users (email, username, password, name, rol)
VALUES ('admin2@admin2.com', 'admin2', 'admin2', 'admin2', true);

-- Insertar datos en game modes
INSERT INTO game_modes (name, slug, description)
VALUES 
    ('Single player', 'single-player', 'Un jugador'), 
    ('Multiplayer', 'multiplayer', 'Multijugador'), 
    ('Co-operative', 'co-operative', 'Cooperativo'), 
    ('Split screen', 'split-screen', 'Pantalla dividida'), 
    ('Massively Multiplayer Online (MMO)', 'massively-multiplayer-online-mmo', 'Multijugador masivo en línea'), 
    ('Battle Royale', 'battle-royale', 'Todos contra todos');

-- Insertar datos en genres
INSERT INTO genres (name, slug, description)
VALUES
    ('MOBA', 'moba', 'Multiplayer Online Battle Arena'),
    ('Point-and-click', 'point-and-click', 'Point-and-click'),
    ('Fighting', 'fighting', 'Lucha'),
    ('Shooter', 'shooter', 'Disparos'),
    ('Music', 'music', 'Música'),
    ('Platform', 'platform', 'Plataforma'),
    ('Puzzle', 'puzzle', 'Puzzle'),
    ('Racing', 'racing', 'Carreras'),
    ('Real Time Strategy (RTS)', 'real-time-strategy-rts', 'Estrategia en tiempo real'),
    ('Role-playing (RPG)', 'role-playing-rpg', 'Rol'),
    ('Simulator', 'simulator', 'Simulación'),
    ('Sport', 'sport', 'Deportes'),
    ('Strategy', 'strategy', 'Estrategia'),
    ('Turn-based strategy (TBS)', 'turn-based-strategy-tbs', 'Estrategia por turnos'),
    ('Tactical', 'tactical', 'Táctico'),
    ('Hack and slash/Beat ''em up', 'hack-and-slash-beat-em-up', 'Hack and slash'),
    ('Quiz/Trivia', 'quiz-trivia', 'Quiz'),
    ('Pinball', 'pinball', 'Pinball'),
    ('Adventure', 'adventure', 'Aventura'),
    ('Indie', 'indie', 'Indie'),
    ('Arcade', 'arcade', 'Arcade'),
    ('Visual Novel', 'visual-novel', 'Novela visual'),
    ('Card & Board Game', 'card-and-board-game', 'Cartas y tablero');

-- Insertar datos en platforms
INSERT INTO platforms (name, slug, description)
VALUES 
    ('PC (Microsoft Windows)', 'win', 'Plataforma de juegos para PC'),
    ('PlayStation 2', 'ps2', 'Consola de videojuegos de Sony'),
    ('Dreamcast', 'dc', 'Consola de videojuegos de Sega'),
    ('Game Boy Advance', 'gba', 'Consola portátil de Nintendo'),
    ('Wii U', 'wiiu', 'Consola de videojuegos de Nintendo'),
    ('Nintendo Switch', 'switch', 'Consola de videojuegos de Nintendo'),
    ('PlayStation 3', 'ps3', 'Consola de videojuegos de Sony'),
    ('Xbox', 'xbox', 'Consola de videojuegos de Microsoft'),
    ('Nintendo Entertainment System', 'nes', 'Consola de videojuegos de Nintendo'),
    ('Nintendo DS', 'nds', 'Consola portátil de Nintendo'),
    ('Game Boy Color', 'gbc', 'Consola portátil de Nintendo'),
    ('Sega Saturn', 'saturn', 'Consola de videojuegos de Sega'),
    ('Nintendo 3DS', '3ds', 'Consola portátil de Nintendo'),
    ('PlayStation Portable', 'psp', 'Consola portátil de Sony'),
    ('PlayStation Vita', 'psvita', 'Consola portátil de Sony'),
    ('Sega Master System/Mark III', 'sms', 'Consola de videojuegos de Sega'),
    ('Atari 5200', 'atari5200', 'Consola de videojuegos de Atari'),
    ('Nintendo GameCube', 'ngc', 'Consola de videojuegos de Nintendo'),
    ('Game Boy', 'gb', 'Consola portátil de Nintendo'),
    ('Super Famicom', 'sfam', 'Consola de videojuegos de Nintendo'),
    ('Wii', 'wii', 'Consola de videojuegos de Nintendo'),
    ('PlayStation 5', 'ps5', 'Consola de videojuegos de Sony'),
    ('Xbox Series X|S', 'series-x', 'Consola de videojuegos de Microsoft'),
    ('Nintendo 64DD', 'nintendo-64dd', 'Consola de videojuegos de Nintendo'),
    ('Sega Mega Drive/Genesis', 'genesis-slash-megadrive', 'Consola de videojuegos de Sega'),
    ('Xbox One', 'xboxone', 'Consola de videojuegos de Microsoft'),
    ('Family Computer', 'famicom', 'Consola de videojuegos de Nintendo'),
    ('PlayStation', 'ps', 'Consola de videojuegos de Sony'),
    ('Xbox 360', 'xbox360', 'Consola de videojuegos de Microsoft'),
    ('Mac', 'mac', 'Plataforma de juegos para Mac'),
    ('Super Nintendo Entertainment System', 'snes', 'Consola de videojuegos de Nintendo');
 