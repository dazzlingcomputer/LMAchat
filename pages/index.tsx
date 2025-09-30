export default function Home() {
  return (
    <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0}}>
      <iframe
        src="/api/proxy"
        style={{width: '100vw', height: '100vh', border: 'none'}}
        title="LMAchat"
      />
    </div>
  )
}
