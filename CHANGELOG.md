<!-- //!STARTERCONF Remove this file, this is used as the starter changelog -->

# ts-nextjs-tailwind-starter changelog

This changelog is manually generated and not accurate with the package.json, only to show the changes since the last release.

## 0.3.0 - 2021-12-01

### New Features

#### Create Branch & Auto Resolve Issue Actions

| ![Create Branch Actions](https://user-images.githubusercontent.com/55318172/144379834-8c3e4d4f-d584-4253-9ad8-b9f1d468ed01.gif) <br> Auto Create Branch | ![Auto Resolve](https://user-images.githubusercontent.com/55318172/144382044-0132e755-9cd5-4805-a756-4086f67b3282.gif) <br> Auto Resolve  |
| :--: | :--: |

You have to install the app for your organization/account/repository from the [GitHub Marketplace](https://github.com/marketplace/create-issue-branch) for this to work.

The branch will be created on **assign** with format `i${number}-${issue_title_lowercase}`.

## 0.2.0 - 2021-11-10

### New Features

#### Jest

Jest is configured and will be run every push on Github Actions

#### Lint Github Action

1. **ESLint** - will fail if there are any warning and error.
2. **Type Check** - will fail on `tsc` error.
3. **Prettier Check** - will fail if there are any formatting error.
4. **Test** - will fail if there are any test failure.

## 0.1.0

### New Features

#### Installed Packages

1. [clsx](https://bundlephobia.com/package/clsx@latest), utility for constructing `className` strings conditionally.
2. [react-icons](https://bundlephobia.com/package/react-icons@latest), svg react icons of popular icon packs.

#### UnstyledLink Component

Used as a component for Next.js Link. Will render out Next/Link if the href started with `/` or `#`, else will render an `a` tag with `target='_blank'`. Also add a cursor style for outside links

#### CustomLink Component

![customlink](https://user-images.githubusercontent.com/55318172/129183546-4e8c2059-0493-4459-a1e9-755fbd32fe39.gif)

#### All Components Demo:

Check it out yourself on [the deployment](https://ts-nextjs-tailwind-starter.theodorusclarence.com/components).

https://user-images.githubusercontent.com/55318172/136921766-470eba67-6f5e-4066-9f37-a6ea825d6cd4.mov

#### Absolute Import

You can import without using relative path

```tsx
import Nav from '../../../components/Nav';

simplified to

import Nav from '@/components/Nav';
```

#### Seo Component

Configure the default in `src/components/Seo.tsx`. If you want to use the default, just add `<Seo />` on top of your page.

You can also customize it per page by overriding the title, description as props

```tsx
<Seo title='Next.js Tailwind Starter' description='your description' />
```

or if you want to still keep the title like `%s | Next.js Tailwind Starter`, you can use `templateTitle` props.

#### Custom 404 Page

![404](https://user-images.githubusercontent.com/55318172/129184274-d90631f2-6688-4ed2-bef2-a4d018a4863c.gif)

#### Workspace Snippets

Snippets such as React import, useState, useEffect, React Component. [View more](/.vscode/typescriptreact.code-snippets)

#### Husky, Prettier, Lint, and Commitlint Configured

3 Husky hooks including:

1. pre-commit, running `next lint` and format the code using prettier
2. commit-msg, running commitlint to ensure the use of [Conventional Commit](https://theodorusclarence.com/library/conventional-commit-readme) for commit messages
3. post-merge, running `yarn` every `git pull` or after merge to ensure all new packages are installed and ready to go

#### Default Favicon Declaration

Use [Favicon Generator](https://www.favicon-generator.org/) and then overwrite the files in `/public/favicon`

#### Default Tailwind CSS Base Styles

There are default styles for responsive heading sizes, and `.layout` to support a max-width for larger screen size. Find more about it on [my blog post](https://theodorusclarence.com/blog/tailwindcss-best-practice#1-using-layout-class-or-container)

#### Open Graph Generator

| ![image](https://user-images.githubusercontent.com/55318172/137617070-806a0509-84bd-4cae-a900-2ab17e418d8d.png) | ![image](https://user-images.githubusercontent.com/55318172/137617090-c24f684a-bfe5-41b6-8ba9-fa99bae5cadf.png) |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |

Open Graph is generated using [og.thcl.dev](https://og.thcl.dev), but please fork and self-host if your website is going to have a lot of traffic.

Check out the [repository](https://github.com/theodorusclarence/og) to see the API parameters.

#### Preloaded & Self Hosted Inter Fonts

Inter fonts is a variable fonts that is self hosted and preloaded.

## Snippets

This starter is equipped with workspace-snippets, it is encouraged to use it, especially the `np` and `rc`

### Next.js Page

File inside `src/pages` will be the webpage route, there are 2 things that need to be added in Next.js page:

1. Seo component
2. Layout class to give constraint to viewport width. [Read more about layout class](https://theodorusclarence.com/blog/tailwindcss-best-practice#1-using-layout-class-or-container).

Snippets: `np`

```tsx
import * as React from 'react';
import Seo from '@/components/Seo';
export default function TestPage() {
  return (
    <>
      <Seo templateTitle='Test' />
      <main>
        <section className=''>
          <div className='layout'></div>
        </section>
      </main>
    </>
  );
}
```

### React Components

To make a new component, It is encouraged to use `export default function`. Because when we need to rename it, we only need to do it once.

Snippets: `rc`

```tsx
import * as React from 'react';
export default function Component() {
  return <div></div>;
}
```

#### Import React

Snippets: `ir`

```tsx
import * as React from 'react';
```

#### Import Next Image

Snippets: `imimg`

```tsx
import Image from 'next/image';
```

#### Import Next Link

Snippets: `iml`

```tsx
import Link from 'next/link';
```

#### useState Hook

Snippets: `us`

```tsx
const [state, setState] = React.useState(initialState);
```

#### useEffect Hook

Snippets: `uf`

```tsx
React.useEffect(() => {}, []);
```

#### useReducer Hook

Snippets: `ur`

```tsx
const [state, dispatch] = React.useReducer(someReducer, {});
```

#### useRef Hook

Snippets: `urf`

```tsx
const someRef = React.useRef();
```

#### Region Comment

It is really useful when we need to group code. It is also collapsible in VSCode

Snippets: `reg`

```tsx
//#region  //*============== FORM SUBMIT
//#endregion  //*============== FORM SUBMIT
```

You should also use [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) extension.
