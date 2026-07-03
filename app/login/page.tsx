"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("demo@sample.dev");
  const [pw, setPw] = useState("demo1234");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, pw }),
    });

    setLoading(false);

    if (!response.ok) {
      setError("メールアドレスまたはパスワードが違います。");
      return;
    }

    const nextPath = new URLSearchParams(window.location.search).get("next");
    window.location.href = nextPath?.startsWith("/") ? nextPath : "/members";
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="login-title">
        <p className="eyebrow">Demo account</p>
        <h1 id="login-title">ログイン</h1>
        <p className="muted">
          入力済みのデモアカウントで、会員限定ページへの遷移を確認できます。
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            メールアドレス
            <input
              autoComplete="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </label>
          <label>
            パスワード
            <input
              autoComplete="current-password"
              name="password"
              onChange={(event) => setPw(event.target.value)}
              required
              type="password"
              value={pw}
            />
          </label>
          {error ? <p className="form-error">{error}</p> : null}
          <button className="button primary full" disabled={loading} type="submit">
            {loading ? "確認中..." : "ログインする"}
          </button>
        </form>
      </section>
    </main>
  );
}
