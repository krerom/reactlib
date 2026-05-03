
# reactlib

A fun React component library project for experimenting with reusable UI components.

**v1 — forks and contributions are more than welcome.**

---

## Installation

### Local development / testing

To install the library locally using a packed `.tgz` file:

```bash
npm install path/to/reactlib-1.0.0.tgz
````

> Make sure your project already has React installed (React is a peer dependency).

---

## Documentation

Full component documentation is available here:

👉 [Docs (Markdown)](./docs_md/)

---

# Development & Contribution

If you want to contribute to **reactlib**, follow these steps to set up the project locally and test changes.

---

## 1. Clone the repository

```bash
git clone https://github.com/your-username/reactlib.git
cd reactlib
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Build the library

This compiles the source into the `dist/` folder using `tsup`.

```bash
npm run build
```

Output formats:

* ESM (`.mjs`)
* CommonJS (`.js`)

---

## 4. Create a local package (for testing)

To test your changes inside a real React project:

```bash
npm pack
```

This generates a file like:

```bash
reactlib-1.0.0.tgz
```

---

## 5. Install in a test React project

Inside your React app:

```bash
npm install path/to/reactlib-1.0.0.tgz
```

Now you can import and test your changes as if it were a published package.

---

## Recommended development workflow

1. Make changes in `src/`
2. Rebuild the library:

   ```bash
   npm run build
   ```
3. Repack:

   ```bash
   npm pack
   ```
4. Reinstall in your test project:

   ```bash
   npm install path/to/reactlib-1.0.0.tgz
   ```

---

## Important notes

* React is a **peer dependency**
* Your project must already have React installed
* Do **not** use `npm link` (it may cause duplicate React issues)
* Always rebuild before packing
