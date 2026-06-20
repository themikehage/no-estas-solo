export interface Stat {
  id: string
  value: string
  label: string
  context: string
  source: string
}

export const stats: Stat[] = [
  {
    id: 'global-deaths',
    value: '~600.000',
    label: 'muertes anuales',
    context: 'por uso no médico de sustancias psicoactivas a nivel global',
    source: 'OMS, CND 2024',
  },
  {
    id: 'overdose-deaths',
    value: '~585.000',
    label: 'muertes por sobredosis',
    context: 'anuales a nivel global',
    source: 'UNODC/OMS, 2021',
  },
  {
    id: 'global-users',
    value: '296 millones',
    label: 'personas consumieron drogas',
    context: 'al menos una vez en 2021 (5,8% de la población de 15-64 años)',
    source: 'UNODC, 2021',
  },
  {
    id: 'disorder',
    value: '39,5 millones',
    label: 'viven con trastorno por consumo',
    context: 'de sustancias psicoactivas',
    source: 'UNODC, 2021',
  },
  {
    id: 'opioid-deaths',
    value: '69%',
    label: 'de las muertes por sobredosis',
    context: 'son por opioides, pese a que el cannabis es la sustancia más consumida',
    source: 'UNODC/OMS',
  },
  {
    id: 'youth-opioids',
    value: '81%',
    label: 'de muertes por sobredosis en jóvenes (15-24)',
    context: 'están vinculadas a opioides sintéticos (fentanilo)',
    source: 'EE.UU., 2015-2022',
  },
]

export const methodologicalNote =
  'El estigma y la ilegalidad hacen que muchas muertes relacionadas con drogas no se reporten como tales. Estas cifras son estimaciones conservadoras.'
