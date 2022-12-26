<center><h1>🧹 nano-classnames</h1>
<p>A bite-size utility for composing classnames.</p></center>



- ✅ **2.3kb unzipped (271 B gzipped)**
- ✅ **Full TypeScript support**
- ✅ **Works with all modern frameworks**

### Table of contents
- [⚡️ Getting started](#️-getting-started)
- [🤔 Why `nano-classnames`](#-why-nano-classnames)
- [📖 Documentation](#-documentation)
  - [Using `cn` to compose classes](#using-cn-to-compose-classes)
  - [Conditionally apply classnames](#conditionally-apply-classnames)
- [⚙️ API](#️-api)
  - [`cn(...classes)`](#cnclasses)





## ⚡️ Getting started
---

First, install `nano-classnames` via npm/yarn/pnpm:

```
npm i nano-classnames
yarn add nano-classnames 
pnpm i nano-classnames
```

Then import the class constructor in your project:

```
import { cn } from "nano-classnames"
```

You can now compose your classnames:

```
<div class={cn("class-1", "class-2")}>...</div>
 
//<div class="class-1 class-2">...<div>
```


Read the documention to learn more about composing classes with `nano-classnames`.

## 🤔 Why `nano-classnames`
---

`nano-classnames` was inspired from the great [`classnames`](https://www.npmjs.com/package/classnames) package with an emphasis on speed and composability. While I love `classnames`, I found its syntax for conditional classnames to be disruptive as you must use an object to apply conditional classes, which can be clunkly to work with. `nano-classnames` does away with this by using tuples (an array) to quickly apply conditional classes. 

`nano-classnames` also only supports strings for composing classes (hence "nano"). This is an intentional design choice as, personally, I never use nested arrays/objects when composing classes. If you need to use them for composing classes then I recommend using [`classnames`](https://www.npmjs.com/package/classnames).

**`nano-classnames` is not a drop-in replacement for `classnames`** 

## 📖 Documentation
---

By design, `nano-classnames` is meant to be extremely lightweight and straightforward. It works great if you're using [TailwindCSS](https://tailwindcss.com/)!

### Using `cn` to compose classes
`cn` is the class constructor, it allows you to quickly compose classes together.

You can import `cn` from `nano-classnames` using a named import:
```
import { cn } from "nano-classnames"
```

Then use `cn` like this:

```
cn("text-red-500 text-lg", "font-bold") ➡️ "text-red-500 text-lg font-bold"

```

We only support `string` inputs! If you need to use arrays, objects, or nested arrays/objects then refer to [`classnames`](https://www.npmjs.com/package/classnames) for a more robust solution!

### Conditionally apply classnames
To conditionally apply classnames, use a tuple (an array)! These tuples are formatted like this:

```
[boolean, trueClassnames, falseClassnames]
```

You can then pass these into the `cn` constructor:

```
let state = true;

cn([state, "text-red-500"]) ➡️ "text-red-500"
```

You can also pass a third value to represent an `else` state:
```
let state = true;

cn([state, "text-red-500", "text-blue-500"]) ➡️ "text-blue-500"
```

You can also pass in a variable (so as long as it is a string!)
```
let classes = "..."

cn(classes) ➡️ "..."
```

## ⚙️ API
---

### `cn(...classes)`
- `...classes: (string | [boolean, string, string])[]`
- Returns `string`



