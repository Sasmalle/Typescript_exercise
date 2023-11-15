//usiamo direttemente js e non ts
import{addizione, sottrazione, moltiplicazione}from './importare_file_extension.js';
console.log(addizione(2,3));
console.log(sottrazione(3,3));
console.log(moltiplicazione(2,3));
//dobbiamo vedere i moduli se non va in tscongi.json: quindi module: es6 e nello script di html dove inporti il js devi mettere type module