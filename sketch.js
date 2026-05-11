const debugDiv = document.createElement('div');
debugDiv.style.position = 'fixed';
debugDiv.style.top = '10px';
debugDiv.style.left = '10px';
debugDiv.style.padding = '10px';
debugDiv.style.background = 'rgba(0, 0, 0, 0.7)';
debugDiv.style.color = 'white';
debugDiv.style.fontFamily = 'monospace';
debugDiv.style.zIndex = '9999';
debugDiv.style.pointerEvents = 'none';
document.body.appendChild(debugDiv);

document.addEventListener('mousemove', (e) => {
    debugDiv.innerHTML = `座標 - X: ${e.clientX}, Y: ${e.clientY}`;
});

document.addEventListener('mousedown', (e) => {
    debugDiv.style.background = 'rgba(255, 0, 0, 0.8)';
    debugDiv.innerHTML = `CLICK! - X: ${e.clientX}, Y: ${e.clientY}`;
});

document.addEventListener('mouseup', () => {
    debugDiv.style.background = 'rgba(0, 0, 0, 0.7)';
});

function changeImage() {
    const img = document.getElementById('target-cake');
    if (img) {
        img.src = "images/222D0014_赤坂ほのか_3.png";
        img.removeAttribute('usemap');
        console.log("画像を切り替えました");
    }
}