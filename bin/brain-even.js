#!/usr/bin/env node
import evenNumber from '../src/even.js';
import askName from '../src/cli.js';

const userName = askName();
evenNumber(userName);
