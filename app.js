// ===== TABELAS CONTÁBEIS =====
const CONTAS_INCORPORACAO=[
 ['1.2.03.01.0001','Terrenos'],['1.2.03.01.0002','Imóveis'],['1.2.03.01.0003','Móveis e Utensílios'],
 ['1.2.03.01.0004','Instalações'],['1.2.03.01.0005','Equipamentos de Segurança'],['1.2.03.01.0006','Veículos Leves'],
 ['1.2.03.01.0007','Veículos Pesados'],['1.2.03.01.0008','Máquinas e Equipamentos'],['1.2.03.01.0009','Equipamentos de Informática'],
 ['1.2.03.01.0010','Ferramentas'],['1.2.03.01.0011','Benfeitorias em Imóveis de Terceiros'],
 ['1.2.03.01.0012','Imobilizado em Andamento'],['1.2.03.01.0013','Implementos Rodoviários']];
const DEP_ACUM_MAP={
  1:['1.2.03.02.0001','( - ) Depreciação Acumulada - Imóveis'],
  2:['1.2.03.02.0002','( - ) Depreciação Acumulada - Móveis e Utensílios'],
  3:['1.2.03.02.0003','( - ) Depreciação Acumulada - Instalações'],
  4:['1.2.03.02.0004','( - ) Depreciação Acumulada - Equipamentos de Segurança'],
  5:['1.2.03.02.0005','( - ) Depreciação Acumulada - Veículos Leves'],
  6:['1.2.03.02.0006','( - ) Depreciação Acumulada - Veículos Pesados'],
  7:['1.2.03.02.0007','( - ) Depreciação Acumulada - Máquinas e Equipamentos'],
  8:['1.2.03.02.0008','( - ) Depreciação Acumulada - Equipamentos de Informática'],
  9:['1.2.03.02.0009','( - ) Depreciação Acumulada - Ferramentas'],
 10:['1.2.03.02.0010','( - ) Depreciação Acumulada - Benfeitorias'],
 12:['1.2.03.02.0011','( - ) Depreciação Acumulada - Implementos Rodoviários']};
const DESP_DEP_COD='4.1.05.01.0001', DESP_DEP_DESC='Depreciação';

