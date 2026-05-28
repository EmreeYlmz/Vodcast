/**
 * Tarih formatını düzenler
 * @param {string} dateString - Tarih yazısı (örn: "2025-04-15")
 * @returns {string} - Formatlanmış tarih (örn: "15 Nisan 2025")
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    
    const months = [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  }
  
  /**
   * Yazı geçen süresini hesaplar ve gösterir
   * @param {string} dateString - Tarih yazısı (örn: "2025-04-15")
   * @returns {string} - Geçen süre (örn: "2 saat önce", "3 gün önce")
   */
  export function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} yıl önce`;
    }
    
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} ay önce`;
    }
    
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} gün önce`;
    }
    
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} saat önce`;
    }
    
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} dakika önce`;
    }
    
    return "Az önce";
  }
  