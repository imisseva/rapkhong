import React, { useRef, useState } from 'react';
import Marquee from '../components/ui/Marquee';
import Footer from '../components/layout/Footer';

// Artists Imports
import img4n4k1n  from '../assets/artists/4n4k1n.jpg';
import imgAngron  from '../assets/artists/Angron.jpg';
import imgC       from '../assets/artists/C.jpg';
import imgDart    from '../assets/artists/Dart.jpg';
import imgHassu   from '../assets/artists/Hassu.jpg';
import imgJeszino from '../assets/artists/Jeszino.jpg';
import imgLeBuca  from '../assets/artists/Le Buca.jpg';
import imgQuyt    from '../assets/artists/Quýt.jpg';

// Releases Imports
import relMww      from '../assets/releases/mwwleoiau.jpg';
import relAiCuGiong from '../assets/releases/congiong.jpg';
import relcau from '../assets/releases/caulong.jpg';
import relgiang from '../assets/releases/single.jpg';
import reltoet from '../assets/releases/toet.jpg';

/* ─── DATA ──────────────────────────────────────────────────────────── */

const events = [
  { id: 1, title: 'COMING SOON', date: 'COMING SOON', location: 'TP.HCM' },
];

// Thay cover + link bằng dữ liệu thật
const releases = [
  { id: 1, title: 'MWWLEOIAU', artist: 'ITACHILL',  year: '2025', cover: relMww, link: 'https://www.youtube.com/watch?v=uNdh4-SplGI' },
  { id: 2, title: 'Ai cũng có cơn giông của mình',   artist: 'BBL',    year: '2025', cover: relAiCuGiong, link: 'https://www.youtube.com/watch?v=dPakMh3d8rA' },
  { id: 3, title: 'CẦU LÔNG',       artist: '4n4k1n',   year: '2025', cover: relcau, link: 'https://www.youtube.com/watch?v=4YRC7I4T_Wk' },
  { id: 4, title: 'GIÁNG SINGLE',   artist: '4n4k1n, Jeszino, Haasu, beigee [prod. by Phongsaohoa]', year: '2025', cover: relgiang, link: 'https://www.youtube.com/watch?v=Uu9ljh-jrzI&list=RDUu9ljh-jrzI&start_radio=1' },
  { id: 5, title: 'TỜ ẾT',     artist: '4n4k1n, Jeszino',   year: '2025', cover: reltoet, link: 'https://www.youtube.com/watch?v=Nh0AlAjm2Zo' },
];

// Ảnh từ thư mục src/assets/artists/
const artists = [
  { id: 1,  name: '4N4K1N',   tag: 'RAPPER',   src: img4n4k1n,  role: 'featured' },
  { id: 2,  name: 'HASSU',    tag: 'RAPPER',   src: imgHassu,   role: 'stack' },
  { id: 3,  name: 'JESZINO',  tag: 'RAPPER',   src: imgJeszino, role: 'stack' },
  { id: 4,  name: 'ANGRON',   tag: 'RAPPER',   src: imgAngron,  role: 'grid' },
  { id: 5,  name: 'BBL',      tag: 'RAPPER',   src: '',         role: 'grid' },
  { id: 6,  name: 'QUÝT',     tag: 'RAPPER',   src: imgQuyt,    role: 'grid' },
  { id: 7,  name: 'LE BUCA',  tag: 'RAPPER',   src: imgLeBuca,  role: 'grid' },
  { id: 8,  name: 'C',        tag: 'RAPPER',   src: imgC,       role: 'grid' },
  { id: 9,  name: 'DART',     tag: 'RAPPER',   src: imgDart,    role: 'grid' },
  { id: 10, name: 'ITACHILL', tag: 'PRODUCER', src: '',         role: 'banner' },
];

/* ─── PALETTES (placeholder khi chưa có ảnh) ───────────────────────── */
const PALETTES = [
  'from-[#1a0a28] to-[#000]',
  'from-[#280a0a] to-[#000]',
  'from-[#0a1a28] to-[#000]',
  'from-[#281a0a] to-[#000]',
  'from-[#0a280a] to-[#000]',
  'from-[#200a28] to-[#000]',
  'from-[#28200a] to-[#000]',
  'from-[#0a1428] to-[#000]',
  'from-[#28100a] to-[#000]',
  'from-[#0a2820] to-[#000]',
];

/* ─── SHARED STYLES ─────────────────────────────────────────────────── */
const G  = 'px-6 md:px-12 lg:px-16'; // gutter đồng nhất toàn trang
const BB = 'font-black italic tracking-tighter'; // display style — font mặc định

/* ─── PLACEHOLDER ───────────────────────────────────────────────────── */
const Ph = ({ idx = 0, label = '' }) => (
  <div className={`w-full h-full bg-gradient-to-br ${PALETTES[idx % PALETTES.length]} flex items-center justify-center`}>
    <span className="font-black text-7xl text-white/5 select-none uppercase">
      {label.slice(0, 2) || '??'}
    </span>
  </div>
);

