type User = {
    userId?: number,
    userNome?: string,
    userPassword?: string
}

type Character = {
    personagemId?: number,
    personagemNome?: string,
    personagemImagem: Blob,
    hp?: number,
    mp?: number,
    vitalidade?: number,
    defesa?: number,
    eneru?: number,
    agilidade?: number,
    intuicao?: number,
    conhecimento?: number,
    forcaFisica?: number,
    despertarNivel?: number,
    intensidadeAura?: string,
    pontos?: number,
    usuario?: User
}

export type { User, Character }