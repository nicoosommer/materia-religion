const frase = document.getElementById('frase');
const select = document.getElementById('select');
const img = document.getElementById('img');
const imagenes = [
  './imgs/paisaje1.jpg',
  './imgs/paisaje2.jpg',
  './imgs/paisaje3.jpg',
  './imgs/paisaje4.jpg',
  './imgs/paisaje5.avif',
  './imgs/paisaje6.jpg',
  './imgs/paisaje7.jpg',
];
const feliz = [
  'Pero yo siempre estoy contigo, pues tú me sostienes de la mano derecha. Me guías con tu consejo, y más tarde me acogerás en gloria. Salmo 73:23-24',
  'Dichosa tú que has creído porque lo que el señor te ha dicho se cumplirá. Lucas 1;45',
  'Nadie tiene amor más grande que el dar la vida por sus amigos. Juan 15:13',
];
const triste = [
  'En medio de la tormenta, confía en Dios. Mateo 8:26-27',
  'No te dejes vencer por el mal; al contrario, vence el mal con el bien. Romanos 12:21',
  'Vivimos por fe, no por vista. 2 Corintios 5:7',
];
const enojado = [
  'Así como el Señor los perdonó, perdonen también ustedes. Por encima de todo, vistanse de amor, que es el vínculo perfecto. Colosenses 3:13b-14',
  'De que sirve ganar el mundo entero si se pierde la vida? Marcos 8:36',
  'Porque el amor al dinero es raíz de toda clase de males. Timoteo 6:10',
];
const cansado = [
  'En el agua se refleja el rosto, y en el corazón la persona. Efesios 5:15-16',
  'Solo en Dios halla descanso mi alma; de él viene mi esperanza. Salmo 62:5',
];
function eleccion(name) {
  let index = Math.floor(Math.random() * name.length);
  imgs();
  return name[index];
}
function imgs() {
  img.setAttribute(
    'src',
    imagenes[Math.floor(Math.random() * imagenes.length)]
  );
}
function cambiarFrase() {
  const a = select.value;
  switch (a) {
    case 'feliz':
      frase.innerText = eleccion(feliz);
      imgs();
      break;
    case 'triste':
      frase.innerText = eleccion(triste);
      break;
    case 'enojado':
      frase.innerText = eleccion(enojado);
      break;
    case 'cansado':
      frase.innerText = eleccion(cansado);
      break;
    default:
      frase.innerText =
        'El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor. El amor no se deleita en la maldad, sino que se regocija con la verdad. Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta. 1 Corintios 13:4-7';
  }
}
