document.getElementById('generateCode').addEventListener('click', function () {
    const moveElement = document.getElementById('moveElement').value;
    const targetElement = document.getElementById('targetElement').value;
    const returnElement = document.getElementById('returnElement').value;
    const condition = document.getElementById('condition').value;
    const event = document.getElementById('event').value;
    const position = document.getElementById('position').value;
    const mobileCondition = document.getElementById('mobileCondition').value;
    const positionMethod = position === 'start' ? 'insertBefore' : 'appendChild';

    // Генерация условия для проверки мобильного устройства
    let mobileCheck;

    if (mobileCondition === 'always') {
        mobileCheck = 'true';
    } else if (mobileCondition === 'mobile') {
        mobileCheck = 'isMobile';
    } else {
        mobileCheck = '!isMobile';
    }

    const generatedCode = `
function updateElementPosition() {
    const elementToMove = document.querySelector('${moveElement}');
    const targetPlace = document.querySelector('${targetElement}');
    const returnPlace = document.querySelector('${returnElement}');

    if (!elementToMove) return;

    const isMobile = window.innerWidth < 992;
    const isInTargetPlace = elementToMove.parentElement === targetPlace;
    const isInReturnPlace = elementToMove.parentElement === returnPlace;

    ${condition}

    if (${mobileCheck} && !isInTargetPlace) {
        targetPlace.${positionMethod}(elementToMove);
    } else if (!${mobileCheck} && !isInReturnPlace) {
        returnPlace.${positionMethod}(elementToMove);
    }
}

updateElementPosition(); // Выполняем сразу

${event ? `window.addEventListener('${event}', updateElementPosition);` : ''}
        `;

    document.getElementById('outputCode').value = generatedCode.trim();
});