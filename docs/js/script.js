function copyToClipboard(id) {
    const textToCopy = document.getElementById(id).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('복사되었습니다: ' + textToCopy);
    }).catch(err => {
        console.error('텍스트 복사 실패: ', err);
    });
}
