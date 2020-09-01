// request permission on page load
document.addEventListener('DOMContentLoaded', function() {
 if (!Notification) {
  alert('Desktop notifications not available in your browser. Try Chromium.');
  return;
 }

 if (Notification.permission !== 'granted')
  Notification.requestPermission();
});


function notifyMe() {
 if (Notification.permission !== 'granted')
  Notification.requestPermission();
 else {
  var notification = new Notification('New Website Archive', {
   icon: 'https://pacmanalex007.github.io/new-website/images/bell.png',
   body: 'CLICK ME AND FIND OUT ',
  });
  notification.onclick = function() {
   window.open('notifications/');
  };
 }
}
