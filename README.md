# TS_Learning

My TypeScript practice log: course chapters turned into runnable exercises, one file per lesson.

Every example is standalone and executable — the goal is to be able to explain each typing concept (and where it actually saves me from runtime bugs) before moving to the next chapter.

---

## 📁 What's in this repository

| Chapter | Exercises | Focus |
| :--- | :--- | :--- |
| `chapter_01/` | `ch_01` – `ch_04` | Fundamentals: types, annotations, inference, `type` aliases vs `interface` |
| `chapter_02/` | `ch_01` – `ch_08` | Functions, parameters, return types, and the type system around them |
| `chapter_03/` | `ch_01` – `ch_07` | Objects, interfaces, and structured data |
| `chapter_04/` | `ch_01` – `ch_03` | Unions, narrowing, and stricter control flow |

Every exercise lives in its own `chapter_0X/ch_0Y/index.ts`.

---

## 🛠️ Technologies
- **Language:** TypeScript
- **Runner:** `tsx` (dev dependency — runs `.ts` files directly, no build step)

---

## 🚀 Running an exercise

```bash
git clone https://github.com/EslamAyman-wab/TS_Learning.git
cd TS_Learning
npm install

npx tsx chapter_01/ch_01/index.ts
```

---

## 💡 Why keep this public
Typing mistakes are how I learn where TypeScript earns its place — an exercise that only compiles after I fix the type is more memorable than a tutorial I watched. Keeping the whole progression visible also shows the parts I got wrong first.
