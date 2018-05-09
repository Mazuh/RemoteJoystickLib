REMOTE_JOYSTICK_KEY_LEFT = '37';
REMOTE_JOYSTICK_KEY_UP = '38';
REMOTE_JOYSTICK_KEY_RIGHT = '39';
REMOTE_JOYSTICK_KEY_DOWN = '40';

function asyncFetch(url) {
  fetch(url)
    .then((res) => console.log('Fetched:', url))
    .catch((err) => console.error('Failed to fetch: ', url));
}

function initRemoteJoystickByKeyboard(routingKeysSet) {
  if (!!routingKeysSet) {
    document.addEventListener('keydown', (event) => {
      var routing = Object.getOwnPropertyDescriptor(routingKeysSet, event.keyCode);
      if (!routing || !routing.value) {
        console.warn('No route for the pressed', event.keyCode);
      } else {
        asyncFetch(routing.value);
      }
    });
  }
}

function initRemoteJoystickByGUI(routingButtonsSet) {
  if (!!routingButtonsSet) {
    Object.keys(routingButtonsSet).forEach(function(buttonId) {
      var url = routingButtonsSet[buttonId];
      var pickedElement = document.getElementById(buttonId);
      if (!pickedElement) {
        console.error('No element for id', buttonId);
      } else {
        pickedElement.onclick = () => {
          asyncFetch(url);
        }
      }
    });
  }
}
