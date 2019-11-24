// ログの年表を生成する（ページロード時に1回だけ実行）
window.addEventListener("DOMContentLoaded", function () {
    // ロード
    loadTextFile("./data/log.json", function (result) {
        // JSONに変換
        let logData = JSON.parse(result);

        // 取得
        let frame = document.getElementById("log_frame");
        while (frame.childNodes.length > 0) frame.childNodes[0].remove();

        // 生成
        for (let i = 0; i < logData.length; i++) {
            let parent = document.createElement("li");
            let log_date = document.createElement("div");
            let log_title = document.createElement("div");
            let log_text = document.createElement("div");
            let log_content = document.createElement("div");
            log_date.textContent = logData[i]["date"];
            log_title.textContent = logData[i]["title"];
            log_text.textContent = logData[i]["text"];
            log_date.classList.add("log_date");
            log_title.classList.add("log_title");
            log_text.classList.add("log_text");
            log_content.classList.add("log_content");
            log_content.appendChild(log_title);
            log_content.appendChild(log_text);
            parent.appendChild(log_date);
            parent.appendChild(log_content);
            frame.appendChild(parent);
        }
    });
});