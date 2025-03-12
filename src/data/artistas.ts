export interface Actividad {
  id: string;
  titulo: string;
  descripcion: string;
  descripcionCompleta?: string;
  fecha?: string;
  lugar?: string;
  imagen?: string;
  video?: string;
  tipo: string;
}

export interface Artista {
  nombre: string;
  bio: string;
  imagen: string;
  actividades: Actividad[];
}

export interface Artistas {
  [key: string]: Artista;
}

export const artistas: Artistas = {
  artista1: {
    nombre: 'María C',
    bio: 'Artista visual especializada en arte contemporáneo, con más de 10 años de experiencia explorando las intersecciones entre el arte digital y tradicional.',
    imagen: '/imagenes/mariac.jpg',
    actividades: [
      {
        id: 'actividad-1',
        titulo: 'Actividad 1',
        descripcion: 'Serie de fotografías intervenidas digitalmente',
        descripcionCompleta: 'Una exploración visual que combina técnicas fotográficas tradicionales con intervenciones digitales, creando un diálogo entre lo analógico y lo digital. Esta serie reflexiona sobre la memoria y la transformación de los espacios urbanos.',
        fecha: '10 Marzo, 2024',
        lugar: 'Galería Principal, Pie de Cuesta',
        imagen: 'https://via.placeholder.com/400x300',
        tipo: 'imagen'
      },
      {
        id: 'actividad-2',
        titulo: 'Actividad 2',
        descripcion: 'Instalación multimedia',
        descripcionCompleta: 'Instalación que combina elementos visuales, sonoros y espaciales para crear una experiencia inmersiva. La obra invita a los espectadores a reflexionar sobre las relaciones entre el cuerpo, el espacio y la tecnología en la era digital.',
        fecha: '15 Marzo, 2024',
        lugar: 'Centro Cultural, Pie de Cuesta',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tipo: 'video'
      },
      {
        id: 'actividad-3',
        titulo: 'Actividad 3',
        descripcion: 'Serie fotográfica',
        descripcionCompleta: 'Una colección de fotografías que documentan la vida cotidiana en Pie de Cuesta, capturando momentos íntimos y reveladores de la comunidad local. Esta serie busca visibilizar las historias no contadas y celebrar la diversidad cultural de la región.',
        fecha: '20 Marzo, 2024',
        lugar: 'Espacio Público, Pie de Cuesta',
        imagen: 'https://via.placeholder.com/400x300',
        tipo: 'imagen'
      }
    ]
  },
  artista2: {
    nombre: 'Laura Sofia',
    bio: 'Artista multidisciplinario enfocado en la escultura y el arte sonoro. Su trabajo explora la relación entre el espacio y el sonido.',
    imagen: 'https://via.placeholder.com/800x400',
    actividades: [
      {
        id: 'ecos-del-silencio',
        titulo: 'Ecos del Silencio',
        descripcion: 'Instalación sonora',
        descripcionCompleta: 'Una instalación que transforma el silencio en una experiencia sensorial tangible. Utilizando tecnología de sonido espacial, la obra crea paisajes sonoros que responden a la presencia y movimiento de los espectadores, generando una experiencia única e irrepetible.',
        fecha: '5 Abril, 2024',
        lugar: 'Auditorio Municipal, Pie de Cuesta',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tipo: 'video'
      },
      {
        id: 'formas-del-tiempo',
        titulo: 'Formas del Tiempo',
        descripcion: 'Esculturas sonoras',
        descripcionCompleta: 'Serie de esculturas que incorporan elementos sonoros activados por el tiempo y las condiciones ambientales. Cada pieza evoluciona a lo largo del día, creando composiciones sonoras que reflejan el paso del tiempo y los ciclos naturales.',
        fecha: '10 Abril, 2024',
        lugar: 'Plaza Central, Pie de Cuesta',
        imagen: 'https://via.placeholder.com/400x300',
        tipo: 'imagen'
      }
    ]
  },
  artista3: {
    nombre: 'Sandra Ramirez',
    bio: 'Performer y artista visual que trabaja en la intersección entre el cuerpo, el espacio y la tecnología.',
    imagen: '/imagenes/sandra.jpeg',
    actividades: [
      {
        id: 'cuerpos-digitales',
        titulo: 'Cuerpos Digitales',
        descripcion: 'Performance multimedia',
        descripcionCompleta: 'Performance que explora la relación entre el cuerpo humano y las tecnologías digitales. A través de proyecciones, sensores de movimiento y sonido en tiempo real, la artista crea un diálogo entre lo físico y lo virtual, cuestionando los límites de la corporalidad en la era digital.',
        fecha: '15 Abril, 2024',
        lugar: 'Teatro Municipal, Pie de Cuesta',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tipo: 'video'
      },
      {
        id: 'huellas-temporales',
        titulo: 'Huellas Temporales',
        descripcion: 'Serie fotográfica',
        descripcionCompleta: 'Colección de fotografías que capturan el movimiento y la presencia humana en espacios urbanos. Utilizando técnicas de larga exposición, la artista registra las huellas invisibles que dejamos en los espacios que habitamos, revelando patrones y ritmos ocultos en la vida cotidiana.',
        fecha: '20 Abril, 2024',
        lugar: 'Galería Alternativa, Pie de Cuesta',
        imagen: 'https://via.placeholder.com/400x300',
        tipo: 'imagen'
      },
      {
        id: 'memorias-corporales',
        titulo: 'Memorias Corporales',
        descripcion: 'Videoarte',
        descripcionCompleta: 'Pieza de videoarte que explora la memoria corporal y los gestos heredados. A través de una narrativa visual poética, la obra reflexiona sobre cómo nuestros cuerpos almacenan y transmiten memorias culturales, familiares y personales a través de generaciones.',
        fecha: '25 Abril, 2024',
        lugar: 'Centro Cultural, Pie de Cuesta',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tipo: 'video'
      }
    ]
  }
};
