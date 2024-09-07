function copyToClipboard(id) {
    // 아이디를 가진 요소를 찾기
    var copyText = document.getElementById(id).innerText;
    
    // 임시 텍스트 영역을 생성하여 텍스트를 복사
    var tempInput = document.createElement("input");
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select(); // 선택 상태로 만들기
    document.execCommand("copy"); // 클립보드에 복사
    
    // 임시 텍스트 영역을 삭제
    document.body.removeChild(tempInput);
    
    // 알림 메시지 또는 다른 방법으로 복사 완료를 사용자에게 알릴 수 있습니다.
    alert("복사되었습니다: " + copyText);
//   const textToCopy = document.getElementById(id).innerText;
//    navigator.clipboard.writeText(textToCopy).then(() => {
//        alert('복사되었습니다: ' + textToCopy);
//    }).catch(err => {
//        console.error('텍스트 복사 실패: ', err);
//    });
}
