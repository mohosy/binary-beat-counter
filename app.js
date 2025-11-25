const ui=document.getElementById('ui');
const out=document.getElementById('out');
let count=0;
ui.innerHTML='<button id="inc">+1</button><button id="dec">-1</button><button id="reset">Reset</button>';
function render(){
  const b=(count>>>0).toString(2).padStart(16,'0');
  out.textContent=`Count: ${count}\nBinary (16-bit): ${b}\nHex: 0x${(count>>>0).toString(16).toUpperCase()}`;
}
ui.onclick=(e)=>{if(e.target.id==='inc')count++;if(e.target.id==='dec')count--;if(e.target.id==='reset')count=0;render();};
render();
