/**
 * @filename    : modalClose.js
 * @author      : 이병민
 * @description : 모달창 닫기
 */

import { $ } from './dom.js';

export function modalClose() {
    $('#modal-close').addEventListener('click', () => {
        $('#alert-area').innerHTML = ``;
    });
}
