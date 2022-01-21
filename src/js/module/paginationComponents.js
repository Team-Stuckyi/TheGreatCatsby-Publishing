function paginationComponents() {
    const htmlTemplate = `
        <div class="pagination-container">
            <ul class="pagination">
            </ul>
        </div>
    `;

    const cssTemplate = `
        <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="/TheGreatCatsby-Publishing/src/css/reset.css" />
        <link rel="stylesheet" href="/TheGreatCatsby-Publishing/src/css/common.css" />
        <link rel="stylesheet" href="/TheGreatCatsby-Publishing/src/css/user/tag.css" />

        <style>
        /* 페이지네이션 영역 */
        .pagination-container {
            display: flex;
            justify-content: center;
        }

        .pagination img {
            width: 12px;
            margin: 0 10px 0 10px;
            padding: 0 10px 0 10px;
            cursor: pointer;
        }

        .page-num {
            display: inline-block;
            margin: 0 13px 0 13px;
            width: 10px;
            height: 10px;
            padding: 10px 10px 15px 10px;
            text-align: center;
            cursor: pointer;
        }
        </style>
        `;
        
    const template = document.createElement("template");
    template.innerHTML += htmlTemplate + cssTemplate;

    let pageNumContainer = [];
    let clickIndex = 0;
    const prevBtn = document.createElement('img');
    const nextBtn = document.createElement('img');

    prevBtn.src = "/TheGreatCatsby-Publishing/src/img/user/index/left-arrow.png"
    nextBtn.src = "/TheGreatCatsby-Publishing/src/img/user/index/right-arrow.png"
    prevBtn.classList.add('prev-btn');
    nextBtn.classList.add('next-btn');

    class paginationClass extends HTMLElement {

        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.render();
        }

        //Pagination-bar 생성 함수
        createPaginationBar(startIndex, length) {

            pageNumContainer = [];

            //Pagination 버튼 생성
            const pagination = this.shadowRoot.querySelector('.pagination');
            pagination.appendChild(prevBtn);

            //Page number 생성
            for (let i = startIndex; i <= startIndex + length -1; i++) {
                const pageNum = document.createElement('li');
                pageNum.classList.add('page-num');
                pageNum.innerHTML = i;
                pagination.appendChild(pageNum);
                pageNumContainer.push(pageNum);
            }

            pagination.appendChild(nextBtn);

        }

        //pageNum 초기 설정
        makeBtnGray(index) {
            pageNumContainer[index].style.border = '1px, solid, var(--gray100)';
            pageNumContainer[index].style.borderRadius = '5px';
            pageNumContainer[index].style.backgroundColor = 'var(--gray100)';
        }

        //Click CSS reset
        makeAllWhite() {
            pageNumContainer.forEach (pageNum => {
                pageNum.style.border = '';
                pageNum.style.borderRadius = '';
                pageNum.style.backgroundColor = '';
            })
        };

        render() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));

            // //Last page index 계산 함수
            // const totalCard = 307;
            // const availableCardCount = 20;
            // const availablePaginaionCount = 10;

            // function calLastPaginationIndex () {
            //     return Math.ceil(totalCard / availableCardCount);
            // }

            this.createPaginationBar(1, 7);

            this.makeBtnGray(clickIndex);

            //Pagination click event
            pageNumContainer.forEach (pageNum => {
                pageNum.addEventListener('click', () => {
                    this.makeAllWhite();
                    pageNum.style.border = '1px, solid, var(--gray100)';
                    pageNum.style.borderRadius = '5px';
                    pageNum.style.backgroundColor = 'var(--gray100)';
                    clickIndex = parseInt(pageNum.innerHTML) -1;
                })
            });

            //prev, next btn click event
            prevBtn.addEventListener('click', () => {
                if(clickIndex > 0) {
                    clickIndex -= 1;
                    this.makeAllWhite();
                    this.makeBtnGray(clickIndex);
                }
            });

            nextBtn.addEventListener('click', () => {
                if(clickIndex < 6) {
                    clickIndex += 1;
                    this.makeAllWhite();
                    this.makeBtnGray(clickIndex);
                }
            });
        }
    }

    customElements.define("pagination-components", paginationClass);
}

paginationComponents();
