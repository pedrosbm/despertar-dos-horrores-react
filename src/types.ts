type User = {
    id: number,
    nome: string,
    senha: string
    cargo: string
}

type Character = {
    id: number,
    nome: string,

    hp: number,
    eneru: number,
    intuicao: number,
    agilidade: number,
    nivelDespertar: number,
    pontos: number,
    
    hp_atual: number,
    eneru_atual: number,

    personagemImagem: string,

    usuario: User,
}

type Aura = {
    id: number,
    nome: string,
    principal: boolean,
    nivel: number,
    personagem: Character
}

type Item = {
    id: number,
    nome: string,
    tipo: string,
    icone: string,
    descricao: string,
    personagem: Character,
}
export type { User, Character, Item, Aura }