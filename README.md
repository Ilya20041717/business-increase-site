# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Как работает форма и Telegram

Заявки с сайта отправляются в Telegram через **серверную прослойку** (токен бота не светится в браузере). Отдельно хостить бота не нужно.

- **Локально:** в одном терминале `npm run dev`, в другом — `npm run dev:api`. В корне создайте `.env` с `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` (можно скопировать из `.env.example`).
- **На Vercel:** задеплойте проект (Git + Vercel). В настройках проекта: **Settings → Environment Variables** добавьте `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`. Функция `api/send-telegram.js` будет вызываться при отправке формы.

## Деплой и хостинг (Vercel) + свой домен

### 1. Загрузить проект в GitHub

- Создайте репозиторий на [github.com](https://github.com).
- В терминале из папки **business-flow-studio-main** выполните:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/ВАШ_ЛОГИН/ВАШ_РЕПОЗИТОРИЙ.git
  git push -u origin main
  ```
  (подставьте свой логин и имя репозитория).

### 2. Задеплоить на Vercel

1. Зайдите на [vercel.com](https://vercel.com) и войдите (через GitHub).
2. **Add New** → **Project** → выберите ваш репозиторий.
3. **Root Directory:** укажите `business-flow-studio-main` (если весь репозиторий — только эта папка, можно оставить по умолчанию).
4. **Environment Variables** → добавьте:
   - `TELEGRAM_BOT_TOKEN` = ваш токен бота
   - `TELEGRAM_CHAT_ID` = ваш chat_id (например `6782431774`)
5. Нажмите **Deploy**. Через 1–2 минуты сайт откроется по адресу `ваш-проект.vercel.app`.

### 3. Подключить свой домен

1. В Vercel откройте проект → **Settings** → **Domains**.
2. Нажмите **Add** и введите ваш домен (например `business-increase.ru` или `www.business-increase.ru`).
3. Vercel покажет, какие DNS-записи нужно создать у регистратора домена.

**У регистратора (где купили домен):**

- Зайдите в панель управления доменом → DNS / DNS-записи / Управление зоной.
- Добавьте записи **точно так**, как указано в Vercel:
  - Обычно для корня домена (`business-increase.ru`): тип **A**, значение `76.76.21.21`.
  - Для поддомена `www`: тип **CNAME**, значение `cname.vercel-dns.com` (или то, что покажет Vercel).
- Сохраните изменения. Распространение DNS может занять от 5 минут до 48 часов.

4. В Vercel дождитесь статуса **Valid** напротив домена — после этого сайт будет открываться по вашему адресу.

После этого форма «Оставить заявку» будет работать на вашем домене и слать заявки в Telegram.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

Для отправки формы в Telegram при деплое на Vercel добавьте переменные окружения (см. выше).

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
