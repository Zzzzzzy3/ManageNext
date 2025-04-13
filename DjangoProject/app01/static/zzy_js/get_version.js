
let versionTimer = null
const versionCollapse = new bootstrap.Collapse('#version', {
    toggle: false
})
document.querySelector('[data-bs-target="#version"]').addEventListener('click', function () {
    clearTimeout(versionTimer)
    if (!this.classList.contains('collapsed')) {
        versionTimer = setTimeout(() => {
            versionCollapse.hide();

        }, 1500)
    }
})

function copyTextContent(sourceId, targetId) {
    const source = document.getElementById(sourceId);
    const target = document.getElementById(targetId);
    if (source && target) {
        target.innerText = source.innerText;
    }
}

copyTextContent('show_version', 'current_version');

