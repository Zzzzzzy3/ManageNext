
function copyTextContent(sourceId, targetId) {
    const source = document.getElementById(sourceId);
    const target = document.getElementById(targetId);
    if (source && target) {
        target.innerText = source.innerText;
    }
}
//更改下面
copyTextContent('show_version', 'current_version');