const plans = [
  {
    name: "Starter",
    price: "12万円〜",
    body: "ログイン、会員ページ、基本的な静的ページを含む最小構成。",
    items: ["トップページ", "ログイン導線", "会員限定ページ", "スマホ対応"],
  },
  {
    name: "Standard",
    price: "28万円〜",
    body: "問い合わせ、料金、事例、CMS連携まで含めた提案しやすい構成。",
    items: ["Starterの内容", "問い合わせフォーム", "事例ページ", "更新しやすい設計"],
  },
  {
    name: "Growth",
    price: "45万円〜",
    body: "決済、会員ランク、運用サポートを含む収益化向け構成。",
    items: ["Standardの内容", "決済連携", "会員ランク", "公開後サポート"],
  },
];

export default function PricingPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero">
        <p className="eyebrow">Pricing</p>
        <h1>料金プラン例</h1>
        <p>
          商談時に目安を説明しやすいよう、機能範囲ごとにプランを分けたサンプルです。実案件では要件に合わせて調整します。
        </p>
      </section>

      <section className="pricing-grid">
        {plans.map((plan) => (
          <article className="price-card" key={plan.name}>
            <p className="plan-name">{plan.name}</p>
            <h2>{plan.price}</h2>
            <p>{plan.body}</p>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="button secondary" href="/contact">
              相談する
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
