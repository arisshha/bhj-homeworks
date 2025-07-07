
const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach(tabsContainer => {
    const tabNavigation = tabsContainer.querySelector('.tab__navigation');
    const tabContents = tabsContainer.querySelector('.tab__contents');
    const tabs = Array.from(tabNavigation.querySelectorAll('.tab'));
    const contents = Array.from(tabContents.querySelectorAll('.tab__content')); 

    
    tabNavigation.addEventListener('click', (event) => {
        if (event.target.classList.contains('tab')) {
            const tab = event.target;

            const index = tabs.indexOf(tab);

            tabs.forEach(item => item.classList.remove('tab_active'));
            contents.forEach(item => item.classList.remove('tab__content_active'));

            tab.classList.add('tab_active');
            contents[index].classList.add('tab__content_active');
        }
    });
});