## Slider

## Javascript

ajout d'un plugin pour étendre le plugin d'origine
Gestion des valeurs aria
Ajout d'options pour le plugin
	ariaValuetext: chaîne de caractères pour la valeur aria-valuetext
	title: tableau des titles des curseurs
	ariaLabelledby: tableau des valeurs aria-labelledby des curseurs

Ajout de la gestion de l'attribut aria-orientation='vertical' si le slider est vertical

Exemple :

```
$( "#slider" ).slider({
	title: ['curseur simple']
});
$( "#slidervertical" ).slider({
	range: true,
	values: [ 17, 67 ],
	ariaValuetext: '$',
	title: {0:'premier curseur'},
	ariaLabelledby: {1:'slider_label'},
	orientation: 'vertical'
});
```