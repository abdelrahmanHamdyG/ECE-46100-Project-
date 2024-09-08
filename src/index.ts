
import {CLI} from "./CLI.js";


const args=process.argv.slice(2);
const mode=args[0];



const cli=new CLI();
// eslint-disable-next-line no-constant-condition
if(true){

    cli.rankModules(mode);

}else{
switch(mode){

    case "install":
        cli.installDependencies();
        break;
    case "test":
        cli.testSuites();
        break;
    default:
        cli.rankModules(mode);

       
};

}



