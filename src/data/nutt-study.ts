export interface Substance {
  id: string
  name: string
  lethality: number
  dependency: number
  socialHarm: number
  overallHarm: number
  notes: string
}

export const substances: Substance[] = [
  {
    id: 'alcohol',
    name: 'Alcohol',
    lethality: 48,
    dependency: 73,
    socialHarm: 93,
    overallHarm: 72,
    notes: 'La droga legal más dañina globalmente. Alta prevalencia y normalización social amplifican su impacto.',
  },
  {
    id: 'heroin',
    name: 'Heroína',
    lethality: 92,
    dependency: 97,
    socialHarm: 55,
    overallHarm: 55,
    notes: 'Dependencia en días. Letalidad por sobredosis extremadamente alta.',
  },
  {
    id: 'crack',
    name: 'Crack cocaína',
    lethality: 72,
    dependency: 90,
    socialHarm: 54,
    overallHarm: 54,
    notes: 'Potencial adictivo muy alto. Memoria de craving intensa.',
  },
  {
    id: 'meth',
    name: 'Metanfetamina',
    lethality: 66,
    dependency: 82,
    socialHarm: 55,
    overallHarm: 48,
    notes: 'Daño físico severo. Neurotoxicidad documentada.',
  },
  {
    id: 'cocaine',
    name: 'Cocaína',
    lethality: 43,
    dependency: 82,
    socialHarm: 42,
    overallHarm: 27,
    notes: 'Lidera en potencial adictivo puro. Menor letalidad inmediata que opioides.',
  },
  {
    id: 'tobacco',
    name: 'Tabaco',
    lethality: 66,
    dependency: 84,
    socialHarm: 26,
    overallHarm: 26,
    notes: 'Alta dependencia y letalidad a largo plazo. Daño social relativamente bajo.',
  },
  {
    id: 'barbiturates',
    name: 'Barbitúricos',
    lethality: 78,
    dependency: 71,
    socialHarm: 26,
    overallHarm: 20,
    notes: 'Abstinencia puede causar convulsiones y muerte.',
  },
  {
    id: 'benzodiazepines',
    name: 'Benzodiacepinas',
    lethality: 60,
    dependency: 78,
    socialHarm: 22,
    overallHarm: 15,
    notes: 'Dependencia en 2-4 semanas de uso diario. Abstinencia peligrosa.',
  },
  {
    id: 'ketamine',
    name: 'Ketamina',
    lethality: 36,
    dependency: 58,
    socialHarm: 25,
    overallHarm: 15,
    notes: 'Uso médico legítimo como anestésico.',
  },
  {
    id: 'methadone',
    name: 'Metadona',
    lethality: 38,
    dependency: 65,
    socialHarm: 22,
    overallHarm: 12,
    notes: 'Usada en tratamientos de sustitución.',
  },
  {
    id: 'ghb',
    name: 'GHB',
    lethality: 45,
    dependency: 61,
    socialHarm: 18,
    overallHarm: 12,
    notes: 'Estrecho margen entre dosis activa y tóxica.',
  },
  {
    id: 'cannabis',
    name: 'Cannabis',
    lethality: 16,
    dependency: 44,
    socialHarm: 30,
    overallHarm: 36,
    notes: 'La sustancia más consumida globalmente. Baja letalidad inmediata.',
  },
  {
    id: 'solvents',
    name: 'Solventes',
    lethality: 42,
    dependency: 48,
    socialHarm: 18,
    overallHarm: 10,
    notes: 'Neurotoxicidad por inhalación.',
  },
  {
    id: 'lsd',
    name: 'LSD',
    lethality: 7,
    dependency: 24,
    socialHarm: 19,
    overallHarm: 7,
    notes: 'Baja toxicidad física. Sin dependencia física documentada.',
  },
  {
    id: 'mdma',
    name: 'MDMA',
    lethality: 22,
    dependency: 44,
    socialHarm: 19,
    overallHarm: 9,
    notes: 'Neurotoxicidad potencial. Riesgo de hipertermia.',
  },
  {
    id: 'mushrooms',
    name: 'Setas alucinógenas',
    lethality: 4,
    dependency: 19,
    socialHarm: 13,
    overallHarm: 6,
    notes: 'Baja toxicidad. Sin dependencia física.',
  },
]

export const axes = [
  {
    id: 'lethality',
    label: 'Letalidad',
    description: 'Riesgo de muerte por sobredosis',
    color: '#D32F2F',
  },
  {
    id: 'dependency',
    label: 'Dependencia',
    description: 'Velocidad y fuerza de la adicción',
    color: '#FFB300',
  },
  {
    id: 'socialHarm',
    label: 'Daño social',
    description: 'Impacto en familias, sociedad, sistema sanitario',
    color: '#1E4D8C',
  },
] as const

export const studySource =
  'Nutt, King, Phillips et al., "Drug harms in the UK: a multicriteria decision analysis", The Lancet (2010). Los expertos puntuaron cada sustancia en 3 ejes: daño físico al usuario, potencial de dependencia, y daño a terceros/sociedad.'

export const noWorstDrugMessage =
  'No existe "la peor droga". Depende del eje: letalidad inmediata, dificultad de abstinencia, o daño social agregado.'
