#!/usr/bin/env node
console.log("Welcome to the Brain Games!");
import needName from '../src/cli.js'; 
const greetingMessage = needName();
console.log(greetingMessage);
