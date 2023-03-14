const elementH1 = document.createElement('h1');
elementH1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(elementH1);

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

const elementSectionCenter = document.createElement('section');
elementSectionCenter.className = 'center-content';
elementMain.appendChild(elementSectionCenter);

const paragraph = document.createElement('p');
paragraph.innerHTML = 'O melhor show do universo!';
elementSectionCenter.appendChild(paragraph);

const elementSectionLeft = document.createElement('section');
elementSectionLeft.className = 'left-content';
elementMain.appendChild(elementSectionCenter);

const elementSectionRigth = document.createElement('section');
elementSectionRigth.className = 'rigth-content';
elementMain.appendChild(elementSectionRigth);

const elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
elementSectionLeft.appendChild(elementImg);

const elementUl = document.createElement('ul');
elementSectionRigth.appendChild(elementUl);
const arraysNumbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
for (let num in arraysNumbers) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = arraysNumbers[num];
    elementUl.appendChild(elementLi);
}

for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Show ' + index;
    elementMain.appendChild(elementH3);
}