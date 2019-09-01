#!/usr/bin/env node
// import greeting from '..';
import { evenGame, greeting, brainGame, randNum } from '..';

console.log('Welcome to the Brain Even Games! \nAnswer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[22m given number is prime. Otherwise answer \x1b[31m"no"\x1b[0m.\n');

brainGame(3, 'prime');