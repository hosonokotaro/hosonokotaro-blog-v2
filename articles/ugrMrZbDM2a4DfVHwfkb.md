---
title: 代表コンポーネントによる子コンポーネントの切り替えパターンについて
release: true
createDate: 1752995050696
---

### 設計パターン概要

React アプリ内で複数の画面や状態に応じて適切なコンポーネントを表示するために、中央の「代表コンポーネント（Switcher）」を設け、switch 文またはマッピングを利用して各子コンポーネントを切り替えるパターンです

可読性や保守性を高めるため、画面ごとの責務を分離し、型定義を組み合わせることで安全に導入できます

### 構成要素

#### 代表コンポーネント （Switcher）

- 画面切り替えのエントリポイント
- 現在の View `currentView` やパラメータを受け取り、適切な子コンポーネントを選択して表示

#### 子コンポーネント群

- 各画面や状態に対応する最小責務コンポーネント
- 必要に応じて追加の props を受け取る

#### 型定義

- 切り替えキーを型安全に扱う union type
- 各子コンポーネントの共通および固有の props インターフェース

#### ファイル構成例

```bash
src/
  components/
    Switcher.tsx
    views/
      HomeView.tsx
      ProfileView.tsx
      SettingsView.tsx
      NotFoundView.tsx
  types/
    index.ts
  App.tsx
```

### 実装手順

次に、実際の実装手順を順を追って記載します

#### ステップ 1: 切り替えキーの定義

- 画面や状態を識別するキーを union type で定義
- 各画面名を文字列型の union として列挙し、TypeScript による型安全を確保

```ts
// 切り替えキーを union type で定義
export type ViewKey =
  | 'HomeView'
  | 'ProfileView'
  | 'SettingsView'
  | 'NotFoundView';
```

※ `ViewKey` は後続の Switcher コンポーネントやマッピングオブジェクトで利用される

ステップ 2 では、各子コンポーネントの実装例を示します

#### ステップ 2: 子コンポーネントの実装例

- 各画面や状態に対応する最小責務コンポーネントを作成
- 共通 props と固有 props を適切に定義し、再利用性を高める

```tsx
// 共通 props インターフェース
type BaseViewProps = {
  title: string;
};

// HomeView コンポーネント
export const HomeView = ({ title }: BaseViewProps) => (
  <div>
    <h1>{title}</h1>
    <p>Welcome to the home page!</p>
  </div>
);

// ProfileView コンポーネント（追加の固有 props 例）
type ProfileViewProps = BaseViewProps & {
  userId: string;
};

export const ProfileView = ({ title, userId }: ProfileViewProps) => (
  <div>
    <h1>{title}</h1>
    <p>Profile for user: {userId}</p>
  </div>
);

// SettingsView コンポーネント
export const SettingsView = ({ title }: BaseViewProps) => (
  <div>
    <h1>{title}</h1>
    <p>Adjust your preferences here.</p>
  </div>
);

// NotFoundView コンポーネント
export const NotFoundView = ({ title }: BaseViewProps) => (
  <div>
    <h1>{title}</h1>
    <p>Page not found.</p>
  </div>
);
```

※ 各コンポーネントは責務が明確で、必要な props のみを受け取る

次にステップ 3: `Switcher` コンポーネントの実装に進みます

#### ステップ 3: Switcher コンポーネントの実装

- `ViewKey` と各子コンポーネントをマッピング
- switch 文で条件分岐を行い、適切なコンポーネントをレンダリング

```tsx
import React from 'react';
import { HomeView, ProfileView, SettingsView, NotFoundView } from './views';
import type { ViewKey } from './types';

type SwitcherProps = {
  currentView: ViewKey;
  title: string;
  userId?: string;
};

export const Switcher = ({ currentView, title, userId }: SwitcherProps) => {
  switch (currentView) {
    case 'HomeView':
      return <HomeView title={title} />;
    case 'ProfileView':
      // userId が必須の場合のガード
      return userId ? (
        <ProfileView title={title} userId={userId} />
      ) : (
        <NotFoundView title="Not Found" />
      );
    case 'SettingsView':
      return <SettingsView title={title} />;
    default:
      return <NotFoundView title={title} />;
  }
};
```

次にステップ 4: 呼び出し側への組み込み手順を記述します

#### ステップ 4: 呼び出し側への組み込み

- アプリケーションのルートや状況管理コードから `Switcher` を呼び出す
- useState で currentView を管理し、必要なタイミングで更新

```tsx
import React, { useState } from 'react';
import { Switcher } from './Switcher';
import type { ViewKey } from './types';

export const App = () => {
  const [currentView, setCurrentView] = useState<ViewKey>('HomeView');

  // 実際には親コンポーネントの props やコンテキスト、外部 API から値を取得する想定
  const userId = 'user-123';

  const handleNavigate = (view: ViewKey) => {
    setCurrentView(view);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleNavigate('HomeView')}>Home</button>
        <button onClick={() => handleNavigate('ProfileView')}>Profile</button>
        <button onClick={() => handleNavigate('SettingsView')}>Settings</button>
      </nav>
      <main>
        <Switcher currentView={currentView} title="My App" userId={userId} />
      </main>
    </div>
  );
};
```

※ ナビゲーションボタンなどで `setCurrentView` を呼び出し、`Switcher` により適切な画面が表示される

以上で基本的な実装手順は完了です

### 余談

AI 導入によってブログ更新の敷居が下がるので助かりました。内容は自身が述べたいことが表現されているかが肝要かと思います。これからも AI といい付き合い方ができるといいなと思いつつ
