type Item = {
    itemId?: number
    itemIcone?: string,
    itemNome?: string,
    itemTipo?: string,
    itemDescricao?: string;
}

type User = {
    userId?: number,
    userNome?: string,
    userPassword?: string
}

type Character = {
    personagemId?: number,
    personagemNome?: string,
    tipoAura?: string,
    vitalidade?: number,
    defesa?: number,
    eneru?: number,
    agilidade?: number,
    intuicao?: number,
    inteligencia?: number,
    forcaFisica?: number,
    despertarNivel?: number,
    intensidadeAura?: string,
    pontos?: number
}

export type { Item, User, Character }