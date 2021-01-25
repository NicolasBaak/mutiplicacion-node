const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch(comando){
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo=>{console.log('Archivo creado:',colors.green(archivo))})
            .catch(err=>console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
//let parametro = argv[2];
//separar elementos se usa split
//let base = parametro.split('=')[1];

//console.log(argv.limite);
//console.log(argv2);



    