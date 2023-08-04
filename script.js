const categories = ['커피', '음료', '차', '스무디', '에이드'];

const menuItems = {
    '커피': [
        { name: '아메리카노', price: 3000, imageSrc: 'menu_Image/ame.png' },
        { name: '카페 라떼', price: 4000, imageSrc: 'menu_Image/coffelatte.png' },
        { name: '바닐라 라떼', price: 4500, imageSrc: 'menu_Image/banilalatte.png' },
        { name: '카페 모카', price: 3000, imageSrc: 'menu_Image/cafemoca.png' },
        { name: '카라멜 마끼아또', price: 5000, imageSrc: 'menu_Image/makiyatto.png' },
        { name: '콜드블루', price: 5000, imageSrc: 'menu_Image/coldbrew.png' }
    ],
    '음료': [
        { name: '아메', price: 3000, imageSrc: 'menu_Image/ame.png' },
        { name: '카페 라떼', price: 4000, imageSrc: 'menu_Image/coffelatte.png' },
        { name: '바닐라 라떼', price: 4500, imageSrc: 'menu_Image/banilalatte.png' },
        { name: '카페 모카', price: 3000, imageSrc: 'menu_Image/cafemoca.png' },
        { name: '카라멜 마끼아또', price: 5000, imageSrc: 'menu_Image/makiyatto.png' },
        { name: '콜드블루', price: 5000, imageSrc: 'menu_Image/coldbrew.png' }
    ],
    '차': [
        { name: '아메리카노', price: 3000, imageSrc: 'menu_Image/ame.png' },
        { name: '카페 라떼', price: 4000, imageSrc: 'menu_Image/coffelatte.png' },
        { name: '바닐 떼', price: 4500, imageSrc: 'menu_Image/banilalatte.png' },
        { name: '카페 모카', price: 3000, imageSrc: 'menu_Image/cafemoca.png' },
        { name: '카라멜 마끼아또', price: 5000, imageSrc: 'menu_Image/makiyatto.png' },
        { name: '콜드블루', price: 5000, imageSrc: 'menu_Image/coldbrew.png' }
    ],
    '스무디': [
        { name: '아메리카노', price: 3000, imageSrc: 'menu_Image/ame.png' },
        { name: '카라떼', price: 4000, imageSrc: 'menu_Image/coffelatte.png' },
        { name: '바닐라 라떼', price: 4500, imageSrc: 'menu_Image/banilalatte.png' },
        { name: '카페 모카', price: 3000, imageSrc: 'menu_Image/cafemoca.png' },
        { name: '카라멜 마끼아또', price: 5000, imageSrc: 'menu_Image/makiyatto.png' },
        { name: '콜드블루', price: 5000, imageSrc: 'menu_Image/coldbrew.png' }
    ],
    '에이드': [
        { name: '아메리카노', price: 3000, imageSrc: 'menu_Image/ame.png' },
        { name: '카페 라떼', price: 4000, imageSrc: 'menu_Image/coffelatte.png' },
        { name: '바닐라 라떼', price: 4500, imageSrc: 'menu_Image/banilalatte.png' },
        { name: '카페 모카', price: 3000, imageSrc: 'menu_Image/cafemoca.png' },
        { name: '카라멜 마끼아또', price: 5000, imageSrc: 'menu_Image/makiyatto.png' },
        { name: '콜드루', price: 5000, imageSrc: 'menu_Image/coldbrew.png' }
    ]
};

// 카테고리 목록 표시
const categoriesList = document.querySelector('.categories');

categories.forEach(category => {
    categoriesList.innerHTML += `<h1>${category}</h1>`;
});

// 박스 생성 함수
function createBox(imageSrc, name, price) {
    const container = document.querySelector('.menu-items');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = "svg/order/itemBox.svg"; //메뉴 상자
    imageContainer.appendChild(image);

    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('overlay'); //덮어쓰기 시작
///
    const overlayMenu = document.createElement('div');
    overlayMenu.classList.add('overlaymenu');

    const overlayZoomin = document.createElement('img');
    overlayZoomin.classList.add('zoom-in-image'); // img class="zoom-in-image"
    overlayZoomin.src = "svg/order/zoom-in.svg";

    const overlayImage = document.createElement('img');
    overlayImage.classList.add('menu-image'); // 추가한 클래스
    overlayImage.src = imageSrc; //메뉴 사진
///   
    const overlayInfoContainer = document.createElement('div');
    overlayInfoContainer.classList.add('overlayinfo');

    const overlayName = document.createElement('p');
    overlayName.textContent = name; // 메뉴 이름

    const overlayPrice = document.createElement('p');
    overlayPrice.innerHTML = "&nbsp" + price + "원"; //메뉴 가격
///
    overlayMenu.appendChild(overlayZoomin);
    overlayMenu.appendChild(overlayImage);
    overlayContainer.appendChild(overlayMenu);

    overlayInfoContainer.appendChild(overlayName);
    overlayInfoContainer.appendChild(overlayPrice);
    overlayContainer.appendChild(overlayInfoContainer);

    
    imageContainer.appendChild(overlayContainer);

    container.appendChild(imageContainer);
}

const menuItemsList = document.querySelector('.menu-items');

let selectedCategoryElement = null;

categoriesList.addEventListener('click', function (event) {

    const selectedCategory = event.target.textContent;

    // 이전에 선택된 카테고리의 스타일을 원래대로 복구
    if (selectedCategoryElement) {
        selectedCategoryElement.style.color = ""; // 원래 색상으로 변경
        event.target.style.fontWeight = "500";
    }

    // 선택된 카테고리의 스타일을 변경
    event.target.style.color = "#F29247"; // 예를 들어, 빨간색으로 변경
    event.target.style.fontWeight = "900";

    // 선택된 카테고리를 추적
    selectedCategoryElement = event.target;

    // 이전에 생성된 메뉴 아이템들을 제거
    while (menuItemsList.firstChild) {
        menuItemsList.removeChild(menuItemsList.firstChild);
    }

    // 해당 메뉴를 표시
    menuItems[selectedCategory].forEach(item => {
        createBox(item.imageSrc, item.name, item.price);
    });
});