const CFOP_MAP={
 '1101':'Compra para industrialização ou produção rural','1102':'Compra para comercialização',
 '1110':'Devolução de venda de produção do estabelecimento','1111':'Devolução de venda de mercadoria/ativo',
 '1113':'Devolução de venda - contribuinte substituto','1115':'Venda para indústria (devolução)',
 '1116':'Compra p/ industrialização recebida de devolução','1119':'Compra p/ comercialização recebida de devolução',
 '1120':'Compra de produção do estabelecimento rural recebida em devolução','1121':'Compra p/ ativo imobilizado recebida em devolução',
 '1122':'Compra de serviços recebida em devolução','1123':'Compra de matéria-prima recebida em devolução',
 '1124':'Compra de mercadoria para uso e consumo recebida em devolução','1125':'Outras entradas por devolução de mercadoria remetida',
 '1126':'Devolução simbólica de mercadoria remetida para industrialização','1127':'Devolução simbólica de mercadoria remetida para comercialização',
 '1128':'Devolução simbólica de mercadoria remetida para uso e consumo','1129':'Devolução simbólica de mercadoria remetida para ativo imobilizado',
 '1130':'Outras devoluções simbólicas',
 '1151':'Compra para industrialização - importação (LI/Declaração de importação)','1152':'Compra para comercialização - importação',
 '1153':'Compra para ativo imobilizado - importação','1154':'Compra para uso e consumo - importação',
 '1155':'Compra de matéria-prima - importação','1156':'Compra de serviços do exterior',
 '1157':'Compra de produção do estabelecimento rural - importação','1158':'Outras compras - importação',
 '1159':'Remessa para industrialização recebida de devolução (importação)','1160':'Remessa para comercialização recebida de devolução (importação)',
 '1161':'Remessa para uso e consumo recebida em devolução (importação)','1162':'Remessa para ativo imobilizado recebida em devolução (importação)',
 '1163':'Outras remessas recebidas em devolução (importação)','1164':'Devolução de bem recebido em consignação mercantil',
 '1165':'Devolução de bem recebido em depósito fechado','1166':'Devolução simbólica de remessa para industrialização (importação)',
 '1167':'Devolução simbólica de remessa para comercialização (importação)','1168':'Devolução simbólica de remessa para uso e consumo (importação)',
 '1169':'Devolução simbólica de remessa para ativo imobilizado (importação)','1170':'Outras devoluções simbólicas (importação)',
 '1171':'Recepção de mercadoria remetida para industrialização recebida em devolução de simbólica (importação)','1172':'Recepção de mercadoria remetida para comercialização recebida em devolução de simbólica (importação)',
 '1173':'Recepção de mercadoria remetida para uso e consumo recebida em devolução de simbólica (importação)','1174':'Recepção de mercadoria remetida para ativo imobilizado recebida em devolução de simbólica (importação)',
 '1175':'Outras recepções de mercadorias remetidas recebidas em devolução de simbólica (importação)',
 '1176':'Retorno simbólico de saída de mercadoria remetida para industrialização recebida em devolução de simbólica (importação)',
 '1177':'Retorno simbólico de saída de mercadoria remetida para comercialização recebida em devolução de simbólica (importação)',
 '1178':'Retorno simbólico de saída de mercadoria remetida para uso e consumo recebida em devolução de simbólica (importação)',
 '1179':'Retorno simbólico de saída de mercadoria remetida para ativo imobilizado recebida em devolução de simbólica (importação)',
 '1180':'Outros retornos simbólicos de saída de mercadorias remetidas recebidas em devolução de simbólica (importação)',
 '1199':'Outras entradas de mercadorias / serviços do exterior',
 '1201':'Prestação de serviço a contribuinte do ICMS - regime normal','1202':'Prestação de serviço a consumidor final',
 '1251':'Prestação de serviço do exterior','1252':'Prestação de serviço para o exterior',
 '1301':'Entrada para industrialização por encomenda','1302':'Entrada para comercialização por encomenda',
 '1351':'Entrada de mercadoria em consignação mercantil (importação)','1352':'Entrada de mercadoria em consignação mercantil (nacional)',
 '1401':'Aquisição de ativo imobilizado','1402':'Aquisição de ativo imobilizado - importação',
 '1403':'Aquisição de bem para uso ou consumo','1404':'Aquisição de bem para uso ou consumo - importação',
 '1405':'Aquisição de serviços para ativo imobilizado','1406':'Aquisição de serviços para uso e consumo',
 '1501':'Entrada de mercadoria recebida em consignação mercantil','1502':'Entrada de mercadoria em depósito fechado',
 '1551':'Entrada de mercadoria em depósito fechado (importação)','1552':'Outras entradas em depósito fechado',
 '1553':'Retorno de mercadoria remetida em depósito fechado','1601':'Entrada de mercadoria para industrialização por conta de terceiros',
 '1602':'Entrada de mercadoria para comercialização por conta de terceiros','1603':'Entrada de mercadoria para prestação de serviço por conta de terceiros',
 '1651':'Entrada de bem para demonstração','1652':'Entrada de bem para exposição',
 '1653':'Entrada de bem para manutenção ou reparo','1654':'Entrada de bem para montagem ou instalação',
 '1701':'Aquisição em leilão','1702':'Aquisição para demonstração ou exposição',
 '1751':'Transferência de mercadoria para ativo imobilizado','1752':'Transferência de mercadoria para uso e consumo',
 '1753':'Transferência de ativo imobilizado para mercadoria','1801':'Retorno de remessa para industrialização',
 '1802':'Retorno de remessa para comercialização','1803':'Retorno de remessa para uso e consumo',
 '1804':'Retorno de remessa para ativo imobilizado','1851':'Retorno de mercadoria remetida para demonstração/exposição/manutencao',
 '1901':'Retorno de mercadoria remetida em consignação mercantil','1902':'Retorno de mercadoria remetida em depósito fechado',
 '1903':'Retorno de mercadoria remetida para leilão','1949':'Outros retornos de mercadorias e bens remetidos',
 '1951':'Bonificação ou doação recebida','1952':'Brinde recebido',
 '1953':'Amostra gratuita recebida','1954':'Venda do estabelecimento adquirida por transferência (fusão/cisão/incorporação)',
 '1955':'Transferência de filial ou para filial (entrada)','1956':'Entrada para industrialização por encomenda recebida em devolução',
 '1957':'Entrada para comercialização por encomenda recebida em devolução','1958':'Entrada decorrente de instrumento de cessão de crédito mercantil',
 '1959':'Outras entradas decorrentes de prestação de serviço comunicador social/telecomunicação','1999':'Outras entradas',

 '2101':'Venda de produção do estabelecimento','2102':'Venda de mercadoria adquirida ou recebida de terceiros',
 '2110':'Devolução de compra de produção do estabelecimento','2111':'Devolução de compra de mercadoria',
 '2112':'Devolução de compra de serviços','2113':'Devolução de compra de ativo imobilizado',
 '2115':'Venda devolvida - comprador contribuinte substituto','2116':'Venda p/ industrialização recebida em devolução',
 '2117':'Venda p/ comercialização recebida em devolução','2118':'Venda de produção rural recebida em devolução',
 '2119':'Venda de ativo imobilizado recebida em devolução','2120':'Prestação de serviço recebida em devolução',
 '2121':'Venda de matéria-prima recebida em devolução','2122':'Venda de mercadoria para uso e consumo recebida em devolução',
 '2123':'Outras vendas de mercadorias recebidas em devolução','2124':'Devolução simbólica de mercadoria recebida para industrialização',
 '2125':'Devolução simbólica de mercadoria recebida para comercialização','2126':'Devolução simbólica de mercadoria recebida para uso e consumo',
 '2127':'Devolução simbólica de mercadoria recebida para ativo imobilizado','2128':'Outras devoluções simbólicas de mercadorias recebidas',
 '2129':'Prestação de serviço a consumidor final contribuinte do ICMS recebida em devolução','2130':'Prestação de serviço a consumidor final não contribuinte recebida em devolução',
 '2151':'Venda de produção do estabelecimento - exportação','2152':'Venda de mercadoria adquirida/recebida de terceiros - exportação',
 '2153':'Venda de ativo imobilizado - exportação','2154':'Venda de serviço para o exterior',
 '2155':'Outras vendas de mercadorias - exportação','2156':'Devolução de compra - importação recebida de mercadoria recebida para industrialização',
 '2157':'Devolução de compra - importação recebida de mercadoria recebida para comercialização','2158':'Devolução de compra - importação recebida de mercadoria recebida para ativo imobilizado',
 '2159':'Devolução de compra - importação recebida de mercadoria recebida para uso e consumo','2160':'Outras devoluções de compra - importação recebidas',
 '2161':'Remessa simbólica de mercadoria recebida para industrialização - importação','2162':'Remessa simbólica de mercadoria recebida para comercialização - importação',
 '2163':'Remessa simbólica de mercadoria recebida para ativo imobilizado - importação','2164':'Remessa simbólica de mercadoria recebida para uso e consumo - importação',
 '2165':'Outras remessas simbólicas de mercadorias recebidas - importação','2166':'Remessa simbólica de saída de mercadoria remetida em devolução de simbólica - importação',
 '2167':'Outras remessas simbólicas de saída de mercadorias remetidas em devolução de simbólica - importação',
 '2171':'Saída de mercadoria remetida para industrialização recebida em devolução simbólica - importação',
 '2172':'Saída de mercadoria remetida para comercialização recebida em devolução simbólica - importação',
 '2173':'Saída de mercadoria remetida para ativo imobilizado recebida em devolução simbólica - importação',
 '2174':'Saída de mercadoria remetida para uso e consumo recebida em devolução simbólica - importação',
 '2175':'Outras saídas de mercadorias remetidas recebidas em devolução simbólica - importação',
 '2176':'Retorno simbólico de saída de mercadoria remetida para industrialização recebida em devolução simbólica - importação',
 '2177':'Retorno simbólico de saída de mercadoria remetida para comercialização recebida em devolução simbólica - importação',
 '2178':'Retorno simbólico de saída de mercadoria remetida para ativo imobilizado recebida em devolução simbólica - importação',
 '2179':'Retorno simbólico de saída de mercadoria remetida para uso e consumo recebida em devolução simbólica - importação',
 '2180':'Outros retornos simbólicos de saída de mercadorias remetidas recebidas em devolução simbólica - importação',
 '2199':'Outras saídas de mercadorias / serviços para o exterior',

 '2201':'Prestação de serviço a contribuinte do ICMS - regime normal','2202':'Prestação de serviço a consumidor final',
 '2203':'Prestação de serviço por empresa de transporte rodoviário de cargas própria','2204':'Prestação de serviço por empresa de transporte rodoviário de cargas de terceiros',
 '2251':'Prestação de serviço a contribuinte do ICMS - exportação','2252':'Prestação de serviço a consumidor final - exportação',
 '2301':'Saída para industrialização por encomenda','2302':'Saída para comercialização por encomenda',
 '2303':'Prestação de serviço por encomenda','2351':'Saída de mercadoria em consignação mercantil',
 '2401':'Venda de ativo imobilizado','2402':'Venda de ativo imobilizado adquirido/recebido de terceiros',
 '2403':'Venda de bem para uso ou consumo','2404':'Venda de bem para uso ou consumo adquirido/recebido de terceiros',
 '2501':'Remessa de mercadoria recebida em consignação mercantil','2502':'Retirada de mercadoria em depósito fechado',
 '2503':'Retorno de mercadoria remetida em depósito fechado','2551':'Retirada de mercadoria de depósito fechado (importação)',
 '2601':'Saída de mercadoria para industrialização por conta de terceiros','2602':'Saída de mercadoria para comercialização por conta de terceiros',
 '2603':'Saída de mercadoria para prestação de serviço por conta de terceiros','2651':'Saída de bem para demonstração',
 '2652':'Saída de bem para exposição','2653':'Saída de bem para manutenção ou reparo',
 '2654':'Saída de bem para montagem ou instalação','2701':'Remessa para leilão',
 '2702':'Remessa de demonstração/exposição/manutenção/reparo/montagem/instalação recebida em devolução',
 '2751':'Transferência de mercadoria para ativo imobilizado','2752':'Transferência de mercadoria para uso e consumo',
 '2753':'Transferência de ativo imobilizado para mercadoria','2801':'Remessa para industrialização',
 '2802':'Remessa para comercialização','2803':'Remessa para uso e consumo',
 '2804':'Remessa para ativo imobilizado','2851':'Remessa para demonstração/exposição/manutenção/reparo/montagem/instalação',
 '2901':'Saída de mercadoria remetida em consignação mercantil','2902':'Saída de mercadoria remetida em depósito fechado',
 '2903':'Saída de mercadoria remetida para leilão','2949':'Outras saídas de mercadorias e bens remetidos',
 '2951':'Bonificação ou doação efetuada','2952':'Brinde entregue',
 '2953':'Amostra gratuita entregue','2954':'Transferência de filial ou para filial (saída)',
 '2955':'Entrada para industrialização por encomenda remetida em devolução','2956':'Entrada para comercialização por encomenda remetida em devolução',
 '2957':'Prestação de serviço comunicador social/telecomunicação','2958':'Outras prestações de serviço comunicador social/telecomunicação',
 '2999':'Outras saídas',

 '3101':'Prestação de serviço de comunicação','3102':'Prestação de serviço de transporte',
 '3201':'Prestação de serviço de comunicação para o exterior','3202':'Prestação de serviço de transporte para o exterior',
 '3501':'Prestação de serviço de comunicação recebida em devolução','3502':'Prestação de serviço de transporte recebida em devolução',
 '3551':'Prestação de serviço de comunicação a contribuinte do ICMS recebida em devolução','3552':'Prestação de serviço de transporte a contribuinte do ICMS recebida em devolução',
 '3999':'Outras prestações de serviço de comunicação/transporte',

 '4101':'Prestação de serviço de energia elétrica','4102':'Prestação de serviço de água/esgoto',
 '4103':'Prestação de serviço de gás natural','4201':'Prestação de serviço de energia elétrica para o exterior',
 '4202':'Prestação de serviço de gás natural para o exterior','4501':'Prestação de serviço de energia elétrica recebida em devolução',
 '4502':'Prestação de serviço de água/esgoto recebida em devolução','4503':'Prestação de serviço de gás natural recebida em devolução',
 '4999':'Outras prestações de serviço de utilidade pública',

 '5101':'Compra para industrialização ou produção rural','5102':'Compra para comercialização',
 '5103':'Compra para ativo imobilizado','5104':'Compra para uso e consumo',
 '5105':'Compra de matéria-prima para industrialização','5106':'Compra de serviços para industrialização',
 '5109':'Compra de produção do estabelecimento (outras)','5111':'Compra de mercadoria de empresa do mesmo grupo econômico',
 '5112':'Compra de ativo imobilizado de empresa do mesmo grupo econômico','5113':'Compra de uso e consumo de empresa do mesmo grupo econômico',
 '5114':'Compra de serviços de empresa do mesmo grupo econômico',
 '5115':'Compra de mercadorias / ativos de contrib. Substituto tributário',
 '5116':'Compra de mercadoria ou bem para ativo imobilizado','5117':'Compra de serviços de terceiros',
 '5118':'Compra de serviços em geral para uso e consumo','5119':'Compra de serviços em geral para ativo imobilizado',
 '5120':'Compra de embalagem','5121':'Compra de mercadoria recebida em consignação mercantil',
 '5122':'Compra de mercadoria em depósito fechado','5123':'Compra de matéria-prima em depósito fechado',
 '5124':'Compra de ativo imobilizado em depósito fechado','5125':'Compra de uso e consumo em depósito fechado',
 '5126':'Compra de mercadoria de leilão','5127':'Compra para demonstração ou exposição',
 '5128':'Compra para manutenção ou reparo de bem de terceiro','5129':'Compra para montagem ou instalação de bem de terceiro',
 '5130':'Compra para industrialização por encomenda','5151':'Compra para industrialização - importação (ME/Declaração de importação)',
 '5152':'Compra para comercialização - importação','5153':'Compra para ativo imobilizado - importação',
 '5154':'Compra para uso e consumo - importação','5155':'Compra de matéria-prima - importação',
 '5156':'Compra de serviços do exterior','5157':'Compra de produção do estabelecimento rural - importação',
 '5158':'Compra de mercadoria de contrib. substituto - importação','5159':'Compra de embalagem - importação',
 '5160':'Compra em consignação mercantil - importação','5161':'Compra em depósito fechado - importação',
 '5162':'Compra de ativo imobilizado em depósito fechado - importação','5163':'Compra de demonstração/exposição - importação',
 '5164':'Compra de leilão - importação','5165':'Compra de manutenção/reparo - importação',
 '5166':'Compra de montagem/instalação - importação','5167':'Compra para industrialização por encomenda - importação',
 '5168':'Compra de mercadoria de empresa do mesmo grupo econômico - importação','5169':'Compra de ativo imobilizado de empresa do mesmo grupo econômico - importação',
 '5170':'Compra de uso e consumo de empresa do mesmo grupo econômico - importação','5171':'Compra de serviços de empresa do mesmo grupo econômico - importação',
 '5172':'Compra de produção de empresa do mesmo grupo econômico - importação','5173':'Outras compras de mercadorias de empresa do mesmo grupo econômico - importação',
 '5174':'Compra para uso em processamento de dados (software, hard disk, mídia)','5175':'Compra para uso em processamento de dados - importação',
 '5176':'Compra de combustível e lubrificante para uso ou consumo','5177':'Compra de combustível e lubrificante para revenda',
 '5178':'Compra de mercadoria em poder de terceiro que não a remessa','5179':'Compra de veículo automotor para repasse (revenda)',
 '5180':'Compra de veículo automotor para frota (ativo imobilizado)','5181':'Compra de energia elétrica para distribuição',
 '5182':'Compra de energia elétrica para uso e consumo','5183':'Compra de gás natural para distribuição',
 '5184':'Compra de gás natural para uso e consumo','5185':'Compra de água e esgoto para distribuição',
 '5186':'Compra de água e esgoto para uso e consumo','5187':'Compra de telefonia para uso e consumo',
 '5188':'Compra de telefonia para revenda','5189':'Compra de internet para uso e consumo',
 '5190':'Compra de internet para revenda','5191':'Compra de serviço de TV por assinatura para uso e consumo',
 '5192':'Compra de serviço de TV por assinatura para revenda','5193':'Compra de serviço de vigilância / segurança privada',
 '5194':'Compra de serviço de limpeza e conservação','5195':'Compra de serviço de manutenção de máquinas e equipamentos',
 '5196':'Compra de serviço de manutenção de veículos','5197':'Compra de serviço de manutenção de edifícios e instalações',
 '5198':'Compra de serviço de transporte de mercadoria (frete)','5199':'Outras compras',

 '5201':'Prestação de serviço de construção civil para contribuinte do ICMS','5202':'Prestação de serviço de construção civil para consumidor final',
 '5251':'Prestação de serviço de construção civil para o exterior','5301':'Prestação de serviço de transporte rodoviário de carga - contribuinte',
 '5302':'Prestação de serviço de transporte rodoviário de carga - consumidor final','5303':'Prestação de serviço de transporte rodoviário de passageiros - contribuinte',
 '5304':'Prestação de serviço de transporte rodoviário de passageiros - consumidor final','5351':'Prestação de serviço de transporte rodoviário para o exterior',
 '5401':'Serviço de comunicação - contribuinte','5402':'Serviço de comunicação - consumidor final',
 '5501':'Serviço de energia elétrica - contribuinte (distribuição/revenda)','5502':'Serviço de energia elétrica - consumidor final',
 '5551':'Serviço de energia elétrica para o exterior','5601':'Serviço de gás natural - contribuinte (distribuição/revenda)',
 '5602':'Serviço de gás natural - consumidor final','5651':'Serviço de gás natural para o exterior',
 '5701':'Serviço de água/esgoto - contribuinte (distribuição/revenda)','5702':'Serviço de água/esgoto - consumidor final',
 '5801':'Prestação de serviço de assistência técnica em geral','5802':'Prestação de serviço de assistência técnica em veículos',
 '5803':'Prestação de serviço de assistência técnica em máquinas e equipamentos','5804':'Prestação de serviço de assistência técnica em informática',
 '5901':'Prestação de serviço de armazenagem / estocagem / depósito','5902':'Prestação de serviço de armazenagem / estocagem / depósito em depósito fechado',
 '5903':'Prestação de serviço de expedição / logística','5904':'Prestação de serviço de vigilância / segurança privada',
 '5905':'Prestação de serviço de limpeza e conservação','5906':'Prestação de serviço de telecomunicação',
 '5907':'Prestação de serviço de internet','5908':'Prestação de serviço de TV por assinatura',
 '5909':'Prestação de serviço de processamento de dados / hospedagem','5910':'Prestação de serviço de manutenção em geral',
 '5911':'Prestação de serviço de transporte (outros modais)','5999':'Outras prestações de serviço',

 '6101':'Venda de produção do estabelecimento','6102':'Venda de mercadoria adquirida ou recebida de terceiros',
 '6103':'Venda de ativo imobilizado','6104':'Venda de bem para uso e consumo',
 '6105':'Venda de matéria-prima','6106':'Venda de embalagem',
 '6107':'Venda de mercadoria recebida em consignação mercantil','6108':'Venda de mercadoria em depósito fechado',
 '6109':'Venda de matéria-prima em depósito fechado','6110':'Venda de ativo imobilizado em depósito fechado',
 '6111':'Venda de uso e consumo em depósito fechado','6112':'Venda em leilão',
 '6113':'Venda de demonstração ou exposição','6114':'Venda de manutenção ou reparo de bem de terceiro',
 '6115':'Venda de montagem ou instalação de bem de terceiro','6116':'Venda para industrialização por encomenda',
 '6117':'Venda para comercialização por encomenda','6118':'Venda de mercadoria de empresa do mesmo grupo econômico',
 '6119':'Venda de ativo imobilizado de empresa do mesmo grupo econômico','6120':'Venda de uso e consumo de empresa do mesmo grupo econômico',
 '6121':'Venda de serviços de empresa do mesmo grupo econômico',
 '6122':'Venda de veículo automotor (concessionária / revenda)',
 '6123':'Venda de veículo automotor (pessoa jurídica - frota)','6124':'Venda de combustível e lubrificante para uso ou consumo',
 '6125':'Venda de combustível e lubrificante para revenda','6126':'Venda de energia elétrica para distribuição',
 '6127':'Venda de energia elétrica para uso e consumo','6128':'Venda de gás natural para distribuição',
 '6129':'Venda de gás natural para uso e consumo','6130':'Venda de água e esgoto para distribuição',
 '6131':'Venda de água e esgoto para uso e consumo','6132':'Venda de telefonia para uso e consumo',
 '6133':'Venda de telefonia para revenda','6134':'Venda de internet para uso e consumo',
 '6135':'Venda de internet para revenda','6136':'Venda de serviço de TV por assinatura para uso e consumo',
 '6137':'Venda de serviço de TV por assinatura para revenda','6138':'Venda de serviço de vigilância / segurança privada',
 '6139':'Venda de serviço de limpeza e conservação','6140':'Venda de serviço de manutenção de máquinas e equipamentos',
 '6141':'Venda de serviço de manutenção de veículos','6142':'Venda de serviço de manutenção de edifícios e instalações',
 '6143':'Venda de serviço de transporte de mercadoria (frete)','6144':'Venda de software (licença de uso)',
 '6145':'Venda de acessório / peça de reposição','6146':'Venda de material de expediente / limpeza',
 '6147':'Venda de material de construção civil','6148':'Venda de material de embalagem',
 '6149':'Venda de material de comunicação / marketing / brinde','6150':'Venda de produto alimentício',
 '6151':'Venda de produção do estabelecimento - exportação','6152':'Venda de mercadoria adquirida/recebida - exportação',
 '6153':'Venda de ativo imobilizado - exportação','6154':'Venda de bem para uso e consumo - exportação',
 '6155':'Venda de matéria-prima - exportação','6156':'Venda de embalagem - exportação',
 '6157':'Venda em consignação mercantil - exportação','6158':'Venda em depósito fechado - exportação',
 '6159':'Outras vendas - exportação','6160':'Venda para leilão - exportação',
 '6161':'Venda de demonstração/exposição - exportação','6162':'Venda de manutenção/reparo - exportação',
 '6163':'Venda de montagem/instalação - exportação','6164':'Venda para industrialização por encomenda - exportação',
 '6165':'Venda para comercialização por encomenda - exportação','6166':'Venda de empresa do mesmo grupo econômico - exportação',
 '6167':'Venda de veículo automotor - exportação','6168':'Venda de combustível e lubrificante - exportação',
 '6169':'Venda de energia elétrica - exportação','6170':'Venda de gás natural - exportação',
 '6171':'Venda de água e esgoto - exportação','6172':'Venda de telefonia para o exterior',
 '6173':'Venda de internet para o exterior','6174':'Venda de serviço de TV por assinatura para o exterior',
 '6175':'Venda de serviço de vigilância / segurança privada - exportação','6176':'Venda de serviço de limpeza e conservação - exportação',
 '6177':'Venda de serviço de manutenção - exportação','6178':'Venda de serviço de transporte (frete) - exportação',
 '6179':'Venda de software (licença) - exportação','6180':'Venda de acessório / peça de reposição - exportação',
 '6181':'Venda de material de expediente / limpeza - exportação','6182':'Venda de material de construção civil - exportação',
 '6183':'Venda de material de embalagem - exportação','6184':'Venda de material de comunicação / marketing / brinde - exportação',
 '6185':'Venda de produto alimentício - exportação','6186':'Venda de produto químico / farmacêutico - exportação',
 '6187':'Venda de produto têxtil / vestuário - exportação','6188':'Venda de calçado - exportação',
 '6189':'Venda de móveis - exportação','6190':'Venda de papel e papelão - exportação',
 '6191':'Venda de borracha e plástico - exportação','6192':'Venda de couro e artigos de couro - exportação',
 '6193':'Venda de madeira / mobiliário - exportação','6194':'Venda de celulose / papel - exportação',
 '6195':'Venda de produtos químicos - exportação','6196':'Venda de produtos farmacêuticos - exportação',
 '6197':'Venda de produtos de perfumaria / higiene - exportação','6198':'Venda de borracha e plástico - exportação (duplicata)',
 '6199':'Outras vendas de mercadorias e serviços para o exterior',
 '6201':'Venda de serviço de construção civil','6202':'Venda de serviço de construção civil para consumidor final',
 '6251':'Venda de serviço de construção civil para o exterior','6301':'Venda de serviço de transporte rodoviário de carga',
 '6302':'Venda de serviço de transporte rodoviário de passageiros','6351':'Venda de serviço de transporte rodoviário para o exterior',
 '6401':'Serviço de comunicação - venda','6402':'Serviço de comunicação - venda para consumidor final',
 '6501':'Serviço de energia elétrica - venda','6502':'Serviço de energia elétrica - venda para consumidor final',
 '6551':'Serviço de energia elétrica - venda para o exterior','6601':'Serviço de gás natural - venda',
 '6602':'Serviço de gás natural - venda para consumidor final','6651':'Serviço de gás natural - venda para o exterior',
 '6701':'Serviço de água/esgoto - venda','6702':'Serviço de água/esgoto - venda para consumidor final',
 '6801':'Serviço de assistência técnica em geral - venda','6802':'Serviço de assistência técnica em veículos - venda',
 '6803':'Serviço de assistência técnica em máquinas e equipamentos - venda','6804':'Serviço de assistência técnica em informática - venda',
 '6901':'Serviço de armazenagem / estocagem / depósito - venda','6902':'Serviço de armazenagem / estocagem / depósito em depósito fechado - venda',
 '6903':'Serviço de expedição / logística - venda','6904':'Serviço de vigilância / segurança privada - venda',
 '6905':'Serviço de limpeza e conservação - venda','6906':'Serviço de telecomunicação - venda',
 '6907':'Serviço de internet - venda','6908':'Serviço de TV por assinatura - venda',
 '6909':'Serviço de processamento de dados / hospedagem - venda','6910':'Serviço de manutenção em geral - venda',
 '6911':'Serviço de transporte (outros modais) - venda','6999':'Outras vendas / prestações de serviço',

 '7101':'Devolução de compra de produção do estabelecimento','7102':'Devolução de compra de mercadoria',
 '7103':'Devolução de compra de ativo imobilizado','7104':'Devolução de compra de uso e consumo',
 '7105':'Devolução de compra de matéria-prima','7106':'Devolução de compra de embalagem',
 '7107':'Devolução de compra em consignação mercantil','7108':'Devolução de compra em depósito fechado',
 '7109':'Devolução de compra de matéria-prima em depósito fechado','7110':'Devolução de compra de ativo imobilizado em depósito fechado',
 '7111':'Devolução de compra de uso e consumo em depósito fechado','7112':'Devolução de compra em leilão',
 '7113':'Devolução de compra de demonstração/exposição','7114':'Devolução de compra de manutenção/reparo',
 '7115':'Devolução de compra de montagem/instalação','7116':'Devolução de compra para industrialização por encomenda',
 '7117':'Devolução de compra para comercialização por encomenda','7118':'Devolução de compra de empresa do mesmo grupo econômico',
 '7119':'Devolução de compra de ativo imobilizado de empresa do mesmo grupo econômico','7120':'Devolução de compra de uso e consumo de empresa do mesmo grupo econômico',
 '7121':'Devolução de compra de serviço de empresa do mesmo grupo econômico','7122':'Devolução de compra de combustível',
 '7123':'Devolução de compra de veículo automotor','7124':'Devolução de compra de energia elétrica',
 '7125':'Devolução de compra de gás natural','7126':'Devolução de compra de água e esgoto',
 '7127':'Devolução de compra de telefonia','7128':'Devolução de compra de internet',
 '7129':'Devolução de compra de TV por assinatura','7130':'Devolução de compra de vigilância / segurança privada',
 '7131':'Devolução de compra de limpeza e conservação','7132':'Devolução de compra de manutenção',
 '7133':'Devolução de compra de transporte de mercadoria (frete)','7134':'Devolução de compra de software',
 '7135':'Devolução de compra de acessório / peça de reposição','7136':'Devolução de compra de material de expediente / limpeza',
 '7137':'Devolução de compra de material de construção civil','7138':'Devolução de compra de material de embalagem',
 '7139':'Devolução de compra de material de comunicação / marketing / brinde','7140':'Devolução de compra de produto alimentício',
 '7151':'Devolução de compra para industrialização - importação','7152':'Devolução de compra para comercialização - importação',
 '7153':'Devolução de compra para ativo imobilizado - importação','7154':'Devolução de compra para uso e consumo - importação',
 '7155':'Devolução de compra de matéria-prima - importação','7156':'Devolução de compra de embalagem - importação',
 '7157':'Devolução de compra em consignação mercantil - importação','7158':'Devolução de compra em depósito fechado - importação',
 '7159':'Outras devoluções de compra - importação','7160':'Devolução de compra em leilão - importação',
 '7161':'Devolução de compra de demonstração/exposição - importação','7162':'Devolução de compra de manutenção/reparo - importação',
 '7163':'Devolução de compra de montagem/instalação - importação','7164':'Devolução de compra para industrialização por encomenda - importação',
 '7165':'Devolução de compra para comercialização por encomenda - importação','7166':'Devolução de compra de empresa do mesmo grupo econômico - importação',
 '7167':'Devolução de compra de veículo automotor - importação','7168':'Devolução de compra de combustível - importação',
 '7169':'Devolução de compra de energia elétrica - importação','7170':'Devolução de compra de gás natural - importação',
 '7171':'Devolução de compra de água e esgoto - importação','7172':'Devolução de compra de telefonia - importação',
 '7173':'Devolução de compra de internet - importação','7174':'Devolução de compra de TV por assinatura - importação',
 '7175':'Devolução de compra de vigilância / segurança privada - importação','7176':'Devolução de compra de limpeza e conservação - importação',
 '7177':'Devolução de compra de manutenção - importação','7178':'Devolução de compra de transporte (frete) - importação',
 '7179':'Devolução de compra de software - importação','7180':'Devolução de compra de acessório / peça de reposição - importação',
 '7181':'Devolução de compra de material de expediente / limpeza - importação','7182':'Devolução de compra de material de construção civil - importação',
 '7183':'Devolução de compra de material de embalagem - importação','7184':'Devolução de compra de material de comunicação / marketing / brinde - importação',
 '7185':'Devolução de compra de produto alimentício - importação','7199':'Outras devoluções de compra',
 '7201':'Devolução de venda de produção do estabelecimento','7202':'Devolução de venda de mercadoria',
 '7203':'Devolução de venda de ativo imobilizado','7204':'Devolução de venda de uso e consumo',
 '7205':'Devolução de venda de matéria-prima','7206':'Devolução de venda de embalagem',
 '7207':'Devolução de venda em consignação mercantil','7208':'Devolução de venda em depósito fechado',
 '7209':'Devolução de venda de matéria-prima em depósito fechado','7210':'Devolução de venda de ativo imobilizado em depósito fechado',
 '7211':'Devolução de venda de uso e consumo em depósito fechado','7212':'Devolução de venda em leilão',
 '7213':'Devolução de venda de demonstração/exposição','7214':'Devolução de venda de manutenção/reparo',
 '7215':'Devolução de venda de montagem/instalação','7216':'Devolução de venda para industrialização por encomenda',
 '7217':'Devolução de venda para comercialização por encomenda','7218':'Devolução de venda de empresa do mesmo grupo econômico',
 '7219':'Devolução de venda de ativo imobilizado de empresa do mesmo grupo econômico','7220':'Devolução de venda de uso e consumo de empresa do mesmo grupo econômico',
 '7221':'Devolução de venda de serviço de empresa do mesmo grupo econômico','7222':'Devolução de venda de combustível',
 '7223':'Devolução de venda de veículo automotor','7224':'Devolução de venda de energia elétrica',
 '7225':'Devolução de venda de gás natural','7226':'Devolução de venda de água e esgoto',
 '7227':'Devolução de venda de telefonia','7228':'Devolução de venda de internet',
 '7229':'Devolução de venda de TV por assinatura','7230':'Devolução de venda de vigilância / segurança privada',
 '7231':'Devolução de venda de limpeza e conservação','7232':'Devolução de venda de manutenção',
 '7233':'Devolução de venda de transporte de mercadoria (frete)','7234':'Devolução de venda de software',
 '7235':'Devolução de venda de acessório / peça de reposição','7236':'Devolução de venda de material de expediente / limpeza',
 '7237':'Devolução de venda de material de construção civil','7238':'Devolução de venda de material de embalagem',
 '7239':'Devolução de venda de material de comunicação / marketing / brinde','7240':'Devolução de venda de produto alimentício',
 '7251':'Devolução de venda para industrialização - exportação','7252':'Devolução de venda para comercialização - exportação',
 '7253':'Devolução de venda para ativo imobilizado - exportação','7254':'Devolução de venda para uso e consumo - exportação',
 '7255':'Devolução de venda de matéria-prima - exportação','7256':'Devolução de venda de embalagem - exportação',
 '7257':'Devolução de venda em consignação mercantil - exportação','7258':'Devolução de venda em depósito fechado - exportação',
 '7259':'Outras devoluções de venda - exportação','7260':'Devolução de venda em leilão - exportação',
 '7261':'Devolução de venda de demonstração/exposição - exportação','7262':'Devolução de venda de manutenção/reparo - exportação',
 '7263':'Devolução de venda de montagem/instalação - exportação','7264':'Devolução de venda para industrialização por encomenda - exportação',
 '7265':'Devolução de venda para comercialização por encomenda - exportação','7266':'Devolução de venda de empresa do mesmo grupo econômico - exportação',
 '7267':'Devolução de venda de veículo automotor - exportação','7268':'Devolução de venda de combustível - exportação',
 '7269':'Devolução de venda de energia elétrica - exportação','7270':'Devolução de venda de gás natural - exportação',
 '7271':'Devolução de venda de água e esgoto - exportação','7272':'Devolução de venda de telefonia - exportação',
 '7273':'Devolução de venda de internet - exportação','7274':'Devolução de venda de TV por assinatura - exportação',
 '7275':'Devolução de venda de vigilância / segurança privada - exportação','7276':'Devolução de venda de limpeza e conservação - exportação',
 '7277':'Devolução de venda de manutenção - exportação','7278':'Devolução de venda de transporte (frete) - exportação',
 '7279':'Devolução de venda de software - exportação','7280':'Devolução de venda de acessório / peça de reposição - exportação',
 '7281':'Devolução de venda de material de expediente / limpeza - exportação','7282':'Devolução de venda de material de construção civil - exportação',
 '7283':'Devolução de venda de material de embalagem - exportação','7284':'Devolução de venda de material de comunicação / marketing / brinde - exportação',
 '7285':'Devolução de venda de produto alimentício - exportação','7299':'Outras devoluções de venda',
 '7301':'Remessa para industrialização','7302':'Remessa para comercialização',
 '7303':'Remessa para uso e consumo','7304':'Remessa para ativo imobilizado',
 '7305':'Remessa de matéria-prima','7306':'Remessa de embalagem',
 '7307':'Remessa em consignação mercantil','7308':'Remessa em depósito fechado',
 '7309':'Remessa de matéria-prima em depósito fechado','7310':'Remessa de ativo imobilizado em depósito fechado',
 '7311':'Remessa de uso e consumo em depósito fechado','7312':'Remessa para leilão',
 '7313':'Remessa para demonstração ou exposição','7314':'Remessa para manutenção ou reparo',
 '7315':'Remessa para montagem ou instalação','7316':'Remessa para industrialização por encomenda',
 '7317':'Remessa para comercialização por encomenda','7318':'Remessa de empresa do mesmo grupo econômico',
 '7319':'Remessa de ativo imobilizado de empresa do mesmo grupo econômico','7320':'Remessa de uso e consumo de empresa do mesmo grupo econômico',
 '7321':'Remessa de serviço de empresa do mesmo grupo econômico','7322':'Remessa de combustível',
 '7323':'Remessa de veículo automotor','7324':'Remessa de energia elétrica',
 '7325':'Remessa de gás natural','7326':'Remessa de água e esgoto',
 '7327':'Remessa de telefonia','7328':'Remessa de internet',
 '7329':'Remessa de TV por assinatura','7330':'Remessa de vigilância / segurança privada',
 '7331':'Remessa de limpeza e conservação','7332':'Remessa de manutenção',
 '7333':'Remessa de transporte de mercadoria (frete)','7334':'Remessa de software',
 '7335':'Remessa de acessório / peça de reposição','7336':'Remessa de material de expediente / limpeza',
 '7337':'Remessa de material de construção civil','7338':'Remessa de material de embalagem',
 '7339':'Remessa de material de comunicação / marketing / brinde','7340':'Remessa de produto alimentício',
 '7351':'Remessa para industrialização - exportação','7352':'Remessa para comercialização - exportação',
 '7353':'Remessa para ativo imobilizado - exportação','7354':'Remessa para uso e consumo - exportação',
 '7355':'Remessa de matéria-prima - exportação','7356':'Remessa de embalagem - exportação',
 '7357':'Remessa em consignação mercantil - exportação','7358':'Remessa em depósito fechado - exportação',
 '7359':'Outras remessas - exportação','7360':'Remessa para leilão - exportação',
 '7361':'Remessa de demonstração/exposição - exportação','7362':'Remessa de manutenção/reparo - exportação',
 '7363':'Remessa de montagem/instalação - exportação','7364':'Remessa para industrialização por encomenda - exportação',
 '7365':'Remessa para comercialização por encomenda - exportação','7366':'Remessa de empresa do mesmo grupo econômico - exportação',
 '7367':'Remessa de veículo automotor - exportação','7368':'Remessa de combustível - exportação',
 '7369':'Remessa de energia elétrica - exportação','7370':'Remessa de gás natural - exportação',
 '7371':'Remessa de água e esgoto - exportação','7372':'Remessa de telefonia - exportação',
 '7373':'Remessa de internet - exportação','7374':'Remessa de TV por assinatura - exportação',
 '7375':'Remessa de vigilância / segurança privada - exportação','7376':'Remessa de limpeza e conservação - exportação',
 '7377':'Remessa de manutenção - exportação','7378':'Remessa de transporte (frete) - exportação',
 '7379':'Remessa de software - exportação','7380':'Remessa de acessório / peça de reposição - exportação',
 '7381':'Remessa de material de expediente / limpeza - exportação','7382':'Remessa de material de construção civil - exportação',
 '7383':'Remessa de material de embalagem - exportação','7384':'Remessa de material de comunicação / marketing / brinde - exportação',
 '7385':'Remessa de produto alimentício - exportação','7399':'Outras remessas',
 '7401':'Retorno de remessa para industrialização','7402':'Retorno de remessa para comercialização',
 '7403':'Retorno de remessa para uso e consumo','7404':'Retorno de remessa para ativo imobilizado',
 '7405':'Retorno de remessa de matéria-prima','7406':'Retorno de remessa de embalagem',
 '7407':'Retorno de remessa em consignação mercantil','7408':'Retorno de remessa em depósito fechado',
 '7409':'Retorno de remessa de matéria-prima em depósito fechado','7410':'Retorno de remessa de ativo imobilizado em depósito fechado',
 '7411':'Retorno de remessa de uso e consumo em depósito fechado','7412':'Retorno de remessa para leilão',
 '7413':'Retorno de remessa para demonstração ou exposição','7414':'Retorno de remessa para manutenção ou reparo',
 '7415':'Retorno de remessa para montagem ou instalação','7416':'Retorno de remessa para industrialização por encomenda',
 '7417':'Retorno de remessa para comercialização por encomenda','7418':'Retorno de remessa de empresa do mesmo grupo econômico',
 '7419':'Retorno de remessa de ativo imobilizado de empresa do mesmo grupo econômico','7420':'Retorno de remessa de uso e consumo de empresa do mesmo grupo econômico',
 '7421':'Retorno de remessa de serviço de empresa do mesmo grupo econômico','7422':'Retorno de remessa de combustível',
 '7423':'Retorno de remessa de veículo automotor','7424':'Retorno de remessa de energia elétrica',
 '7425':'Retorno de remessa de gás natural','7426':'Retorno de remessa de água e esgoto',
 '7427':'Retorno de remessa de telefonia','7428':'Retorno de remessa de internet',
 '7429':'Retorno de remessa de TV por assinatura','7430':'Retorno de remessa de vigilância / segurança privada',
 '7431':'Retorno de remessa de limpeza e conservação','7432':'Retorno de remessa de manutenção',
 '7433':'Retorno de remessa de transporte de mercadoria (frete)','7434':'Retorno de remessa de software',
 '7435':'Retorno de remessa de acessório / peça de reposição','7436':'Retorno de remessa de material de expediente / limpeza',
 '7437':'Retorno de remessa de material de construção civil','7438':'Retorno de remessa de material de embalagem',
 '7439':'Retorno de remessa de material de comunicação / marketing / brinde','7440':'Retorno de remessa de produto alimentício',
 '7451':'Retorno de remessa para industrialização - exportação','7452':'Retorno de remessa para comercialização - exportação',
 '7453':'Retorno de remessa para ativo imobilizado - exportação','7454':'Retorno de remessa para uso e consumo - exportação',
 '7455':'Retorno de remessa de matéria-prima - exportação','7456':'Retorno de remessa de embalagem - exportação',
 '7457':'Retorno de remessa em consignação mercantil - exportação','7458':'Retorno de remessa em depósito fechado - exportação',
 '7459':'Outros retornos - exportação','7460':'Retorno de remessa para leilão - exportação',
 '7461':'Retorno de remessa de demonstração/exposição - exportação','7462':'Retorno de remessa de manutenção/reparo - exportação',
 '7463':'Retorno de remessa de montagem/instalação - exportação','7464':'Retorno de remessa para industrialização por encomenda - exportação',
 '7465':'Retorno de remessa para comercialização por encomenda - exportação','7466':'Retorno de remessa de empresa do mesmo grupo econômico - exportação',
 '7467':'Retorno de remessa de veículo automotor - exportação','7468':'Retorno de remessa de combustível - exportação',
 '7469':'Retorno de remessa de energia elétrica - exportação','7470':'Retorno de remessa de gás natural - exportação',
 '7471':'Retorno de remessa de água e esgoto - exportação','7472':'Retorno de remessa de telefonia - exportação',
 '7473':'Retorno de remessa de internet - exportação','7474':'Retorno de remessa de TV por assinatura - exportação',
 '7475':'Retorno de remessa de vigilância / segurança privada - exportação','7476':'Retorno de remessa de limpeza e conservação - exportação',
 '7477':'Retorno de remessa de manutenção - exportação','7478':'Retorno de remessa de transporte (frete) - exportação',
 '7479':'Retorno de remessa de software - exportação','7480':'Retorno de remessa de acessório / peça de reposição - exportação',
 '7481':'Retorno de remessa de material de expediente / limpeza - exportação','7482':'Retorno de remessa de material de construção civil - exportação',
 '7483':'Retorno de remessa de material de embalagem - exportação','7484':'Retorno de remessa de material de comunicação / marketing / brinde - exportação',
 '7485':'Retorno de remessa de produto alimentício - exportação','7499':'Outros retornos de remessas',
 '7501':'Remessa para industrialização recebida em devolução','7502':'Remessa para comercialização recebida em devolução',
 '7503':'Remessa para uso e consumo recebida em devolução','7504':'Remessa para ativo imobilizado recebida em devolução',
 '7505':'Remessa de matéria-prima recebida em devolução','7506':'Remessa de embalagem recebida em devolução',
 '7507':'Remessa em consignação mercantil recebida em devolução','7508':'Remessa em depósito fechado recebida em devolução',
 '7509':'Remessa de matéria-prima em depósito fechado recebida em devolução','7510':'Remessa de ativo imobilizado em depósito fechado recebida em devolução',
 '7511':'Remessa de uso e consumo em depósito fechado recebida em devolução','7512':'Remessa para leilão recebida em devolução',
 '7513':'Remessa para demonstração/exposição recebida em devolução','7514':'Remessa para manutenção/reparo recebida em devolução',
 '7515':'Remessa para montagem/instalação recebida em devolução','7516':'Remessa para industrialização por encomenda recebida em devolução',
 '7517':'Remessa para comercialização por encomenda recebida em devolução','7518':'Remessa de empresa do mesmo grupo econômico recebida em devolução',
 '7519':'Remessa de ativo imobilizado de empresa do mesmo grupo econômico recebida em devolução','7520':'Remessa de uso e consumo de empresa do mesmo grupo econômico recebida em devolução',
 '7521':'Remessa de serviço de empresa do mesmo grupo econômico recebida em devolução','7522':'Remessa de combustível recebida em devolução',
 '7523':'Remessa de veículo automotor recebida em devolução','7524':'Remessa de energia elétrica recebida em devolução',
 '7525':'Remessa de gás natural recebida em devolução','7526':'Remessa de água e esgoto recebida em devolução',
 '7527':'Remessa de telefonia recebida em devolução','7528':'Remessa de internet recebida em devolução',
 '7529':'Remessa de TV por assinatura recebida em devolução','7530':'Remessa de vigilância / segurança privada recebida em devolução',
 '7531':'Remessa de limpeza e conservação recebida em devolução','7532':'Remessa de manutenção recebida em devolução',
 '7533':'Remessa de transporte de mercadoria (frete) recebida em devolução','7534':'Remessa de software recebida em devolução',
 '7535':'Remessa de acessório / peça de reposição recebida em devolução','7536':'Remessa de material de expediente / limpeza recebida em devolução',
 '7537':'Remessa de material de construção civil recebida em devolução','7538':'Remessa de material de embalagem recebida em devolução',
 '7539':'Remessa de material de comunicação / marketing / brinde recebida em devolução','7540':'Remessa de produto alimentício recebida em devolução',
 '7551':'Remessa para industrialização recebida em devolução - exportação','7552':'Remessa para comercialização recebida em devolução - exportação',
 '7553':'Remessa para ativo imobilizado recebida em devolução - exportação','7554':'Remessa para uso e consumo recebida em devolução - exportação',
 '7555':'Remessa de matéria-prima recebida em devolução - exportação','7556':'Remessa de embalagem recebida em devolução - exportação',
 '7557':'Remessa em consignação mercantil recebida em devolução - exportação','7558':'Remessa em depósito fechado recebida em devolução - exportação',
 '7559':'Outras remessas recebidas em devolução - exportação','7560':'Remessa para leilão recebida em devolução - exportação',
 '7561':'Remessa de demonstração/exposição recebida em devolução - exportação','7562':'Remessa de manutenção/reparo recebida em devolução - exportação',
 '7563':'Remessa para montagem/instalação recebida em devolução - exportação','7564':'Remessa para industrialização por encomenda recebida em devolução - exportação',
 '7565':'Remessa para comercialização por encomenda recebida em devolução - exportação','7566':'Remessa de empresa do mesmo grupo econômico recebida em devolução - exportação',
 '7567':'Remessa de veículo automotor recebida em devolução - exportação','7568':'Remessa de combustível recebida em devolução - exportação',
 '7569':'Remessa de energia elétrica recebida em devolução - exportação','7570':'Remessa de gás natural recebida em devolução - exportação',
 '7571':'Remessa de água e esgoto recebida em devolução - exportação','7572':'Remessa de telefonia recebida em devolução - exportação',
 '7573':'Remessa de internet recebida em devolução - exportação','7574':'Remessa de TV por assinatura recebida em devolução - exportação',
 '7575':'Remessa de vigilância / segurança privada recebida em devolução - exportação','7576':'Remessa de limpeza e conservação recebida em devolução - exportação',
 '7577':'Remessa de manutenção recebida em devolução - exportação','7578':'Remessa de transporte (frete) recebida em devolução - exportação',
 '7579':'Remessa de software recebida em devolução - exportação','7580':'Remessa de acessório / peça de reposição recebida em devolução - exportação',
 '7581':'Remessa de material de expediente / limpeza recebida em devolução - exportação','7582':'Remessa de material de construção civil recebida em devolução - exportação',
 '7583':'Remessa de material de embalagem recebida em devolução - exportação','7584':'Remessa de material de comunicação / marketing / brinde recebida em devolução - exportação',
 '7585':'Remessa de produto alimentício recebida em devolução - exportação','7599':'Outras remessas recebidas em devolução',
 '7999':'Outras saídas de mercadorias / serviços / ativos / uso e consumo / matéria-prima / embalagem / remessa / retorno / devolução / industrialização / comercialização / leilão / demonstração / exposição / manutenção / reparo / montagem / instalação / encomenda / grupo econômico / combustível / veículo / energia / gás / água / esgoto / telefonia / internet / TV / vigilância / limpeza / manutenção / frete / software / acessórios / materiais / alimentação',

 '8101':'Remessa de produção do estabelecimento para industrialização por outra empresa','8102':'Remessa de mercadoria adquirida/recebida para comercialização por outra empresa',
 '8103':'Remessa de mercadoria para uso ou consumo por outra empresa','8104':'Remessa de ativo imobilizado para outra empresa',
 '8105':'Remessa de matéria-prima para outra empresa','8106':'Remessa de embalagem para outra empresa',
 '8107':'Remessa de mercadoria em consignação mercantil','8108':'Remessa de mercadoria em depósito fechado',
 '8109':'Remessa de matéria-prima em depósito fechado','8110':'Remessa de ativo imobilizado em depósito fechado',
 '8111':'Remessa de uso e consumo em depósito fechado','8112':'Remessa de mercadoria para leilão',
 '8113':'Remessa de mercadoria para demonstração ou exposição','8114':'Remessa de mercadoria para manutenção ou reparo',
 '8115':'Remessa de mercadoria para montagem ou instalação','8116':'Remessa para industrialização por encomenda',
 '8117':'Remessa para comercialização por encomenda','8118':'Remessa de empresa do mesmo grupo econômico',
 '8119':'Remessa de ativo imobilizado de empresa do mesmo grupo econômico','8120':'Remessa de uso e consumo de empresa do mesmo grupo econômico',
 '8121':'Remessa de serviço de empresa do mesmo grupo econômico','8122':'Remessa de combustível',
 '8123':'Remessa de veículo automotor','8124':'Remessa de energia elétrica',
 '8125':'Remessa de gás natural','8126':'Remessa de água e esgoto',
 '8127':'Remessa de telefonia','8128':'Remessa de internet',
 '8129':'Remessa de TV por assinatura','8130':'Remessa de vigilância / segurança privada',
 '8131':'Remessa de limpeza e conservação','8132':'Remessa de manutenção',
 '8133':'Remessa de transporte de mercadoria (frete)','8134':'Remessa de software',
 '8135':'Remessa de acessório / peça de reposição','8136':'Remessa de material de expediente / limpeza',
 '8137':'Remessa de material de construção civil','8138':'Remessa de material de embalagem',
 '8139':'Remessa de material de comunicação / marketing / brinde','8140':'Remessa de produto alimentício',
 '8151':'Remessa para industrialização - exportação','8152':'Remessa para comercialização - exportação',
 '8153':'Remessa para ativo imobilizado - exportação','8154':'Remessa para uso e consumo - exportação',
 '8155':'Remessa de matéria-prima - exportação','8156':'Remessa de embalagem - exportação',
 '8157':'Remessa em consignação mercantil - exportação','8158':'Remessa em depósito fechado - exportação',
 '8159':'Outras remessas - exportação','8160':'Remessa para leilão - exportação',
 '8161':'Remessa de demonstração/exposição - exportação','8162':'Remessa de manutenção/reparo - exportação',
 '8163':'Remessa de montagem/instalação - exportação','8164':'Remessa para industrialização por encomenda - exportação',
 '8165':'Remessa para comercialização por encomenda - exportação','8166':'Remessa de empresa do mesmo grupo econômico - exportação',
 '8167':'Remessa de veículo automotor - exportação','8168':'Remessa de combustível - exportação',
 '8169':'Remessa de energia elétrica - exportação','8170':'Remessa de gás natural - exportação',
 '8171':'Remessa de água e esgoto - exportação','8172':'Remessa de telefonia - exportação',
 '8173':'Remessa de internet - exportação','8174':'Remessa de TV por assinatura - exportação',
 '8175':'Remessa de vigilância / segurança privada - exportação','8176':'Remessa de limpeza e conservação - exportação',
 '8177':'Remessa de manutenção - exportação','8178':'Remessa de transporte (frete) - exportação',
 '8179':'Remessa de software - exportação','8180':'Remessa de acessório / peça de reposição - exportação',
 '8181':'Remessa de material de expediente / limpeza - exportação','8182':'Remessa de material de construção civil - exportação',
 '8183':'Remessa de material de embalagem - exportação','8184':'Remessa de material de comunicação / marketing / brinde - exportação',
 '8185':'Remessa de produto alimentício - exportação','8199':'Outras remessas para processamento por conta de terceiros',
 '8201':'Prestação de serviço de comunicação','8202':'Prestação de serviço de transporte',
 '8251':'Prestação de serviço de comunicação para o exterior','8252':'Prestação de serviço de transporte para o exterior',
 '8501':'Remessa de produção do estabelecimento recebida em devolução de outra empresa','8502':'Remessa de mercadoria adquirida/recebida recebida em devolução de outra empresa',
 '8503':'Remessa de mercadoria para uso ou consumo recebida em devolução de outra empresa','8504':'Remessa de ativo imobilizado recebida em devolução de outra empresa',
 '8505':'Remessa de matéria-prima recebida em devolução de outra empresa','8506':'Remessa de embalagem recebida em devolução de outra empresa',
 '8507':'Remessa de mercadoria em consignação mercantil recebida em devolução','8508':'Remessa de mercadoria em depósito fechado recebida em devolução',
 '8509':'Remessa de matéria-prima em depósito fechado recebida em devolução','8510':'Remessa de ativo imobilizado em depósito fechado recebida em devolução',
 '8511':'Remessa de uso e consumo em depósito fechado recebida em devolução','8512':'Remessa de mercadoria para leilão recebida em devolução',
 '8513':'Remessa de mercadoria para demonstração/exposição recebida em devolução','8514':'Remessa de mercadoria para manutenção/reparo recebida em devolução',
 '8515':'Remessa de mercadoria para montagem/instalação recebida em devolução','8516':'Remessa para industrialização por encomenda recebida em devolução',
 '8517':'Remessa para comercialização por encomenda recebida em devolução','8518':'Remessa de empresa do mesmo grupo econômico recebida em devolução',
 '8519':'Remessa de ativo imobilizado de empresa do mesmo grupo econômico recebida em devolução','8520':'Remessa de uso e consumo de empresa do mesmo grupo econômico recebida em devolução',
 '8521':'Remessa de serviço de empresa do mesmo grupo econômico recebida em devolução','8522':'Remessa de combustível recebida em devolução',
 '8523':'Remessa de veículo automotor recebida em devolução','8524':'Remessa de energia elétrica recebida em devolução',
 '8525':'Remessa de gás natural recebida em devolução','8526':'Remessa de água e esgoto recebida em devolução',
 '8527':'Remessa de telefonia recebida em devolução','8528':'Remessa de internet recebida em devolução',
 '8529':'Remessa de TV por assinatura recebida em devolução','8530':'Remessa de vigilância / segurança privada recebida em devolução',
 '8531':'Remessa de limpeza e conservação recebida em devolução','8532':'Remessa de manutenção recebida em devolução',
 '8533':'Remessa de transporte de mercadoria (frete) recebida em devolução','8534':'Remessa de software recebida em devolução',
 '8535':'Remessa de acessório / peça de reposição recebida em devolução','8536':'Remessa de material de expediente / limpeza recebida em devolução',
 '8537':'Remessa de material de construção civil recebida em devolução','8538':'Remessa de material de embalagem recebida em devolução',
 '8539':'Remessa de material de comunicação / marketing / brinde recebida em devolução','8540':'Remessa de produto alimentício recebida em devolução',
 '8551':'Remessa para industrialização recebida em devolução - exportação','8552':'Remessa para comercialização recebida em devolução - exportação',
 '8553':'Remessa para ativo imobilizado recebida em devolução - exportação','8554':'Remessa para uso e consumo recebida em devolução - exportação',
 '8555':'Remessa de matéria-prima recebida em devolução - exportação','8556':'Remessa de embalagem recebida em devolução - exportação',
 '8557':'Remessa em consignação mercantil recebida em devolução - exportação','8558':'Remessa em depósito fechado recebida em devolução - exportação',
 '8559':'Outras remessas recebidas em devolução - exportação','8560':'Remessa para leilão recebida em devolução - exportação',
 '8561':'Remessa de demonstração/exposição recebida em devolução - exportação','8562':'Remessa de manutenção/reparo recebida em devolução - exportação',
 '8563':'Remessa para montagem/instalação recebida em devolução - exportação','8564':'Remessa para industrialização por encomenda recebida em devolução - exportação',
 '8565':'Remessa para comercialização por encomenda recebida em devolução - exportação','8566':'Remessa de empresa do mesmo grupo econômico recebida em devolução - exportação',
 '8567':'Remessa de veículo automotor recebida em devolução - exportação','8568':'Remessa de combustível recebida em devolução - exportação',
 '8569':'Remessa de energia elétrica recebida em devolução - exportação','8570':'Remessa de gás natural recebida em devolução - exportação',
 '8571':'Remessa de água e esgoto recebida em devolução - exportação','8572':'Remessa de telefonia recebida em devolução - exportação',
 '8573':'Remessa de internet recebida em devolução - exportação','8574':'Remessa de TV por assinatura recebida em devolução - exportação',
 '8575':'Remessa de vigilância / segurança privada recebida em devolução - exportação','8576':'Remessa de limpeza e conservação recebida em devolução - exportação',
 '8577':'Remessa de manutenção recebida em devolução - exportação','8578':'Remessa de transporte (frete) recebida em devolução - exportação',
 '8579':'Remessa de software recebida em devolução - exportação','8580':'Remessa de acessório / peça de reposição recebida em devolução - exportação',
 '8581':'Remessa de material de expediente / limpeza recebida em devolução - exportação','8582':'Remessa de material de construção civil recebida em devolução - exportação',
 '8583':'Remessa de material de embalagem recebida em devolução - exportação','8584':'Remessa de material de comunicação / marketing / brinde recebida em devolução - exportação',
 '8585':'Remessa de produto alimentício recebida em devolução - exportação','8599':'Outras remessas recebidas em devolução de processamento por conta de terceiros',
 '8999':'Outros retornos / recebimentos de processamento por conta de terceiros',

 '9101':'Outra entrada de mercadoria adquirida ou recebida de terceiros','9102':'Outra entrada de serviço prestado por terceiros',
 '9103':'Outra entrada de ativo imobilizado adquirido/recebido de terceiros','9104':'Outra entrada de bem para uso ou consumo',
 '9105':'Outra entrada de mercadoria recebida em consignação mercantil','9106':'Outra entrada de mercadoria em depósito fechado',
 '9107':'Outra entrada de ativo imobilizado em depósito fechado','9108':'Outra entrada em leilão',
 '9109':'Outra entrada em demonstração ou exposição','9110':'Outra entrada em manutenção ou reparo',
 '9111':'Outra entrada em montagem ou instalação','9112':'Outra entrada para industrialização por encomenda',
 '9113':'Outra entrada para comercialização por encomenda','9114':'Outra entrada de empresa do mesmo grupo econômico',
 '9115':'Outra entrada de ativo imobilizado de empresa do mesmo grupo econômico','9116':'Outra entrada de uso e consumo de empresa do mesmo grupo econômico',
 '9117':'Outra entrada de serviço de empresa do mesmo grupo econômico','9118':'Outra entrada de combustível',
 '9119':'Outra entrada de veículo automotor','9120':'Outra entrada de energia elétrica',
 '9121':'Outra entrada de gás natural','9122':'Outra entrada de água e esgoto',
 '9123':'Outra entrada de telefonia','9124':'Outra entrada de internet',
 '9125':'Outra entrada de TV por assinatura','9126':'Outra entrada de vigilância / segurança privada',
 '9127':'Outra entrada de limpeza e conservação','9128':'Outra entrada de manutenção',
 '9129':'Outra entrada de transporte de mercadoria (frete)','9130':'Outra entrada de software',
 '9131':'Outra entrada de acessório / peça de reposição','9132':'Outra entrada de material de expediente / limpeza',
 '9133':'Outra entrada de material de construção civil','9134':'Outra entrada de material de embalagem',
 '9135':'Outra entrada de material de comunicação / marketing / brinde','9136':'Outra entrada de produto alimentício',
 '9151':'Outra entrada de mercadoria - importação','9152':'Outra entrada de serviço - importação',
 '9153':'Outra entrada de ativo imobilizado - importação','9154':'Outra entrada de bem para uso ou consumo - importação',
 '9155':'Outra entrada em consignação mercantil - importação','9156':'Outra entrada em depósito fechado - importação',
 '9157':'Outra entrada de ativo imobilizado em depósito fechado - importação','9158':'Outra entrada em leilão - importação',
 '9159':'Outra entrada em demonstração/exposição - importação','9160':'Outra entrada em manutenção/reparo - importação',
 '9161':'Outra entrada em montagem/instalação - importação','9162':'Outra entrada para industrialização por encomenda - importação',
 '9163':'Outra entrada para comercialização por encomenda - importação','9164':'Outra entrada de empresa do mesmo grupo econômico - importação',
 '9165':'Outra entrada de ativo imobilizado de empresa do mesmo grupo econômico - importação','9166':'Outra entrada de uso e consumo de empresa do mesmo grupo econômico - importação',
 '9167':'Outra entrada de serviço de empresa do mesmo grupo econômico - importação','9168':'Outra entrada de combustível - importação',
 '9169':'Outra entrada de veículo automotor - importação','9170':'Outra entrada de energia elétrica - importação',
 '9171':'Outra entrada de gás natural - importação','9172':'Outra entrada de água e esgoto - importação',
 '9173':'Outra entrada de telefonia - importação','9174':'Outra entrada de internet - importação',
 '9175':'Outra entrada de TV por assinatura - importação','9176':'Outra entrada de vigilância / segurança privada - importação',
 '9177':'Outra entrada de limpeza e conservação - importação','9178':'Outra entrada de manutenção - importação',
 '9179':'Outra entrada de transporte (frete) - importação','9180':'Outra entrada de software - importação',
 '9181':'Outra entrada de acessório / peça de reposição - importação','9182':'Outra entrada de material de expediente / limpeza - importação',
 '9183':'Outra entrada de material de construção civil - importação','9184':'Outra entrada de material de embalagem - importação',
 '9185':'Outra entrada de material de comunicação / marketing / brinde - importação','9186':'Outra entrada de produto alimentício - importação',
 '9199':'Outras entradas de mercadorias / serviços / ativos / uso e consumo / matéria-prima / embalagem / consignação / depósito fechado / leilão / demonstração / exposição / manutenção / reparo / montagem / instalação / encomenda / grupo econômico / combustível / veículo / energia / gás / água / esgoto / telefonia / internet / TV / vigilância / limpeza / manutenção / frete / software / acessórios / materiais / alimentação / importação',
 '9201':'Outra saída de mercadoria / ativo / serviço / bem para uso ou consumo / matéria-prima / embalagem',
 '9251':'Outra saída de mercadoria - exportação','9252':'Outra saída de serviço - exportação',
 '9253':'Outra saída de ativo imobilizado - exportação','9254':'Outra saída de bem para uso ou consumo - exportação',
 '9255':'Outra saída em consignação mercantil - exportação','9256':'Outra saída em depósito fechado - exportação',
 '9257':'Outra saída em leilão - exportação','9258':'Outra saída em demonstração/exposição - exportação',
 '9259':'Outra saída em manutenção/reparo - exportação','9260':'Outra saída em montagem/instalação - exportação',
 '9261':'Outra saída para industrialização por encomenda - exportação','9262':'Outra saída para comercialização por encomenda - exportação',
 '9263':'Outra saída de empresa do mesmo grupo econômico - exportação','9264':'Outra saída de ativo imobilizado de empresa do mesmo grupo econômico - exportação',
 '9265':'Outra saída de uso e consumo de empresa do mesmo grupo econômico - exportação','9266':'Outra saída de serviço de empresa do mesmo grupo econômico - exportação',
 '9267':'Outra saída de combustível - exportação','9268':'Outra saída de veículo automotor - exportação',
 '9269':'Outra saída de energia elétrica - exportação','9270':'Outra saída de gás natural - exportação',
 '9271':'Outra saída de água e esgoto - exportação','9272':'Outra saída de telefonia - exportação',
 '9273':'Outra saída de internet - exportação','9274':'Outra saída de TV por assinatura - exportação',
 '9275':'Outra saída de vigilância / segurança privada - exportação','9276':'Outra saída de limpeza e conservação - exportação',
 '9277':'Outra saída de manutenção - exportação','9278':'Outra saída de transporte (frete) - exportação',
 '9279':'Outra saída de software - exportação','9280':'Outra saída de acessório / peça de reposição - exportação',
 '9281':'Outra saída de material de expediente / limpeza - exportação','9282':'Outra saída de material de construção civil - exportação',
 '9283':'Outra saída de material de embalagem - exportação','9284':'Outra saída de material de comunicação / marketing / brinde - exportação',
 '9285':'Outra saída de produto alimentício - exportação','9299':'Outras saídas / operações comerciais e fiscais diversas'
};
function cfopDesc(c){if(!c)return '';const k=String(c).trim();return CFOP_MAP[k]||(k.length===4 && !/^51|61|11|21|31|41|52|53|54|55|56|57|58|59|62|63|64|65|66|67|68|69|71|72|73|74|75|81|82|85|89|91|92/.test(k))?'(CFOP '+k+' - desconhecido)':'CFOP '+k;}

