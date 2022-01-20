/**
 * @filename    : modalHandler.js
 * @author      : 이병민
 * @description : 상품 등록 클릭시 모달창 생성
 */

import { $ } from './dom.js';
import { modalComponents } from './modalComponents.js';
import { modalClose } from './modalClose.js';
import { modalSubmit } from './modalSubmit.js';

modalComponents();

$('#modal-btn').addEventListener('click', () => {
    $('#alert-area').innerHTML = `<modal-components></modal-components>`;
    modalClose();
    modalSubmit();
});
