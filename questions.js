var CreationTableauLangages = function () {
  var langages = ["Html","CSS","Java","PHP"];
  return langages;
}/*tableau creer var langages*/

var CreationTableauNombres = function () {
  var nombres = [0,1,2,3,4,5];
    return nombres;
}
/* ajoute / supprime des éléments vers /
 depuis un tableau et renvoie les éléments supprimés*/
/*splice (2, 1,) remplacer le 3eme de la chaine par un element*/
var RemplacementElement = function (langages) {
  langages.splice(2, 1, "Javascript");//autre méthode : Languages[2] = 'javascript';
=  return langages;
}
/*splice meme principe place au 5 element */
var AjoutElementLangages = function (langages) {
  langages.splice(4, 0, 'Ruby', 'Python');// languages.sh
  return langages;
}
/* j'aime bien splice 0, 0 position rien a enlever*/
var AjoutElementNombres = function (nombres) {
  nombres.splice(0, 0, -2, -1);
  return nombres;
}
/* utilisation du shift() 0, 0 position rien a remettre*/
var SuppressionPremierElement = function (langages) {
  langages.shift(0, 0);
  return langages;
}

var SuppressionDernierElement = function (langages) {
  langages.pop()
  return langages;
}
//split sert a separer
var ConversionChaineTableau = function (reseaux_sociaux_chaine) {

  return reseaux_sociaux_chaine.split(',');
}
//joint
var ConversionTableauChaine = function (langages) {

  return langages.join(',');
}

var TriTableau = function (reseaux_sociaux) {
 reseaux_sociaux.sort();
  return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
  reseaux_sociaux.reverse();
  return reseaux_sociaux;
}
