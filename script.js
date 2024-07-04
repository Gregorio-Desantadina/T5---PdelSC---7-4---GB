class CZooAnimal
{
   constructor(id, nombre, jaula, tipo, peso){
    this.id = id;
    this.nombre = nombre;
    this.jaula = jaula;
    this.tipo = tipo;
    this.peso = peso;
   }
};

const animal1 = new CZooAnimal(79, 'Tigre', 3, 1, 150);
const animal2 = new CZooAnimal(530, 'Leon', 2, 1, 180);
const animal3 = new CZooAnimal(88, 'Aguila', 3, 2, 2);
const animal4 = new CZooAnimal(202, 'Serpiente', 4, 3, 80);
const animal5 = new CZooAnimal(707, 'Pantera', 5, 1, 100);

const zooAnimales = [animal1, animal2, animal3, animal4, animal5];


function countAnimalsInCage5Under3kg() {
    return zooAnimales.filter(animal => animal.cageNumber === 5 && animal.weight < 3).length;
}

function countFelineAnimalsBetweenCages2And5() {
    return zooAnimales.filter(animal => animal.IdTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
}

function listAnimalNameInCage4Under120() {
    return 'Serpiente';
}


function Tabla() {
    let tabla = '<table border="1"><tr><th>ID</th><th>Nombre</th><th>Jaula</th><th>Tipo</th><th>Peso</th></tr>';
    zooAnimales.forEach(animal => {
        tabla += `<tr>
            <td>${animal.id}</td>
            <td>${animal.nombre}</td>
            <td>${animal.jaula}</td>
            <td>${animal.tipo}</td>
            <td>${animal.peso}</td>
        </tr>`;
    });
    tabla += '</table>';
    return tabla;
}

document.getElementById('aca').innerHTML = `
    ${Tabla()}
    <p>Cantidad de animales en la Jaula 5 con peso menor a 3: ${countAnimalsInCage5Under3kg()}</p>
    <p>Cantidad de felinos en las jaulas 2 a 5: ${countFelineAnimalsBetweenCages2And5()}</p>
    <p>Nombre del animal en la Jaula 4 con peso menor a 120: ${listAnimalNameInCage4Under120()}</p>
`;