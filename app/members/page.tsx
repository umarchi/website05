const contents = [
  {
    label: "PDF",
    title: "導入チェックリスト",
    body: "顧客ヒアリングから公開前確認までの流れを整理した資料です。",
  },
  {
    label: "Video",
    title: "オンボーディング動画",
    body: "初回ログイン後に見せたい使い方ガイドの配置例です。",
  },
  {
    label: "News",
    title: "アップデートのお知らせ",
    body: "新機能や保守情報を会員だけに届ける記事エリアです。",
  },
  {
    label: "Template",
    title: "契約前ヒアリングシート",
    body: "案件化前に確認したい目的、会員区分、必要な決済導線を整理できます。",
  },
  {
    label: "Guide",
    title: "運用マニュアル",
    body: "資料追加、告知更新、会員への案内文作成を想定した運用ガイドです。",
  },
  {
    label: "Support",
    title: "初期サポート窓口",
    body: "公開直後の修正相談や軽微な文言調整を受け付ける導線のサンプルです。",
  },
];

const lessons = [
  { title: "会員サイトの設計", progress: "80%" },
  { title: "コンテンツ販売の導線", progress: "55%" },
  { title: "公開前チェック", progress: "35%" },
];

export default function Members() {
  return (
    <main className="members-page">
      <section className="members-hero">
        <p className="eyebrow">Members only</p>
        <h1>会員限定コンテンツ</h1>
        <p>
          ログイン済みユーザーだけが閲覧できるページです。資料配布、動画講座、顧客向け告知などに展開できます。
        </p>
      </section>

      <section className="member-dashboard" aria-label="学習状況">
        <div>
          <p className="eyebrow">Progress</p>
          <h2>受講・閲覧状況</h2>
          <p>会員ごとの閲覧状況や次に見るべき資料を表示する想定のエリアです。</p>
        </div>
        <div className="progress-list">
          {lessons.map((lesson) => (
            <article key={lesson.title}>
              <div>
                <h3>{lesson.title}</h3>
                <span>{lesson.progress}</span>
              </div>
              <meter max="100" value={Number.parseInt(lesson.progress, 10)} />
            </article>
          ))}
        </div>
      </section>

      <section className="content-list" aria-label="限定コンテンツ一覧">
        {contents.map((item) => (
          <article className="content-item" key={item.title}>
            <span>{item.label}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
            <a href="#">開く</a>
          </article>
        ))}
      </section>

      <section className="support-note">
        <h2>会員向けのお知らせ</h2>
        <p>
          次回更新では、決済連携、会員ランク別コンテンツ、管理者向け投稿画面の追加例を公開予定です。
        </p>
      </section>
    </main>
  );
}
