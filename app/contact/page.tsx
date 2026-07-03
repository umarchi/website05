export default function ContactPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero">
        <p className="eyebrow">Contact</p>
        <h1>制作相談</h1>
        <p>
          会員制サイト、教材配布、顧客ポータルなどの小規模SaaS制作を想定した問い合わせページのサンプルです。
        </p>
      </section>

      <section className="contact-layout">
        <form className="contact-form">
          <label>
            お名前
            <input placeholder="山田 太郎" />
          </label>
          <label>
            メールアドレス
            <input placeholder="client@example.com" type="email" />
          </label>
          <label>
            相談内容
            <textarea placeholder="作りたい会員サイトの内容、予算感、希望納期など" rows={6} />
          </label>
          <button className="button primary" type="button">
            送信内容を確認
          </button>
        </form>
        <aside className="contact-aside">
          <h2>相談前に整理すると早いこと</h2>
          <ul>
            <li>誰向けの会員サイトか</li>
            <li>限定公開したいコンテンツの種類</li>
            <li>決済や会員ランクが必要か</li>
            <li>公開希望日と初期予算</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
