
const burger=document.querySelector('.header__burger');const menu=document.querySelector('.menu');const header=document.querySelector('.header');const cart=document.querySelector('.cart');const cartBody=document.querySelector('.cart__body');const menuLinks=document.querySelectorAll('.menu__link');const cartCounter=document.querySelector('.cart__counter');const cartSum=document.querySelector('.cart__sum span');const cartList=document.querySelector('.cart__list');if(window.screen.width<993){document.querySelector('.menu').classList.remove('lock-padding');menuLinks.forEach(link=>{link.addEventListener('click',()=>{burger.classList.remove('header__burger--active');menu.classList.remove('menu--active');header.classList.remove('header--active');document.body.classList.remove('lock');});});}
document.addEventListener('click',e=>{if(e.target.closest('.cart__icon')){if(cartBody.classList.contains('cart__body--open')){cartBody.classList.remove('cart__body--open');header.classList.remove('header--cart');document.body.classList.remove('lock');}else{if(burger.classList.contains('header__burger--active')){burger.classList.remove('header__burger--active');menu.classList.remove('menu--active');header.classList.remove('header--active');}
cartBody.classList.add('cart__body--open');header.classList.add('header--cart');document.body.classList.add('lock');}}
if(!e.target.closest('.cart')){cartBody.classList.remove('cart__body--open');document.body.classList.remove('lock');}});burger.addEventListener('click',()=>{if(burger.classList.contains('header__burger--active')){burger.classList.remove('header__burger--active');menu.classList.remove('menu--active');header.classList.remove('header--active');document.body.classList.remove('lock');}else{burger.classList.add('header__burger--active');menu.classList.add('menu--active');header.classList.add('header--active');document.body.classList.add('lock');}});let lastScroll=0;const defaultOffset=50;const scrollPosition=()=>window.pageYOffset||document.documentElement.scrollTop;window.addEventListener('scroll',()=>{if(lastScroll>50){header.classList.add('paint');}else{header.classList.remove('paint');}
lastScroll=scrollPosition();});const elem=document.querySelector('.shop__cards');const iso=new Isotope(elem,{itemSelector:'.card',layoutMode:'fitRows',});document.querySelectorAll('.shop__btn').forEach(el=>{el.addEventListener('click',e=>{document.querySelectorAll('.shop__btn').forEach(el=>{el.classList.remove('shop__btn--active');});el.classList.add('shop__btn--active');let filter=e.currentTarget.dataset.filter;iso.arrange({filter:`${filter}`});});});document.querySelector('[data-filter=".water"]').click();new Swiper('.cert__slider',{navigation:{nextEl:'.slider__arrow-next',prevEl:'.slider__arrow-prev'},pagination:{el:'.slider__pagination',clickable:true,},watchOverflow:true,spaceBetween:24,keyboard:{enabled:true,onlyInViewport:true,},slidesPerGroup:2,breakpoints:{320:{slidesPerView:1.5,},481:{slidesPerView:2.5,},993:{slidesPerView:3,},1201:{slidesPerView:4}}});new Swiper('.action__slider',{navigation:{nextEl:'.slider__arrow-next',prevEl:'.slider__arrow-prev'},pagination:{el:'.slider__pagination',clickable:true,},watchOverflow:true,keyboard:{enabled:true,onlyInViewport:true,},});const observeItems=document.querySelectorAll('.observe');const options={root:null,treshold:0,rootMargin:'-50%'}
const observer=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){menuLinks.forEach(link=>{if(entry.target.id===link.getAttribute('href').slice(1)){link.classList.add('menu__link--active');}else{link.classList.remove('menu__link--active');}});}});},options);observeItems.forEach(item=>{observer.observe(item);});document.addEventListener("DOMContentLoaded",function(){let phoneInputs=document.querySelectorAll('input[data-tel-input]');let getInputNumbersValue=function(input){return input.value.replace(/\D/g,'');}
let onPhonePaste=function(e){let input=e.target,inputNumbersValue=getInputNumbersValue(input);let pasted=e.clipboardData||window.clipboardData;if(pasted){let pastedText=pasted.getData('Text');if(/\D/g.test(pastedText)){input.value=inputNumbersValue;return;}}}
let onPhoneInput=function(e){let input=e.target,inputNumbersValue=getInputNumbersValue(input),selectionStart=input.selectionStart,formattedInputValue="";if(!inputNumbersValue){return input.value="";}
if(input.value.length!=selectionStart){if(e.data&&/\D/g.test(e.data)){input.value=inputNumbersValue;}
return;}
if(["7","8","9"].indexOf(inputNumbersValue[0])>-1){if(inputNumbersValue[0]=="9")inputNumbersValue="7"+inputNumbersValue;let firstSymbols=(inputNumbersValue[0]=="8")?"8":"+7";formattedInputValue=input.value=firstSymbols+" ";if(inputNumbersValue.length>1){formattedInputValue+='('+inputNumbersValue.substring(1,4);}
if(inputNumbersValue.length>=5){formattedInputValue+=') '+inputNumbersValue.substring(4,7);}
if(inputNumbersValue.length>=8){formattedInputValue+='-'+inputNumbersValue.substring(7,9);}
if(inputNumbersValue.length>=10){formattedInputValue+='-'+inputNumbersValue.substring(9,11);}}else{formattedInputValue='+'+inputNumbersValue.substring(0,16);}
input.value=formattedInputValue;}
let onPhoneKeyDown=function(e){let inputValue=e.target.value.replace(/\D/g,'');if(e.keyCode==8&&inputValue.length==1){e.target.value="";}}
for(let phoneInput of phoneInputs){phoneInput.addEventListener('keydown',onPhoneKeyDown);phoneInput.addEventListener('input',onPhoneInput,false);phoneInput.addEventListener('paste',onPhonePaste,false);}});document.querySelector('.mainscreen__btn').addEventListener('click',(e)=>{e.preventDefault();cart.classList.remove('cart--empty');const priceArray=document.querySelector('.card[data-id="1"]').dataset.price.split(',').map(el=>+el);const cartObj=[{id:1,img:'./template/images/bottle01.webp',name:'ВОДА «АНТАРКТИДА ОСМО» 19л',price:150,amount:2}];const item=`
		<li class="cart__item" data-id="${cartObj[0].id}">
			<div class="cart__display"> 
				<div class="cart__image">
					<img src="${cartObj[0].img}" alt="">
				</div>
			</div>
			<div class="cart__info"> 
				<div class="cart__price">${priceArray[cartObj[0].amount - 1] * cartObj[0].amount} ₽</div>
				<div class="cart__product">${cartObj[0].name}</div>
			</div>
			<div class="cart__amount"> 
				<button class="cart__btn cart-minus">-</button>
				<div class="cart__output">${cartObj[0].amount}</div>
				<button class="cart__btn cart-plus">+</button>
			</div>
			<div class="cart__delete">
				<img src="./template/images/delete.svg" alt="">
			</div>
		</li>
	`;if(localStorage.getItem('cart')){let obj=JSON.parse(localStorage.getItem('cart'));let amount=+localStorage.getItem('amount');let total=+localStorage.getItem('total');let check=obj.some(item=>{if(item.id===1){return true;}});if(check==false){obj.push({id:1,img:'./template/images/bottle01.webp',name:'ВОДА «АНТАРКТИДА ОСМО» 19л',price:150,amount:2});localStorage.setItem('cart',JSON.stringify(obj));obj=JSON.parse(localStorage.getItem('cart'));let total=JSON.parse(localStorage.getItem('total'));let amount=JSON.parse(localStorage.getItem('amount'));total+=300;amount+=2;localStorage.setItem('total',JSON.stringify(total));localStorage.setItem('amount',JSON.stringify(amount));cartCounter.textContent=amount;cartSum.textContent=total+' ₽';cartList.innerHTML+=item;}
if(check==true){for(let i=0;i<obj.length;i++){const el=obj[i];if(el.id===1){if(el.amount<2){el.amount=2;if(el.amount<=priceArray.length){el.price=priceArray[el.amount-1];}else{el.price=priceArray[priceArray.length-1];}
amount++;let out=0;obj.forEach(el=>{out+=el.price*el.amount;});total=out;document.querySelector('.cart__item[data-id="1"]').querySelector('.cart__output').textContent=el.amount;document.querySelector('.cart__item[data-id="1"]').querySelector('.cart__price').textContent=el.amount*el.price+' ₽';}}}
localStorage.setItem('total',total);localStorage.setItem('amount',amount);localStorage.setItem('cart',JSON.stringify(obj));cartCounter.textContent=amount;cartSum.textContent=total+' ₽';}}
if(!localStorage.getItem('cart')){cartObj[0].price=priceArray[cartObj[0].amount-1];localStorage.setItem('cart',JSON.stringify(cartObj));localStorage.setItem('amount',2);localStorage.setItem('total',priceArray[cartObj[0].amount-1]*2);cartList.innerHTML+=item;cartCounter.textContent=2;cartCounter.classList.add('cart__counter--show');cartSum.textContent=(priceArray[cartObj[0].amount-1]*2)+' ₽';}
setTimeout(()=>{document.querySelector('.cart__icon').click();});});document.querySelector('.shop__cards').addEventListener('click',e=>{if(e.target.closest('.card__btn')){cart.classList.remove('cart--empty');let card=e.target.closest('.card');let cardObj=[{id:Number(card.dataset.id),img:card.querySelector('img').getAttribute('src'),name:card.querySelector('.card__caption').textContent,price:+card.dataset.price.split(',')[0],amount:1}];const item=`
			<li class="cart__item" data-id="${cardObj[0].id}">
				<div class="cart__display"> 
					<div class="cart__image">
						<img src="${cardObj[0].img}" alt="">
					</div>
				</div>
				<div class="cart__info"> 
					<div class="cart__price">${cardObj[0].price * cardObj[0].amount} ₽</div>
					<div class="cart__product">${cardObj[0].name}</div>
				</div>
				<div class="cart__amount"> 
					<button class="cart__btn cart-minus">-</button>
					<div class="cart__output">${cardObj[0].amount}</div>
					<button class="cart__btn cart-plus">+</button>
				</div>
				<div class="cart__delete">
					<img src="./template/images/delete.svg" alt="">
				</div>
			</li>
		`;if(localStorage.getItem('cart')){let amount=+localStorage.getItem('amount');let total=+localStorage.getItem('total');let obj=JSON.parse(localStorage.getItem('cart'));let check=obj.some(item=>{if(item.id==card.dataset.id){return true;}});if(check==false){obj.push(cardObj[0]);localStorage.setItem('cart',JSON.stringify(obj));cartList.innerHTML+=item;}
if(check==true){const priceArray=card.dataset.price.split(',').map(el=>+el);for(let i=0;i<obj.length;i++){const el=obj[i];if(+card.dataset.id===el.id){el.amount++;if(el.amount<=priceArray.length){el.price=priceArray[el.amount-1];}else{el.price=priceArray[priceArray.length-1];}
amount++;total=total+el.price;localStorage.setItem('amount',amount);localStorage.setItem('total',total);localStorage.setItem('cart',JSON.stringify(obj));document.querySelector(`.cart__item[data-id="${el.id}"]`).querySelector('.cart__output').textContent=el.amount;document.querySelector(`.cart__item[data-id="${el.id}"]`).querySelector('.cart__price').textContent=el.amount*el.price+' ₽';}}
cartCounter.textContent=amount;cartSum.textContent=total+' ₽';}}
if(!localStorage.getItem('cart')){localStorage.setItem('cart',JSON.stringify(cardObj));cartList.innerHTML+=item;cartCounter.textContent=1;cartCounter.classList.add('cart__counter--show');}
let obj=JSON.parse(localStorage.getItem('cart'));let total=0;let amount=0;for(let i=0;i<obj.length;i++){const el=obj[i];total+=el.price*el.amount;amount+=el.amount;}
localStorage.setItem('total',JSON.stringify(total));localStorage.setItem('amount',JSON.stringify(amount));cartCounter.textContent=amount;cartSum.textContent=total+' ₽';}});function getDataFromStorage(){if(localStorage.getItem('cart')){let obj=JSON.parse(localStorage.getItem('cart'));let total=JSON.parse(localStorage.getItem('total'));let amount=JSON.parse(localStorage.getItem('amount'));cartCounter.textContent=amount;cartSum.textContent=total+' ₽';cartCounter.classList.add('cart__counter--show');let newObj=obj.map(el=>{return(`<li class="cart__item" data-id="${el.id}">
					<div class="cart__display"> 
						<div class="cart__image">
							<img src="${el.img}" alt="">
						</div>
					</div>
					<div class="cart__info"> 
						<div class="cart__price">${el.price * el.amount} ₽</div>
						<div class="cart__product">${el.name}</div>
					</div>
					<div class="cart__amount"> 
						<button class="cart__btn cart-minus">-</button>
						<div class="cart__output">${el.amount}</div>
						<button class="cart__btn cart-plus">+</button>
					</div>
					<div class="cart__delete">
						<img src="./template/images/delete.svg" alt="">
					</div>
				</li>`);});cartList.innerHTML=newObj.join('');}else{cart.classList.add('cart--empty');}}
