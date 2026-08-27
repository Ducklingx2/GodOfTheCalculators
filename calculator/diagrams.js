const diagramCanvas=document.getElementById("diagram-canvas"),dctx=diagramCanvas.getContext("2d");
function drawDiagrams(){const r=+document.getElementById("diagram-radius").value,w=+document.getElementById("diagram-width").value,h=+document.getElementById("diagram-height").value;dctx.clearRect(0,0,diagramCanvas.width,diagramCanvas.height);dctx.save();dctx.translate(175,210);dctx.beginPath();dctx.arc(0,0,r,0,Math.PI*2);dctx.stroke();dctx.fillText(`r = ${r}`,r+10,0);dctx.restore();dctx.save();dctx.translate(470,210);dctx.strokeRect(-w/2,-h/2,w,h);dctx.fillText(`${w} × ${h}`,-45,h/2+25);dctx.restore()}
["diagram-radius","diagram-width","diagram-height"].forEach(id=>document.getElementById(id).addEventListener("input",drawDiagrams));drawDiagrams();

