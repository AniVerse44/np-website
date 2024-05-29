const typeWriter = document.getElementById('typewriter-text');
const text = '<h4>AniNotes, We provide free Notes Here :D</h4>';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
