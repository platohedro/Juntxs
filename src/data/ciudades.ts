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
    descripcion: 'Ciudad de la eterna primavera, donde el arte y la cultura se fusionan con la innovación.',
    imagen: '/imagenes/FACHADA1.jpg',
    eventos: [
      {
        id: 'festival-arte-urbano',
        titulo: 'Festival de Arte Urbano',
        fecha: '15-20 Marzo, 2024',
        descripcion: 'Intervenciones artísticas en diferentes espacios de la ciudad',
        imagen: 'https://via.placeholder.com/400x300'
      },
      {
        id: 'encuentro-artistas-emergentes',
        titulo: 'Encuentro de Artistas Emergentes',
        fecha: '5-8 Abril, 2024',
        descripcion: 'Exposición colectiva en la Galería de Arte Moderno',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: 'taller-arte-digital',
        titulo: 'Taller de Arte Digital',
        fecha: '12 Abril, 2024',
        descripcion: 'Workshop sobre nuevas tecnologías en el arte',
        imagen: 'https://via.placeholder.com/400x300'
      }
    ]
  },
  bogota: {
    nombre: 'Bogotá',
    descripcion: 'Capital cultural de Colombia, centro de convergencia artística y creativa.',
    imagen: 'https://via.placeholder.com/1200x400',
    eventos: [
      {
        id: 'exposicion-arte-contemporaneo',
        titulo: 'Exposición de Arte Contemporáneo',
        fecha: '1-30 Mayo, 2024',
        descripcion: 'Muestra internacional en el Museo de Arte Moderno',
        imagen: 'https://via.placeholder.com/400x300'
      },
      {
        id: 'ciclo-performance',
        titulo: 'Ciclo de Performance',
        fecha: '10-15 Mayo, 2024',
        descripcion: 'Serie de presentaciones en espacios alternativos',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: 'conversatorio-arte-ciudad',
        titulo: 'Conversatorio: Arte y Ciudad',
        fecha: '20 Mayo, 2024',
        descripcion: 'Diálogo entre artistas locales e internacionales',
        imagen: 'https://via.placeholder.com/400x300'
      }
    ]
  }
};
