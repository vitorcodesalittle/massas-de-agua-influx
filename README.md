# Sentinela InfluxDB

Repositório de configurações, dashboards e documentação para uso do influxdb
no escopo do projeto Sentinela

## Quickstart

Desenvolvendo localmente é necessário os seguintes softwares:

- [Docker e Docker Compose](/#)

Então é apenas clonar or repositório, entrar nele e subir os serviços descritos
no `docker-compose.yaml`

```bash
git clone git@gitlab.gprt.ufpe.br:sentinella/influxdb-exemplo.git && \
cd influxdb-exemplo && \
docker-compose up
```

## Roadmap

- [ ] Criar docker-compose.yaml (e se convir um Dockerfile) para o influxdb com configurações inicias
- [ ] Criar um dashboard exemplo de dados georeferenciados com foco em corpos d'água
- [ ] Criar hook para adicionar os dashboards ao dar pull
- [ ] Experimentar o giraffe para trazer dados a um front end
- [ ] Pesquisar a respeito de benchmarks que envolvam o influxdb em comparação a outros armazenamentos de dados como redis, kafka, postgres

## Roadmap Documentação

- [ ] Documentar como criar dashboard
- [ ] Documentar como adicionar painéis a um dashboard
- [ ] Documentar o básico do flux query
- [ ] Documentar como salvar um dashboard
- [ ] Documentar como dar acesso a uma aplicação externa e limitar o seu acesso

## Fontes de dados georeferenciadas

### Dados do Atlas Água

O site <https://dadosabertos.ana.gov.br> é uma boa fonte de dados, alguns georeferenciados.
[Esse documento](https://biblioteca.ana.gov.br/sophia_web/asp/download.asp?codigo=151307&tipo_midia=2&iIndexSrv=1&iUsuario=0&obra=90683&tipo=1&iBanner=0&iIdioma=0) provê mais informações sobre a motivação e a metodologia para construção dessas datasets.
[Esse mapa interativo](https://portal1.snirh.gov.br/ana/apps/webappviewer/index.html?id=9533a92615b84880b6a7263b6568708b) foi construído com os datasets

- [Atlas ANA Índice de Segurança Urbano](https://dadosabertos.ana.gov.br/maps/897b12b3081c49678a1b2161c372b70c). Seria bom entender como eles montam o formato das separações geográficas para apresentar no mapa online. Podemos facilmente guardar dados de latitude e longitude, porém que dados são necessários para mostrar essas separações precisas e como podemos incorporar esse tipo de informação nos pipelines de dados?
- [Atlas ANA Captações Superficiais](https://dadosabertos.ana.gov.br/datasets/c8de123becba42e8b058659f3ce632af_1/explore?location=-14.548350%2C-52.659750%2C4.53). Dados com latitude e longitude, mais fáceis de ser apresentados
- [Lista de Rios](https://www.arcgis.com/home/item.html?id=4577e60f14284963aa6fafbe36a2b7d4). Ainda seria necessário ligar a localização do rio ao nome, ou código dele.
