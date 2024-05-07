interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability2[];
  forms: Ability[];
  game_indices: Gameindex[];
  held_items: Helditem[];
  location_area_encounters: string;
  moves: Move[];
  species: Ability;
  sprites: Sprites;
  cries: Cries;
  stats: Stat[];
  types: Type[];
  past_types: Pasttype[];
}

interface Pasttype {
  generation: Ability;
  types: Type[];
}

interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: Other;
  versions: Versions;
}

interface Versions {
  "generation-i": Generationi;
  "generation-ii": Generationii;
  "generation-iii": Generationiii;
  "generation-iv": Generationiv;
  "generation-v": Generationv;
  "generation-vi": Generationvi;
  "generation-vii": Generationvii;
  "generation-viii": Generationviii;
}

interface Generationviii {
  icons: Dreamworld;
}

interface Generationvii {
  icons: Dreamworld;
  "ultra-sun-ultra-moon": Home;
}

interface Generationvi {
  "omegaruby-alphasapphire": Home;
  "x-y": Home;
}

interface Generationv {
  "black-white": Blackwhite;
}

interface Blackwhite {
  animated: Showdown;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface Generationiv {
  "diamond-pearl": Showdown;
  "heartgold-soulsilver": Showdown;
  platinum: Showdown;
}

interface Generationiii {
  emerald: Officialartwork;
  "firered-leafgreen": Crystal;
  "ruby-sapphire": Crystal;
}

interface Generationii {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Generationi {
  "red-blue": Redblue;
  yellow: Redblue;
}

interface Redblue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  "official-artwork": Officialartwork;
  showdown: Showdown;
}

interface Showdown {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface Dreamworld {
  front_default: string;
  front_female: null;
}

interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  version_group: Ability;
  move_learn_method: Ability;
}

interface Helditem {
  item: Ability;
  version_details: Versiondetail[];
}

interface Versiondetail {
  rarity: number;
  version: Ability;
}

interface Gameindex {
  game_index: number;
  version: Ability;
}

interface Ability2 {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

interface Ability {
  name: string;
  url: string;
}
