"use strict"

// ページの読み込み完了時
window.addEventListener('load', () => {
    // formタグの送信時のイベント
    document.querySelector('form').addEventListener('submit', e => {
        console.log('送信しました。');
        // 送信のキャンセル
        e.preventDefault()
    })
})