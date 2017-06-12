## Progressbar

## HTML

Ajout dans le HTML de deux divs optionnels pour la description du composant et pour la région concernée par la progressbar

```
<p id="description-composant">Description du composant</p> 

<div id="progressbar"> 
	<div class="progress-label">waiting...</div> 
</div> 

<p><button id="progressbutton">Lancer la progression</button></p> 

<div id="region">Région mise a jour par la progressbar</div>
```

## Javascript

Surcharge de la fonction progressbar dans un fichier externe progressbar.js, et ajout de nouvelles options lors de la définition de la progressbar :

### ariaValuetextSuffix et ariaValuetextPrefix

Afin de réponde correctement au test 1.3, deux options *ariaValuetextSuffix* et *ariaValuetextPrefix* ont été ajoutées lors de la définition de composant.

Test 1.3 : Chaque progression, dont la valeur courante est connue respecte-t-elle ces conditions ?	
* Condition 2	Le composant possède, si nécessaire, une propriété aria-valuetext=''[valeur courante + texte]''
* Condition 4	La valeur de la propriété aria-valuetext est mise à jour selon la progression

### region

Afin de réponde correctement au test 1.5, une option *region* à été ajoutée lors de la définition de composant.

Test 1.5 : Chaque progression qui concerne une région spécifique d'un document respecte-t-elle ces conditions ?	
* Condition 1	La région concernée possède une propriété aria-describedby="[ID_composant]"
* Condition 2	La région concernée possède une propriété aria-busy="true" durant toute la durée de la progression.

Région concernée par la mise a jour de la progressbar. ce qui peut-être accepté un noeud HTML $('#region') ou une chaine de caractère depuis laquelle je vais chercher le noeud qui a l'id correspondant a la chaine de caractères. Lors de l'activation du composant, la propriété aria-busy est mise a jour, de même lors de l'arrêt du composant.

### labelledby 

Afin de réponde correctement au test 1.2, une option *labelledby* à été ajoutée lors de la définition de composant.

Test 1.2 : Le composant respecte-t-il une de ces conditions ?	
* Condition 1	Le composant est constitué d'un élément graphique qui possède une alternative pertinente
* Condition 2	Le composant possède une propriété aria-labelledby=''[ID_texte]'' référençant un passage de texte faisant office de nom
* Condition 3	Le composant possède un attribut title faisant office de nom

Si une chaine de caractères est saisie, j'ajoute ce qui est saisi dans un attribut title, sinon, j'ajoute l'id du noeud HTML relié dans un attribut aria-labelledby="[ID_titre]"


Exemple : 

```
progressbar.progressbar({
	value: false,
	ariaValuetextSuffix : 'suffix',
	ariaValuetextPrefix : 'prefix',
	region : $('#region'),
	labelledby : $('#description-composant'),
	change: function() {
		progressLabel.text( progressbar.progressbar( "value" ) + "%" );
	},
	complete: function() {
		progressLabel.text( "Complete!" );
	}
});
```