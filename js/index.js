// import
import setAnimation from "../js/module/animation.js";
import setArchive from "./module/archive.js";
import setText from "./module/text.js";
import setTheme from "./module/theme.js";
import setLog from "./module/log.js";
import setSkill from "./module/skill.js";
import setTagColor from "./module/tag.js";
import Works from "./module/works.js";
import { modalClose } from "./layout/modal.js";
import { showContents, loadTextFile } from "./common/common.js"

// open index.html event
document.addEventListener("DOMContentLoaded", function () {

    // add event
    setAnimation();

    // load for contents
    loadTextFile("./data/text.json", (result) => setText(result));
    loadTextFile("./data/contents.json", (result) => new Works(result));
    loadTextFile("./data/archive.json", (result) => setArchive(result));
    loadTextFile("./data/log.json", (result) => setLog(result));
    loadTextFile("./data/theme.json", (result) => setTheme(result));

    // load tag and skill
    Promise.all([
        new Promise((resolve) => loadTextFile("./data/tag.json", resolve)),
        new Promise((resolve) => loadTextFile("./data/skill.json", resolve)),
    ]).then(function (result) {
        setTagColor(result[0]);
        setSkill(result[0], result[1]);
    });

    // addition event for html
    document.getElementById('top').addEventListener('click', showContents);
    document.getElementById('modalWindow').addEventListener('click', (e) => e.stopPropagation());
    document.getElementById('modalBarBack').addEventListener('click', modalClose);
    document.getElementById('modal').addEventListener('click', modalClose);
});
