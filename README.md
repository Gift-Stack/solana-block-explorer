# 📜 Documentation for the task

## 📋 Index

- [📜 Documentation for the task](#-documentation-for-the-task)
  - [📋 Index](#-index)
  - [📖 Expectations](#-expectations)
  - [📦 Dependencies](#-dependencies)
  - [⚙️ Goals](#️-goals)
  - [🔑 Usage](#-usage)

---

## 📖 Expectations

- Achieve pixel perfect design
- Fetch `blocks` data from api
- Acheive a smooth user experience

---

## 📦 Dependencies

I didn't use any external libraries for this task, but I did use the following:

- Utilized React Server Components to fetch data from the api
  - used Next.js's built-in server-side rendering to ensure that the app is always accessible to users
- Utilized React Suspense to render a loading state while data is being fetched
- Properly implemented code splitting to ensure that only the relevant code is loaded
- Took advantage of the Next.js cache to ensure that data is always available to the user (no data leakage -- Although, not a necessity for this task)

---

## ⚙️ Goals

1. **Maintain snappy app interactions**: (Users should not wait for > 100 ms)

- Code splitting
- Suspense fallbacks on only affected components while other non-async components are mounted
- Debounced search input (to avoid multiple redundant filters)

2. **Keep data consistent and trustworthy across the whole app**: Hence utilizing just fetch and next cache. (Data are always up to date)

3. **Data Security**: No data leakage, no data manipulation, no data loss

- No redundant local storage persistence

4. **App can be scaled to 5-10 engineers contributing simultaneously**.

---

## 🔑 Usage

https://www.loom.com/share/bfe79eb19322486d9f5905368eb21e55?sid=5d276e31-6c90-4614-a3e4-f065e79810ee