/* ─── SECTION HEADER ────────────────────────────────────────────────── */
const SectionHead = ({ title, meta, children }) => (
  <div className={`flex items-end justify-between ${G} py-14 border-b border-white/[0.06]`}>
    <h2 className={`${BB} text-[clamp(48px,8vw,88px)] leading-[0.88] text-white uppercase`}>
      {title}
    </h2>
    <div className="text-right text-[10px] tracking-[0.2em] uppercase text-white/30">
      <div>{meta}</div>
      {children}
    </div>
  </div>
);

/* ─── ARTIST CARD ───────────────────────────────────────────────────── */
const ArtistCard = ({ artist, idx, nameSize = 'text-2xl', className = '', style = {} }) => (
  <div className={`relative overflow-hidden cursor-pointer group ${className}`} style={style}>
    <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
      {artist.src
        ? <img src={artist.src} alt={artist.name} className="w-full h-full object-cover" />
        : <Ph idx={idx} label={artist.name} />
      }
    </div>
    {/* Gradient bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    {/* Tag top-right */}
    <span className="absolute top-3 right-3 z-10 text-rap-red text-[8px] font-bold tracking-[0.3em] uppercase bg-black/60 px-2 py-1">
      {artist.tag}
    </span>
    {/* Name bottom-left */}
    <span className={`absolute bottom-4 left-4 z-10 text-white ${BB} ${nameSize} leading-none uppercase`}>
      {artist.name}
    </span>
    {/* Hover shine */}
    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-500" />
  </div>
);

