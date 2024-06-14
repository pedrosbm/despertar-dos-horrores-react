type User = {
    userId?: number,
    userNome?: string,
    userPassword?: string
}

type Character = {
    personagemId?: number,
    personagemNome?: string,
    personagemImagem: File,
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
    aura?: Aura,
    usuario?: User
}

type Aura = {
    auraPrincipal?: string,
    aurasSecundarias?: string[],
    aurasTerciarias?: string[],
    auraFinal?: string
}

export type { User, Character, Aura }