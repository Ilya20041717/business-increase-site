# Как залить проект на GitHub

## 1. Создать репозиторий на GitHub

1. Зайдите на [github.com](https://github.com) и войдите в аккаунт.
2. Нажмите **+** (справа вверху) → **New repository**.
3. Заполните:
   - **Repository name:** например `business-increase-site` или `binc-website`.
   - **Description:** по желанию (например: «Сайт Business Increase»).
   - Оставьте **Public**.
   - **НЕ** ставьте галочки «Add a README» / «Add .gitignore» — репозиторий должен быть пустым.
4. Нажмите **Create repository**.

После создания GitHub покажет страницу с подсказками. **URL репозитория** будет таким:
`https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПОЗИТОРИЯ.git`  
(например: `https://github.com/ilabyckov/business-increase-site.git`)

---

## 2. Залить папку из терминала

Откройте терминал и перейдите в папку проекта:

```bash
cd "путь/к/Сайт BINC/business-flow-studio-main"
```

Если вы уже в папке «Сайт BINC», выполните:

```bash
cd business-flow-studio-main
```

Дальше выполните по очереди (подставьте вместо `ВАШ_ЛОГИН` и `ИМЯ_РЕПОЗИТОРИЯ` свои данные из шага 1):

```bash
git init
git add .
git commit -m "Первый коммит: сайт Business Increase"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПОЗИТОРИЯ.git
git push -u origin main
```

При первом `git push` браузер или терминал могут попросить войти в GitHub — войдите или введите токен.

---

## 3. Проверка

Обновите страницу репозитория на GitHub — в нём должны появиться все файлы проекта (без `node_modules` и `.env` — они в .gitignore).

После этого в Vercel можно подключать этот репозиторий (Add New Project → Import Git Repository).
