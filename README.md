# Sentinela InfluxDB

Repositório de configurações, dashboards e documentação para uso do influxdb
no escopo do projeto Sentinela

## Quickstart

Desenvolvendo localmente é necessário os seguintes softwares:

- [Docker e Docker Compose](/#)

Então é apenas clonar or repositório, entrar nele e subir os serviços descritos
no `docker-compose.yaml`

```bash
git clone git@gitlab.gprt.ufpe.br:sentinella/influxdb-exemplo.git && /
cd influxdb-exemplo && /
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
