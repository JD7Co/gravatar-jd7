const crypto = require('crypto');

function getGravatarHash(email) {

  // 1. Убираем пробелы
  // 2. Переводим в нижний регистр
  email = email.trim().toLowerCase();

  // 3. Создаём SHA256
  const hash = crypto
    .createHash('sha256')
    .update(email, 'utf8')
    .digest('hex');

  return hash;
}
const email = 'user@example.com';

const hash = getGravatarHash(email);

const avatarUrl = `https://www.gravatar.com/avatar/${hash}`;