# Sentinela InfluxDB

Repositório de configurações, dashboards e documentação para uso do influxdb
no escopo do projeto Sentinela

## Quickstart

Desenvolvendo localmente é necessário os seguintes softwares:

- [Docker e Docker Compose](https://docs.docker.com/get-started/)

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
- [ ] Criar hook para atualizar os dashboards ao dar pull
- [ ] Experimentar o giraffe para trazer dados a um front end
- [ ] Pesquisar a respeito de benchmarks que envolvam o influxdb em comparação a outros armazenamentos de dados como redis, kafka, postgres

## Roadmap Documentação

- [ ] Documentar como adiconar dados

Dados podem ser adicionados facilmente se estiverem no formato csv, ou se houver uma configuração do [telegraf](https://github.com/influxdata/telegraf) que seja capaz de coletar as métricas expostas.

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

- [Atlas ANA Índice de Segurança Urbano](https://dadosabertos.ana.gov.br/maps/897b12b3081c49678a1b2161c372b70c). Um exemplo de mapa com dados separados por município
- [Atlas ANA Captações Superficiais](https://dadosabertos.ana.gov.br/datasets/19e1869946b041bba92b996020925909). Dados com latitude e longitude, mais fáceis de ser apresentados

[Esse script](./cap-sub-geojson-importer.py) foi feito para inserir os dados dos [dados de captação subterrânea](./atlas_cap_subterranea.geojson).
Podes rodá-lo da seguinte forma:

```bash
# instalar deps
pip install influxdb-client
```

```bash
token=ST8kgXmJ9oVEaWBOmqlB9y4l5a5ilYoNpkVq1SruEzdF-2c5aqy18XDoen03r2oXSOA_JlBsyV3pEqPGcfCHcA== org=sentinela bucket=mybucket python3 cap-sub-geojson-importer.py
```

Ele é lento e ainda estou tentando entender porque. Qualquer melhoria é bem vinda.

- [Lista de Rios](https://www.arcgis.com/home/item.html?id=4577e60f14284963aa6fafbe36a2b7d4). Ainda seria necessário ligar a localização do rio ao nome, ou código dele.
