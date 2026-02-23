const productos = [
    {
        id:'01',
        name:'Random 1',
        descripcion:'Lorem Ipsum',
        stock:20,
        price:25000,
        category: 'Granos',
        img:''
    },
        {
        id:'02',
        name:'Random 2',
        descripcion:'Lorem Ipsum',
        stock:10,
        price:35000,
        category: 'Molido',
        img:''
    }, {
       id:'03',
        name:'Random 3',
        descripcion:'Lorem Ipsum',
        stock:10,
        price:35000,
        category: 'Capsula',
        img:''
    }, {
       id:'04',
        name:'Random 4',
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