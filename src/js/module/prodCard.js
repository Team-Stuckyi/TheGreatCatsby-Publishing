function cardComponents() {
    const htmlTemplate = `
    <li class="prod-card">
        <span><img src="/TheGreatCatsby-Publishing/src/img/user/index/image1.jpg"></span>
        <p class="text-sm">캣츠파인푸드 퓨레 No.107 캥거루 파우치 85g</p>
        <span class="material-icons-outlined text-sm"> star </span>
        <span class="material-icons-outlined text-sm"> star </span>
        <span class="material-icons-outlined text-sm"> star </span>
        <span class="material-icons-outlined text-sm"> star </span>
        <span class="material-icons-outlined text-sm"> star_rate </span>
        <p class="prod-price bold">3600원</p>
    </li>   
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
        /* 카드 영역 설정 */
        .prod-card {
            width: 200px;
            display: inline-block;
            margin-bottom: 50px;
        }

        /* 카드 이미지 크기 */
        .prod-card img {
            width: 200px;
        }

        /* 별 색상 */
        .material-icons-outlined {
            color: var(--yellow);
        }

        /* 가격 */
        .prod-price {
            width: 100px;
            margin: 0 0 0 50px;
            display: inline;
        }
        </style>

        `;
        
    const template = document.createElement("template");
    template.innerHTML += htmlTemplate + cssTemplate;

    class cardClass extends HTMLElement {
        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.render();
        }

        render() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define("card-components", cardClass);
}

cardComponents();
