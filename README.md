# io.github.tortoyoyo.toast

## Download Cordova

* cordova plugin add io.github.tortoyoyo.toast

## Plugman

`$ plugman install --platform android --project /home/user/project/platforms/android/ --plugin /home/user/project/plugins/io.github.tortoyoyo.toast/ --plugins_dir /home/user/project/plugins/`

`$ plugman install --platform firefoxos --project /home/user/project/platforms/firefoxos/ --plugin /home/user/project/plugins/io.github.tortoyoyo.toast/ --plugins_dir /home/user/project/plugins/`

## Metodos

### criarToast

Create a Toast

```javascript
navigator.toast.criarToast(message, onSuccess, onError, opcoes);
```

- **message:** Message (String)
- **opcões:**

 - duration: duration toast Values: 0 or 1 (int)
 - dir : The text direction of the notification; it can be auto, ltr, or rtl.
 - lang: Specify the lang used within the notification. This string must be a valid BCP 47 language tag.
 - body: A string representing any extra content to display within the notification.
 - tag: An ID for a given notification that allows the developer to retrieve, replace, or remove the notification as necessary.
 - icon: The URL of an image to be used as an icon by the notification.
 - data: User-defined data field.
- **onSuccess:** function success
 - parameter: message thats ok. (string)
- **onError:** function error
 - parameter: message error (string)

 **Obs:** value duration is required in Android.
