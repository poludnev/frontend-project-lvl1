#!/usr/bin/env node
// import greeting from '..';
import { evenGame, greeting } from '..';


console.log('Welcome to the Brain Even Games!');
console.log('Answer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[22m number even otherwise answer \x1b[31m"no"\x1b[0m.');

evenGame(greeting());
