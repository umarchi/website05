export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ja">
<body style={{fontFamily:'system-ui',margin:0}}>
<header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee'}}>
<strong>LiteSaaS</strong>
<nav style={{display:'flex',gap:12}}>
<a href="/">Home</a>
<a href="/members">Members</a>
<a href="/login">Login</a>
</nav>
</header>
{children}
</body>
</html>
);
}