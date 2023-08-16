const categories = ['커피', '음료', '차', '스무디', '에이드'];

const menuItems = {
    '커피': [
        { name: '아메리카노', price: 3000, imageSrc: 'src/menu_Image/아메리카노.png' },
        { name: '카페 라떼', price: 4000, imageSrc: 'src/menu_Image/카페라떼.png' },
        { name: '바닐라 라떼', price: 4500, imageSrc: 'src/menu_Image/바닐라라떼.png' },
        { name: '카페 모카', price: 3000, imageSrc: 'src/menu_Image/카페모카.png' },
        { name: '에스프레소', price: 5000, imageSrc: 'src/menu_Image/에스프레소.png' },
        { name: '콜드블루', price: 5000, imageSrc: 'src/menu_Image/콜드블루.png' },
        { name: '아포카토', price: 6000, imageSrc: 'src/menu_Image/아포카토.png' }
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

const detailInfoList = {'카페 라떼':{name:'카페 라떼(차갑게/따뜻하게) 가능',info:'커피와 우유를 섞은 음료',
                    materials:'에스프레소, 우유',nutrient:'탄수화물 10g, 지방 6g, 나트륨 75g',kcal:'143 kcal',
                    caution:'카페인 들어있음'},
                    '아메리카노':{name:'아메리카노(차갑게/따뜻하게) 가능',info:'나는야 커피 ><',
                    materials:'에스프레소, 물',nutrient:'카페인 20kg',kcal:'0 kcal',
                    caution:'카페인 들어있음'}};
const optionInfoList = {'카페 라떼':{option1:'1. 온도(차갑게/따뜻하게)',option2:'2. 음료 크기',option3:'3. 원두',
option4:'4. 포장'},
'아메리카노':{option1:'1. 온도(차갑게/따뜻하게)',option2:'2. 음료 크기',option3:'3. 원두',
option4:'4. 포장'}};

const optionChoiceList = {option1_1:'따뜻하게',option1_1_ImageSrc:'src/option/option1_1.png',
option1_2:'차갑게',option1_2_ImageSrc:'src/option/option1_2.png',
option2_1:'보통(400ml)',option2_1_ImageSrc:'src/option/option2_1.png',
option2_2:'크게(650ml)',option2_2_ImageSrc:'src/option/option2_2.png',
option3_1:'아로마 노트',option3_1_ImageSrc:'src/option/option3_1.png',
option3_2:'디 카페인',option3_2_ImageSrc:'src/option/option3_2.png',
option4_1:'일회용컵',option4_1_ImageSrc:'src/option/option4_1.png',
option4_2:'개인컵',option4_2_ImageSrc:'src/option/option4_2.png',
option4_3:'매장컵',option4_3_ImageSrc:'src/option/option4_3.png'}


let basketMenuList = [];
let totalPrice = 0;

// 초기 크기 설정
window.resizeTo(500, 1000);

// 크기 변경 방지
window.addEventListener("resize", function() {
    window.resizeTo(500, 1000);
});



// 카테고리 목록 표시
const categoriesList = document.querySelector('.categories');

categories.forEach(category => {
    categoriesList.innerHTML += `<h1>${category}</h1>`;
});

// 박스 생성 함수
function createBox(imageSrc, name, price) {
    function optionBox(){ //이벤트 핸들러는 계속해서 사용됨
        console.log(`imageContainer ${name} is clicked!`);
        var modal = document.getElementById("modal");
        modal.innerHTML = '';  // 모달의 내용 제거
        modal.style.display = "flex";

        const optionModal = document.createElement('div');
        optionModal.classList.add('option-modal');

        const optionModalHeadline = document.createElement('div');
        optionModalHeadline.classList.add('option-modal-headline');
        const optionModalHeadline_h = document.createElement('h');
        optionModalHeadline_h.textContent = "상세 선택";
        optionModalHeadline.appendChild(optionModalHeadline_h);
        optionModal.appendChild(optionModalHeadline);

        const optionModalContainer = document.createElement('div');
        optionModalContainer.classList.add('option-modal-container');

        const optionModalInfoContainer = document.createElement('div');
        optionModalInfoContainer.classList.add('option-modal-info-container');

        const optionModalInfo = document.createElement('div');
        optionModalInfo.classList.add('option-modal-info');

        const optionModalInfo_Image = document.createElement('img');
        optionModalInfo_Image.src = imageSrc;
        const optionModalInfo_Name = document.createElement('h');
        optionModalInfo_Name.textContent = name;
        optionModalInfo.appendChild(optionModalInfo_Image);
        optionModalInfo.appendChild(optionModalInfo_Name);
        optionModalInfoContainer.appendChild(optionModalInfo);

        const optionModalInfo_Price = document.createElement('h');
        optionModalInfo_Price.classList.add('option-modal-info-price');
        optionModalInfo_Price.textContent = price+"원";
        optionModalInfoContainer.appendChild(optionModalInfo_Price);


        optionModalContainer.appendChild(optionModalInfoContainer);
        

        /////

        const optionModalOption =  document.createElement('div');
        optionModalOption.classList.add('option-modal-option');

        // 옵션 텍스트의 키를 배열로 만듭니다.
        const optionKeys = ['option1', 'option2', 'option3', 'option4'];

        const checkImagePath = "src/option/check.png";  // 체크 이미지의 경로를 설정하세요.
        let selectedOptions = [];  // 선택된 옵션들을 저장할 배열

        // 각 키에 대해 반복합니다.
        for(let i = 0; i < optionKeys.length; i++) {

            const optionModalOption_H = document.createElement("h");
            optionModalOption_H.textContent = optionInfoList[name][optionKeys[i]];
            optionModalOption.appendChild(optionModalOption_H);

            const optionChoices = [`${optionKeys[i]}_1`, `${optionKeys[i]}_2`];
            if(i == 3) { // option4는 세 개의 선택지가 있음
                optionChoices.push(`${optionKeys[i]}_3`);
            }

            const optionModalChoice = document.createElement("div");
            optionModalChoice.classList.add('option-modal-option-choice');

            for(let j = 0; j < optionChoices.length; j++) {
                const optionGroup = document.createElement('div');
                optionGroup.classList.add('boxContainer');
                optionGroup.style.position = 'relative';

                const optionBox = document.createElement('div');  // 이것을 div로 바꿉니다.
                optionBox.classList.add('boxImg');
                optionBox.style.backgroundImage = 'url("src/option/optionbox.svg")';

                const optionImg = document.createElement('img');
                optionImg.classList.add('optionImg');
                optionImg.src = optionChoiceList[optionChoices[j] + '_ImageSrc'];

                const optionText = document.createElement('span');  // 텍스트를 담을 span 요소 생성
                optionText.textContent = optionChoiceList[optionChoices[j]];
                optionText.style.textAlign = 'center';
                
                const checkImage = document.createElement('img');
                checkImage.classList.add('checkImg');
                checkImage.style.position = "absolute";
                checkImage.style.top = "50%"; // 상단에서 50% 위치 (상대적으로)
                checkImage.style.left = "50%"; // 왼쪽에서 50% 위치 (상대적으로)
                checkImage.style.transform = "translate(-50%, -50%)"; // 이미지의 중앙을 정확한 위치로 조정
                checkImage.style.zIndex = '1';

                checkImage.src = checkImagePath;
                checkImage.style.display = "none";  // 초기에 체크 이미지 숨김
                optionGroup.appendChild(checkImage);

                

                optionGroup.addEventListener('click', function() {
                    // 해당 optionModalChoice의 체크 이미지 숨기기
                    const sameGroupOptions = optionModalChoice.querySelectorAll(`.checkImg`);
                    sameGroupOptions.forEach(img => img.style.display = "none");
                    checkImage.style.display = "block"; // 클릭한 옵션의 체크 이미지 표시

                    // _ImageSrc 제거하여 옵션 키 얻기
                    const optionKeyWithoutImageSrc = optionChoices[j];
                    const selectedOptionValue = optionChoiceList[optionKeyWithoutImageSrc];

                    // 현재 그룹의 선택된 옵션을 selectedOptions 배열에서 제거
                    const optionsToBeRemoved = optionChoices.map(choice => optionChoiceList[choice]);
                    selectedOptions = selectedOptions.filter(option => !optionsToBeRemoved.includes(option));


                    // 새로 선택된 옵션 추가
                    selectedOptions.push(selectedOptionValue);
                    console.log(selectedOptions);
                    
                });



                
                optionBox.appendChild(optionImg);   // 박스 안에 이미지 추가
                optionBox.appendChild(optionText);  // 박스 안에 텍스트 추가
                optionGroup.appendChild(optionBox); // 그룹에 박스 추가
                
                optionModalChoice.appendChild(optionGroup);
            }

            optionModalOption.appendChild(optionModalChoice);
        }

        optionModalContainer.appendChild(optionModalOption);

        const optionModalBtn = document.createElement('div');
        optionModalBtn.classList.add('option-modal-btn');

        const optionModalBackBtn = document.createElement('div');
        optionModalBackBtn.classList.add('option-modal-back-btn');
        optionModalBackBtn.textContent = "이전";
        optionModalBackBtn.addEventListener('click', function() {
            modal.innerHTML = '';  // 모달의 내용 제거
            modal.style.display = "none";
        });

        
        const optionModalBasketBtn = document.createElement('div');
        optionModalBasketBtn.classList.add('option-modal-basket-btn');
        optionModalBasketBtn.textContent = "담기";
        
        optionModalBasketBtn.addEventListener('click', function() {
            console.log("담기 버튼 클릭됨");
            if (selectedOptions.length === 4) {
                modal.innerHTML = '';  // 모달의 내용 제거
                modal.style.display = "none";
                const basketMenus = document.querySelector('.basket-menus');
                const basketMenu = document.createElement('div');
                basketMenu.classList.add('basket-menu');
                const basketMenuCancel = document.createElement('img');
                basketMenuCancel.classList.add('basket-menu-cancel');
                basketMenuCancel.src = 'src/svg/x-circle.svg';
                basketMenu.appendChild(basketMenuCancel);
                //cancel 클릭 이벤트는 아래에서 구현
                const basketMenuInfo = document.createElement('div');
                basketMenuInfo.classList.add('basket-menu-info');
                const basketMenuInfoImage = document.createElement('img');
                basketMenuInfoImage.src = imageSrc;

                const basketMenuInfoName = document.createElement('p1');
                basketMenuInfoName.textContent = name;  
                const basketMenuInfoPrice = document.createElement('p2');
                basketMenuInfoPrice.textContent = price+"원";  

                basketMenuInfo.appendChild(basketMenuInfoImage);
                basketMenuInfo.appendChild(basketMenuInfoName);
                basketMenuInfo.appendChild(basketMenuInfoPrice);

                const basketMenuDetail = document.createElement('div');
                basketMenuDetail.classList.add('basket-menu-detail');
                const basketMenuDetailOption1 =  document.createElement('p');
                basketMenuDetailOption1.textContent = "온도: " +selectedOptions[0];  
                const basketMenuDetailOption2 = document.createElement('p');
                basketMenuDetailOption2.textContent = "크기: " +selectedOptions[1]; 
                const basketMenuDetailOption3 = document.createElement('p');
                basketMenuDetailOption3.textContent = "원두: " +selectedOptions[2];  
                const basketMenuDetailOption4 = document.createElement('p');
                basketMenuDetailOption4.textContent = "포장: " +selectedOptions[3]; 

                basketMenuDetail.appendChild(basketMenuDetailOption1);
                basketMenuDetail.appendChild(basketMenuDetailOption2);
                basketMenuDetail.appendChild(basketMenuDetailOption3);
                basketMenuDetail.appendChild(basketMenuDetailOption4);

                basketMenu.appendChild(basketMenuInfo);
                basketMenu.appendChild(basketMenuDetail);

                basketMenus.appendChild(basketMenu);
                let basketMenuItem = {
                    imageSrc: imageSrc,
                    name: name,
                    price: price,
                    selectedOption1: selectedOptions[0],
                    selectedOption2: selectedOptions[1],
                    selectedOption3: selectedOptions[2],
                    selectedOption4: selectedOptions[3]
                };
                basketMenuList.push(basketMenuItem);
                console.log(basketMenuList);

                totalPrice = totalPrice+price;
                const totalPriceElement = document.getElementById("total-price");
                totalPriceElement.textContent = totalPrice+" 원";

                basketMenuCancel.addEventListener('click', function() {
                    // 1. 해당 basketMenu를 DOM에서 삭제하기
                    basketMenu.remove();
                
                    // 2. basketMenuList 배열에서 해당 basketMenuItem을 찾아 삭제하기
                    const index = basketMenuList.indexOf(basketMenuItem);
                    if (index !== -1) {
                        basketMenuList.splice(index, 1);
                    }
                
                    // 3. totalPrice에서 해당 메뉴의 가격을 빼기
                    totalPrice -= price;
                    const totalPriceElement = document.getElementById("total-price");
                    totalPriceElement.textContent = totalPrice + " 원";
                });
                

                }                
            
        });
        
        

        optionModalBtn.appendChild(optionModalBackBtn);
        optionModalBtn.appendChild(optionModalBasketBtn);

        

        optionModal.appendChild(optionModalContainer);
        optionModal.appendChild(optionModalBtn);

        modal.appendChild(optionModal);

    }

    // 함수 끝

    const container = document.querySelector('.menu-items');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = "src/svg/order/itemBox.svg"; //메뉴 상자

    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('overlay'); //덮어쓰기 시작
///
    const overlayMenu = document.createElement('div');
    overlayMenu.classList.add('overlaymenu');

    const overlayZoomin = document.createElement('div');
    overlayZoomin.classList.add('zoom-in-image'); // img class="zoom-in-image"
    overlayZoomin.textContent = '설명 보기';

    overlayZoomin.addEventListener('click', function(event) { //이벤트 핸들러는 계속해서 사용됨
        console.log(`Zoom-in image for ${name} is clicked!`);
        console.log(detailInfoList[name].name);
        var modal = document.getElementById("modal");
        modal.style.display = "flex";

        const detailModal = document.createElement('div');
        detailModal.classList.add('detail-modal');

        const detailModalInfo = document.createElement('div');
        detailModalInfo.classList.add('detail-modal-info');
        const detailModalInfo_Image = document.createElement('img');
        detailModalInfo_Image.src = imageSrc;
        const detailModalInfo_Name = document.createElement('h1');
        detailModalInfo_Name.textContent = detailInfoList[name].name;
        const detailModalInfo_Info = document.createElement('p');
        detailModalInfo_Info.textContent = ":"+detailInfoList[name].info;

        detailModalInfo.appendChild(detailModalInfo_Image);
        detailModalInfo.appendChild(detailModalInfo_Name);
        detailModalInfo.appendChild(detailModalInfo_Info);

        const detailModalDetail =  document.createElement('div');
        detailModalDetail.classList.add('detail-modal-detail');
        const detailModalDetail_Name = document.createElement("h1");
        detailModalDetail_Name.textContent = "상세 정보";
        const detailModalDetail_Materials = document.createElement("p1");
        detailModalDetail_Materials.textContent = "원재료명: "+detailInfoList[name].materials;
        const detailModalDetail_Nutrient = document.createElement("p1");
        detailModalDetail_Nutrient.textContent = "영양성분: "+detailInfoList[name].nutrient;
        const detailModalDetail_Kacl = document.createElement("p1");
        detailModalDetail_Kacl.textContent = "칼로리: "+detailInfoList[name].kcal;
        const detailModalDetail_Caution = document.createElement("p2");
        detailModalDetail_Caution.textContent = "주의 사항: " + detailInfoList[name].caution;
        
        detailModalDetail.appendChild(detailModalDetail_Name);
        detailModalDetail.appendChild(detailModalDetail_Materials);
        detailModalDetail.appendChild(detailModalDetail_Nutrient);
        detailModalDetail.appendChild(detailModalDetail_Kacl);
        detailModalDetail.appendChild(detailModalDetail_Caution);

        const detailModalBtn = document.createElement('div');
        detailModalBtn.classList.add('detail-modal-btn');

        const detailModalBtn_back = document.createElement('div');
        detailModalBtn_back.classList.add('detail-modal-btn-back');
        detailModalBtn_back.textContent = "설명 닫기";
        detailModalBtn_back.addEventListener('click', function() {
            modal.innerHTML = '';  // 모달의 내용 제거
            modal.style.display = "none";
        });

        const detailModalBtn_choice = document.createElement('div');
        detailModalBtn_choice.classList.add('detail-modal-btn-choice');
        detailModalBtn_choice.textContent = "선택하기";
        detailModalBtn_choice.addEventListener('click', optionBox); 
        
        
        detailModalBtn.appendChild(detailModalBtn_back);
        detailModalBtn.appendChild(detailModalBtn_choice);

        detailModal.appendChild(detailModalInfo);
        detailModal.appendChild(detailModalDetail);
        detailModal.appendChild(detailModalBtn);

        modal.appendChild(detailModal);
       // 각 메뉴의 상세메뉴 -> 모달로..

       // 이벤트 버블링을 막아서 부모 요소로 전파되지 않게 합니다.
        event.stopPropagation();
    });

    const overlayImage = document.createElement('img');
    overlayImage.classList.add('menu-image');
    overlayImage.src = imageSrc; //메뉴 사진
///   
    const overlayInfoContainer = document.createElement('div');
    overlayInfoContainer.classList.add('overlayinfo');

    const overlayName = document.createElement('p1');
    overlayName.textContent = name; // 메뉴 이름

    const overlayPrice = document.createElement('p2');
    overlayPrice.innerHTML = "&nbsp" + price + "원"; //메뉴 가격
///
    overlayMenu.appendChild(overlayZoomin);
    overlayMenu.appendChild(overlayImage);
    overlayContainer.appendChild(overlayMenu);

    overlayInfoContainer.appendChild(overlayName);
    overlayInfoContainer.appendChild(overlayPrice);
    overlayContainer.appendChild(overlayInfoContainer);

    imageContainer.appendChild(image);
    imageContainer.appendChild(overlayContainer);

    imageContainer.addEventListener('click', optionBox); 

    /////// workSpace
    container.appendChild(imageContainer);
}

const menuItemsList = document.querySelector('.menu-items');
let selectedCategoryElement = null;

// 카테고리를 표시하는 함수
function displayCategoryItems(categoryElement) {
    const selectedCategory = categoryElement.textContent;

    // 이전에 선택된 카테고리의 스타일을 원래대로 복구
    if (selectedCategoryElement) {
        selectedCategoryElement.style.color = ""; // 원래 색상으로 변경
        selectedCategoryElement.style.fontWeight = "500";
    }

    // 선택된 카테고리의 스타일을 변경
    categoryElement.style.color = "#F29247"; // 예를 들어, 빨간색으로 변경
    categoryElement.style.fontWeight = "900";

    // 선택된 카테고리를 추적
    selectedCategoryElement = categoryElement;

    // 이전에 생성된 메뉴 아이템들을 제거
    while (menuItemsList.firstChild) {
        menuItemsList.removeChild(menuItemsList.firstChild);
    }

    // 해당 메뉴를 표시
    menuItems[selectedCategory].forEach(item => {
        createBox(item.imageSrc, item.name, item.price);
    });
}

// 카테고리 클릭 이벤트
categoriesList.addEventListener('click', function (event) {
    displayCategoryItems(event.target);
});

// 페이지가 로드되면 기본적으로 0번 인덱스의 카테고리를 표시
window.addEventListener('DOMContentLoaded', (event) => {
    const defaultCategory = categoriesList.children[0];
    displayCategoryItems(defaultCategory);
});



// DOM에서 order-btn 클래스를 가진 요소를 선택합니다.
const orderBtn = document.querySelector('.order-btn');

orderBtn.addEventListener('click', function() {
    console.log('Order button clicked!');

    var modal = document.getElementById("modal");
    modal.style.display = "flex";

    const orderCheckModal = document.createElement('div');
    orderCheckModal.classList.add('ordercheck-modal');

    const orderCheckModalHeader = document.createElement('div');
    orderCheckModalHeader.classList.add('ordercheck-modal-headerline');
    orderCheckModalHeader.textContent = "주문내역을 확인해주세요";

    const orderList = document.createElement('div');
    orderList.classList.add('orderlist');

    // 중복 항목 제거를 위한 도우미 함수
    const getUniqueItems = (array) => {
        let uniqueItems = [];
        let seenNames = new Set();

        array.forEach(item => {
            if (!seenNames.has(item.name)) {
                seenNames.add(item.name);
                uniqueItems.push(item);
            }
        });

        return uniqueItems;
    };

    // 중복 항목을 제거한 리스트
    const uniqueBasketMenuList = getUniqueItems(basketMenuList);

    let totalItemCount = 0; 
    let totalPrice = 0;

    // 각 상품에 대한 상세 내역을 생성합니다.
    uniqueBasketMenuList.forEach((basketItem) => {
        const orderDetail = document.createElement('div');
        orderDetail.classList.add('orderdetail');

        const orderDetail_Img_Container = document.createElement('div');
        orderDetail_Img_Container.classList.add('orderdetail-img');

        const orderDetail_Img = document.createElement('img');
        orderDetail_Img.src = basketItem.imageSrc;

        const orderDetailText = document.createElement('div');
        orderDetailText.classList.add('orderdetail-text');

        const orderDetail_Name = document.createElement('p');
        orderDetail_Name.textContent = basketItem.name;

        const orderDetail_Value =   document.createElement('div');
        orderDetail_Value.classList.add('orderdetail-text-value');

        const orderDetail_amount = document.createElement('p1');

        // 이름 기준으로 상품 개수를 계산
        const itemCount = basketMenuList.reduce((acc, item) => {
            if (item.name === basketItem.name) {
                acc++;
            }
            return acc;
        }, 0);
        orderDetail_amount.textContent = `${itemCount}개`;

        const orderDetail_Price = document.createElement('p2');
        // 총 가격을 계산 (가격 * 개수)
        orderDetail_Price.textContent = `${itemCount * basketItem.price}원`;

        orderDetail_Value.appendChild(orderDetail_amount);
        orderDetail_Value.appendChild(orderDetail_Price);

        orderDetailText.appendChild(orderDetail_Name);
        orderDetailText.appendChild(orderDetail_Value);
        

        orderDetail_Img_Container.appendChild(orderDetail_Img);
        orderDetail.appendChild(orderDetail_Img_Container);
        orderDetail.appendChild(orderDetailText);
        orderList.appendChild(orderDetail);

        totalItemCount += itemCount;
        totalPrice += itemCount * basketItem.price;
    });

    const order_hr = document.createElement('hr');
    order_hr.classList.add("order-hr");
    const orderResult = document.createElement('div');
    orderResult.classList.add('orderresult');
    const totalQuantityLabel = document.createElement('h1');
    totalQuantityLabel.textContent = "총수량: ";

    const totalQuantityValue = document.createElement('h2');
    totalQuantityValue.textContent = totalItemCount+" 개";

    const totalPriceLabel = document.createElement('h1');
    totalPriceLabel.textContent = "총 금액: ";

    const totalPriceValue = document.createElement('h2');
    totalPriceValue.textContent = totalPrice+" 원";

    orderResult.appendChild(totalQuantityLabel);
    orderResult.appendChild(totalQuantityValue);
    orderResult.appendChild(totalPriceLabel);
    orderResult.appendChild(totalPriceValue);
    

    const orderButtonContainer = document.createElement('div');
    orderButtonContainer.classList.add('order-btn-container');
    const orderBackButton = document.createElement('div');
    orderBackButton.classList.add('order-btn-back');
    orderBackButton.textContent = "이전";

    orderBackButton.addEventListener('click', function() {
        modal.innerHTML = '';  // 모달의 내용 제거
        modal.style.display = "none";
    });

    const orderContinueButton = document.createElement('div');
    orderContinueButton.classList.add('order-btn-continue');
    orderContinueButton.textContent = "결제하기";

    let discount = 0;
    
    orderContinueButton.addEventListener('click', function() {
        modal.innerHTML = '';  // 모달의 내용 제거
        const paymentModal = document.createElement('div');
        paymentModal.classList.add('payment');

        const paymentModalHeader = document.createElement('div');
        paymentModalHeader.classList.add('ordercheck-modal-headerline');// 재활용 함.
        paymentModalHeader.textContent = "결제방법을 선택해주세요"; 

        const paymentIndex = document.createElement('div');
        paymentIndex.classList.add('payment-index');

        const paymentIndexTotal = document.createElement('div');
        paymentIndexTotal.classList.add('payment-index-text');

        const paymentIndexTotal_Name = document.createElement('h1');
        paymentIndexTotal_Name.textContent = "총 주문금액"; 
        const paymentIndexTotal_Price = document.createElement('h2');
        paymentIndexTotal_Price.textContent = totalPrice+" 원";
        paymentIndexTotal.appendChild(paymentIndexTotal_Name);
        paymentIndexTotal.appendChild(paymentIndexTotal_Price);

        const paymentIndexDC = document.createElement('div');
        paymentIndexDC.classList.add('payment-index-text');

        const paymentIndexDC_Name = document.createElement('h1');
        paymentIndexDC_Name.textContent = "할인금액"; 
        const paymentIndexDC_Price = document.createElement('h2');
        paymentIndexDC_Price.textContent = discount+" 원";
        paymentIndexDC.appendChild(paymentIndexDC_Name);
        paymentIndexDC.appendChild(paymentIndexDC_Price);

        const paymentIndexPayment = document.createElement('div');
        paymentIndexPayment.classList.add('payment-index-text');

        const paymentIndexPayment_Name = document.createElement('h1');
        paymentIndexPayment_Name.textContent = "결제금액"; 
        const paymentIndexPayment_Price = document.createElement('h2');
        paymentIndexPayment_Price.textContent = (totalPrice-discount) +" 원";
        paymentIndexPayment.appendChild(paymentIndexPayment_Name);
        paymentIndexPayment.appendChild(paymentIndexPayment_Price);

        paymentIndex.appendChild(paymentIndexTotal);
        paymentIndex.appendChild(paymentIndexDC);
        paymentIndex.appendChild(paymentIndexPayment);

        const payment_hr = document.createElement('hr');
        payment_hr.classList.add("order-hr"); //재활용

        const paymentMethod = document.createElement('div');
        paymentMethod.classList.add('payment-method');
        const paymentMethodOption1 = document.createElement('div');
        paymentMethodOption1.classList.add('payment-method-option');
        const paymentMethodOption1_Img = document.createElement('img');
        paymentMethodOption1_Img.src =  "src/creditcard.png";
        const paymentMethodOption1_Name = document.createElement('h1');
        paymentMethodOption1_Name.textContent = "신용카드";
        
        paymentMethodOption1.appendChild(paymentMethodOption1_Img);
        paymentMethodOption1.appendChild(paymentMethodOption1_Name);

        paymentMethodOption1.addEventListener('click', function() {
            window.location.href = "creditcard.html";
        });

        const paymentMethodOption2 = document.createElement('div');
        paymentMethodOption2.classList.add('payment-method-option');
        const paymentMethodOption2_Img = document.createElement('img');
        paymentMethodOption2_Img.src =  "src/coupon.png";
        const paymentMethodOption2_Name = document.createElement('h1');
        paymentMethodOption2_Name.textContent = "모바일 쿠폰";
        paymentMethodOption2.appendChild(paymentMethodOption2_Img);
        paymentMethodOption2.appendChild(paymentMethodOption2_Name);

        paymentMethod.appendChild(paymentMethodOption1);
        paymentMethod.appendChild(paymentMethodOption2);

        const paymentCancelBtn = document.createElement('div');
        paymentCancelBtn.classList.add('payment-cancel-btn');
        paymentCancelBtn.textContent = "취소";

        paymentCancelBtn.addEventListener('click', function() {
            modal.innerHTML = '';  // 모달의 내용 제거
            modal.style.display = "none";
        });


        
        paymentModal.appendChild(paymentModalHeader);
        paymentModal.appendChild(paymentIndex);
        paymentModal.appendChild(payment_hr);
        paymentModal.appendChild(paymentMethod);
        paymentModal.appendChild(paymentCancelBtn);

        modal.appendChild(paymentModal);

    });

    orderButtonContainer.appendChild(orderBackButton); 
    orderButtonContainer.appendChild(orderContinueButton);

    orderCheckModal.appendChild(orderCheckModalHeader);
    orderCheckModal.appendChild(orderList);
    orderCheckModal.appendChild(order_hr);
    orderCheckModal.appendChild(orderResult);
    orderCheckModal.appendChild(orderButtonContainer);

    modal.appendChild(orderCheckModal);

});
