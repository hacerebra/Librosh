document.addEventListener('DOMContentLoaded', () => {
  maybeSendDailyNotification();
  const notificationIcon = document.getElementById('notificationIcon');
  const notificationPanel = document.getElementById('notificationPanel');
  const closeNotifBtn = document.getElementById('closeNotifBtn');
  const notificationList = document.getElementById('notificationList');
  const notificationBadge = document.getElementById('notificationBadge');
  const markAllReadBtn = document.getElementById('markAllReadBtn');
  const clearAllBtn = document.getElementById('clearAllBtn');

  if (!notificationIcon || !notificationPanel || !notificationList || !notificationBadge) return;

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!loggedInUser) {
    window.location.href = 'kullanıcı-giris.html';
    return;
  }

  const userKey = `notifications_${loggedInUser.email}`;

  function getNotifications() {
    return JSON.parse(localStorage.getItem(userKey)) || [];
  }

  function saveNotifications(notifs) {
    localStorage.setItem(userKey, JSON.stringify(notifs));
  }

  notificationIcon.addEventListener('click', () => {
    notificationPanel.classList.toggle('active');
    renderNotifications();
  });

  closeNotifBtn.addEventListener('click', () => {
    notificationPanel.classList.remove('active');
  });

  function renderNotifications() {
    const notifications = getNotifications();
    notificationList.innerHTML = '';

    if (notifications.length === 0) {
      notificationList.innerHTML = '<p>Bildirim yok.</p>';
      updateBadge();
      return;
    }

    notifications.forEach((notif, i) => {
      const card = document.createElement('div');
      card.className = 'notification-card' + (notif.read ? ' read' : '');
      const now = new Date();
      const tarih = now.toLocaleDateString('tr-TR', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      });

      card.innerHTML = `
        <div class="notif-top">
          <strong class="notif-title">${notif.title || 'Başlık Yok'}</strong>
          <div class="notif-actions">
            <button class="read-btn" title="Okundu">✔</button>
            <button class="delete-btn" title="Sil">🗑</button>
          </div>
        </div>
        <p class="notif-desc">${notif.text}</p>
        <div class="notif-footer">
          <span class="notif-date">${tarih}</span>
        </div>
      `;

      card.querySelector('.delete-btn').addEventListener('click', () => deleteNotification(i));
      card.querySelector('.read-btn').addEventListener('click', () => markAsRead(i));

      notificationList.appendChild(card);
    });

    updateBadge();
  }

  function deleteNotification(index) {
    const notifs = getNotifications();
    notifs.splice(index, 1);
    saveNotifications(notifs);
    renderNotifications();
  }

  function markAsRead(index) {
    const notifs = getNotifications();
    if (!notifs[index].read) {
      notifs[index].read = true;
      saveNotifications(notifs);
      renderNotifications();
    }
  }

  clearAllBtn?.addEventListener('click', () => {
    if (confirm('Tüm bildirimler silinsin mi?')) {
      saveNotifications([]);
      renderNotifications();
    }
  });

  markAllReadBtn?.addEventListener('click', () => {
    const notifs = getNotifications();
    notifs.forEach(n => n.read = true);
    saveNotifications(notifs);
    renderNotifications();
  });

  function maybeSendDailyNotification() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.notificationsEnabled === false) return;

    const userKey = `notifications_${loggedInUser.email}`;
    const lastNotifiedKey = `lastNotify_${loggedInUser.email}`;
    const today = new Date().toDateString();

    if (localStorage.getItem(lastNotifiedKey) === today) return;
    if (Math.random() < 0.5 === false) return;

    const notificationCount = Math.random() < 0.5 ? 1 : 2;
    const sampleMessages = [
      { title: "Yeni fırsat!", text: "Bugün seni bekleyen özel içerikler var." },
      { title: "Hatırlatma", text: "Yeni özellikleri keşfetmeyi unutma!" },
      { title: "Günün ipucu", text: "Profilini güncel tutmak önemli." },
      { title: "Merhaba!", text: "Bugün harika bir gün, neler kaçırdın?" },
      { title: "Bilgilendirme", text: "Sistem güncellemesi tamamlandı." },
    ];

    const existing = JSON.parse(localStorage.getItem(userKey)) || [];

    for (let i = 0; i < notificationCount; i++) {
      const random = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
      existing.push({ title: random.title, text: random.text, read: false });
    }

    localStorage.setItem(userKey, JSON.stringify(existing));
    localStorage.setItem(lastNotifiedKey, today);

    if (document.getElementById('notificationPanel')?.classList.contains('active')) {
      renderNotifications();
    } else {
      updateBadge();
    }
  }

  function updateBadge() {
    const notifs = getNotifications();
    const unreadCount = notifs.filter(n => !n.read).length;

    if (unreadCount > 0) {
      notificationBadge.textContent = unreadCount;
      notificationBadge.style.display = 'inline-block';
    } else {
      notificationBadge.textContent = '';
      notificationBadge.style.display = 'none';
    }
  }

  renderNotifications();

  window.addNotification = function(title, text) {
    const notifs = getNotifications();
    notifs.push({ title, text, read: false });
    saveNotifications(notifs);
    if (notificationPanel.classList.contains('active')) {
      renderNotifications();
    } else {
      updateBadge();
    }
  };
});

// Bildirim tercihini kaydeden fonksiyon (sadece 1 tane)
function setNotificationPreference(enabled) {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!loggedInUser) return;

  loggedInUser.notificationsEnabled = enabled;
  localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

  const allUsers = JSON.parse(localStorage.getItem('users')) || [];
  const index = allUsers.findIndex(u => u.email === loggedInUser.email);
  if (index !== -1) {
    allUsers[index].notificationsEnabled = enabled;
    localStorage.setItem('users', JSON.stringify(allUsers));
  }
}
