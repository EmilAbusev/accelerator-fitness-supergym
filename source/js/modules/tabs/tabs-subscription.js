const tabsButton = document.querySelectorAll('.subscription__button');
const tabsItems = document.querySelectorAll('.subscription__price-list');


tabsButton.forEach(onTabClikc);


function onTabClikc(item) {
  item.addEventListener('click', () => {
    let currentButton = item;
    let tabId = currentButton.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentButton.classList.contains('button-active')) {

      tabsButton.forEach((button) => {
        button.classList.remove('button-active');
      });

      tabsItems.forEach((list) => {
        list.classList.remove('is-active');
      });

      currentButton.classList.add('button-active');
      currentTab.classList.add('is-active');
    }
  });
}

document.querySelector('.subscription__button').click();

export {onTabClikc};
