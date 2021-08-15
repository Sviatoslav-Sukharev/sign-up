function notify(msg, color, timeout = 3000) {
  const lastNotification = document.querySelector(".notification");
  if(lastNotification) deleteNotification(lastNotification);
  const notification = showNotification(msg, color);
  setTimeout(() => {
    deleteNotification(notification);
  }, timeout);
}

function createNotification(msg, color) {
  const div = document.createElement("div");
  div.classList.add("notification");
  div.setAttribute("style", `background-color: ${color}; border-radius: 5px; color: white; padding: 15px 25px; font-size: 18px; position: absolute; top: 15px; right: 15px; opacity: 0.7; box-shadow: 4px 4px 8px 0px rgba(20, 45, 64, 0.42);`);
  div.textContent = msg;
  return div;
}

function showNotification(msg, color) {
  const notification = createNotification(msg, color);
  document.body.appendChild(notification);
  return notification;
}

function deleteNotification(notification) {
  notification.remove();
}

export default notify;