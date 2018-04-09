Dette er min Løsning til oppgaven fra Safemate.

Oppgave 1. 
Jeg var litt usikker på om jeg skulle lage min egen JSON fil eller ikke.
Som jeg tolket oppgaven var det bare å lage noen linjer med JSON kode som sendte 
innstilling og avlesningstempraturen fra pusher.
Så koden jeg sendte gjennom pusher var slik.
{
"innstilling" :  20,
"avlesning" :  19
}

Jeg følte å legge til en egen attributt for status var litt redundant siden det kunne koden ta seg av.


Oppgave 2.
Vedlagt er en sql script fil med løsningen. Jeg kjører bare databasen på en lokal MySQL database
med MySql Workbench. istede for å ha to tilstander har jeg bare en. siden det å ha to stykker er veldig redundant

Oppgave 3
Jeg fikk tok utgangspungt i prosjektet fra repository dere sendte. Jeg har aldri brukt react før så var spennende å bruke litt tid på å lære meg det. 
Jeg gjorde hoved oppgaven for termostatet, men da jeg skulle prøve ut jest fikk jeg det ikke til. Jeg fikk den samme erroren uansett hva jeg prøvde. 
fant noen fixes på net som jeg prøvde med det var ingen som hjalp.
https://stackoverflow.com/questions/49020251/jest-test-suite-fails-with-typeerror-environment-setup-is-not-a-function?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
https://tutel.me/c/programming/questions/49020251/register.html


Da det kom til å legge til bootstrap fikk jeg ikke installert det, jeg fikk en error som sa Cannot `yarn add` in workspace package if depending on a local package.
jeg prøvde noen fixes fra web, men fikk desverre ikke til en fiks.

