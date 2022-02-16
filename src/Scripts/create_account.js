import { createApp } from './vue.esm-bundler.js'
import AccountCreation from '../Components/AccountCreation.js'
import { header } from "./header.js";

createApp(AccountCreation).mount('#AccountCreation');
header();
