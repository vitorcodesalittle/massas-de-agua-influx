import { InfluxDB } from "@influxdata/influxdb-client";

// como um exemplo usamos as credenciais do influx diretamente.
// isso não deve ser feito em produção. deve-se usar um proxy
// quer faça controle de acesso..
const { INFLUX_URL: url, INFLUX_TOKEN: token, INFLUX_ORG } = process.env;

export const getCaptacoesSubterreaneas = () => {
  const query = `
from(bucket: "mybucket")
  |> range(start: -72h)
  |> filter(fn: (r) => r["_measurement"] == "captacoes_subterraneas")
  |> filter(fn: (r) => r["FID"] == "10000" or r["FID"] == "10001" or r["FID"] == "10002" or r["FID"] == "10003" or r["FID"] == "10004" or r["FID"] == "10006" or r["FID"] == "10005")
  |> filter(fn: (r) => r["_field"] == "lat" or r["_field"] == "lon" or r["_field"] == "demanda_al")
  |> aggregateWindow(every: 1y, fn: last, createEmpty: false)
  |> yield(name: "last")

`;
  const queryApi = new InfluxDB({ url, token }).getQueryApi(INFLUX_ORG);
  return queryApi.queryRaw(query);
};
