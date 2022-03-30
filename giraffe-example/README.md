Esse era pra ser um exemplo usando a biblioteca [giraffe](https://github.com/influxdata/giraffe) para 
plotar os gráficos, mas ela se mostrou difícil de utilizar até o momento, principalmente devido a algumas
inconsistências na documentação.
Ao invés dela, utilizei [outra biblioteca aleatória para renderizar mapas](https://www.react-simple-maps.io/).
Ela parece ser bem extensível, e daria para montar mapas a partir dela sem problemas.
De qualquer forma, ainda queremos ver como os dados de mapa são apresentados no grafana, e se podem ser
trazidos para web, nem que seja por um iframe

Para rodar essa demonstração:

Rode o script em python para importar os dados de captações subterrânea no território brasileiro
para o influxdb

```
npm install . 
npm run dev
```
