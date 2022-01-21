function reviewCardComponents() {
    const htmlTemplate = `
    <div class="review-card">
        <span>
            <img src="/TheGreatCatsby-Publishing/src/img/user/index/image1.jpg">
        </span>
        <div class="review-info-container">
            <div class="review-info">
                <div class="review-info-star">
                    <span class="material-icons-outlined text-sm"> star </span>
                    <span class="material-icons-outlined text-sm"> star </span>
                    <span class="material-icons-outlined text-sm"> star </span>
                    <span class="material-icons-outlined text-sm"> star </span>
                    <span class="material-icons-outlined text-sm"> star_rate </span>
                </div>
                <ul>
                    <li class="text-sm">구매인증됨</li>
                    <li class="text-sm">2021.12.22</li>
                </ul>
            </div>
            <p class="review-username text-sm">노*재</p>
            <p class="text-base">항상 잘 먹고 있어요~ 식감이 바삭거려서인지 아이가 좋아해요.</p>
        </div>
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

        /* 리뷰 카드 영역 */
        .review-card {
            margin-top: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--gray300);
            display: flex;
        }

        /* 이미지 크기 */
        .review-card img {
            width: 120px;
        }

        /* 리뷰 작성시 상품 정보 영역 */
        .review-info-container {
            display: flex;
            flex-direction: column;
            margin-left: 30px;
        }

        .review-info {
            display: flex;
            flex-direction: row;
        }

        .review-info ul {
            display: flex;
            flex-direction: row;
        }

        .review-card li, .review-username {
            color: var(--gray400);
        }

        .review-card li {
            border-right: 1px solid var(--gray300);
            padding: 0 7px 0 7px;
            height: 20px;
        }

        .review-card li:last-child {
            border-right: none;
        }

        /* 별 색상 */
        .material-icons-outlined {
            color: var(--yellow);
        }

        /* 문단별 여백 */
        .review-info-container p {
            padding: 3px 0 3px 0;   
        }
        </style>

        `;
        
    const template = document.createElement("template");
    template.innerHTML += htmlTemplate + cssTemplate;

    class reviewCardClass extends HTMLElement {
        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.render();
        }

        render() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define("review-card-components", reviewCardClass);
}

reviewCardComponents();
