// Selecionar todos os corações
const heartIcons = document.querySelectorAll('.ph-heart');

heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('ph-heart');      
        this.classList.toggle('ph-fill');
        this.classList.toggle('ph-heart-straight');
        
        this.classList.toggle('liked');
        
        if(this.parentElement.classList.contains('liked-box')) {
        }
    });
});

// Botão Play/Pause da Barra Inferior
const playBtn = document.querySelector('.player-controls .play-circle');
const playIcon = playBtn.querySelector('i');

playBtn.addEventListener('click', function() {
    this.classList.toggle('playing');
    
    //
    if (playIcon.classList.contains('ph-pause')) {
        playIcon.classList.remove('ph-pause');
        playIcon.classList.add('ph-play');
    } else {
        playIcon.classList.remove('ph-play');
        playIcon.classList.add('ph-pause');
    }
});

// Botões Play dos Cards
const cardPlayBtns = document.querySelectorAll('.card .play-btn');

cardPlayBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        
        // Resetar todos os outros botões
        cardPlayBtns.forEach(b => {
            if(b !== btn) {
                b.style.backgroundColor = 'var(--primary)';
                b.innerHTML = '<i class="ph-fill ph-play"></i>';
            }
        });

        // Troca ícone deste botão
        const icon = btn.querySelector('i');
        if (icon.classList.contains('ph-play')) {
            icon.classList.remove('ph-play');
            icon.classList.add('ph-pause');
            btn.style.backgroundColor = 'white';
            btn.style.color = 'var(--primary)';
        } else {
            icon.classList.remove('ph-pause');
            icon.classList.add('ph-play');
            btn.style.backgroundColor = 'var(--primary)';
            btn.style.color = 'white';
        }
    });
});