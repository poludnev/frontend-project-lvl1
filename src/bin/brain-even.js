#!/usr/bin/env node
import { evenGame, greeting, brainGame } from '..';

console.log('Welcome to the Brain Even Games! \nAnswer \x1b[31m"yes"\x1b[0m \x1b[1mif\x1b[22m number even otherwise, answer \x1b[31m"no"\x1b[0m.\n');

brainGame(3, 'even');