export interface Testimony {
  id: string
  name: string
  age: number
  substance: string
  excerpt: string
  fullStory: string
  recoveryStatus: string
}

export const testimonies: Testimony[] = [
  {
    id: 'maria',
    name: 'María',
    age: 34,
    substance: 'Alcohol',
    excerpt: 'No elegí beber cada noche. Elegí no sentir. El alcohol era el único que no me preguntaba por qué.',
    fullStory:
      'Empecé a los 16 para encajar. A los 22 ya no podía dormir sin beber. A los 28 perdí mi trabajo, mi pareja, mi confianza. Entré en tratamiento a los 30. Hoy llevo 4 años en recuperación. No fue una decisión. Fue un proceso.',
    recoveryStatus: 'En recuperación, 4 años',
  },
  {
    id: 'carlos',
    name: 'Carlos',
    age: 41,
    substance: 'Heroína',
    excerpt: 'La primera vez no duele. La segunda tampoco. La tercera ya no puedes parar. Nadie planea llegar ahí.',
    fullStory:
      'Probé heroína a los 25 en una fiesta. No era mi mundo. Pero el dolor de espalda era real, y la heroína lo hacía desaparecer. En seis meses necesitaba más para sentirme normal. En un año estaba inyectándome. Tardé 8 años en salir. Volví a sentir sin sustancias a los 33.',
    recoveryStatus: 'En recuperación, 8 años',
  },
  {
    id: 'laura',
    name: 'Laura',
    age: 28,
    substance: 'Cocaína',
    excerpt: 'No era adicción, me decía. Era productividad. Era social. Era control. Hasta que no lo fue.',
    fullStory:
      'La cocaína era mi herramienta. Me ayudaba a trabajar 14 horas, a salir los fines de semana, a mantener el ritmo. Cuando dejé de poder dormir sin ella, entendí que ya no era elección. El craving no se va. Aprendes a vivir con él.',
    recoveryStatus: 'En recuperación, 2 años',
  },
  {
    id: 'javier',
    name: 'Javier',
    age: 52,
    substance: 'Benzodiacepinas',
    excerpt: 'Me las recetaron para la ansiedad. En tres semanas no podía dejarlas. La abstinencia fue peor que la ansiedad original.',
    fullStory:
      'El médico me recetó diazepam para el estrés. Funcionó. Hasta que intenté dejarlo. Temblores, insomnio, convulsiones. Nadie me advirtió que 3 semanas de uso diario crean dependencia. Tardé 2 años en destetares bajo supervisión médica.',
    recoveryStatus: 'En recuperación, 3 años',
  },
  {
    id: 'ana',
    name: 'Ana',
    age: 23,
    substance: 'Cannabis',
    excerpt: 'Todo el mundo lo hace. No es peligroso, decían. Pero yo perdí la motivación, la memoria, los años.',
    fullStory:
      'Empecé a los 15. A los 20 fumaba todo el día. No podía estudiar, no podía trabajar, no podía estar presente. No hay sobredosis de cannabis, pero hay una vida que se escurre. Dejarlo fue lo más difícil que he hecho.',
    recoveryStatus: 'En recuperación, 1 año',
  },
]

export const testimoniesIntro =
  'Cada historia es real. Ninguna es simple. La adicción no es una elección, es un proceso. La recuperación tampoco es una decisión, es un camino.'
