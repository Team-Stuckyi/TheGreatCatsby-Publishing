/**
 * @filename    : modalSubmit.js
 * @author      : 이병민
 * @description : 모달창 확인 버튼 클릭시 닫기
 */

import { $ } from './dom.js';

export function modalSubmit() {
    $('#modalSubmit').addEventListener('click', () => {
        $('#alert-area').innerHTML = ``;
    });
}
