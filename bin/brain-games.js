#!/usr/bin/env node
import needName from '../src/cli.js';
console.log('Welcome to the Brain Games!');
const greetingMessage = needName();
console.log(greetingMessage);
