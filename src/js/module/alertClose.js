/**
 * @filename    : alertClose.js
 * @author      : 이병민
 * @description : 알림창 닫기
 */

import { $ } from './dom.js';

export function alertClose() {
    $('.alert-btn').addEventListener('click', e => {
        $('#alert-area').innerHTML = '';
    });
}
