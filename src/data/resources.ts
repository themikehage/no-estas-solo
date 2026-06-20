export interface Resource {
  id: string
  name: string
  type: 'phone' | 'website' | 'center'
  coverage: string
  description: string
  contact: string
  url?: string
  region?: string
}

export const resources: Resource[] = [
  {
    id: 'pnsd',
    name: 'Plan Nacional sobre Drogas — Ayuda Cerca de ti',
    type: 'website',
    coverage: 'España',
    description:
      'Portal oficial para localizar centros de atención por comunidad autónoma.',
    contact: 'pnsd.sanidad.gob.es/ciudadanos/ayudaCerca/home.htm',
    url: 'https://pnsd.sanidad.gob.es/ciudadanos/ayudaCerca/home.htm',
  },
  {
    id: '012',
    name: 'Teléfono 012',
    type: 'phone',
    coverage: 'España',
    description:
      'Atención general de salud, incluye orientación en adicciones. La cobertura varía por comunidad autónoma.',
    contact: '012',
  },
  {
    id: 'pad-madrid',
    name: 'Servicio de Prevención de Adicciones (PAD)',
    type: 'center',
    coverage: 'Madrid',
    description:
      'Atención personalizada, confidencial y gratuita del Ayuntamiento de Madrid.',
    contact: 'pad@madrid.es',
    region: 'Madrid',
  },
  {
    id: 'linia-verda',
    name: 'Línia Verda',
    type: 'center',
    coverage: 'Catalunya',
    description:
      'Servicio telefónico, presencial y online gratuito desde 1993, dependiente de la Generalitat.',
    contact: '900 900 900',
    region: 'Catalunya',
  },
  {
    id: 'fad-juventud',
    name: 'FAD Juventud — SIOF',
    type: 'website',
    coverage: 'España',
    description:
      'Acompañamiento gratuito y confidencial, enfocado en jóvenes, adicciones con y sin sustancia.',
    contact: 'fad.es/siof/',
    url: 'https://fad.es/siof/',
  },
]

export const resourcesIntro =
  'Si tú o alguien que conoces necesita ayuda, no estás solo. Estos recursos son gratuitos y confidenciales.'

export const resourcesDisclaimer =
  'Estos números y enlaces deben verificarse antes de usarlos, ya que pueden cambiar. Consulta siempre las fuentes oficiales.'
