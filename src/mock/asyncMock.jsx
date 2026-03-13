const productos = [
    {
        id:'01',
        name:'Etiopía Yirgacheffe: "Brisa de Sidamo"',
        descripcion:'Proveniente de la cuna del café, este grano representa la máxima expresión de elegancia floral. Cultivado a más de 2,000 metros sobre el nivel del mar, su proceso de beneficio lavado resalta una acidez cítrica brillante y una transparencia en taza que recuerda a los jardines primaverales. Es el café ideal para los amantes de los métodos de filtrado que buscan una experiencia ligera, aromática y de gran complejidad sensorial.',
        stock:20,
        price:25000,
        category: 'Granos',
        img:'https://i.postimg.cc/MpPngGHM/imagen-2026-03-12-221141089.png'
    },
        {
        id:'02',
        name:'Panamá Geisha: "Sinfonía Floral"',
        descripcion:'Considerado el "oro negro" de la caficultura moderna, este lote de Geisha panameño es una explosión de aromas exóticos. Su secado lento al sol dentro de la cereza potencia una dulzura frutal intensa y un cuerpo aterciopelado. La combinación de notas de bergamota y flores delicadas lo posiciona como un café de culto para coleccionistas y paladares que buscan trascender lo convencional.',
        stock:20,
        price:25000,
        category: 'Granos',
        img:'https://i.postimg.cc/nhzzKtk6/imagen-2026-03-12-221317367.png'
    },
        {
        id:'03',
        name:'Colombia Huila: "Reserva de la Cordillera"',
        descripcion:' Un exponente magistral del equilibrio que ha hecho famoso al café colombiano. Este origen único del departamento del Huila ofrece una taza reconfortante, con una acidez media-alta perfectamente integrada con notas dulces de panela. Su perfil versátil lo hace excelente tanto para un espresso brillante como para una prensa francesa con cuerpo y dulzor prolongado.',
        stock:10,
        price:35000,
        category: 'Granos',
        img:'https://i.postimg.cc/Dz1KLC9n/imagen-2026-03-12-221505893.png'
    }, {
       id:'04',
        name:'Brasil Cerrado: "Terruño de Cacao"',
        descripcion:'Desde las vastas llanuras del Cerrado Mineiro, este café se caracteriza por su baja acidez y una densidad cremosa en boca. El proceso natural resalta los sabores a frutos secos y cacao, convirtiéndolo en la base perfecta para quienes disfrutan de cafés intensos y tradicionales. Es un grano que brilla especialmente en extracciones de espresso, donde genera una crema rica y persistente. ',
        stock:10,
        price:35000,
        category: 'Granos',
        img:'https://i.postimg.cc/h42RLQ5D/imagen-2026-03-12-221614722.png'
    }, {
       id:'05',
        name:'Guatemala Huehuetenango: "Sombras del Volcán"',
        descripcion:'Cultivado en las faldas de la cordillera de los Cuchumatanes, este café se beneficia de un microclima único que favorece la maduración lenta del grano. Su perfil es una danza entre la frescura de la fruta amarilla y el dulzor profundo del azúcar moreno. Con un cuerpo medio y un final especiado, es una opción sofisticada para quienes buscan una taza equilibrada pero con personalidad vibrante.',
        stock:12,
        price:65000,
        category: 'Granos',
        img:'https://i.postimg.cc/CxxqH1HN/imagen-2026-03-13-084754170.png'
    }, {
       id:'06',
        name:'Kenia AA: "Vibranza Vinosa"',
        descripcion:'Los cafés de Kenia son conocidos por su "brillo" casi eléctrico. El grado AA asegura granos de gran tamaño y calidad superior. Este lote ofrece una acidez málica punzante y notas de frutos rojos que recuerdan a un vino tinto joven. Es un café desafiante, ideal para el paladar experto que aprecia la intensidad frutal y una limpieza absoluta en el paladar.',
        stock:12,
        price:65000,
        category: 'Granos',
        img:'https://i.postimg.cc/tTWZCVpH/imagen-2026-03-13-084818376.png'
    } , {
       id:'07',
        name:'Costa Rica Tarrazú: "Dulzura de Miel"',
        descripcion:'El proceso "Honey" consiste en dejar parte del mucílago (la pulpa dulce) adherido al grano durante el secado, lo que resulta en una dulzura natural incomparable. Este café de la prestigiosa zona de Tarrazú es cremoso, envolvente y posee una acidez melosa. Cada sorbo revela capas de sabor que van desde la piña madura hasta un final suave de vainilla.',
        stock:12,
        price:65000,
        category: 'Granos',
        img:'https://i.postimg.cc/L8Js8Z3G/imagen-2026-03-13-084904235.png'
    }  , {
       id:'08',
        name:'Nicaragua Segovia: "Cacao y Canela"',
        descripcion:'Conocido por sus granos de tamaño "elefante", este café de Nicaragua ofrece una experiencia robusta y especiada. Su cuerpo es pleno y redondo, con notas que evocan los bosques tropicales. Es una opción excelente para quienes buscan un café con presencia, ideal para acompañar con postres o disfrutar en una tarde tranquila.',
        stock:12,
        price:65000,
        category: 'Granos',
        img:'https://i.postimg.cc/tTkb5Xz3/imagen-2026-03-13-085009931.png'
    }  , {
       id:'09',
        name:'Blend Don Ramón: "El Clásico de la Casa"',
        descripcion:'Nuestra receta insignia. Hemos seleccionado granos de tueste medio para crear un café que gusta a todos. Con notas dulces predominantes y un cuerpo equilibrado, "El Clásico" es el compañero perfecto para tus mañanas. Diseñado para ser disfrutado solo o con leche, resaltando siempre una suavidad aterciopelada que te invita a una segunda taza.',
        stock:12,
        price:65000,
        category: 'Molido',
        img:'https://i.postimg.cc/cL3Nz7m0/imagen-2026-03-13-085043215.png'
    }   , {
       id:'10',
        name:'Blend Despertar: "Intensidad y Energía"',
        descripcion:'Para quienes necesitan un comienzo de día vigoroso. Este blend de tueste profundo potencia los aceites naturales del café, ofreciendo una taza con mucha fuerza y un amargor agradable que recuerda al chocolate negro. Su molienda fina está optimizada para extraer todo el carácter en cafeteras tipo Moka, generando esa intensidad que despierta los sentidos.',
        stock:12,
        price:65000,
        category: 'Molido',
        img:'https://i.postimg.cc/bvjjfGCQ/imagen-2026-03-13-085047561.png'
    }    , {
       id:'11',
        name:'Blend Atardecer: "Armonía y Fruta"',
        descripcion:'Un café pensado para la pausa de la tarde. Este blend combina la frescura de los granos africanos con la dulzura de los centroamericanos. Al ser una molienda más gruesa, permite una extracción lenta en prensa francesa, revelando notas sutiles y delicadas que no abruman el paladar. Es una experiencia ligera, refrescante y altamente aromática.',
        stock:12,
        price:65000,
        category: 'Molido',
        img:'https://i.postimg.cc/X7yhNjC4/imagen-2026-03-13-085152395.png'
    }    , {
       id:'12',
        name:'Selección Orgánica: "Puro Perú"',
        descripcion:'Respeto absoluto por la tierra. Este café proviene de fincas certificadas orgánicas donde no se utilizan químicos, preservando la biodiversidad del entorno. El resultado es una taza limpia, dulce y saludable, con un perfil de sabor que evoca la pureza de los Andes. Un café honesto para el consumidor consciente.',
        stock:12,
        price:65000,
        category: 'Molido',
        img:'https://i.postimg.cc/mgfntvY9/imagen-2026-03-13-085156884.png'
    }    , {
       id:'13',
        name:'Moka Italiano: "Herencia Napolitana"',
        descripcion:'Viaja a Italia con cada sorbo. Inspirado en la tradición de los bares de Nápoles, este café molido ofrece un cuerpo extraordinario y una potencia inigualable. Su tueste oscuro controlado evita las notas quemadas, resaltando en cambio una dulzura amarga sofisticada que corta perfectamente la leche en lattes y cappuccinos.',
        stock:12,
        price:65000,
        category: 'Molido',
        img:'https://i.postimg.cc/KYgrBjmZ/imagen-2026-03-13-085533008.png'
    }    , {
       id:'14',
        name:'Descafeinado Premium: "Noche de Paz"',
        descripcion:'Todo el sabor, nada de cafeína. A diferencia de los descafeinados comerciales, utilizamos granos de especialidad procesados con agua pura para extraer la cafeína sin dañar el perfil de sabor. Es un café redondo y dulce, ideal para disfrutar después de la cena o para quienes aman el sabor del café pero prefieren evitar el estímulo de la cafeína.',
        stock:12,
        price:65000,
        category: 'Molido',
        img:'https://i.postimg.cc/JnNNYFyX/imagen-2026-03-13-085538226.png'
    }    , {
       id:'15',
        name:'Cápsula "Ristretto Imperial" (Intensidad 13)',
        descripcion:'Nuestra cápsula más extrema. Diseñada para un shot corto de 25ml (Ristretto), ofrece una explosión de fuerza que llena el paladar. Su tueste intenso revela notas de maderas nobles y un final picante muy sofisticado. Es el café para quienes buscan el máximo carácter en un formato compacto.',
        stock:12,
        price:65000,
        category: 'Capsula',
        img:'https://i.postimg.cc/PxjZDM6f/imagen-2026-03-13-085611336.png'
    }    , {
       id:'16',
        name:'Cápsula "Arpeggio Cremoso" (Intensidad 9)',
        descripcion:'La armonía perfecta entre potencia y suavidad. Esta mezcla de Arábicas sudamericanos se tuesta por separado para mantener el dulzor de los cereales y la profundidad del cacao. El resultado es un espresso con una crema densa y persistente, ideal para beber solo o como base para un cappuccino de lujo.',
        stock:12,
        price:65000,
        category: 'Capsula',
        img:'https://i.postimg.cc/QtJ7JWwL/imagen-2026-03-13-085618882.png'
    }    , {
       id:'17',
        name:'Cápsula "Etiopía Elegance" (Intensidad 4)',
        descripcion:'Rompemos el mito de que las cápsulas son solo café fuerte. "Etiopía Elegance" es una joya delicada que traslada las notas florales de Sidamo a tu máquina automática. Un café brillante, con una acidez jugosa que refresca el paladar. Recomendamos disfrutarlo como un espresso corto o un lungo suave para apreciar su transparencia.',
        stock:12,
        price:65000,
        category: 'Capsula',
        img:'https://i.postimg.cc/k4sVbP6w/imagen-2026-03-13-085657168.png'
    }    , {
       id:'18',
        name:'Cápsula "Lungo Andino" (Intensidad 7)',
        descripcion:'Optimizada para extracciones largas de 110ml. A diferencia de otras cápsulas que se vuelven amargas al pasar mucha agua, "Lungo Andino" mantiene su dulzura y cuerpo ligero. Sus notas de repostería y su final redondo lo convierten en la cápsula ideal para el café de media mañana en la oficina o el hogar.',
        stock:12,
        price:65000,
        category: 'Capsula',
        img:'https://i.postimg.cc/SRKnL1cF/imagen-2026-03-13-085701652.png'
    }  , {
       id:'19',
        name:'Cápsula "Decaf Dolce" (Intensidad 6)',
        descripcion:'Un descafeinado que engaña a los expertos. Gracias a un proceso de eliminación de cafeína natural, conservamos toda la estructura aromática del grano. Disfruta de una taza dulce y con cuerpo en cualquier momento de la noche, sin preocuparte por el sueño. La prueba de que el descafeinado puede ser delicioso.',
        stock:12,
        price:65000,
        category: 'Capsula',
        img:'https://i.postimg.cc/HLCjvkbt/imagen-2026-03-13-085726596.png'
    }, {
       id:'20',
        name:'Cápsula "Vainilla Bourbon" (Infusionada)',
        descripcion:'La indulgencia en una cápsula. Hemos fusionado un café suave de Brasil con extractos naturales de vainilla. Al prepararlo, el aroma inunda la habitación, anticipando una taza dulce y sedosa. No necesita azúcar; su dulzura natural y su aroma son suficientes para deleitar a los amantes de los cafés con sabores.',
        stock:12,
        price:65000,
        category: 'Capsula',
        img:'https://i.postimg.cc/LsMhQ8z2/imagen-2026-03-13-085731286.png'
    }    
]

let error=false

export const getProducts = ()=> {
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
          if(error){
            reject('Hubo un error al conectar con nuestro productos')
          }  else {
            resolve(productos)
          }
        }, 2000);
    })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const prod = productos.find(p => p.id === id)
      if(prod){
        resolve(prod)
      } else {
        reject('Producto no encontrado')
      }
    }, 800)
  })
}

export const getItem = (id)=> {
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
          if(error){
            reject('Hubo un error al conectar con nuestro productos')
          }  else {
           let prod = productos.find(prod => prod.id === id)
              resolve(prod)
        }
        }, 2000);
    })
}