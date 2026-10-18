(() => {
  'use strict';
  const layouts = {blackline:['Blackline','Two-page example'],blueprint:['Blueprint','Two-page example'],compact:['Compact','One-page example'],panel:['Side panel','One-page example'],extended:['Extended','Two-page example']};
  const resume = document.getElementById('resume');
  const fields = [...document.querySelectorAll('[data-key]')];
  const status = text => { document.getElementById('status').textContent = text; };
  function setLayout(value) {
    if(!layouts[value]) return;
    resume.className = 'resume '+value;
    document.getElementById('preview-heading').textContent = layouts[value][0];
    document.getElementById('page-guide').textContent = layouts[value][1];
    document.getElementById('sample-pdf').href = `samples/${value}.pdf`;
    document.getElementById('sample-tex').href = `latex/${value}.tex`;
    document.querySelector(`input[name="layout"][value="${value}"]`).checked = true;
    const shorter = ['compact','panel'].includes(value);
    document.getElementById('subset-warning').hidden = !shorter;
    status(shorter ? `${layouts[value][0]} uses a shorter subset. Continued-work sections and longer bullets are hidden and will not print. Your edits remain available in the full layouts.` : `${layouts[value][0]} selected. Your text edits are preserved.`);
  }
  function updateName() { document.querySelector('.repeat-name').textContent = document.querySelector('[data-key="name"]').textContent; }
  function updatePortfolio() {
    document.querySelector('.qr-area').hidden = true;
    const value = document.getElementById('portfolio-url').value.trim();
    let url;
    try { url = new URL(value); if(!['https:','http:'].includes(url.protocol)) throw Error(); } catch { status('Enter a complete http or https portfolio URL.'); return; }
    document.querySelectorAll('.portfolio-link').forEach(a => {a.href=url.href;a.textContent=url.href.replace(/^https?:\/\//,'').replace(/\/$/,'');});
    document.querySelector('.qr-area').hidden = url.href !== 'https://example.com/';
  }
  document.querySelectorAll('input[name="layout"]').forEach(el => el.addEventListener('change',()=>setLayout(el.value)));
  document.querySelector('[data-key="name"]').addEventListener('input',updateName);
  document.getElementById('portfolio-url').addEventListener('input',updatePortfolio);
  fields.forEach(el => el.addEventListener('paste', event => {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    const selection = window.getSelection();
    if(!selection.rangeCount) return;
    const range = selection.getRangeAt(0); range.deleteContents();
    const node = document.createTextNode(text); range.insertNode(node);range.setStartAfter(node);range.collapse(true);selection.removeAllRanges();selection.addRange(range);
    el.dispatchEvent(new Event('input',{bubbles:true}));
  }));
  document.getElementById('print').addEventListener('click',()=>window.print());
  document.getElementById('save').addEventListener('click',()=>{
    const data = {format:'cv-templates-v1',layout:document.querySelector('input[name="layout"]:checked').value,portfolio:document.getElementById('portfolio-url').value,fields:Object.fromEntries(fields.map(el=>[el.dataset.key,el.innerText]))};
    const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const href = URL.createObjectURL(blob);const a=document.createElement('a');a.href=href;a.download='my-cv-edits.json';a.click();setTimeout(()=>URL.revokeObjectURL(href),1000);status('Edits saved to a local JSON file.');
  });
  document.getElementById('load').addEventListener('change',async event=>{
    const file = event.target.files[0];if(!file) return;
    try {
      if(file.size>250000) throw Error('File is too large.');
      const data = JSON.parse(await file.text());
      if(data.format!=='cv-templates-v1'||!layouts[data.layout]||!data.fields||typeof data.fields!=='object') throw Error('Choose a CV Templates JSON export.');
      fields.forEach(el=>{const value=data.fields[el.dataset.key];if(typeof value==='string'&&value.length<15000) el.textContent=value;});
      if(typeof data.portfolio==='string')document.getElementById('portfolio-url').value=data.portfolio;
      updateName();updatePortfolio();setLayout(data.layout);status('Local edits loaded. Check the layout before printing.');
    } catch(error) {status(`Could not load the file. ${error.message}`);} finally {event.target.value='';}
  });
  fields.forEach(el => { if(!el.getAttribute('aria-label')) el.setAttribute('aria-label',el.dataset.key.replaceAll('-',' '));el.setAttribute('role','textbox');el.setAttribute('aria-multiline','true');});
  setLayout('blackline');
})();
