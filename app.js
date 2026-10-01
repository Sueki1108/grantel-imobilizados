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
function toast(msg,t='info'){const el=document.getElementById('toast');el.className=`toast show ${t}`;el.textContent=msg;clearTimeout(el._h);el._h=setTimeout(()=>el.className='toast',2200);}
const fmtBRL=n=>(n===null||n===undefined||isNaN(n))?'':n.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtData=i=>{if(!i)return'';const d=new Date(i);return isNaN(d)?i.slice(0,10).split('-').reverse().join('/'):d.toLocaleDateString('pt-BR');};
const onlyDigits=s=>(s||'').toString().replace(/\D/g,'');
const fmtCnpj=s=>{const d=onlyDigits(s).padStart(14,'0');return `${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8,12)}-${d.slice(12)}`;};
function vidaUtilNcm(n){const c=onlyDigits(n);let m=null;for(const r of NCM_VIDA)if(c.startsWith(r.prefix)&&(m===null||r.prefix.length>m.prefix.length))m=r;return m?m.anos*12:120;}

// ===== PARSE XML =====
function splitBlocks(t){const b=[];
  let tags=['nfeProc'];const reNp=/<\s*nfeProc\b/gi;let idx=[];let m;
  while((m=reNp.exec(t))!==null)idx.push(m.index);
  if(!idx.length){tags=['NFe'];const re2=/<\s*NFe\b/gi;while((m=re2.exec(t))!==null)idx.push(m.index);}
  if(!idx.length)return[];
  for(let i=0;i<idx.length;i++){const sl=t.slice(idx[i],idx[i+1]??t.length);if(sl && sl.length>20)b.push(sl);}
  return b;}
