export function alertComponents() {
    class customClass extends HTMLElement {
        connectedCallback() {
            let alertTexts = '';
            if (this.dataset.alerttext == 'edit') {
                alertTexts = '수정';
            } else if (this.dataset.alerttext == 'del') {
                alertTexts = '삭제';
            }

            this.innerHTML =
                `<style>
            .alert {
                position: relative;
                width: 400px;
                height: 200px;
                background-color: var(--gray200);
                border-radius: 5px;
                box-shadow: 5px 5px 15px 5px var(--gray400);
            }
            .alert-container {
                position: fixed;
                top: 30%;
                left: calc(50% - 200px);
                z-index: 2000;
            }
            .alert {
                position: relative;
                width: 400px;
                height: 200px;
                background-color: var(--gray200);
                border-radius: 5px;
                box-shadow: 5px 5px 15px 5px var(--gray400);
            }
            .alert-text {
                width: 300px;
                height: 80px;
                position: absolute;
                top: 75px;
                left: 50px;
                text-align: center;
            }
            .alert-btn-container {
                width: 300px;
                height: 80px;
                position: absolute;
                top: 150px;
                left: 50px;
            }
            
            .bg-black {
                position: fixed;
                top: 0;
                z-index: 1500;
                width: 100%;
                height: 100%;
                background-color: var(--gray600);
                opacity: 0.1;
            }
            </style>
            
            <div class="bg-black"></div>
            
            <div class="alert-container">
            <div class="alert">
                <div class="alert-text">
                    <p>` +
                alertTexts +
                ` 되었습니다.</p>
                </div>
                <div class="alert-btn-container" style="">
                    <button class="alert-btn btn btn-full">확인</button>
                </div>
            </div>
            </div>
            `;
        }
    }

    customElements.define('alert-components', customClass);
}
