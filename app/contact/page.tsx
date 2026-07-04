"use client";

import { FormEvent } from "react";

const mailTo = "jobs@archi-softs.com";

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = `制作相談: ${name}`;
    const body = [
      "制作相談がありました。",
      "",
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      "",
      "相談内容:",
      message,
    ].join("\n");

    window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="mail-target">送信先: {mailTo}</p>
          <label>
            お名前
            <input name="name" placeholder="山田 太郎" required />
          </label>
          <label>
            メールアドレス
            <input name="email" placeholder="client@example.com" required type="email" />
          </label>
          <label>
            相談内容
            <textarea
              name="message"
              placeholder="作りたい会員サイトの内容、予算感、希望納期など"
              required
              rows={6}
            />
          </label>
          <button className="button primary" type="submit">
            メールで相談内容を送る
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