function parseDoc(s){const cleanStart=s.replace(/^[\s\S]*?(?=<)/,'');const d=(new DOMParser()).parseFromString(cleanStart,'text/xml');
if(d.querySelector('parsererror')){const c=s.replace(/xmlns(:\w+)?="[^"]*"/g,'');const d2=(new DOMParser()).parseFromString(c,'text/xml');return d2.querySelector('parsererror')?null:d2;}return d;}
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
    itens.push({nItem:i+1,cProd:gt(p,'cProd'),xProd:gt(p,'xProd'),NCM:gt(p,'NCM'),CFOP:gt(p,'CFOP'),uCom:gt(p,'uCom').toUpperCase(),qCom:q,vUnCom:vu,vProd:vp,
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
const state={notas:[],screeningRows:[],assetRows:[]};

// ===== ABA 1 — TRIAGEM =====
function setupXml(){const drop=document.getElementById('xmlDrop'),inp=document.getElementById('xmlFile'),list=document.getElementById('xmlFileList'),
 btnP=document.getElementById('btnParsePaste'),btnC=document.getElementById('btnClearXml'),btnS=document.getElementById('btnSample'),paste=document.getElementById('xmlPaste');
 function procFiles(fs){const arr=Array.from(fs).filter(f=>/\.(xml|txt)$/i.test(f.name));if(!arr.length){toast('Nenhum XML/TXT válido','err');return;}
  list.innerHTML='';Promise.all(arr.map(f=>{const t=document.createElement('span');t.className='file-tag';t.textContent=f.name;list.appendChild(t);
    return new Promise(r=>{const rd=new FileReader();rd.onload=()=>r(rd.result);rd.onerror=()=>r('');rd.readAsText(f,'UTF-8');})
  })).then(ts=>procXmlRaw(ts.join('\n')));}
 drop.onclick=()=>inp.click();inp.onchange=e=>procFiles(e.target.files);
 ['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('dragover');}));
 ['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('dragover');}));
 drop.ondrop=e=>e.dataTransfer?.files&&procFiles(e.dataTransfer.files);
 btnP.onclick=()=>{if(!paste.value.trim()){toast('Cole algum XML primeiro','err');return;}procXmlRaw(paste.value);};
 btnC.onclick=()=>{state.notas=[];state.screeningRows=[];state.assetRows=[];list.innerHTML='';paste.value='';inp.value='';renderScreening();toast('Dados zerados','info');};
 btnS.onclick=loadSample;}

function procXmlRaw(txt){const blocks=splitBlocks(txt);if(!blocks.length){toast('Nenhuma NFe encontrada','err');return;}
 const novas=[];let c=0,inv=0;
 for(const b of blocks){const d=parseDoc(b);if(!d){inv++;continue;}const n=parseNFe(d);if(!n){inv++;continue;}if(n.cancelada){c++;continue;}novas.push(n);}
 const ja=new Set(state.notas.map(n=>n.chave));for(const n of novas)if(n.chave&&!ja.has(n.chave)){state.notas.push(n);ja.add(n.chave);}
 toast(`${blocks.length} blocos → ${novas.length} válidas • ${c} canceladas • ${inv} inválidas`,novas.length?'ok':'info');
 buildScreening();renderScreening();}

function buildScreening(){const r=[];for(const n of state.notas)for(const it of n.itens){const vu=it.qCom>0?it.vAjustado/it.qCom:it.vAjustado;
 if(vu<1200)continue;r.push({chave:n.chave,desc:it.xProd,vUnit:vu,qCom:it.qCom,vTotal:it.vAjustado,CFOP:it.CFOP,NCM:it.NCM,fornecedor:n.emitXNome,cnpj:n.emitCNPJ,nNF:n.nNF,serie:n.serie,data:n.dhEmi,uCom:it.uCom});}state.screeningRows=r;}

function bindCopy(root){root.querySelectorAll('td.copy-cell').forEach(td=>td.onclick=()=>{
 const v=td.dataset.c??td.innerText.trim();navigator.clipboard.writeText(v).then(()=>{td.classList.add('copied');setTimeout(()=>td.classList.remove('copied'),500);toast('Copiado ✔','ok');}).catch(()=>toast('Falha ao copiar','err'));});}

function renderScreening(){const tb=document.querySelector('#screeningTable tbody');tb.innerHTML='';
 const st=document.getElementById('screeningStats');document.getElementById('btnExportScreening').disabled=!state.screeningRows.length;
 const vT=state.screeningRows.reduce((s,r)=>s+r.vTotal,0),ch=new Set(state.screeningRows.map(r=>r.chave)).size;
 st.innerHTML=`<div class="stat"><b>${state.notas.length}</b><span>Notas válidas</span></div><div class="stat"><b>${ch}</b><span>Notas c/ itens</span></div><div class="stat"><b>${state.screeningRows.length}</b><span>Itens ≥ R$1.200</span></div><div class="stat"><b>R$ ${fmtBRL(vT)}</b><span>Total ajustado</span></div>`;
 if(!state.screeningRows.length){tb.innerHTML=`<tr><td colspan="13" style="text-align:center;padding:26px;color:var(--muted)">Nenhum item ainda. Carregue XMLs acima 👆 (ou clique em "Carregar exemplos" para testar)</td></tr>`;return;}
 state.screeningRows.forEach((r,i)=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${i+1}</td>
<td class="copy-cell" data-c="${r.chave}">${r.chave||'-'}</td>
<td class="copy-cell wrap-cell" data-c="${r.desc.replace(/"/g,'&quot;')}">${r.desc}</td>
<td class="num copy-cell" data-c="${r.vUnit.toFixed(2)}">R$ ${fmtBRL(r.vUnit)}</td>
<td class="num">${Number.isInteger(r.qCom)?r.qCom:r.qCom.toFixed(4)} ${r.uCom}</td>
<td class="num copy-cell" data-c="${r.vTotal.toFixed(2)}">R$ ${fmtBRL(r.vTotal)}</td>
<td>${r.CFOP}</td><td>${r.NCM}</td>
<td class="wrap-cell copy-cell" data-c="${r.fornecedor}">${r.fornecedor}</td>
<td class="copy-cell" data-c="${r.cnpj}">${fmtCnpj(r.cnpj)}</td>
<td>${r.nNF}</td><td>${r.serie||'-'}</td><td>${fmtData(r.data)}</td>`;tb.appendChild(tr);});bindCopy(tb);}

document.getElementById('btnExportScreening').onclick=()=>{if(!state.screeningRows.length)return;
 const h=['CHAVE DE ACESSO','DESCRIÇÃO DO ITEM','VALOR UNIT.','QUANTIDADE','UNIDADE','VALOR TOTAL','CFOP','NCM','FORNECEDOR','CNPJ FORNECEDOR','Nº NOTA','SÉRIE','DATA EMISSÃO'];
 const d=state.screeningRows.map(r=>[r.chave,r.desc,+r.vUnit.toFixed(2),r.qCom,r.uCom,+r.vTotal.toFixed(2),r.CFOP,r.NCM,r.fornecedor,onlyDigits(r.cnpj),r.nNF,r.serie,r.data?fmtData(r.data):'']);
 const ws=XLSX.utils.aoa_to_sheet([h,...d]);ws['!cols']=[{wch:50},{wch:60},{wch:14},{wch:11},{wch:9},{wch:14},{wch:8},{wch:14},{wch:50},{wch:20},{wch:10},{wch:8},{wch:12}];
 const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Triagem_Imobilizados');
 XLSX.writeFile(wb,`Triagem_Imobilizados_${new Date().toISOString().slice(0,10).replace(/-/g,'')}.xlsx`);toast('Planilha de Triagem baixada ✓','ok');};

// ===== ABA 2 — ATIVOS =====
function setupSheet(){const drop=document.getElementById('sheetDrop'),inp=document.getElementById('sheetFile'),list=document.getElementById('sheetFileList');
 function procFile(f){if(!f)return;list.innerHTML=`<span class="file-tag">${f.name}</span>`;const r=new FileReader();
  r.onload=e=>{try{const wb=XLSX.read(new Uint8Array(e.target.result),{type:'array',cellDates:true});
   const ws=wb.Sheets[wb.SheetNames[0]],lin=XLSX.utils.sheet_to_json(ws,{defval:'',raw:false});procPlanilha(lin);}
   catch(err){console.error(err);toast('Erro ao ler planilha: '+err.message,'err');}};r.readAsArrayBuffer(f);}
 drop.onclick=()=>inp.click();inp.onchange=e=>procFile(e.target.files[0]);
 ['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('dragover');}));
 ['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('dragover');}));
 drop.ondrop=e=>e.dataTransfer?.files?.[0]&&procFile(e.dataTransfer.files[0]);}

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
  for(const v of ips)rows.push({patrimonio:req.patrimonio||'',desc:sel.xProd,chave:nota.chave,data:nota.dhEmi,valorAjustado:v,cnpjFornecedor:nota.emitCNPJ,nNF:nota.nNF,serie:nota.serie||'',contaIncorpIdx:-1,vidaUtilMeses:req.vidaUtil||vidaUtilNcm(sel.NCM),NCM:sel.NCM,_nc:nota.chave,_ni:sel.nItem});}
 state.assetRows=rows;renderAssets();document.getElementById('assetsCard').style.display=rows.length?'':'none';
 toast(`${rows.length} patrimônios • ${falt} sem correspondência no XML`,rows.length?'ok':'warning');}

// ===== RENDER ATIVOS =====
function optCI(si=-1){return`<option value="-1">-- Selecione --</option>`+CONTAS_INCORPORACAO.map((c,i)=>`<option value="${i}" ${i===si?'selected':''}>${c[0]} — ${c[1]}</option>`).join('');}
function renderAssets(){const tb=document.querySelector('#assetsTable tbody');tb.innerHTML='';
 const st=document.getElementById('assetsStats');const vt=state.assetRows.reduce((s,r)=>s+r.valorAjustado,0);
 st.innerHTML=`<div class="stat"><b>${state.assetRows.length}</b><span>Patrimônios</span></div><div class="stat"><b>R$ ${fmtBRL(vt)}</b><span>Valor total</span></div><div class="stat"><b>${state.assetRows.filter(r=>r.contaIncorpIdx>=0).length}/${state.assetRows.length}</b><span>Contas definidas</span></div><div class="stat"><b>${state.assetRows.filter(r=>r.patrimonio).length}/${state.assetRows.length}</b><span>Patrimônios</span></div>`;
 state.assetRows.forEach((r,i)=>{const tr=document.createElement('tr');tr.dataset.i=i;buildRow(tr,r,i);tb.appendChild(tr);});bindRowEvents(tb);}
function buildRow(tr,r,i){const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
 tr.innerHTML=`<td><input class="inline" type="text" data-f="patrimonio" value="${(r.patrimonio||'').replace(/"/g,'&quot;')}" placeholder="Preencher..." /></td>
<td class="copy-cell wrap-cell" data-c="${r.desc.replace(/"/g,'&quot;')}">${r.desc}</td>
<td class="copy-cell" data-c="${r.chave}">${r.chave||'-'}</td>
<td class="copy-cell" data-c="${fmtData(r.data)}">${fmtData(r.data)}</td>
<td class="num copy-cell" data-c="${r.valorAjustado.toFixed(2)}">R$ ${fmtBRL(r.valorAjustado)}</td>
<td class="copy-cell" data-c="${r.cnpjFornecedor}">${fmtCnpj(r.cnpjFornecedor)}</td>
<td>${r.nNF}</td><td>${r.serie||'-'}</td>
<td><select class="inline" data-f="contaIncorpIdx">${optCI(r.contaIncorpIdx)}</select></td>
<td>${ci[1]}</td>
<td class="num"><input class="inline" type="number" data-f="vidaUtilMeses" value="${r.vidaUtilMeses}" min="0" /></td>
<td>${r.NCM}</td>
<td class="copy-cell" data-c="${DESP_DEP_COD}">${DESP_DEP_COD}</td>
<td class="copy-cell" data-c="${DESP_DEP_DESC}">${DESP_DEP_DESC}</td>
<td class="copy-cell" data-c="${da[0]}">${da[0]||'-'}</td>
<td class="copy-cell" data-c="${da[1]||''}">${da[1]||'-'}</td>
<td><button class="btn secondary" data-act="copylinha" title="Copiar esta linha">📋</button></td>`;}
function bindRowEvents(root){root.querySelectorAll('tr').forEach(tr=>{const i=+tr.dataset.i;
 tr.querySelectorAll('input.inline,select.inline').forEach(inp=>{
  inp.onchange=e=>{const f=e.target.dataset.f;let v=e.target.value;if(f==='contaIncorpIdx'||f==='vidaUtilMeses')v=parseInt(v)||-1;state.assetRows[i][f]=v;
   if(f==='contaIncorpIdx'||f==='vidaUtilMeses'){buildRow(tr,state.assetRows[i],i);bindRowOne(tr,i);bindCopy(tr);}};
  if(inp.tagName==='INPUT')inp.oninput=e=>{state.assetRows[i][e.target.dataset.f]=e.target.value;};});
 bindRowOne(tr,i);});bindCopy(root);}
function bindRowOne(tr,i){tr.querySelector('[data-act="copylinha"]')?.addEventListener('click',()=>{const r=state.assetRows[i];
 const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
 const linha=[r.patrimonio,r.desc,r.chave,fmtData(r.data),r.valorAjustado.toFixed(2),r.cnpjFornecedor,r.nNF,r.serie,ci[0],ci[1],r.vidaUtilMeses,r.NCM,DESP_DEP_COD,DESP_DEP_DESC,da[0],da[1]].join('\t');
 navigator.clipboard.writeText(linha).then(()=>toast('Linha copiada ✓','ok'),()=>toast('Falha','err'));});}

// ===== AÇÕES =====
document.getElementById('btnBulkPat').onclick=()=>{const p=document.getElementById('patPrefix').value.trim(),s=+document.getElementById('patStart').value||1,z=+document.getElementById('patZeros').value||0;let n=s;
 for(const r of state.assetRows)if(!r.patrimonio){r.patrimonio=p+String(n).padStart(z,'0');n++;}renderAssets();toast('Patrimônios aplicados ✓','ok');};
document.getElementById('btnCopyAll').onclick=()=>{if(!state.assetRows.length)return;const tsv=state.assetRows.map(r=>{const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
 return[r.patrimonio,r.desc,r.chave,fmtData(r.data),r.valorAjustado.toFixed(2),r.cnpjFornecedor,r.nNF,r.serie,ci[0],ci[1],r.vidaUtilMeses,r.NCM,DESP_DEP_COD,DESP_DEP_DESC,da[0],da[1]].join('\t');}).join('\n');
 navigator.clipboard.writeText(tsv).then(()=>toast('Toda tabela copiada ✓','ok'),()=>toast('Falha','err'));};
document.getElementById('btnExportFinal').onclick=()=>{if(!state.assetRows.length)return;
 const h=['PATRIMÔNIO','DESCRIÇÃO','CHAVE','DATA','V.AJUSTADO','CNPJ','NF','SÉRIE','CONTA INC. CÓD','CONTA INC. DESC','VIDA ÚTIL','NCM','DEP DÉB CÓD','DEP DÉB DESC','DEP ACUM CÓD','DEP ACUM DESC'];
 const d=state.assetRows.map(r=>{const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
 return[r.patrimonio,r.desc,r.chave,fmtData(r.data),+r.valorAjustado.toFixed(2),onlyDigits(r.cnpjFornecedor),r.nNF,r.serie,ci[0],ci[1],r.vidaUtilMeses,r.NCM,DESP_DEP_COD,DESP_DEP_DESC,da[0],da[1]];});
 const ws=XLSX.utils.aoa_to_sheet([h,...d]);ws['!cols']=[{wch:14},{wch:55},{wch:50},{wch:12},{wch:16},{wch:20},{wch:10},{wch:7},{wch:24},{wch:40},{wch:14},{wch:14},{wch:24},{wch:18},{wch:28},{wch:44}];
 for(let r=1;r<=d.length;r++){const a=XLSX.utils.encode_cell({r,c:4});if(ws[a])ws[a].z='"R$"#,##0.00;-#,##0.00';}
 const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Imobilizados');
 XLSX.writeFile(wb,`Imobilizados_Final_${new Date().toISOString().slice(0,10).replace(/-/g,'')}.xlsx`);toast('Excel Final baixado ✓','ok');};

// ===== TABS =====
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');
 const id=t.dataset.tab;['screening','assets','ncm'].forEach(s=>document.getElementById('tab-'+s).classList.toggle('hidden',s!==id));});

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

// ===== INICIAR =====
document.addEventListener('DOMContentLoaded',()=>{setupXml();setupSheet();
 document.getElementById('ncmTableBody').innerHTML=NCM_VIDA.map(r=>`<tr><td><code>${r.prefix||'(qualquer)'}</code></td><td>${r.desc}</td><td class="num">${r.anos}</td><td class="num"><b>${r.anos*12}</b></td><td class="num">${r.taxa}%</td></tr>`).join('');
 renderScreening();});
