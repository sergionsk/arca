import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, phone, city, message, file } = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Формируем красивое сообщение с поддержкой HTML
    const text = `
<b>🆕 Новая заявка с сайта Arca Objects</b>

<b>👤 Имя:</b> ${escapeHtml(name)}
<b>📞 Телефон:</b> ${escapeHtml(phone)}
<b>📍 Город:</b> ${escapeHtml(city || 'Не указан')}

<b>📝 Описание задачи:</b>
${escapeHtml(message)}

${file ? `<b>📎 Приложен файл:</b> Да (имя: ${escapeHtml(file.name)})` : ''}
    `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const result = await response.json();

    if (result.ok) {
      return NextResponse.json({ success: true, message: 'Заявка отправлена' });
    } else {
      console.error('Telegram API error:', result);
      return NextResponse.json({ error: 'Telegram API error' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Простая функция для экранирования HTML-символов
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}