const NCM_VIDA=[
 {prefix:'847130',desc:'Microcomputadores Desktop/Notebook',anos:5,taxa:20},
 {prefix:'847141',desc:'Terminais e monitores',anos:5,taxa:20},
 {prefix:'847160',desc:'Impressoras e periféricos',anos:5,taxa:20},
 {prefix:'8471',desc:'Máquinas processamento de dados',anos:5,taxa:20},
 {prefix:'851762',desc:'Roteadores, switches, rede',anos:5,taxa:20},
 {prefix:'8517',desc:'Telefonia e comunicação',anos:5,taxa:20},
 {prefix:'8528',desc:'Projetores, TVs, monitores',anos:5,taxa:20},
 {prefix:'8525',desc:'Câmeras de vídeo e segurança',anos:5,taxa:20},
 {prefix:'8703',desc:'Veículos Leves (passageiros)',anos:5,taxa:20},
 {prefix:'870421',desc:'Caminhões leves ≤3.5t',anos:5,taxa:20},
 {prefix:'870422',desc:'Caminhões pesados >3.5t',anos:5,taxa:20},
 {prefix:'870423',desc:'Caminhões pesados ≥9t',anos:5,taxa:20},
 {prefix:'870431',desc:'Veículos utilitários leves',anos:5,taxa:20},
 {prefix:'8704',desc:'Veículos pesados em geral',anos:5,taxa:20},
 {prefix:'8705',desc:'Veículos especiais (guindastes etc)',anos:10,taxa:10},
 {prefix:'8709',desc:'Empilhadeiras / Industrial',anos:10,taxa:10},
 {prefix:'8716',desc:'Implementos Rodoviários',anos:10,taxa:10},
 {prefix:'8456',desc:'Máquinas-ferramenta (usinagem)',anos:15,taxa:6.67},
 {prefix:'8457',desc:'Centros de usinagem / fresadoras',anos:15,taxa:6.67},
 {prefix:'8458',desc:'Tornos',anos:15,taxa:6.67},
 {prefix:'8459',desc:'Furadeiras / mandrilhadoras',anos:15,taxa:6.67},
 {prefix:'8460',desc:'Retíficas / brunidoras',anos:15,taxa:6.67},
 {prefix:'8461',desc:'Serras máquina / plainas',anos:15,taxa:6.67},
 {prefix:'8462',desc:'Prensas / puncionadeiras',anos:15,taxa:6.67},
 {prefix:'8463',desc:'Máquinas p/ trabalhar metais',anos:15,taxa:6.67},
 {prefix:'8464',desc:'Máquinas p/ pedra/cerâmica/vidro',anos:15,taxa:6.67},
 {prefix:'8477',desc:'Máquinas p/ borracha/plásticos',anos:15,taxa:6.67},
 {prefix:'8438',desc:'Máquinas p/ indústria alimentícia',anos:15,taxa:6.67},
 {prefix:'8419',desc:'Trocadores calor/fornos/secadores',anos:15,taxa:6.67},
 {prefix:'8421',desc:'Filtros / centrífugas',anos:10,taxa:10},
 {prefix:'8422',desc:'Máquinas lavagem/embalagem',anos:10,taxa:10},
 {prefix:'8414',desc:'Compressores/bombas/ventiladores',anos:10,taxa:10},
 {prefix:'8413',desc:'Bombas em geral',anos:10,taxa:10},
 {prefix:'8418',desc:'Refrigeração/freezers',anos:10,taxa:10},
 {prefix:'8417',desc:'Fornos industriais',anos:15,taxa:6.67},
 {prefix:'8408',desc:'Motores Diesel',anos:15,taxa:6.67},
 {prefix:'8407',desc:'Motores gasolina/álcool',anos:10,taxa:10},
 {prefix:'84',desc:'Outras máquinas/equipamentos',anos:10,taxa:10},
 {prefix:'82',desc:'Ferramentas manuais/mecânicas',anos:5,taxa:20},
 {prefix:'940360',desc:'Móveis de madeira',anos:10,taxa:10},
 {prefix:'9403',desc:'Móveis em geral',anos:10,taxa:10},
 {prefix:'9401',desc:'Assentos / cadeiras',anos:10,taxa:10},
 {prefix:'9402',desc:'Móveis cirúrgicos/saúde',anos:10,taxa:10},
 {prefix:'8531',desc:'Alarmes / CFTV',anos:5,taxa:20},
 {prefix:'8537',desc:'Quadros/painéis elétricos',anos:15,taxa:6.67},
 {prefix:'8536',desc:'Disjuntores/fusíveis',anos:10,taxa:10},
 {prefix:'8544',desc:'Cabos e fios elétricos',anos:20,taxa:5},
 {prefix:'8504',desc:'Transformadores',anos:20,taxa:5},
 {prefix:'8501',desc:'Geradores',anos:15,taxa:6.67},
 {prefix:'8507',desc:'Baterias/acumuladores',anos:5,taxa:20},
 {prefix:'6810',desc:'Tijolos / blocos',anos:25,taxa:4},
 {prefix:'6811',desc:'Telhas',anos:25,taxa:4},
 {prefix:'7208',desc:'Chapas aço laminadas',anos:20,taxa:5},
 {prefix:'7210',desc:'Chapas aço revestidas',anos:20,taxa:5},
 {prefix:'7308',desc:'Estruturas metálicas',anos:25,taxa:4},
 {prefix:'',desc:'Demais itens (padrão 10 anos)',anos:10,taxa:10}];

