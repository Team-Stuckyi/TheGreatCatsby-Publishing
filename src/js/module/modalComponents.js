/**
 * @filename    : modalComponents.js
 * @author      : 이병민
 * @description : 모달창 컴포넌트
 */

export function modalComponents() {
    class customClass extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <div class="modal">
            <div class="modal-container">
                <button id="modal-close" class="modal-close text-lg bold">X</button>
        
                <h3 class="title text-lg bold">상품 등록</h3>
                <div class="modal-half">
                    <h4 class="sub-title">상품명</h4>
                    <input class="input input-full" placeholder="상품명을 입력하세요" />
                </div>
                <div class="modal-half">
                    <h4 class="sub-title">판매가</h4>
                    <input class="input input-full" placeholder="판매가를 입력하세요 입력하세요" />
                </div>
                <div class="modal-full">
                    <select class="select text-base modal-select">
                        <option value="index">카테고리</option>
                        <option value="1">사료</option>
                        <option value="2">간식</option>
                        <option value="3">건강관리</option>
                        <option value="4">장남감</option>
                        <option value="5">하우스</option>
                    </select>
                </div>
                <div class="modal-full">
                    <h4 class="sub-title">상품 특징</h4>
                    <textarea class="modal-textarea"></textarea>
                </div>
                <div class="modal-full">
                    <h4 class="sub-title">상품 특징</h4>
                    <textarea class="modal-textarea"></textarea>
                </div>
                <div class="modal-full">
                    <h4 class="sub-title">상품 정보 이미지</h4>
                    <button class="btn btn-full" data-alert="modalimage" style="background-color: var(--gray300)">상품 이미지 선택</button>
                </div>
                <div class="modal-full">
                    <button id="modalSubmit" class="btn btn-full" >상품 등록</button>
                </div>
            </div>
            <div class="bg-black"></div>
        </div>
            `;
        }
    }

    customElements.define('modal-components', customClass);
}
