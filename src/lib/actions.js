export function trapFocus(node) {
    //получим самый "глубокий" элемент - body
	const previous = document.activeElement;

    function focusable() {
        //получим массив всех элементов, к-е могут получить фокус
		return Array.from(node.querySelectorAll('button, [href], input, select,  [tabindex]:not([tabindex="-1"])'));
	}
    //определим функцию-обработчик события Keydown      
    function handleKeydown(event) {
        //нажитие на любую клавишу, кроме Tab, игнорируем 
		if (event.key !== 'Tab') return;
        
        //Здесь activeElement - это тот элемент, к-й получил фокус
        //При загрузке компонента он определяется функцией focusable()[0]?.focus() (см. ниже)
		//в дальнейшем  он будет обновляться при нажатии на Tab
        const current = document.activeElement;
        //получим список всех focusable элементов
        const elements = focusable();
        //определим 1-й и последний focusable элементы в компоненте
		const first = elements.at(0);
		const last = elements.at(-1)

        console.log('Curr-first-last',current,first,last)

        //в данном случае это можно не проверять
        // if (event.shiftKey &&  current === first) {
        //     console.log('prevent 1')
		// 	last.focus();
		// 	event.preventDefault();
		// }
 
        //Возможность того, что юзер нажмет кл. Shift для движения 
        //в обратном порядке игнорируем для простоты
        if ( current === last) { 
            console.log('prevent 2 !')
			first.focus(); //фокусируем первый элемент
			event.preventDefault(); //и прерываем обработку KeyDown
		}

    }
    //фокусируем первый элемент
    focusable()[0]?.focus(); 
    //добавляем обработчик события Keydown
    node.addEventListener('keydown', handleKeydown);
}