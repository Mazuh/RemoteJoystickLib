# Remote Joystick Lib
## Made for development only

Easily attach URL-based actions to your keyboard or graphic buttons, if DOM is available.

> Disclaimer: I didn't created this for production, but just for a one night stand!

### Quick start tutorial

After importing this somehow on your HTML, you can initialize it for keybooards passing
an object where each key is a string value for a key code (constants `REMOTE_JOYSTICK_KEY_*`
are already available for arrow keys) and their values are the URLs to be fetched:

```js
initRemoteJoystickByKeyboard({
  REMOTE_JOYSTICK_KEY_LEFT: 'https://mydomain.com/game/?player_id=auth=direction=left',
  REMOTE_JOYSTICK_KEY_UP: 'https://mydomain.com/game/?player_id=auth=direction=up',
  REMOTE_JOYSTICK_KEY_RIGHT: 'https://mydomain.com/game/?player_id=auth=direction=right',
  REMOTE_JOYSTICK_KEY_DOWN: 'https://mydomain.com/game/?player_id=auth=direction=down'
});
```

Or attach those URLs on HTML buttons (thus improving your support for mobile):

```html
<button id="btn-left"></button>
<button id="btn-up"></button>
<button id="btn-right"></button>
<button id="btn-down"></button>
```

```js
initRemoteJoystickByGUI({
  'btn-left': 'https://mydomain.com/game/?player_id=auth=direction=left',
  'btn-up': 'https://mydomain.com/game/?player_id=auth=direction=up',
  'btn-right': 'https://mydomain.com/game/?player_id=auth=direction=right',
  'btn-down': 'https://mydomain.com/game/?player_id=auth=direction=down'
});
```

I suggest, however, using `a` tags on such example. But who cares?

That's all to be said.

(It's kinda "full start tutorial", isn't it?)
