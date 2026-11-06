'use client';

import { FormEvent, useState } from 'react';

const products = [
  { name: 'Besi Beton', type: 'Struktur', desc: 'Pilihan material tulangan untuk membantu membentuk struktur beton yang kuat dan stabil.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85', code: '01' },
  { name: 'Besi Hollow', type: 'Rangka', desc: 'Profil berongga untuk rangka, partisi, kanopi, dan berbagai kebutuhan fabrikasi.', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85', code: '02' },
  { name: 'Besi Siku', type: 'Profil', desc: 'Profil baja berbentuk L untuk penyangga, rangka, dan kebutuhan konstruksi lainnya.', image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=85', code: '03' },
  { name: 'Plat Baja', type: 'Lembaran', desc: 'Material lembaran untuk fabrikasi, komponen mesin, hingga pekerjaan konstruksi.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85', code: '04' },
  { name: 'H-Beam', type: 'Struktur', desc: 'Profil baja struktural untuk kebutuhan bangunan dan proyek berskala besar.', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85', code: '05' },
  { name: 'Produk Baja Lainnya', type: 'Lainnya', desc: 'Beragam material pendukung yang dapat disesuaikan dengan kebutuhan proyek Anda.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85', code: '06' },
];

const industries = [
  { n: '01', title: 'Konstruksi', desc: 'Material untuk struktur bangunan, infrastruktur, dan pekerjaan sipil.', icon: '⌂' },
  { n: '02', title: 'Pengembang Properti', desc: 'Mendukung pembangunan hunian, gedung komersial, dan kawasan terpadu.', icon: '▥' },
  { n: '03', title: 'Manufaktur', desc: 'Kebutuhan material untuk proses produksi dan fabrikasi industri.', icon: '⚙' },
  { n: '04', title: 'Toko Bangunan', desc: 'Pilihan pasokan produk besi dan baja untuk kebutuhan perdagangan.', icon: '▤' },
];

const steps = [
  { n: '01', title: 'Konsultasi', desc: 'Ceritakan kebutuhan material dan gambaran proyek Anda.' },
  { n: '02', title: 'Penawaran', desc: 'Tim kami membantu menyiapkan informasi dan penawaran.' },
  { n: '03', title: 'Konfirmasi', desc: 'Detail produk dan pesanan disepakati bersama.' },
  { n: '04', title: 'Pengiriman', desc: 'Pesanan dipersiapkan untuk proses pengiriman.' },
];

function Mark({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#beranda" aria-label="PT Jaya Karya Steelindo, beranda"><span className="brand-symbol"><i /><i /><i /></span><span className="brand-name">PT JAYA KARYA<br />STEELINDO</span></a>;
}

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (!number || number.includes('x')) {
      setFormError('Nomor WhatsApp perusahaan belum diatur. Silakan isi NEXT_PUBLIC_WHATSAPP_NUMBER pada file .env.local.');
      return;
    }
    const data = new FormData(e.currentTarget);
    const message = `Halo PT Jaya Karya Steelindo, saya ingin meminta penawaran.\nNama: ${data.get('name')}\nPerusahaan: ${data.get('company') || '-'}\nProduk: ${data.get('product')}\nKebutuhan: ${data.get('message')}`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
    setFormError('');
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap container">
          <Mark />
          <button className="menu-toggle" aria-label="Buka navigasi" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#tentang" onClick={closeMenu}>Tentang</a><a href="#produk" onClick={closeMenu}>Produk</a><a href="#industri" onClick={closeMenu}>Industri</a><a href="#keunggulan" onClick={closeMenu}>Keunggulan</a><a href="#proses" onClick={closeMenu}>Proses</a>
            <a className="nav-cta" href="#kontak" onClick={closeMenu}>Minta Penawaran <Arrow /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow eyebrow-light"><span /> MATERIAL BAJA UNTUK MASA DEPAN</div>
          <h1>Membangun Lebih Kuat,<br /><em>Bersama Baja Berkualitas.</em></h1>
          <p className="hero-copy">Mitra penyedia besi dan baja untuk kebutuhan konstruksi, properti, dan industri. Material yang tepat untuk fondasi proyek yang lebih kuat.</p>
          <div className="hero-actions"><a className="button button-primary" href="#produk">Jelajahi Produk <Arrow /></a><a className="text-link text-link-light" href="#tentang">Kenali perusahaan kami <span>↓</span></a></div>
          <div className="hero-note"><span className="note-line" /> DUKUNGAN MATERIAL UNTUK SETIAP TAHAP PEMBANGUNAN</div>
        </div>
        <div className="hero-index"><span>01</span><i /> 06</div>
      </section>

      <section className="intro-section section-pad" id="tentang">
        <div className="container intro-grid">
          <div className="intro-photo-wrap"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85" alt="Aktivitas di area proyek konstruksi" className="intro-photo" /><div className="photo-caption"><span>01 / 04</span><span>ENGINEERING THE EVERYDAY</span></div></div>
          <div className="intro-copy"><div className="eyebrow"><span /> TENTANG KAMI</div><h2>Material yang tepat.<br /><em>Kepercayaan yang kuat.</em></h2><p><strong>PT Jaya Karya Steelindo</strong> bergerak di bidang perdagangan dan distribusi besi serta baja untuk mendukung kebutuhan pembangunan dan industri. Kami menyediakan beragam material konstruksi, mulai dari besi beton, besi hollow, besi siku, plat baja, H-Beam, hingga produk baja lainnya.</p><p>Kami memahami bahwa setiap proyek memiliki kebutuhan yang berbeda. Karena itu, kami berkomitmen menghadirkan pilihan material dan layanan yang membantu pelanggan mengambil keputusan dengan lebih tepat.</p><a className="text-link" href="#keunggulan">Kenali nilai kami <Arrow /></a></div>
        </div>
        <div className="container intro-stats"><div><strong>01</strong><span>Fokus pada kebutuhan<br />pelanggan</span></div><div><strong>02</strong><span>Beragam pilihan<br />material baja</span></div><div><strong>03</strong><span>Mendukung berbagai<br />sektor industri</span></div><div className="stats-quote">“Kekuatan sebuah proyek<br />dimulai dari material yang tepat.”</div></div>
      </section>

      <section className="products-section section-pad" id="produk">
        <div className="container"><div className="section-heading heading-split"><div><div className="eyebrow"><span /> PILIHAN MATERIAL</div><h2>Temukan material<br /><em>untuk setiap kebutuhan.</em></h2></div><p>Dari pekerjaan struktur hingga kebutuhan fabrikasi, temukan berbagai pilihan besi dan baja untuk mendukung rencana Anda.</p></div>
          <div className="product-grid">{products.map((p) => <article className="product-card" key={p.code}><div className="product-image"><img src={p.image} alt={`Ilustrasi material ${p.name}`} loading="lazy" /><span className="product-number">{p.code}</span><span className="product-type">{p.type}</span></div><div className="product-info"><div><h3>{p.name}</h3><p>{p.desc}</p></div><a href="#kontak" aria-label={`Tanyakan ${p.name}`} className="round-arrow"><Arrow /></a></div></article>)}</div>
          <div className="product-bottom"><span>Belum menemukan material yang dicari?</span><a href="#kontak" className="text-link">Diskusikan kebutuhan Anda <Arrow /></a></div>
        </div>
      </section>

      <section className="industries-section section-pad" id="industri"><div className="container industries-layout"><div className="industries-lead"><div className="eyebrow eyebrow-light"><span /> SEKTOR YANG KAMI DUKUNG</div><h2>Satu mitra untuk<br /><em>berbagai industri.</em></h2><p>Kami hadir untuk mendukung pelaku usaha dan pembangunan dari berbagai sektor dengan kebutuhan material yang beragam.</p><a className="button button-outline" href="#kontak">Ceritakan kebutuhan Anda <Arrow /></a><div className="industries-decoration">JKS<span> / </span>STEEL SOLUTIONS</div></div><div className="industry-list">{industries.map((item) => <article className="industry-item" key={item.n}><span className="industry-no">{item.n}</span><span className="industry-icon">{item.icon}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div><span className="industry-arrow">↗</span></article>)}</div></div></section>

      <section className="value-section section-pad" id="keunggulan"><div className="container"><div className="section-heading"><div className="eyebrow"><span /> ALASAN MEMILIH KAMI</div><h2>Lebih dari sekadar<br /><em>penyedia material.</em></h2><p className="section-subtitle">Kami membangun hubungan kerja melalui komitmen pada kualitas, komunikasi, dan kebutuhan pelanggan.</p></div><div className="value-grid"><article className="value-card value-feature"><span className="value-icon">✳</span><span className="value-no">01 / QUALITY</span><h3>Berorientasi pada kualitas</h3><p>Memprioritaskan informasi produk yang jelas dan pilihan material yang sesuai dengan kebutuhan penggunaan.</p><span className="value-watermark">01</span></article><article className="value-card"><span className="value-icon">◇</span><span className="value-no">02 / TRUST</span><h3>Profesional dan terpercaya</h3><p>Mengutamakan komunikasi yang terbuka agar pelanggan mendapat kejelasan dalam setiap proses.</p></article><article className="value-card"><span className="value-icon">↗</span><span className="value-no">03 / RESPONSE</span><h3>Responsif dan solutif</h3><p>Berupaya memahami kebutuhan pelanggan dan membantu menemukan alternatif yang tepat.</p></article><article className="value-card"><span className="value-icon">▧</span><span className="value-no">04 / EXPERIENCE</span><h3>Fleksibel untuk beragam kebutuhan</h3><p>Melayani kebutuhan material untuk proyek konstruksi, perdagangan, properti, dan industri.</p></article></div></div></section>

      <section className="quality-band"><div className="quality-image"/><div className="quality-overlay"/><div className="container quality-content"><div className="eyebrow eyebrow-light"><span /> KOMITMEN KAMI</div><h2>Kokoh pada kualitas.<br /><em>Konsisten dalam layanan.</em></h2><p>Setiap kebutuhan proyek layak mendapatkan perhatian yang tepat. Kami berkomitmen menjadi mitra material yang dapat diandalkan melalui proses yang jelas dan layanan yang bertanggung jawab.</p><a href="#kontak" className="text-link text-link-light">Bicarakan kebutuhan proyek <Arrow /></a></div><div className="quality-side">BUILT ON TRUST <span> / </span> MADE FOR PROGRESS</div></section>

      <section className="process-section section-pad" id="proses"><div className="container"><div className="section-heading heading-split"><div><div className="eyebrow"><span /> LANGKAH KERJA</div><h2>Proses yang jelas,<br /><em>lebih mudah dijalani.</em></h2></div><p>Kami menjaga alur komunikasi agar kebutuhan material Anda dapat dibahas secara terarah, dari konsultasi hingga pengiriman.</p></div><div className="process-grid">{steps.map((s, i) => <article className="process-step" key={s.n}><div className="process-top"><span>{s.n}</span>{i < steps.length - 1 && <i />}</div><div className="process-symbol">{['◉', '▤', '✓', '⇢'][i]}</div><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div></div></section>

      <section className="projects-section section-pad"><div className="container"><div className="section-heading heading-split"><div><div className="eyebrow"><span /> RUANG PENERAPAN</div><h2>Baja hadir dalam<br /><em>banyak kemungkinan.</em></h2></div><p>Material baja menjadi bagian penting dalam beragam lingkungan pembangunan dan kegiatan industri.</p></div><div className="application-grid"><div className="application-card application-large"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85" alt="Gedung perkantoran modern" loading="lazy"/><div><span>01 / COMMERCIAL</span><h3>Bangunan komersial</h3></div></div><div className="application-card"><img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85" alt="Struktur arsitektur modern" loading="lazy"/><div><span>02 / STRUCTURE</span><h3>Struktur bangunan</h3></div></div><div className="application-card"><img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85" alt="Pekerjaan konstruksi" loading="lazy"/><div><span>03 / CONSTRUCTION</span><h3>Proyek konstruksi</h3></div></div></div><p className="image-disclaimer">Foto digunakan sebagai ilustrasi penerapan material, bukan dokumentasi proyek PT Jaya Karya Steelindo.</p></div></section>

      <section className="contact-section section-pad" id="kontak"><div className="container contact-layout"><div className="contact-copy"><div className="eyebrow eyebrow-light"><span /> MULAI DISKUSI</div><h2>Punya kebutuhan<br /><em>material baja?</em></h2><p>Sampaikan kebutuhan proyek atau produk yang Anda cari. Tim kami siap membantu memulai percakapan dan menyiapkan informasi yang Anda perlukan.</p><div className="contact-note"><span>JKS</span><div><strong>PT Jaya Karya Steelindo</strong><small>Build with confidence. Build to last.</small></div></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>FORMULIR PERMINTAAN</span><span>01 / 04</span></div><label>Nama lengkap<input name="name" required placeholder="Masukkan nama Anda" /></label><label>Perusahaan <span className="optional">(opsional)</span><input name="company" placeholder="Nama perusahaan atau instansi" /></label><label>Produk yang dibutuhkan<select name="product" defaultValue=""><option value="" disabled>Pilih kategori produk</option>{products.map(p => <option key={p.code}>{p.name}</option>)}<option>Konsultasi kebutuhan lainnya</option></select></label><label>Detail kebutuhan<textarea name="message" required rows={3} placeholder="Ceritakan jenis, ukuran, jumlah, atau kebutuhan proyek Anda..." /></label><button className="button button-primary form-submit" type="submit">Kirim permintaan <Arrow /></button>{formError && <p className="form-message error">{formError}</p>}{sent && <p className="form-message">Permintaan Anda telah diteruskan ke WhatsApp.</p>}<small className="form-privacy">Informasi Anda digunakan untuk menindaklanjuti permintaan penawaran.</small></form></div></section>

      <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Mark light/><p>Solusi material besi dan baja<br />untuk pembangunan yang lebih kuat.</p></div><div className="footer-column"><span>JELAJAHI</span><a href="#tentang">Tentang Kami</a><a href="#produk">Produk</a><a href="#industri">Industri</a><a href="#keunggulan">Keunggulan</a></div><div className="footer-column"><span>LAYANAN</span><a href="#proses">Alur Pemesanan</a><a href="#kontak">Permintaan Penawaran</a><a href="#kontak">Konsultasi Produk</a></div><div className="footer-column footer-contact"><span>HUBUNGI KAMI</span><p>Untuk informasi produk dan penawaran, silakan kirim permintaan melalui formulir kontak.</p><a href="#kontak" className="footer-link">Mulai percakapan <Arrow /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PT Jaya Karya Steelindo. Hak cipta dilindungi.</span><span>STRONGER MATERIAL. STRONGER TOMORROW.</span><a href="#beranda">Kembali ke atas ↑</a></div></div></footer>
    </main>
  );
}
