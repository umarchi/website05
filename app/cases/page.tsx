const cases = [
  {
    category: "Online school",
    title: "講座購入者向けの動画アーカイブ",
    result: "受講者への資料送付を会員ページへ集約し、問い合わせ対応を削減。",
  },
  {
    category: "Consulting",
    title: "契約者専用の顧客ポータル",
    result: "議事録、月次資料、チェックリストを1か所にまとめて継続契約を支援。",
  },
  {
    category: "Community",
    title: "月額会員向けの限定記事サイト",
    result: "イベント告知とアーカイブ配信を追加し、会員継続率を高める導線を用意。",
  },
];

export default function CasesPage() {
  return (
    <main className="sub-page">
      <section className="sub-hero">
        <p className="eyebrow">Case studies</p>
        <h1>導入事例サンプル</h1>
        <p>
          実績紹介ページとして使える文量を用意しています。制作実績が増えたら、ここを実案件の内容へ差し替えられます。
        </p>
      </section>

      <section className="case-list">
        {cases.map((item) => (
          <article key={item.title}>
            <span>{item.category}</span>
            <h2>{item.title}</h2>
            <p>{item.result}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
