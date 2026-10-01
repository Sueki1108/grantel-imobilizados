# 🏢 Gestão de Imobilizados — Extrator de NF-e

Ferramenta **100% client-side** (sem servidor) para extrair dados de XMLs de NF-e, triar itens ≥ R$ 1.200 e montar a tabela de ativos imobilizados com contas contábeis de incorporação e depreciação.

Todo processamento roda **diretamente no seu navegador** — nenhum dado deixa seu computador.

## ✅ Funcionalidades

### Etapa 1 — Triagem
- Upload em lote de XMLs (várias notas no mesmo arquivo suportado) ou colar texto
- Ignora automaticamente notas canceladas
- Filtro: apenas itens com valor unitário **≥ R$ 1.200,00**
- Exporta planilha de triagem em Excel

### Etapa 2 — Ativos Definitivos (16 colunas)
| # | Coluna | Origem |
|---|---|---|
| 1 | Patrimônio | Editável / em lote |
| 2 | Descrição | XML |
| 3 | Chave | XML |
| 4 | Data | XML |
| 5 | Valor Ajustado | Rateio exato (frete/seguro/desconto/IPI/II) |
| 6 | CNPJ Fornecedor | XML |
| 7 | Nº Nota | XML |
| 8 | Série | XML |
| 9 | Conta Incorporação (Cód) | Seleção |
| 10 | Conta Incorporação (Desc) | Automática |
| 11 | Vida Útil (Meses) | NCM (IN RF) |
| 12 | NCM | XML |
| 13 | Dep Débito Cód | Fixo `4.1.05.01.0001` |
| 14 | Dep Débito Desc | Fixo `Depreciação` |
| 15 | Dep Acumulada Cód | Automática |
| 16 | Dep Acumulada Desc | Automática |

- Cópia em 1 clique em qualquer célula
- Copiar linha / copiar tabela inteira (formato Excel)
- Exportar Excel final
- Desdobramento automático: itens com quantidade > 1 → linhas individuais

### Etapa 3 — Tabela NCM
Consulta de vida útil e taxa por NCM.

## 🚀 Deploy GitHub Pages
Execute `deploy.bat` com duplo clique e siga os passos.