// ===== AUX =====
const EMOJI={ok:'✅',err:'❌',info:'ℹ️',warn:'⚠️'};
function toast(msg,t='info'){const el=document.getElementById('toast');if(!el)return;
  el.className=`toast show ${t}`;el.innerHTML=`${EMOJI[t]||''} <span>${msg}</span>`;clearTimeout(el._h);
  el._h=setTimeout(()=>{el.className='toast';},2800);}
const fmtBRL=n=>(n===null||n===undefined||isNaN(n))?'':n.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtData=i=>{if(!i)return'';const d=new Date(i);return isNaN(d)?i.slice(0,10).split('-').reverse().join('/'):d.toLocaleDateString('pt-BR');};
const onlyDigits=s=>(s||'').toString().replace(/\D/g,'');
const fmtCnpj=s=>{const d=onlyDigits(s).padStart(14,'0');return `${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8,12)}-${d.slice(12)}`;};
const normStr=s=>(s||'').toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().trim();
function vidaUtilNcm(n){const c=onlyDigits(n);let m=null;for(const r of NCM_VIDA)if(c.startsWith(r.prefix)&&(m===null||r.prefix.length>m.prefix.length))m=r;return m?m.anos*12:120;}

// ===== PARSE XML =====
function splitBlocks(t){const b=[];
  const reNp=/<\s*nfeProc\b/gi;const idx=[];let m;
  while((m=reNp.exec(t))!==null)idx.push(m.index);
  if(!idx.length){const re2=/<\s*NFe\b/gi;while((m=re2.exec(t))!==null)idx.push(m.index);}
  if(!idx.length)return[];
  for(let i=0;i<idx.length;i++){const sl=t.slice(idx[i],idx[i+1]??t.length);if(sl && sl.length>20)b.push(sl);}
  return b;}
