import { $ } from './dom.js';

export function alertClose() {
    $('.alert-btn').addEventListener('click', e => {
        $('#alert-area').innerHTML = '';
    });
}
