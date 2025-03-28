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
  maria: {
    nombre: 'María C',
    bio: 'Maria Carolina Ardila nació en Bogotá y se crió en Bucaramanga. Se mueve entre el quehacer del arte, la escritura y lo audiovisual. Actualmente vive en Medellín, se dedica a ser escritora fantasma y crear cosas. En el ámbito artístico mayoritariamente juega con (y desde) su cuerpa, sonidos, videos, cosas encontradas y circuitos. Busca hibridar y nutrir los medios de creación desde la multidisciplinariedad para llegar a nuevos espacios y ficciones que se inserten en la cotidianidad. ',
    imagen: '/imagenes/mariac.jpg',
    actividades: [
      {
        id: 'micro-ficciones-1',
        titulo: 'micro ficciones con Agueros - encuentro1',
        descripcion: 'Serie de fotografías intervenidas digitalmente',
        descripcionCompleta: 'Una exploración visual que combina técnicas fotográficas tradicionales con intervenciones digitales, creando un diálogo entre lo analógico y lo digital. Esta serie reflexiona sobre la memoria y la transformación de los espacios urbanos.',
        fecha: '10 Marzo, 2024',
        lugar: 'Galería Principal, Pie de Cuesta',
        imagen: 'https://via.placeholder.com/400x300',
        tipo: 'imagen'
      },
      {
        id: 'micro ficciones con Agueros - encuentro2',
        titulo: 'micro ficciones con Agüeros - encuentro2',
        descripcion: 'Instalación multimedia',
        descripcionCompleta: 'Instalación que combina elementos visuales, sonoros y espaciales para crear una experiencia inmersiva. La obra invita a los espectadores a reflexionar sobre las relaciones entre el cuerpo, el espacio y la tecnología en la era digital.',
        fecha: '15 Marzo, 2024',
        lugar: 'Centro Cultural, Pie de Cuesta',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tipo: 'video'
      },
      
    ]
  },
  laura: {
    nombre: 'Laura Sofia',
    bio: 'Laura Sofía Montoya Gómez nació, creció y vive en Medellín. Es arquitecta, docente universitaria y magíster en Arquitectura, Crítica y Proyecto. Es amante de los gatos y aficionada a la jardinería. Hace 13 años, con algunxs amigxs, cofundó Proyecto NN, organización sin ánimo de lucro interesada en apoyar procesos comunitarios de apropiación y transformación del espacio.',
    imagen: '/imagenes/luara2.png',
    actividades: [
      {
        id: 'Diálogos del agua',
        titulo: 'Diálogos del agua',
        descripcion: 'Instalación sonora',
        descripcionCompleta: 'Una instalación que transforma el silencio en una experiencia sensorial tangible. Utilizando tecnología de sonido espacial, la obra crea paisajes sonoros que responden a la presencia y movimiento de los espectadores, generando una experiencia única e irrepetible.',
        fecha: '5 Abril, 2024',
        lugar: 'Auditorio Municipal, Pie de Cuesta',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tipo: 'video'
      },
   
    ]
  },
  sandra: {
    nombre: 'Sandra Ramírez Giraldo',
    bio: 'Narradora visual, andariega de los Andes, bogadora de Chicha, atisbadora y aprendiz en las artes de caminar y contemplar. Ha desarrollado talleres de fotografía y sensibilización en zonas rurales de Colombia,Venezuela, Ecuador, Perú y Bolivia, vinculándose en procesos para la construcción de memorias colectivas; una búsqueda por elogiar lo cotidiano, por retratar la vida como resistencia. ',
    imagen: '/imagenes/sandra.jpeg',
    actividades: [
      {
        id: 'Memorias de Elena y Oro',
        titulo: 'Memorias de Elena y Oro',
        descripcion: 'Performance multimedia',
        descripcionCompleta: 'Performance que explora la relación entre el cuerpo humano y las tecnologías digitales. A través de proyecciones, sensores de movimiento y sonido en tiempo real, la artista crea un diálogo entre lo físico y lo virtual, cuestionando los límites de la corporalidad en la era digital.',
        fecha: '15 Abril, 2024',
        lugar: 'Teatro Municipal, Pie de Cuesta',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        tipo: 'video'
      },

    
    ]
  }
};
