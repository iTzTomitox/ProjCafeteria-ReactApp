const productos = [
    {
        id:'01',
        name:'Cafe 1',
        descripcion:'Lorem Ipsum',
        stock:20,
        price:25000,
        category: 'Granos',
        img:''
    },
        {
        id:'02',
        name:'Cafe 2',
        descripcion:'Lorem Ipsum',
        stock:10,
        price:35000,
        category: 'Molido',
        img:''
    }, {
       id:'03',
        name:'Cafe 3',
        descripcion:'Lorem Ipsum',
        stock:10,
        price:35000,
        category: 'Capsula',
        img:''
    }, {
       id:'04',
        name:'Cafe 4',
        descripcion:'Lorem Ipsum',
        stock:12,
        price:65000,
        category: 'Capsula',
        img:''
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