getDataFromStorage();cartBody.addEventListener('click',e=>{if(e.target.closest('.cart__delete')){let id=e.target.closest('.cart__item').dataset.id;let obj=JSON.parse(localStorage.getItem('cart'));let total=0;let amount=0;e.target.closest('.cart__item').remove();for(let i=0;i<obj.length;i++){if(obj[i].id===+id){obj.splice(i,1);obj.forEach(el=>{amount+=el.amount;total+=el.amount*el.price;});localStorage.setItem('cart',JSON.stringify(obj));localStorage.setItem('amount',amount);localStorage.setItem('total',total);cartCounter.textContent=amount;cartSum.textContent=total+' ₽';if(obj.length===0){localStorage.removeItem('cart');localStorage.removeItem('total');localStorage.removeItem('amount');cart.classList.add('cart--empty');cartCounter.classList.remove('cart__counter--show');}}}
setTimeout(()=>{document.querySelector('.cart__icon').click();});}
if(e.target.closest('.cart-minus')){let card=document.querySelector(`.card[data-id="${e.target.closest('.cart__item').dataset.id}"]`);let id=e.target.closest('.cart__item').dataset.id;let obj=JSON.parse(localStorage.getItem('cart'));let amount=+localStorage.getItem('amount');let total=+localStorage.getItem('total');const priceArray=card.dataset.price.split(',').map(el=>+el);for(let i=0;i<obj.length;i++){if(obj[i].id===+id){if(obj[i].amount>0){obj[i].amount--;if(obj[i].amount<=priceArray.length){obj[i].price=priceArray[obj[i].amount-1];}else{obj[i].price=priceArray[priceArray.length-1];}
let out=0;obj.forEach(el=>{out+=el.price*el.amount;});total=out;localStorage.setItem('total',total);cartSum.textContent=total+' ₽';e.target.nextElementSibling.textContent=obj[i].amount;amount=+localStorage.getItem('amount');if(amount>0){amount--;localStorage.setItem('amount',amount);}
e.target.closest('.cart__item').querySelector('.cart__price').textContent=obj[i].amount*obj[i].price+' ₽';cartCounter.textContent=amount;}
if(obj[i].amount===0){e.target.closest('.cart__item').remove();obj.splice(i,1);let out=0;let am=0
obj.forEach(el=>{am+=el.amount;out+=el.amount*el.price;});amount=am;total=out;localStorage.setItem('total',total);localStorage.setItem('amount',amount);cartSum.textContent=total+' ₽';setTimeout(()=>{document.querySelector('.cart__icon').click();});}
localStorage.setItem('cart',JSON.stringify(obj));}}
if(amount===0){localStorage.removeItem('amount');localStorage.removeItem('total');localStorage.removeItem('cart');e.target.closest('.cart__item').remove();cart.classList.add('cart--empty');cartCounter.classList.remove('cart__counter--show');}}
if(e.target.closest('.cart-plus')){let card=document.querySelector(`.card[data-id="${e.target.closest('.cart__item').dataset.id}"]`);let id=e.target.closest('.cart__item').dataset.id;let obj=JSON.parse(localStorage.getItem('cart'));let amount=+localStorage.getItem('amount');let total=+localStorage.getItem('total');const priceArray=card.dataset.price.split(',').map(el=>+el);for(let i=0;i<obj.length;i++){const el=obj[i];if(el.id===+id){el.amount++;if(el.amount<=priceArray.length){el.price=priceArray[el.amount-1];}else{el.price=priceArray[priceArray.length-1];}
amount++;let out=0;obj.forEach(el=>{out+=el.price*el.amount;});total=out;localStorage.setItem('amount',amount);localStorage.setItem('total',total);localStorage.setItem('cart',JSON.stringify(obj));cartSum.textContent=total+' ₽';e.target.closest('.cart__item').querySelector('.cart__price').textContent=el.price*el.amount+' ₽';e.target.closest('.cart__item').querySelector('.cart__output').textContent=el.amount;cartCounter.textContent=amount;}}}});const forms=document.querySelectorAll('.form');if(forms){for(let i=0;i<forms.length;i++){const form=forms[i];form.addEventListener('submit',sendForm);async function sendForm(e){e.preventDefault();let error=validateForm(form,e.target);let formData=new FormData(form);if(error===0){form.classList.add('_sending');let response=await fetch('sendmail.php',{method:'POST',body:formData});if(response.ok){let result=await response.json();document.getElementById('popup-thx').classList.add('open');setTimeout(()=>{document.getElementById('popup-thx').querySelector('.popup__text').textContent=result.message;document.getElementById('popup-thx').classList.remove('open');},3000);form.reset();form.classList.remove('_sending');}else{document.getElementById('popup-error').classList.add('open');form.classList.remove('_sending');}}}
function validateForm(form,target){let error=0;let formReq=target.querySelectorAll('._req');for(let i=0;i<formReq.length;i++){const input=formReq[i];formRemoveError(input);if(input.value===''){formAddError(input);error++;}}
return error;}
function formAddError(input){input.parentElement.classList.add('_error');input.classList.add('_error');}
function formRemoveError(input){input.parentElement.classList.remove('_error');input.classList.remove('_error');}}}
const popupLinks=document.querySelectorAll('.popup-link');const body=document.querySelector('body');const lockPadding=document.querySelectorAll('.lock-padding');let unlock=true;const timeout=400;if(popupLinks.length>0){for(let index=0;index<popupLinks.length;index++){const popupLink=popupLinks[index];popupLink.addEventListener("click",function(e){const popupName=popupLink.getAttribute('href').replace('#','');const currentPopup=document.getElementById(popupName);popupOpen(currentPopup);e.preventDefault();});}}
const popupCloseIcon=document.querySelectorAll('.close-popup');if(popupCloseIcon.length>0){for(let index=0;index<popupCloseIcon.length;index++){const el=popupCloseIcon[index];el.addEventListener('click',function(e){popupClose(el.closest('.popup'));e.preventDefault();});}}
function popupOpen(currentPopup){if(currentPopup&&unlock){const popupActive=document.querySelector('.popup.open');if(popupActive){popupClose(popupActive,false);}else{bodyLock();}
currentPopup.classList.add('open');currentPopup.addEventListener('click',function(e){if(!e.target.closest('.popup__content')){popupClose(e.target.closest('.popup'));}});}}
function popupClose(popupActive,doUnlock=true){if(unlock){popupActive.classList.remove('open');if(doUnlock){bodyUnlock();}}}
function bodyLock(){const lockPaddingValue=window.innerWidth-document.querySelector('.wrapper').offsetWidth+'px';if(lockPadding.length>0){for(let index=0;index<lockPadding.length;index++){const el=lockPadding[index];el.style.paddingRight=lockPaddingValue;}}
body.style.paddingRight=lockPaddingValue;body.classList.add('popup-lock');unlock=false;setTimeout(function(){unlock=true;},timeout);}
function bodyUnlock(){setTimeout(function(){if(lockPadding.length>0){for(let index=0;index<lockPadding.length;index++){const el=lockPadding[index];el.style.paddingRight='0px';}}
body.style.paddingRight='0px';body.classList.remove('popup-lock');},timeout);unlock=false;setTimeout(function(){unlock=true;},timeout);}
document.addEventListener('keydown',function(e){if(e.which===27){const popupActive=document.querySelector('.popup.open');popupClose(popupActive);}});(function(){if(!Element.prototype.closest){Element.prototype.closest=function(css){var node=this;while(node){if(node.matches(css))return node;else node=node.parentElement;}
return null;};}})();(function(){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector;}})();