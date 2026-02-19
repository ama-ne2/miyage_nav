
document.addEventListener('DOMContentLoaded', () => {
    //ローディング
    const overlay = document.querySelector(".loading_overlay");
    window.addEventListener("load" , ()=>{
        setTimeout(()=>{
            overlay.classList.add("loaded");
        }, 2500);
    });

    //カートアニメーション
    const addBtnWrap = document.querySelector('.result_btn_wrap button'); 
    const targetIcon = document.querySelectorAll('.footer_icon')[2];

    if (!addBtnWrap || !targetIcon) return;

    addBtnWrap.addEventListener('click', () => {
        //画像
        const flyer = document.createElement('img');
        flyer.src = 'img/bag_icon.png'; 
        flyer.className = 'flying-bag';
        document.body.appendChild(flyer);

        // スタート
        const btnRect = addBtnWrap.getBoundingClientRect();
        const startX = btnRect.left + (btnRect.width / 2) - 30;
        const startY = btnRect.top + (btnRect.height / 2) - 30;

        flyer.style.left = `${startX}px`;
        flyer.style.top = `${startY}px`;

        // ゴール
        const targetRect = targetIcon.getBoundingClientRect();
        const destX = targetRect.left + (targetRect.width / 2) - 30;
        const destY = targetRect.top + (targetRect.height / 2) - 80;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                flyer.classList.add('is-flying');
                flyer.style.left = `${destX}px`;
                flyer.style.top = `${destY}px`;
            });
        });

        flyer.addEventListener('transitionend', () => {
            flyer.remove();
            
            targetIcon.style.transform = 'scale(1.2)';
            targetIcon.style.transition = 'transform 0.2s';
            setTimeout(() => {
                targetIcon.style.transform = 'scale(1.0)';
            }, 150);
        });
    });
});
