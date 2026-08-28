// ============================================
// 使用 requestAnimationFrame 实现进度条 浏览器支持
// ============================================

function createProgressBar(duration = 2000) {
    let startTime = null;
    
    function update(timestamp) {
        if (!startTime) startTime = timestamp;
        
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const barLength = 30;
        const filled = Math.floor(progress * barLength);
        const empty = barLength - filled;
        
        const bar = '█'.repeat(filled) + '░'.repeat(empty);
        console.clear();
        console.log(`[${bar}] ${(progress * 100).toFixed(1)}%`);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            console.log('🎉 完成！');  // 进度完成
        }
    }
    
    return update;
}

// const progressBar = createProgressBar(3000);
// requestAnimationFrame(progressBar);


function nextFrame() {
    return new Promise(resolve => {
        requestAnimationFrame(resolve);
    });
}

async function frameSequence() {
    console.log('第1帧');  // 立即输出
    await nextFrame();
    console.log('第2帧');  // 下一帧输出
    await nextFrame();
    console.log('第3帧');  // 再下一帧输出
}

frameSequence();