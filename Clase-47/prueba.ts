import { max, min, sum } from 'https://deno.land/x/math/mod.ts';
import { red, yellow } from 'https://deno.land/std@0.158.0/fmt/colors.ts';

const argumentos = Deno.args.map((a) => Number(a));
const maximo = max(argumentos);
const minimo = min(argumentos);
const promedio = sum(argumentos) / argumentos.length;

Deno.writeTextFile(
    'output.dat',
    `
Minimo: ${minimo}
Maximo: ${maximo}
Promedio: ${promedio}
`
);

console.log(yellow(`Maximo: ${maximo}`));
console.log(red(`Minimo: ${minimo}`));
