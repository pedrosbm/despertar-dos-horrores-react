type Item = {
    id: number,
    icone: string,
    nome: string,
    tipo: string,
    descricao: string
}

type User = {
    id: number,
    nome: string,
    password: string
    characters: Character[]
}

type Character = {
    id: number,
    idade: number,
    personalidade: string,
    defeitos: string,
    trejeitos: string,
    objetivo: string,
    historia: string,
    porqueEntrou: string,
    tipoAura: string,
    vitalidade: number,
    defesa: number,
    eneru: number,
    agilidade: number,
    intuicao: number,
    inteligencia: number,
    forcaFisica: number,
    despertarNivel: number,
    intensidadeAura: string,
    inventory: Item[]
}

export type { Item, User, Character }