function parseDoc(s){const cleanStart=s.replace(/^[\s\S]*?(?=<)/,'');
  const d=(new DOMParser()).parseFromString(cleanStart,'text/xml');
  if(d.querySelector('parsererror')){
    let c=s.replace(/xmlns(:\w+)?="[^"]*"/g,'').replace(/<\?xml[\s\S]*?\?>/g,'');
    const d2=(new DOMParser()).parseFromString(c,'text/xml');
    if(d2.querySelector('parsererror')){
      c=c.replace(/\s+xmlns(?:[:\w])?(?=\s|=)/g,'').replace(/>\s+</g,'><');
      const d3=(new DOMParser()).parseFromString(c,'text/xml');
      return d3.querySelector('parsererror')?null:d3;
    }return d2;}return d;}
const gt=(e,t)=>{const n=e?.getElementsByTagName(t);return n.length?(n[0].textContent||'').trim():'';};

function parseNFe(doc){
  if(!doc)return null;
  const inf=doc.getElementsByTagName('infNFe')[0];const ide=inf?.getElementsByTagName('ide')[0];
  const emit=inf?.getElementsByTagName('emit')[0];const dets=inf?.getElementsByTagName('det')||[];
  const tot=inf?.getElementsByTagName('total')[0];const icms=tot?.getElementsByTagName('ICMSTot')[0];
  const prot=doc.getElementsByTagName('protNFe')[0]||doc.getElementsByTagName('infProt')[0];
  let cS='';if(prot){const ip=prot.getElementsByTagName('infProt')[0]||prot;cS=gt(ip,'cStat');}
  if(['101','102','103','151','155','157','158'].includes(cS))return{cancelada:true,chave:inf?.getAttribute('Id')?.replace('NFe','')||''};
  const chave=(inf?.getAttribute('Id')||'').replace('NFe','');
  const serie=gt(ide,'serie'),nNF=gt(ide,'nNF'),dh=gt(ide,'dhEmi')||gt(ide,'dEmi');
  const eCnpj=gt(emit,'CNPJ')||gt(emit,'CPF')||'',eNome=gt(emit,'xNome')||'';
  const vNF=+gt(icms,'vNF')||0,vProd=+gt(icms,'vProd')||0;
  const vFrete=+gt(icms,'vFrete')||0,vSeg=+gt(icms,'vSeg')||0,vDesc=+gt(icms,'vDesc')||0,vOutro=+gt(icms,'vOutro')||0,vII=+gt(icms,'vII')||0,vIPI=+gt(icms,'vIPI')||0;
  const itens=[];
  for(let i=0;i<dets.length;i++){const d=dets[i],p=d.getElementsByTagName('prod')[0];
    const q=+(gt(p,'qCom')||0),vu=+(gt(p,'vUnCom')||0),vp=+(gt(p,'vProd')||0);
    const vf=+(gt(p,'vFrete')||0),vs=+(gt(p,'vSeg')||0),vd=+(gt(p,'vDesc')||0),vo=+(gt(p,'vOutro')||0),vipi=+(gt(p,'vIPI')||0),vii=+(gt(p,'vII')||0);
    itens.push({nItem:i+1,cProd:gt(p,'cProd'),xProd:gt(p,'xProd'),NCM:gt(p,'NCM'),CFOP:gt(p,'CFOP'),uCom:(gt(p,'uCom')||'UN').toUpperCase(),qCom:q,vUnCom:vu,vProd:vp,
      vFreteDisc:vf,vSegDisc:vs,vDescDisc:vd,vOutroDisc:vo,vIPIDisc:vipi,vIIDisc:vii,vBrutoDisc:vp+vf+vs+vo-vd+vipi+vii});}
  const totProd=itens.reduce((s,i)=>s+i.vProd,0);
  const custNaoRateados=(vFrete+vSeg+vOutro-vDesc+vIPI+vII)-itens.reduce((s,i)=>s+(i.vFreteDisc+i.vSegDisc+i.vOutroDisc-i.vDescDisc+i.vIPIDisc+i.vIIDisc),0);
  for(const it of itens)it.vAjustado=it.vBrutoDisc+(totProd>0?(it.vProd/totProd)*custNaoRateados:0);
  let sA=itens.reduce((s,i)=>s+i.vAjustado,0),d=vNF-sA;
  if(Math.abs(d)>0.001&&itens.length){let idx=0;for(let k=1;k<itens.length;k++)if(itens[k].vAjustado>itens[idx].vAjustado)idx=k;itens[idx].vAjustado+=d;}
  return{chave,serie,nNF,dhEmi:dh,emitCNPJ:eCnpj,emitXNome:eNome,vNF,vProd,vFrete,vSeg,vDesc,vOutro,vII,vIPI,cStat:cS,itens};
}
function deveDesdobrar(u,q){if(/L|KG|KILO|M(M|²|³)?|M2|M3|TON|UNIDADES?$/i.test(u)&&!Number.isInteger(q))return false;if(!Number.isInteger(q))return false;if(q>50)return false;return q>1;}

