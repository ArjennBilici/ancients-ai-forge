const app = document.getElementById("app");

app.innerHTML = `
  <section class="card">
    <span class="badge">v0.1 Alpha</span>

    <h1 class="title">Ancients AI Forge</h1>

    <p class="subtitle">
      R-Gen Studios için yapay zekâ destekli sinematik tarih içerik üretim merkezi.
    </p>

    <div class="section">
      <button id="openIdeaLab">Video Fikir Laboratuvarı</button>
    </div>
  </section>

  <section class="card">
    <h2 style="color:var(--gold); margin-bottom:10px;">Modüller</h2>
    <div class="grid">
      <span class="badge">💡 Video Fikirleri</span>
      <span class="badge">🔎 Araştırma Merkezi - Yakında</span>
      <span class="badge">📝 Senaryo Oluşturucu - Yakında</span>
      <span class="badge">🎨 Görsel Prompt Stüdyosu - Yakında</span>
    </div>
  </section>
`;
