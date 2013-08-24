Datasources koppel je simpelweg aan een widget instance.

Ik wil dit ook via dot notatie doen.

chix.datasource.website.component bijvoorbeeld.

datasources: [
{
  "name": "Website Component",
  "path": "chix.datasource.website.component",
  
}
]

De definities van die datasource zijn dan op te halen.
De definitie is een json schema.

Maar we zouden ook dynamisch een datasources kunnen aanmaken.
De widget zelf geeft aan welke data het gebruikt.

Als ik een gehele pagina wil bewaren, dan moet de widget dit zo naar
de server zenden. De server zelf hoeft dat niet uit te zoeken.
Validatie wordt dan gedaan aan de hand van de verschillende schemas.

Datasources zien als visuele componenten.

Je kunt in een widget hardcoden welke datasource gelinked moet worden
maar dat wil ik niet.

Misschien moet ik eerst maar gewoon met een selectbox werken.
Om een datasource te kiezen.

Opvragen:

/dit-is-een/pagina

De webserver zelf gebruikt geen database.
Verantwoordelijk voor het routen en het renderen.

Page server, serveert webpagina's als json. bevat de configuratie
van de widgets. layout is in principe ook een widget. Een widget
welke componenten als datasource heeft.

Dus in principe zou ik die nu al als widget kunnen maken.
Vervolgens tik je zelf wat html in, maar uiteindelijk hoort er een
datasource gekoppeld te worden.

Dus alle bootstrap layouts maken als widget.
Eventueel kan een layout widget dynamisch gemaakt worden, zodat
hij een variabel aantal posities heeft. Vervolgens kan ik
ook alle posities required maken. Indien er dan te weinig componenten
worden aangeboden, dan faalt de validatie.

Eigenlijk zou ik willen dat de bootstrap componenten van het type BootstrapWidget
zijn. Zodat een bootstrap layout kan aangeven dat het alleen bootstrap widgets verwacht.
j
