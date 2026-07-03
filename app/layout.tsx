import "../styles/globals.css";

export const metadata = {
  title: "LiteSaaS | 会員制コンテンツ配信サンプル",
  description: "仕事受注向けの小規模SaaSサンプルサイトです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <a className="brand" href="/" aria-label="LiteSaaS ホーム">
            LiteSaaS
          </a>
          <nav className="site-nav" aria-label="メインナビゲーション">
            <a href="/">ホーム</a>
            <a href="/cases">事例</a>
            <a href="/pricing">料金</a>
            <a href="/contact">相談</a>
            <a href="/members">会員ページ</a>
            <a className="nav-cta" href="/login">
              ログイン
            </a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>NAMIKI Asset Studio All Right Reserved</p>
        </footer>
      </body>
    </html>
  );
}
