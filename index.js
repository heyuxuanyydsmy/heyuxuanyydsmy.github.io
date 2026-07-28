// 直接用 JavaScript 把内容“画”在网页上
// 方式一：替换整个 body 的内容（简单粗暴）
document.body.innerHTML = `
    <div style="text-align:center; margin-top:50px; font-family:Arial;">
        <h1>🎮 欢迎来到我的空间</h1>
        <p style="font-size:20px;">
            请访问游戏页面：<br>
            <a href="/game1" style="font-size:28px; color:#007BFF;">
                heyuxuanyydsmy.github.io/game1
            </a>
        </p>
        <p style="color:green;">✅ 这个文字是 index.js 显示出来的！</p>
    </div>
`;

// 顺便在控制台（F12）也打一个日志，方便你调试
let ha = "Go to heyuxuanyydsmy.github.io/game1 and have fun";
console.log(ha);
