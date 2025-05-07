export interface Evento {
  titulo: string;
  fecha: string;
  descripcion: string;
  imagen?: string;
  video?: string;
  id?: string;
}

export interface Ciudad {
  nombre: string;
  descripcion: string;
  imagen: string;
  eventos: Evento[];
}

export interface Ciudades {
  [key: string]: Ciudad;
}

export const ciudades: Ciudades = {
  medellin: {
    nombre: 'Platohedro - Medellín',
    descripcion: 'Intercambio con en Medellín con el ecosistema de platohedro',
    imagen: '/imagenes/FACHADA1.jpg',
    eventos: [
      {
        id: 'actividad-en-plato',
        titulo: 'Actividad en plato',
        fecha: '21 Noviembre, 2024',
        descripcion: 'Intervenciones artísticas en diferentes espacios de la ciudad',
        imagen: '/imagenes/enplato.jpg'
      },
      {
        id: 'visita-motivando-a-las-gyal',
        titulo: 'Visita Motivando a las Gyal',
        fecha: '22 Noviembre, 2024',
        descripcion: 'Exposición colectiva en la Galería de Arte Moderno',
        imagen: '/imagenes/motivando.jpg'
      },
      {
        id: 'visita-el-faro',
        titulo: 'Visita el Faro',
        fecha: '23 Noviembre, 2024',
        descripcion: 'Workshop sobre nuevas tecnologías en el arte',
        imagen: '/imagenes/Visita_Faro_Eleje_1.jpg'
      }
    ]
  },
  bogota: {
    nombre: 'Bogotá',
    descripcion: 'Capital cultural de Colombia, centro de convergencia artística y creativa.',
    imagen: '/imagenes/foto2.jpg',
    eventos: [
      {
        id: 'taller-de-art-of-hosing',
        titulo: 'Taller de Art of hosing',
        fecha: '14 Noviembre, 2024',
        descripcion: 'Muestra internacional en el Museo de Arte Moderno',
        imagen: '/imagenes/foto3.jpg'
      },
      {
        id: 'taller-danzar-la-vida',
        titulo: 'Taller Danzar la vida',
        fecha: '15 Noviembre, 2024',
        descripcion: 'Serie de presentaciones en espacios alternativos',
        imagen: '/imagenes/foto3.jpg'
      },
      {
        id: 'visita-a-proyectos',
        titulo: 'Visita a proyectos',
        fecha: '16 Noviembre, 2024',
        descripcion: 'Diálogo entre artistas locales e internacionales',
        imagen: '/imagenes/foto2.jpg'
      }
    ]
  }
};