/* ─── NEW RELEASE ───────────────────────────────────────────────────── */
const NewReleaseSection = () => {
  const ref = useRef(null);
  const [hov, setHov] = useState(null);
  const scroll = (d) => ref.current?.scrollBy({ left: d * 316, behavior: 'smooth' });

  return (
    <section className="bg-black animate-scroll-entry">
      <SectionHead title={<>NEW<br />RELEASE</>} meta={`${releases.length} RELEASES`}>
        <div className="flex gap-2 mt-3 justify-end">
          {['‹', '›'].map((ch, i) => (
            <button key={i} onClick={() => scroll(i === 0 ? -1 : 1)}
              className="w-10 h-10 border border-white/20 text-white text-lg font-black hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center">
              {ch}
            </button>
          ))}
        </div>
      </SectionHead>

      <div ref={ref} className={`flex gap-4 overflow-x-auto ${G} py-10`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {releases.map((r, i) => (
          <a key={r.id} href={r.link}
            className="flex-shrink-0 relative group cursor-pointer block"
            style={{ width: 300, height: 300 }}
            onMouseEnter={() => setHov(r.id)}
            onMouseLeave={() => setHov(null)}>
            <div className="w-full h-full overflow-hidden relative">
              {/* Cover / placeholder */}
              <div className={`w-full h-full transition-transform duration-700 ${hov === r.id ? 'scale-110' : 'scale-100'}`}>
                {r.cover
                  ? <img src={r.cover} alt={r.title} className="w-full h-full object-cover" />
                  : <Ph idx={i} label={r.title || r.artist} />
                }
              </div>
              {/* Index number */}
              <span className="absolute top-4 left-4 text-white/25 font-bold text-xs tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black/70 flex flex-col justify-end p-5 transition-opacity duration-300 ${hov === r.id ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-rap-red text-[9px] font-bold tracking-[0.3em] uppercase mb-1">{r.artist}</span>
                <h3 className={`${BB} text-2xl text-white uppercase leading-none mb-1`}>{r.title}</h3>
                <span className="text-white/35 text-[9px] tracking-widest mb-4">{r.year}</span>
                <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase border border-white/40 px-4 py-2 inline-block w-fit hover:bg-white hover:text-black transition-all">
                  NGHE NGAY
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="flex-shrink-0 w-4" />
      </div>
    </section>
  );
};

/* ─── OUR ARTISTS ───────────────────────────────────────────────────── */
const ArtistsSection = () => (
  <section className="bg-black animate-scroll-entry">
    <SectionHead title={<>OUR<br />ARTISTS</>} meta={`${artists.length} ARTISTS`} />

    <div className="pb-0">
      {/* Row 1: Featured large (58%) + 2 stacked (42%) */}
      <div className="flex gap-[2px]" style={{ height: 440 }}>
        <ArtistCard
          artist={artists[0]} idx={0}
          nameSize="text-[clamp(32px,5vw,60px)]"
          style={{ flexBasis: '58%', flexShrink: 0 }}
        />
        <div className="flex flex-col gap-[2px] flex-1">
          {[artists[1], artists[2]].map((a, i) => (
            <ArtistCard key={a.id} artist={a} idx={i + 1}
              nameSize="text-2xl" style={{ flex: 1 }} />
          ))}
        </div>
      </div>

      {/* Row 2: 4 equal cells */}
      <div className="grid grid-cols-4 gap-[2px] mt-[2px]" style={{ height: 210 }}>
        {artists.slice(3, 7).map((a, i) => (
          <ArtistCard key={a.id} artist={a} idx={i + 3} nameSize="text-xl" />
        ))}
      </div>

      {/* Row 3: C + DART (each 25%) + ITACHILL banner (50%) */}
      <div className="grid grid-cols-4 gap-[2px] mt-[2px]" style={{ height: 210 }}>
        {/* C */}
        <ArtistCard artist={artists[7]} idx={7} nameSize="text-xl" />
        {/* DART */}
        <ArtistCard artist={artists[8]} idx={8} nameSize="text-xl" />
        {/* ITACHILL — producer banner spanning 2 cols */}
        <div className="relative overflow-hidden cursor-pointer group col-span-2">
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
            {artists[9].src
              ? <img src={artists[9].src} alt={artists[9].name} className="w-full h-full object-cover" />
              : <Ph idx={9} label={artists[9].name} />
            }
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-between px-8 z-10">
            <div>
              <span className="text-rap-red text-[9px] font-bold tracking-[0.35em] uppercase block mb-2">
                {artists[9].tag}
              </span>
              <span className={`${BB} text-white text-[clamp(28px,4vw,52px)] leading-none uppercase`}>
                {artists[9].name}
              </span>
            </div>
            <span className={`${BB} text-white/[0.04] text-[clamp(60px,10vw,110px)] leading-none uppercase select-none hidden md:block`}>
              {artists[9].name.slice(0, 3)}
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`${G} mt-10 mb-16 flex items-center justify-between`}>
        <span className="text-white/20 text-[10px] tracking-[0.35em] uppercase font-bold">
          {artists.length} NGHỆ SĨ
        </span>
        <button className="border border-white/25 text-white px-12 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-250">
          XEM TẤT CẢ NGHỆ SĨ
        </button>
      </div>
    </div>
  </section>
);

/* ─── HOME PAGE ─────────────────────────────────────────────────────── */
export const HomePage = () => (
  <div className="bg-black text-white w-full overflow-x-hidden">

    {/* ── HERO ── */}
    <section className="relative min-h-[100vh] flex flex-col justify-end border-b border-white/[0.06] overflow-hidden">

      {/* ── YouTube Background ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/4YRC7I4T_Wk?autoplay=1&mute=1&loop=1&playlist=4YRC7I4T_Wk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute w-full h-full border-0"
          style={{
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100%, 177.78vh)',
            height: 'max(100%, 56.25vw)',
            minWidth: '100%',
            minHeight: '100%',
          }}
          title="background video"
        />
      </div>

      {/* ── Lớp overlay đen phía dưới ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
      {/* Overlay 2 bên tối hơn */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10" />

      {/* ── Nội dung hero ── */}
      <div className={`relative z-20 ${G} pt-40 pb-16`}>
        <div className="flex items-end justify-between flex-wrap gap-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-rap-red rounded-full animate-pulse" />
              <span className="text-rap-red text-[10px] font-bold tracking-[0.4em] uppercase">
                #RAPKHONGMAYKU
              </span>
            </div>
            <h1 className={`${BB} text-[clamp(80px,14vw,160px)] leading-[0.87] text-white uppercase`}>
              RAP<br />KHÔNG
            </h1>
            <p className="mt-8 max-w-sm text-white/50 text-sm font-light leading-relaxed tracking-widest uppercase border-l-2 border-rap-red pl-5">
              Không chỉ là rap không.
            </p>
          </div>
          <div className="flex flex-col items-end gap-6 pb-2">
            <span className={`${BB} text-white/[0.06] text-[clamp(80px,12vw,140px)] leading-none select-none`}>01</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[9px] tracking-[0.3em] uppercase font-bold">  </span>
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>

    <NewReleaseSection />

    <div className={`${G}`}><div className="border-t border-white/[0.06]" /></div>

    <ArtistsSection />

    <div className={`${G}`}><div className="border-t border-white/[0.06]" /></div>

    <section className="animate-scroll-entry">
      <SectionHead title={<>LỊCH DIỄN<br />& TOUR</>} meta={`${events.length} UPCOMING`} />
      <div className={`${G} pb-24`}>
        {events.map((e) => (
          <div key={e.id}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center
                       py-8 border-b border-white/[0.07] cursor-pointer
                       hover:pl-3 transition-all duration-300">
            <div>
              <p className="text-rap-red text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{e.date}</p>
              <h3 className={`${BB} text-[clamp(22px,3.5vw,38px)] text-white uppercase leading-none`}>
                {e.title}
              </h3>
            </div>
            <div className="flex items-center gap-7 mt-4 md:mt-0 flex-shrink-0">
              <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">{e.location}</span>
              <button className="border border-white/25 text-white px-7 py-3 text-[9px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                TICKETS
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Marquee />
    <Footer />
  </div>
);