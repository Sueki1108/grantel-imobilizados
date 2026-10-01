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
  const sum=document.createElement('span');sum.className='file-summary';sum.innerHTML=`📎 <b>${arr.length}</b> arquivo(s) carregado(s)`;list.appendChild(sum);
  const MAX=5;const show=arr.slice(0,MAX);const extra=arr.length-MAX;
  show.forEach(f=>{const t=document.createElement('span');t.className='file-chip';t.title=f.name;t.innerHTML='📄 '+f.name;list.appendChild(t);});
  if(extra>0){const t=document.createElement('span');t.className='file-chip';t.style.background='var(--warning-soft)';t.style.color='var(--warning)';t.innerHTML=`+${extra} mais`;list.appendChild(t);}
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
 const h=['CHAVE DE ACESSO','DESCRIÇÃO DO ITEM','VALOR UNIT.','QUANTIDADE','UNIDADE','VALOR TOTAL','CFOP','NCM','FORNECEDOR','CNPJ FORNECEDOR','Nº NOTA','SÉRIE','DATA EMISSÃO'];
 const d=state.screeningRows.map(r=>[r.chave,r.desc,+r.vUnit.toFixed(2),r.qCom,r.uCom,+r.vTotal.toFixed(2),r.CFOP,r.NCM,r.fornecedor,onlyDigits(r.cnpj),r.nNF,r.serie,r.data?fmtData(r.data):'']);
 const ws=XLSX.utils.aoa_to_sheet([h,...d]);ws['!cols']=[{wch:50},{wch:60},{wch:14},{wch:11},{wch:9},{wch:14},{wch:8},{wch:14},{wch:50},{wch:20},{wch:10},{wch:8},{wch:12}];
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
  for(const v of ips)rows.push({patrimonio:req.patrimonio||'',desc:sel.xProd,chave:nota.chave,data:nota.dhEmi,valorAjustado:v,cnpjFornecedor:nota.emitCNPJ,nNF:nota.nNF,serie:nota.serie||'',contaIncorpIdx:-1,vidaUtilMeses:req.vidaUtil||vidaUtilNcm(sel.NCM),NCM:sel.NCM,_nc:nota.chave,_ni:sel.nItem});}
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
 const h=['PATRIMÔNIO','DESCRIÇÃO','CHAVE','DATA','V.AJUSTADO','CNPJ','NF','SÉRIE','CONTA INC. CÓD','CONTA INC. DESC','VIDA ÚTIL','NCM','DEP DÉB CÓD','DEP DÉB DESC','DEP ACUM CÓD','DEP ACUM DESC'];
 const d=state.assetRows.map(r=>{const ci=r.contaIncorpIdx>=0?CONTAS_INCORPORACAO[r.contaIncorpIdx]:['',''];const da=DEP_ACUM_MAP[r.contaIncorpIdx]||['',''];
  return[r.patrimonio,r.desc,r.chave,fmtData(r.data),+r.valorAjustado.toFixed(2),onlyDigits(r.cnpjFornecedor),r.nNF,r.serie,ci[0],ci[1],r.vidaUtilMeses,r.NCM,DESP_DEP_COD,DESP_DEP_DESC,da[0],da[1]];});
 const ws=XLSX.utils.aoa_to_sheet([h,...d]);ws['!cols']=[{wch:14},{wch:55},{wch:50},{wch:12},{wch:16},{wch:20},{wch:10},{wch:7},{wch:24},{wch:40},{wch:14},{wch:14},{wch:24},{wch:18},{wch:28},{wch:44}];
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