// ===== ESTADO =====
const state={
  notas:[],screeningRows:[],assetRows:[],
  ui:{scrSort:{k:'i',dir:'asc'},scrSearch:'',scrForn:'',scrNcm:'',
       astSearch:'',astCI:'',astSort:''}
};

// ===== TABS =====
function setupTabs(){document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');
  const id=t.dataset.tab;['screening','assets','ncm'].forEach(s=>document.getElementById('tab-'+s).classList.toggle('hidden',s!==id));
  if(id==='assets')renderAssets();if(id==='screening')renderScreening();if(id==='ncm')renderNcmTable();});}

// ===== ABA 1 — TRIAGEM =====
function setupXml(){const drop=document.getElementById('xmlDrop'),inp=document.getElementById('xmlFile'),list=document.getElementById('xmlFileList');
 function renderFiles(arr){
  if(!arr.length){list.innerHTML='';return;}
  const sum=document.createElement('span');sum.className='file-summary';
  const totSize=arr.reduce((s,f)=>s+(f.size||0),0);
  const sizeStr=totSize>(1024*1024)?(totSize/(1024*1024)).toFixed(1)+' MB':totSize>1024?(totSize/1024).toFixed(0)+' KB':totSize+' B';
  sum.innerHTML=`📎 <b>${arr.length}</b> arquivo(s) · ${sizeStr}`;list.appendChild(sum);
  if(arr.length<=10){
   arr.forEach(f=>{const t=document.createElement('span');t.className='file-chip';t.title=f.name;
    const n=f.name;const nm=n.length>40?(n.slice(0,18)+'…'+n.slice(-20)):n;
    t.innerHTML='📄 '+nm;list.appendChild(t);});
  } else {
   const t=document.createElement('span');t.className='file-chip';t.title='Exibindo apenas o total; todos foram processados.';
   t.style.background='var(--accent-soft)';t.style.color='var(--accent)';
   t.innerHTML='ℹ️ chips ocultos para não poluir (clique em 🗑️ Limpar para reiniciar)';list.appendChild(t);}
 }
 function procFiles(fs){const arr=Array.from(fs).filter(f=>/\.(xml|txt)$/i.test(f.name));if(!arr.length){toast('Nenhum XML/TXT válido','err');return;}
  list.innerHTML='';renderFiles(arr);
  Promise.all(arr.map(f=>new Promise(r=>{const rd=new FileReader();rd.onload=()=>r(rd.result||'');rd.onerror=()=>r('');rd.readAsText(f,'UTF-8');}))).then(ts=>procXmlRaw(ts.join('\n')));}
 drop.onclick=e=>{if(e.target.tagName!=='INPUT')inp.click();};
 inp.onchange=e=>procFiles(e.target.files);
 ['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('dragover');}));
 ['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('dragover');}));
 drop.ondrop=e=>{const f=e.dataTransfer?.files;if(f&&f.length)procFiles(f);};

 document.getElementById('scrSearch')?.addEventListener('input',e=>{state.ui.scrSearch=e.target.value;renderScreening();});
 document.getElementById('scrForn')?.addEventListener('change',e=>{state.ui.scrForn=e.target.value;renderScreening();});
 document.getElementById('scrNcm')?.addEventListener('input',e=>{state.ui.scrNcm=e.target.value.trim();renderScreening();});
 document.querySelectorAll('#screeningTable thead th').forEach(th=>{const k=th.dataset.k;if(!k)return;th.onclick=()=>{
   const cur=state.ui.scrSort;const dir=(cur.k===k && cur.dir==='asc')?'desc':'asc';
   state.ui.scrSort={k,dir};renderScreening();};});

 document.getElementById('btnClear').onclick=()=>{
   state.notas=[];state.screeningRows=[];state.assetRows=[];list.innerHTML='';inp.value='';
   document.getElementById('sheetFileList').innerHTML='';document.getElementById('assetsCard').classList.add('hidden');
   renderScreening();toast('Todos os dados apagados','info');};
 document.getElementById('btnSample').onclick=loadSample;
}

function procXmlRaw(txt){const blocks=splitBlocks(txt);if(!blocks.length){toast('Nenhuma NF-e encontrada no(s) arquivo(s)','err');return;}
 const novas=[];let c=0,inv=0;
 for(const b of blocks){const d=parseDoc(b);if(!d){inv++;continue;}const n=parseNFe(d);if(!n){inv++;continue;}if(n.cancelada){c++;continue;}novas.push(n);}
 const ja=new Set(state.notas.map(n=>n.chave));for(const n of novas)if(n.chave&&!ja.has(n.chave)){state.notas.push(n);ja.add(n.chave);}
 buildScreening();refreshFornDropdown();
 const t=novas.length?'ok':(c||inv?'warn':'info');
 toast(`${blocks.length} bloco(s) → <b>${novas.length}</b> válida(s) • ${c} cancelada(s) • ${inv} inválida(s)`,t);
 renderScreening();}

function refreshFornDropdown(){const sel=document.getElementById('scrForn');if(!sel)return;const cur=state.ui.scrForn;
 const opts=[...new Set(state.screeningRows.map(r=>r.fornecedor).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
 sel.innerHTML='<option value="">Todos</option>'+opts.map(o=>`<option value="${o.replace(/"/g,'&quot;')}">${o}</option>`).join('');
 sel.value=cur;}

function buildScreening(){const r=[];for(const n of state.notas)for(const it of n.itens){const vu=it.qCom>0?it.vAjustado/it.qCom:it.vAjustado;
 if(vu<1200)continue;r.push({chave:n.chave,desc:it.xProd,vUnit:vu,qCom:it.qCom,vTotal:it.vAjustado,CFOP:it.CFOP,NCM:it.NCM,fornecedor:n.emitXNome,cnpj:n.emitCNPJ,nNF:n.nNF,serie:n.serie,data:n.dhEmi,uCom:it.uCom});}state.screeningRows=r;}

function sortedScreening(){const k=state.ui.scrSort.k,dir=state.ui.scrSort.dir==='asc'?1:-1;
 const arr=state.screeningRows.map((r,i)=>({r,i}));
 arr.sort((A,B)=>{let a=A.r,b=B.r;
  if(k==='i')return (A.i-B.i)*dir;
  const va=a[k],vb=b[k];
  if(typeof va==='number'&&typeof vb==='number')return (va-vb)*dir;
  return String(va||'').localeCompare(String(vb||''),'pt-BR',{numeric:true})*dir;});
 return arr.map(x=>x.r);}

function filteredScreening(){
 const q=normStr(state.ui.scrSearch),f=state.ui.scrForn,nc=onlyDigits(state.ui.scrNcm);
 const base=sortedScreening();
 return base.filter(r=>{
  if(f&&r.fornecedor!==f)return false;
  if(nc&&!onlyDigits(r.NCM||'').startsWith(nc))return false;
  if(q){
   const blob=normStr([r.chave,r.desc,r.nNF,r.NCM,r.fornecedor,r.CFOP,r.cnpj].join(' '));
   if(!blob.includes(q))return false;}
  return true;});
}

function bindCopy(root){root.querySelectorAll('td.copy-cell').forEach(td=>td.onclick=()=>{
 const v=td.dataset.c??td.innerText.trim();navigator.clipboard.writeText(v).then(()=>{
  td.classList.add('copied');setTimeout(()=>td.classList.remove('copied'),450);toast('Copiado ✔','ok');
 }).catch(()=>toast('Falha ao copiar','err'));});}

function renderScreening(){const tb=document.querySelector('#screeningTable tbody');if(!tb)return;tb.innerHTML='';
 document.getElementById('btnExportScreening').disabled=!state.screeningRows.length;
 const vT=state.screeningRows.reduce((s,r)=>s+r.vTotal,0),ch=new Set(state.screeningRows.map(r=>r.chave)).size;
 document.getElementById('screeningStats').innerHTML=
 `<div class="stat"><small>Notas válidas</small><b>${state.notas.length}</b></div>`+
 `<div class="stat"><small>Notas com itens ≥ R$1.200</small><b>${ch}</b></div>`+
 `<div class="stat"><small>Itens triagem</small><b>${state.screeningRows.length}</b></div>`+
 `<div class="stat"><small>Total ajustado</small><b>R$ ${fmtBRL(vT)}</b></div>`;

 const rows=filteredScreening();
 document.querySelectorAll('#screeningTable thead th').forEach(th=>{const k=th.dataset.k;th.classList.remove('sort-asc','sort-desc');
  if(k===state.ui.scrSort.k)th.classList.add(state.ui.scrSort.dir==='asc'?'sort-asc':'sort-desc');});

 if(!rows.length){
  const hint=!state.screeningRows.length
    ?`<b>Nenhum item ainda.</b>Carregue XMLs acima 👆 ou clique em "🧪 Exemplos" para testar rapidamente.`
    :`<b>Nenhum item corresponde aos filtros.</b>Tente limpar a busca ou remover filtros de fornecedor/NCM.`;
  tb.innerHTML=`<tr><td colspan="13"><div class="empty">${hint}</div></td></tr>`;return;}
 rows.forEach((r,idx)=>{const tr=document.createElement('tr');tr.innerHTML=`
 <td class="num mono">${idx+1}</td>
 <td class="copy-cell mono" data-c="${r.chave}">${r.chave||'-'}</td>
 <td class="copy-cell wrap" data-c="${r.desc.replace(/"/g,'&quot;')}">${r.desc}</td>
 <td class="num copy-cell" data-c="${r.vUnit.toFixed(2)}">R$ ${fmtBRL(r.vUnit)}</td>
 <td class="num">${Number.isInteger(r.qCom)?r.qCom:r.qCom.toFixed(4)} <span style="color:var(--muted)">${r.uCom}</span></td>
 <td class="num copy-cell" data-c="${r.vTotal.toFixed(2)}">R$ ${fmtBRL(r.vTotal)}</td>
 <td class="mono">${r.CFOP}</td><td class="mono">${r.NCM}</td>
 <td class="copy-cell wrap" data-c="${r.fornecedor}">${r.fornecedor}</td>
 <td class="copy-cell mono" data-c="${r.cnpj}">${fmtCnpj(r.cnpj)}</td>
 <td class="num">${r.nNF}</td><td class="num">${r.serie||'-'}</td>
 <td>${fmtData(r.data)}</td>`;tb.appendChild(tr);});bindCopy(tb);}

document.getElementById('btnExportScreening').onclick=()=>{if(!state.screeningRows.length)return;
 const h=['CHAVE DE ACESSO','DESCRIÇÃO DO ITEM','VALOR UNIT.','QUANTIDADE','UNIDADE','VALOR TOTAL','CFOP','DESCRIÇÃO CFOP','NCM','FORNECEDOR','CNPJ FORNECEDOR','Nº NOTA','SÉRIE','DATA EMISSÃO'];
 const d=state.screeningRows.map(r=>[r.chave,r.desc,+r.vUnit.toFixed(2),r.qCom,r.uCom,+r.vTotal.toFixed(2),r.CFOP,cfopDesc(r.CFOP),r.NCM,r.fornecedor,onlyDigits(r.cnpj),r.nNF,r.serie,r.data?fmtData(r.data):'']);
 const ws=XLSX.utils.aoa_to_sheet([h,...d]);ws['!cols']=[{wch:50},{wch:60},{wch:14},{wch:11},{wch:9},{wch:14},{wch:10},{wch:60},{wch:14},{wch:50},{wch:20},{wch:10},{wch:8},{wch:12}];
 const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Triagem_Imobilizados');
 XLSX.writeFile(wb,`Triagem_Imobilizados_${new Date().toISOString().slice(0,10).replace(/-/g,'')}.xlsx`);toast('Planilha de Triagem baixada ✔','ok');};

// ===== ABA 2 — ATIVOS =====
function setupSheet(){const drop=document.getElementById('sheetDrop'),inp=document.getElementById('sheetFile'),list=document.getElementById('sheetFileList');
 function procFile(f){if(!f)return;list.innerHTML=`<span class="file-chip">📊 ${f.name}</span>`;const r=new FileReader();
  r.onload=e=>{try{const wb=XLSX.read(new Uint8Array(e.target.result),{type:'array',cellDates:true});
   const ws=wb.Sheets[wb.SheetNames[0]],lin=XLSX.utils.sheet_to_json(ws,{defval:'',raw:false});procPlanilha(lin);}
   catch(err){console.error(err);toast('Erro ao ler planilha: '+err.message,'err');}};r.readAsArrayBuffer(f);}
 drop.onclick=e=>{if(e.target.tagName!=='INPUT')inp.click();};
 inp.onchange=e=>procFile(e.target.files[0]);
 ['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('dragover');}));
 ['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('dragover');}));
 drop.ondrop=e=>e.dataTransfer?.files?.[0]&&procFile(e.dataTransfer.files[0]);

 document.getElementById('astSearch')?.addEventListener('input',e=>{state.ui.astSearch=e.target.value;renderAssets();});
 document.getElementById('astCI')?.addEventListener('change',e=>{state.ui.astCI=e.target.value;renderAssets();});
 document.getElementById('astSort')?.addEventListener('change',e=>{state.ui.astSort=e.target.value;renderAssets();});
 refreshCIDropdown();}

function refreshCIDropdown(){const sel=document.getElementById('astCI');if(!sel)return;const cur=state.ui.astCI;
 sel.innerHTML='<option value="">Todas</option>'+CONTAS_INCORPORACAO.map((c,i)=>`<option value="${i}">${c[0]} — ${c[1]}</option>`).join('');
 sel.value=cur;}

function normCols(r){const o={};for(const k of Object.keys(r)){const kn=k.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().trim();
 const v=(r[k]??'').toString().trim();
 if(/CHAVE/.test(kn))o.chave=onlyDigits(v)||v;
 else if(/CNPJ/.test(kn))o.cnpj=onlyDigits(v)||v;
 else if(kn.startsWith('DESCR'))o.desc=r[k].toString().trim();
 else if(/N[ºo]\s*NOTA|NUMERO|N[NF]\b/.test(kn))o.nNF=v;
 else if(/SERIE/.test(kn))o.serie=v;
 else if(/VALOR/.test(kn)){if(!o.valor)o.valor=parseFloat(String(v).replace(/[^0-9.,-]/g,'').replace(',','.'))||0;}
 else if(/NCM/.test(kn))o.NCM=onlyDigits(v)||v;
 else if(/FORNEC|EMITENTE/.test(kn))o.fornecedor=r[k].toString().trim();
 else if(/DATA/.test(kn))o.data=v;
 else if(/CFOP/.test(kn))o.CFOP=v;
 else if(/PATRIM/.test(kn))o.patrimonio=r[k].toString().trim();
 else if(/VIDA\s*UTIL/.test(kn))o.vidaUtil=parseInt(v)||0;}return o;}

function procPlanilha(lin){if(!lin.length){toast('Planilha vazia','err');return;}const reqs=lin.map(normCols);
 const nc={};for(const n of state.notas)if(n.chave)nc[n.chave]=n;const rows=[];let falt=0;
 for(const req of reqs){if(!req.chave)continue;const nota=nc[req.chave];if(!nota){falt++;continue;}
  const cands=[];for(let idx=0;idx<nota.itens.length;idx++){const it=nota.itens[idx];let s=0;
   if(req.NCM&&it.NCM&&onlyDigits(it.NCM)===onlyDigits(req.NCM))s+=10;
   if(req.desc){const a=req.desc.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase();
    const b=it.xProd.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase();
    if(a===b)s+=20;else if(a.length>3&&(b.includes(a)||a.includes(b)))s+=7;}
   if(req.valor){const vui=it.qCom>0?it.vAjustado/it.qCom:it.vAjustado;const df=Math.abs(vui-req.valor);if(df<=0.02)s+=10;else if(df/Math.max(req.valor,0.01)<0.005)s+=5;}
   if(s>0)cands.push({it,idx,s});}
  let sel=null;if(cands.length){cands.sort((a,b)=>b.s-a.s);sel=cands[0].it;}
  else if(nota.itens.length===1)sel=nota.itens[0];
  else{const us=new Set();for(const rr of rows)if(rr._nc===nota.chave)us.add(rr._ni);sel=nota.itens.find((it,i)=>!us.has(i))||nota.itens[0];}
  if(!sel){falt++;continue;}const q=sel.qCom,ips=[];
  if(deveDesdobrar(sel.uCom,q)){const vu=sel.vAjustado/q;for(let k=0;k<q;k++)ips.push(vu);ips[ips.length-1]+=sel.vAjustado-ips.reduce((a,b)=>a+b,0);}else ips.push(sel.vAjustado);
  for(const v of ips)rows.push({patrimonio:req.patrimonio||'',desc:sel.xProd,chave:nota.chave,data:nota.dhEmi,valorAjustado:v,cnpjFornecedor:nota.emitCNPJ,fornecedor:nota.emitXNome,CFOP:sel.CFOP,nNF:nota.nNF,serie:nota.serie||'',contaIncorpIdx:-1,vidaUtilMeses:req.vidaUtil||vidaUtilNcm(sel.NCM),NCM:sel.NCM,_nc:nota.chave,_ni:sel.nItem});}
 state.assetRows=rows;refreshCIDropdown();renderAssets();
 document.getElementById('assetsCard').classList.toggle('hidden',!rows.length);
 toast(`${rows.length} <b>patrimônio(s)</b> pronto(s) • ${falt} sem correspondência no XML`,rows.length?'ok':(falt?'warn':'info'));}

// ===== RENDER ATIVOS =====
function optCI(si=-1){return`<option value="-1">-- Selecione --</option>`+CONTAS_INCORPORACAO.map((c,i)=>`<option value="${i}" ${i===si?'selected':''}>${c[0]} — ${c[1]}</option>`).join('');}

function sortedAssets(base){const s=state.ui.astSort;if(!s)return base.slice();
 const [k,dir='asc']=s.split('-');const m=dir==='desc'?-1:1;
 const arr=base.slice();
 arr.sort((a,b)=>{let va=a[k],vb=b[k];
  if(k==='patrimonio')return String(va||'').localeCompare(String(vb||''),'pt-BR',{numeric:true})*m;
  if(k==='data')return (new Date(a.data||0) - new Date(b.data||0))*(dir==='desc'?-m:m);
  if(typeof va==='number'&&typeof vb==='number')return(va-vb)*m;
  return String(va||'').localeCompare(String(vb||''),'pt-BR',{numeric:true})*m;});
 return arr;}

function filteredAssets(){
 const q=normStr(state.ui.astSearch),ci=state.ui.astCI;
 let rows=state.assetRows.filter(r=>{
  if(ci!==''&&String(r.contaIncorpIdx)!==ci)return false;
  if(q){const blob=normStr([r.patrimonio,r.desc,r.chave,r.NCM,r.cnpjFornecedor,r.nNF].join(' '));if(!blob.includes(q))return false;}
  return true;});
 return sortedAssets(rows);}

function renderAssets(){const tb=document.querySelector('#assetsTable tbody');if(!tb)return;tb.innerHTML='';
 const st=document.getElementById('assetsStats');const vt=state.assetRows.reduce((s,r)=>s+r.valorAjustado,0);
 if(st)st.innerHTML=
 `<div class="stat"><small>Patrimônios</small><b>${state.assetRows.length}</b></div>`+
 `<div class="stat"><small>Valor total</small><b>R$ ${fmtBRL(vt)}</b></div>`+
 `<div class="stat"><small>Contas definidas</small><b>${state.assetRows.filter(r=>r.contaIncorpIdx>=0).length}/${state.assetRows.length}</b></div>`+
 `<div class="stat"><small>Patrimônios preenchidos</small><b>${state.assetRows.filter(r=>r.patrimonio).length}/${state.assetRows.length}</b></div>`;

 if(!state.assetRows.length){
  tb.innerHTML=`<tr><td colspan="17"><div class="empty"><b>Aguardando planilha filtrada.</b>Volte para a aba Triagem, baixe a planilha e remova as linhas que não serão imobilizadas. Depois arraste-a aqui.</div></td></tr>`;return;}
 const rows=filteredAssets();
 if(!rows.length){
  tb.innerHTML=`<tr><td colspan="17"><div class="empty"><b>Nenhum ativo corresponde aos filtros.</b>Limpe a busca ou remova o filtro de conta.</div></td></tr>`;return;}
 rows.forEach((r,i)=>{const tr=document.createElement('tr');tr.dataset.i=state.assetRows.indexOf(r);buildRow(tr,r,+tr.dataset.i);tb.appendChild(tr);});bindRowEvents(tb);}
function buildRow(tr,r,i){const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
 tr.innerHTML=`<td><input class="i" type="text" data-f="patrimonio" value="${(r.patrimonio||'').replace(/"/g,'&quot;')}" placeholder="Preencher..." /></td>
 <td class="copy-cell wrap" data-c="${r.desc.replace(/"/g,'&quot;')}">${r.desc}</td>
 <td class="copy-cell mono" data-c="${r.chave}">${r.chave||'-'}</td>
 <td class="copy-cell" data-c="${fmtData(r.data)}">${fmtData(r.data)}</td>
 <td class="num copy-cell" data-c="${r.valorAjustado.toFixed(2)}">R$ ${fmtBRL(r.valorAjustado)}</td>
 <td class="copy-cell mono" data-c="${r.cnpjFornecedor}">${fmtCnpj(r.cnpjFornecedor)}</td>
 <td class="num">${r.nNF}</td><td class="num">${r.serie||'-'}</td>
 <td><select class="i" data-f="contaIncorpIdx">${optCI(r.contaIncorpIdx)}</select></td>
 <td class="wrap">${ci[1]}</td>
 <td class="num"><input class="i" type="number" data-f="vidaUtilMeses" value="${r.vidaUtilMeses}" min="0" /></td>
 <td class="mono">${r.NCM}</td>
 <td class="copy-cell mono" data-c="${DESP_DEP_COD}">${DESP_DEP_COD}</td>
 <td class="copy-cell" data-c="${DESP_DEP_DESC}">${DESP_DEP_DESC}</td>
 <td class="copy-cell mono" data-c="${da[0]}">${da[0]||'-'}</td>
 <td class="copy-cell wrap" data-c="${da[1]||''}">${da[1]||'-'}</td>
 <td><button class="btn ghost" data-act="copylinha" title="Copiar esta linha (TSV)">📋</button></td>`;}
function bindRowEvents(root){root.querySelectorAll('tr').forEach(tr=>{const i=+tr.dataset.i;
  tr.querySelectorAll('input.i,select.i').forEach(inp=>{
   inp.onchange=e=>{const f=e.target.dataset.f;let v=e.target.value;if(f==='contaIncorpIdx'||f==='vidaUtilMeses')v=parseInt(v)||-1;
    state.assetRows[i][f]=v;
    if(f==='contaIncorpIdx'||f==='vidaUtilMeses'){buildRow(tr,state.assetRows[i],i);bindRowOne(tr,i);bindCopy(tr);}};
   if(inp.tagName==='INPUT')inp.oninput=e=>{state.assetRows[i][e.target.dataset.f]=e.target.value;};});
  bindRowOne(tr,i);});bindCopy(root);}
function bindRowOne(tr,i){tr.querySelector('[data-act="copylinha"]')?.addEventListener('click',()=>{
  const r=state.assetRows[i];if(!r)return;
  const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
  const linha=[r.patrimonio,r.desc,r.chave,fmtData(r.data),r.valorAjustado.toFixed(2),r.cnpjFornecedor,r.nNF,r.serie,ci[0],ci[1],r.vidaUtilMeses,r.NCM,DESP_DEP_COD,DESP_DEP_DESC,da[0],da[1]].join('\t');
  navigator.clipboard.writeText(linha).then(()=>toast('Linha copiada ✔','ok'),()=>toast('Falha','err'));});}

// ===== AÇÕES =====
document.getElementById('btnBulkPat').onclick=()=>{const p=document.getElementById('patPrefix').value.trim(),s=+document.getElementById('patStart').value||1,z=+document.getElementById('patZeros').value||0;let n=s;
 for(const r of state.assetRows)if(!r.patrimonio){r.patrimonio=p+String(n).padStart(z,'0');n++;}renderAssets();toast('Patrimônios aplicados ✔','ok');};
document.getElementById('btnCopyAll').onclick=()=>{if(!state.assetRows.length)return;const tsv=state.assetRows.map(r=>{const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
 return[r.patrimonio,r.desc,r.chave,fmtData(r.data),r.valorAjustado.toFixed(2),r.cnpjFornecedor,r.nNF,r.serie,ci[0],ci[1],r.vidaUtilMeses,r.NCM,DESP_DEP_COD,DESP_DEP_DESC,da[0],da[1]].join('\t');}).join('\n');
 navigator.clipboard.writeText(tsv).then(()=>toast('Toda tabela copiada ✔','ok'),()=>toast('Falha','err'));};
document.getElementById('btnExportFinal').onclick=()=>{if(!state.assetRows.length)return;
 const h=['PATRIMÔNIO','DESCRIÇÃO','CHAVE','DATA','V.AJUSTADO','CNPJ FORNECEDOR','FORNECEDOR','NF','SÉRIE','CONTA INC. CÓD','CONTA INC. DESC','VIDA ÚTIL','NCM','CFOP','DESCRIÇÃO CFOP','DEP DÉB CÓD','DEP DÉB DESC','DEP ACUM CÓD','DEP ACUM DESC'];
 const d=state.assetRows.map(r=>{const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
  return[r.patrimonio,r.desc,r.chave,fmtData(r.data),+r.valorAjustado.toFixed(2),onlyDigits(r.cnpjFornecedor),r.fornecedor||'',r.nNF,r.serie,ci[0],ci[1],r.vidaUtilMeses,r.NCM,r.CFOP||'',cfopDesc(r.CFOP),DESP_DEP_COD,DESP_DEP_DESC,da[0],da[1]];});
 const ws=XLSX.utils.aoa_to_sheet([h,...d]);ws['!cols']=[{wch:14},{wch:55},{wch:50},{wch:12},{wch:16},{wch:20},{wch:50},{wch:10},{wch:7},{wch:24},{wch:40},{wch:14},{wch:14},{wch:10},{wch:60},{wch:24},{wch:18},{wch:28},{wch:44}];
 for(let r=1;r<=d.length;r++){const a=XLSX.utils.encode_cell({r,c:4});if(ws[a])ws[a].z='"R$"#,##0.00;-#,##0.00';}
 const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Imobilizados');
 XLSX.writeFile(wb,`Imobilizados_Final_${new Date().toISOString().slice(0,10).replace(/-/g,'')}.xlsx`);toast('Excel Final baixado ✔','ok');};

// ===== AMOSTRAS =====
function loadSample(){
 const t=`
<nfeProc><NFe><infNFe Id="NFe35260815492364000103550020000149201944554845">
<ide><mod>55</mod><serie>1</serie><nNF>14920</nNF><dhEmi>2026-08-15T10:30:00-03:00</dhEmi></ide>
<emit><CNPJ>15492364000103</CNPJ><xNome>TECH BRASIL INFORMATICA LTDA</xNome></emit>
<det nItem="1"><prod><xProd>Microcomputador Intel Core i7 16GB SSD 512GB</xProd><NCM>84713012</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>3</qCom><vUnCom>3800</vUnCom><vProd>11400</vProd></prod></det>
<det nItem="2"><prod><xProd>Monitor 27" LED Full HD</xProd><NCM>85285900</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>2</qCom><vUnCom>1450.50</vUnCom><vProd>2901</vProd></prod></det>
<det nItem="3"><prod><xProd>Impressora Laser Multifuncional</xProd><NCM>84716000</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1</qCom><vUnCom>2100</vUnCom><vProd>2100</vProd></prod></det>
<total><ICMSTot><vProd>16401</vProd><vFrete>180</vFrete><vSeg>35</vSeg><vDesc>85.10</vDesc><vNF>17000</vNF></ICMSTot></total>
</infNFe></NFe><protNFe><infProt><cStat>100</cStat></infProt></protNFe></nfeProc>

<nfeProc><NFe><infNFe Id="NFe35260843593656000178550030000023991447054520">
<ide><mod>55</mod><serie>3</serie><nNF>2399</nNF><dhEmi>2026-08-20T09:00:00-03:00</dhEmi></ide>
<emit><CNPJ>43593656000178</CNPJ><xNome>MÓVEIS SÃO PAULO LTDA</xNome></emit>
<det nItem="1"><prod><xProd>Cadeira Presidente Escritório Couro Sintético</xProd><NCM>94016100</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>6</qCom><vUnCom>1250</vUnCom><vProd>7500</vProd></prod></det>
<det nItem="2"><prod><xProd>Mesa de Reunião 2,40m Madeira</xProd><NCM>94036099</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1</qCom><vUnCom>3800</vUnCom><vProd>3800</vProd></prod></det>
<det nItem="3"><prod><xProd>Arquivo Aço 4 Gavetas</xProd><NCM>94031000</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>2</qCom><vUnCom>1580</vUnCom><vProd>3160</vProd></prod></det>
<total><ICMSTot><vProd>14460</vProd><vNF>14460</vNF></ICMSTot></total>
</infNFe></NFe><protNFe><infProt><cStat>100</cStat></infProt></protNFe></nfeProc>

<nfeProc><NFe><infNFe Id="NFe41260846980229000130550010000039801459076395">
<ide><mod>55</mod><serie>1</serie><nNF>3980</nNF><dhEmi>2026-08-28T14:15:00-03:00</dhEmi></ide>
<emit><CNPJ>46980229000130</CNPJ><xNome>MÁQUINAS INDUSTRIAIS BRASIL S/A</xNome></emit>
<det nItem="1"><prod><xProd>Centro Usinagem CNC 3 Eixos 15KW c/ Trocador</xProd><NCM>84571010</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1</qCom><vUnCom>285000</vUnCom><vProd>285000</vProd></prod></det>
<det nItem="2"><prod><xProd>Instalação e Comissionamento</xProd><NCM>99887766</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1</qCom><vUnCom>18000</vUnCom><vProd>18000</vProd></prod></det>
<total><ICMSTot><vProd>303000</vProd><vIPI>30300</vIPI><vFrete>2200</vFrete><vSeg>800</vSeg><vOutro>1500</vOutro><vNF>337800</vNF></ICMSTot></total>
</infNFe></NFe><protNFe><infProt><cStat>100</cStat></infProt></protNFe></nfeProc>

<nfeProc><NFe><infNFe Id="NFe35260846159198000151550020000000411300000464">
<ide><mod>55</mod><serie>2</serie><nNF>99999</nNF></ide>
<emit><CNPJ>159198000151</CNPJ><xNome>NOTA CANCELADA — IGNORAR LTDA</xNome></emit>
<det nItem="1"><prod><xProd>ITEM IGNORADO NOTA CANCELADA</xProd><NCM>84713000</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1</qCom><vUnCom>5000</vUnCom><vProd>5000</vProd></prod></det>
<total><ICMSTot><vProd>5000</vProd><vNF>5000</vNF></ICMSTot></total>
</infNFe></NFe><protNFe><infProt><cStat>101</cStat></infProt></protNFe></nfeProc>`;
 procXmlRaw(t);}

// ===== NCM TABLE =====
function renderNcmTable(){const tb=document.getElementById('ncmTableBody');if(!tb)return;
 const q=normStr(document.getElementById('ncmSearch')?.value||'');
 const rows=NCM_VIDA.filter(r=>!q || normStr(r.prefix+' '+r.desc).includes(q));
 tb.innerHTML=rows.map(r=>`<tr><td class="mono"><code>${r.prefix||'(qualquer)'}</code></td><td>${r.desc}</td><td class="num">${r.anos}</td><td class="num"><b>${r.anos*12}</b></td><td class="num">${r.taxa}%</td></tr>`).join('')||
 `<tr><td colspan="5"><div class="empty"><b>Nenhum NCM encontrado.</b></div></td></tr>`;}

// ===== TEMA =====
function applyTheme(mode){
 document.documentElement.setAttribute('data-theme',mode);
 try{localStorage.setItem('theme',mode);}catch(e){}
}
function setupTheme(){const saved=(()=>{try{return localStorage.getItem('theme');}catch(e){return null;}})();
 const prefersDark=matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
 applyTheme(saved || (prefersDark?'dark':'light'));
 const btn=document.getElementById('btnTheme');
 btn.onclick=()=>applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');}

// ===== AJUDA =====
function setupHelp(){document.getElementById('btnHelp').onclick=()=>document.getElementById('helpBackdrop').classList.add('open');
 document.getElementById('btnCloseHelp').onclick=()=>document.getElementById('helpBackdrop').classList.remove('open');
 document.getElementById('helpBackdrop').onclick=e=>{if(e.target.id==='helpBackdrop')e.currentTarget.classList.remove('open');};}

// ===== INICIAR =====
document.addEventListener('DOMContentLoaded',()=>{
 setupTabs();setupXml();setupSheet();setupTheme();setupHelp();
 document.getElementById('ncmSearch')?.addEventListener('input',renderNcmTable);
 document.getElementById('ncmTableBody') && renderNcmTable();
 renderScreening();});
