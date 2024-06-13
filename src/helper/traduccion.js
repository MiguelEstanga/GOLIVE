export const t = {
    'es': {
        'BIENVENIDO': 'BIENVENIDO',
        'Comenzar': 'Comenzar',
        'Lunes': 'Lunes',
        'Martes': 'Martes',
        'Miércoles': 'Miércoles',
        'Jueves': 'Jueves',
        'Viernes': 'Viernes',
        'Sábado': 'Sábado',
        'Domingo': 'Domingo',
        'Comunidad': 'Presentamos el curso de divisas de IM Academy, diseñado para educar a los estudiantes con el conocimiento mas completo y práctico en el mundo del comercio de devisas.',
        'TituloComunidad':' Qué hay de nuevo en tu comunidad?  ',
        'BtnIr': 'Ir',
        'VerTodos': 'Ver todos',
        'ProximasSesiones': 'Proximas Sesiones',
        'Académica': 'Academia',
        'ViveAhora': 'Vive ahora',
        'EnLinea': 'En linea',
        'VideosFavoritos': 'Videos Favoritos',
        'Nombre Fichero' : 'Nombre del archivo',
        'SeleccionarDia' : 'Seleccionar día',
        'EducadoresMásVistos': 'Educadores más vistos',
       
        'SesionesRecordadas': 'Sesiones Recordadas',
    },
    'EN': {
        'BIENVENIDO': 'WELCOME',
        'Comenzar': 'Start',
        'Lunes': 'Monday',
        'Martes': 'Tuesday',
        'Miércoles': 'Wednesday',
        'Jueves': 'Thursday',
        'Viernes': 'Friday',
        'Sábado': 'Saturday',
        'Domingo': 'Sunday',
        'Comunidad': 'We present the IM Academy Divisas course, designed to educate students with the most complete and practical knowledge in the world of currency exchange.',
        'TituloComunidad':' What\'s new in your community?  ',
        'BtnIr': 'Go',
        'VerTodos': 'See all',
        'ProximasSesiones': 'Next Sessions',
        'Académica': 'Academic',
        'ViveAhora': 'Live Now',
        'EnLinea': 'On line',
        
        'Nombre Fichero' : 'File name',
        'SeleccionarDia' : 'Select day',
        'EducadoresMásVistos': 'More Visitors',
        'VideosFavoritos': 'Favorite Videos',
        'SesionesRecordadas': 'Recorded Sessions',
    },
   
   
}

export default function lang(lang, key) {
    if (t[lang] && t[lang][key]) {
      return t[lang][key];
    } else {
      // Return a default value if the key is not found
      return "Translation not found"; // Replace with your desired default value
    }
  }