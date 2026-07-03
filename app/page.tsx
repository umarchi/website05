const features = [
  {
    title: "会員限定コンテンツ",
    body: "PDF、動画、限定記事、チェックリストをログインユーザーだけに公開できます。",
  },
  {
    title: "シンプルな認証導線",
    body: "サンプル用の固定アカウントで、ログイン後の体験まで確認できます。",
  },
  {
    title: "受注前の提案に使いやすい",
    body: "小規模SaaS、教材配布、顧客ポータルの雛形として説明しやすい構成です。",
  },
];

const useCases = [
  {
    title: "教材・講座サイト",
    body: "購入者だけに動画、補足資料、課題テンプレートを配布する小規模スクール向け。",
  },
  {
    title: "顧客ポータル",
    body: "契約中の顧客へマニュアル、議事録、更新情報をまとめて届けるBtoB向け。",
  },
  {
    title: "コミュニティ会員サイト",
    body: "月額会員に限定記事、イベント情報、アーカイブを提供する運営者向け。",
  },
];

const steps = [
  "要件ヒアリングと画面構成の整理",
  "認証、会員ページ、管理しやすいコンテンツ構造の実装",
  "公開前チェック、軽微な修正、運用開始サポート",
];

const faqs = [
  {
    q: "本番運用にも使えますか？",
    a: "このサンプルは提案用の最小構成です。本番では認証サービス、DB、決済、管理画面を追加して運用向けに拡張します。",
  },
  {
    q: "デザインは変更できますか？",
    a: "業種やブランドに合わせて色、文言、ページ構成を調整できます。教材、士業、コンサル、店舗会員サイトなどへ展開しやすい作りです。",
  },
  {
    q: "納品後の更新はできますか？",
    a: "お知らせや資料の追加を想定した構成にできます。必要に応じてCMSや管理画面も組み込めます。",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Membership SaaS Sample</p>
          <h1>会員制コンテンツ配信をすぐ提案できるサンプルサイト</h1>
          <p className="hero-lead">
            ログイン、会員限定ページ、保護ルートまで含めた、仕事受注向けの最小構成デモです。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/login">
              デモログイン
            </a>
            <a className="button secondary" href="/members">
              会員ページを見る
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            alt="LiteSaaS の会員向けダッシュボードプレビュー"
            src="/dashboard-preview.svg"
          />
          <div className="hero-panel" aria-label="サービス概要">
            <div>
              <span className="metric">3</span>
              <span className="metric-label">主要ページ</span>
            </div>
            <div>
              <span className="metric">1</span>
              <span className="metric-label">保護ルート</span>
            </div>
            <div>
              <span className="metric">0</span>
              <span className="metric-label">外部DB依存</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="stat-grid" aria-label="サンプルサイトの想定数値">
          <div>
            <strong>7日</strong>
            <span>最小構成の制作目安</span>
          </div>
          <div>
            <strong>4種</strong>
            <span>追加しやすい収益導線</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>公開後の初期フォロー例</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What it includes</p>
          <h2>提案時に伝わりやすい基本機能</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Use cases</p>
          <h2>複数の業種へ説明しやすい構成</h2>
          <p className="section-lead">
            サンプルのまま見せるだけでなく、商談相手の業種に合わせて「何を会員限定にするか」を置き換えやすくしています。
          </p>
        </div>
        <div className="stack-list">
          {useCases.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2>受注後の進め方も伝えられます</h2>
        </div>
        <ol className="timeline">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>よくある質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Next action</p>
          <h2>提案用デモから、そのまま案件相談へつなげる</h2>
          <p>
            料金例、導入事例、問い合わせページを含めた構成にしたので、見込み客に「この規模なら依頼できそう」と感じてもらいやすくなります。
          </p>
        </div>
        <a className="button primary" href="/contact">
          相談ページを見る
        </a>
      </section>
    </main>
  );
}
