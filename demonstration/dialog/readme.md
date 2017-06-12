
## Dialog

## Javascript

ajout de l'option dialogClass: "id-dialog"
et de la méthode *open*

Exemple : 

```
open: function() {
	var $el = $('.id-dialog :focusable');
	if ($el[0]) {
		$el[0].focus();
	}
}
```