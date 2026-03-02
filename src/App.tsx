import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Info, AlertCircle, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [showContext, setShowContext] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Suara Anak Putus Sekolah',
          text: 'Konstitusi Wajib Belajar 9 Tahun. Artinya Tuhan pun tidak bisa melarang.',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      alert('Fitur share tidak tersedia di browser ini. Silakan screenshot halaman ini.');
    }
  };

  const toggleTooltip = (id: string) => {
    setActiveTooltip(activeTooltip === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#e6e6e6] text-[#1a1a1a] font-sans selection:bg-red-200 py-4 md:py-8">
      <div className="max-w-2xl mx-auto min-h-[90vh] flex flex-col relative shadow-2xl bg-[#faf9f6] rounded-sm overflow-hidden">
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')]"></div>

        {/* Header / Navigation */}
        <header className="p-4 flex justify-between items-center border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
            <span className="font-typewriter text-xs tracking-widest uppercase text-gray-500">Surat Terbuka #001</span>
          </div>
          <button 
            onClick={handleShare}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 text-sm font-medium text-gray-600"
            aria-label="Bagikan"
          >
            <span className="hidden md:inline">Sebarkan</span>
            <Share2 className="w-4 h-4" />
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow p-6 md:p-10 flex flex-col gap-8 relative z-0">
          
          {/* The "Letter" - Visual Centerpiece */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-hand text-2xl md:text-3xl leading-relaxed space-y-8"
          >
            <div className="text-center space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide">KONSTITUSI</h1>
              <p className="text-xs md:text-sm font-sans text-gray-500 italic">UUD 1945 Pasal 31 Ayat 2</p>
            </div>

            <div className="text-center transform -rotate-1 space-y-3">
              <p className="text-red-600 text-3xl md:text-4xl font-bold">WAJIB BELAJAR 9 TAHUN</p>
              <div className="bg-gray-50 border-l-4 border-gray-300 p-4 text-left mx-auto max-w-md">
                <p className="text-sm md:text-base font-sans text-gray-700 leading-relaxed">
                  <span className="font-bold">"Setiap warga negara wajib mengikuti pendidikan dasar dan pemerintah wajib membiayainya."</span>
                </p>
                <p className="text-xs text-gray-500 mt-2 font-sans">— UUD 1945 Pasal 31 Ayat 2</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left mx-auto max-w-md mt-3">
                <p className="text-sm md:text-base font-sans text-gray-700 leading-relaxed">
                  <span className="font-bold">"Setiap anak berhak atas kelangsungan hidup, tumbuh, dan berkembang serta berhak atas perlindungan dari kekerasan dan diskriminasi."</span>
                </p>
                <p className="text-xs text-gray-500 mt-2 font-sans">— UUD 1945 Pasal 28B Ayat 2</p>
              </div>
            </div>

            <div className="text-center space-y-2 py-6 border-y-2 border-dashed border-gray-300 relative">
              <p className="text-red-600 text-3xl md:text-5xl font-bold leading-tight transform rotate-1 drop-shadow-sm">
                ARTINYA TUHAN PUN <br/> TIDAK BISA MELARANG
              </p>
              <div className="absolute -right-4 top-0 text-gray-300 transform rotate-12 text-6xl opacity-20 font-typewriter pointer-events-none">
                DITOLAK
              </div>
              <p className="text-sm md:text-base font-sans text-gray-600 italic pt-2">
                Ini bukan permintaan. Ini adalah hak konstitusional.
              </p>
            </div>

            {/* Location Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 -mx-4 md:mx-0 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-3xl" role="img" aria-label="Lokasi">📍</span>
                <div className="flex-1">
                  <h3 className="font-typewriter text-sm uppercase tracking-widest text-blue-900 mb-2">Lokasi Kejadian:</h3>
                  <p className="text-xl md:text-2xl font-bold text-blue-900">Kotapinang</p>
                  <p className="text-lg text-blue-800">Kabupaten Labuhanbatu Selatan</p>
                  <p className="text-base text-blue-700">Provinsi Sumatera Utara</p>
                  <p className="text-sm font-sans text-blue-600 mt-3 italic">
                    Ini bukan cerita dari tempat jauh. Ini terjadi di sekitar kita.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Layout for Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
              
              {/* Masalah */}
              <div className="space-y-2">
                <h3 className="font-typewriter text-sm uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Masalah:</h3>
                <ul className="space-y-1">
                  <li className="text-gray-600">1. Bolos</li>
                  <li className="text-gray-600">2. Merokok</li>
                  <li className="text-gray-800 font-bold">3. Ekonomi</li>
                  <li className="text-gray-600">4. Malas Sekolah</li>
                  <li className="relative">
                    <InteractiveText 
                      text="5. Berhenti Sekolah" 
                      isActive={activeTooltip === 'berhenti'}
                      onClick={() => toggleTooltip('berhenti')}
                      className="text-red-600 font-bold text-2xl transform -skew-x-6 inline-block cursor-pointer border-b-2 border-red-600/30 hover:border-red-600 transition-colors"
                    />
                    <Tooltip id="berhenti" activeId={activeTooltip} onClose={() => setActiveTooltip(null)}>
                      Sekolah melarang masuk karena tunggakan biaya, bukan semata perilaku.
                    </Tooltip>
                  </li>
                </ul>
              </div>

              {/* Solusi */}
              <div className="space-y-2">
                <h3 className="font-typewriter text-sm uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Solusi:</h3>
                <p className="text-red-600 font-bold text-3xl">Minta Tolong</p>
              </div>
            </div>

            {/* Strategi */}
            <div className="space-y-4 bg-yellow-50/80 p-6 rounded-lg border border-yellow-100 -mx-4 md:mx-0 shadow-sm">
              <h3 className="font-typewriter text-sm uppercase tracking-widest text-gray-500">Strategi:</h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Mencari tahu berbagai jawaban</li>
                <li className="relative">
                  <InteractiveText 
                    text="Minta tolong ke Kepling" 
                    isActive={activeTooltip === 'kepling'}
                    onClick={() => toggleTooltip('kepling')}
                    className="text-red-600 font-bold text-2xl cursor-pointer hover:underline decoration-wavy decoration-red-300"
                  />
                  <Tooltip id="kepling" activeId={activeTooltip} onClose={() => setActiveTooltip(null)}>
                    Kepala Lingkungan: Aparat terdekat yang mengetahui kondisi ekonomi warga.
                  </Tooltip>
                </li>
                <li>Minta tolong ke Dinas Pendidikan</li>
                <li>Minta tolong ke Warga/Masyarakat</li>
                <li className="relative">
                  <InteractiveText 
                    text="Minta tolong ke Wartawan" 
                    isActive={activeTooltip === 'wartawan'}
                    onClick={() => toggleTooltip('wartawan')}
                    className="text-red-600 font-bold text-2xl cursor-pointer hover:underline decoration-wavy decoration-red-300"
                  />
                  <Tooltip id="wartawan" activeId={activeTooltip} onClose={() => setActiveTooltip(null)}>
                    Viralitas seringkali menjadi jalan pintas keadilan di era ini.
                  </Tooltip>
                </li>
                <li>Minta tolong ke Kantor Polisi</li>
                <li>Minta tolong ke Kantor Kejaksaan</li>
              </ol>
            </div>

            {/* Opportunity */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="font-typewriter text-sm uppercase tracking-widest text-gray-500">Opportunity (Harapan):</h3>
              <div className="space-y-4">
                <div className="relative">
                  <p className="text-red-600 font-bold text-2xl inline-block pb-1">
                    1. 50 Juta Uang Damai
                  </p>
                  <p className="text-sm text-gray-500 font-sans mt-1 ml-6">
                    *Kompensasi imajiner atas hak pendidikan yang dirampas.
                  </p>
                </div>
                <div className="relative">
                  <p className="text-red-600 font-bold text-2xl block">
                    2. Uang sekolah + Uang Saku dari Dinas
                  </p>
                  <p className="text-sm text-gray-500 font-sans mt-1 ml-6">
                    *Solusi konkret agar siswa bisa kembali bersekolah tanpa beban biaya.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Context Trigger */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setShowContext(true)}
            className="mt-8 w-full bg-gray-900 text-white py-4 px-6 rounded-xl flex items-center justify-between group shadow-lg hover:bg-black transition-colors"
          >
            <div className="flex flex-col items-start">
              <span className="font-sans font-bold text-lg">Buka Fakta Lapangan</span>
              <span className="font-sans text-xs text-gray-400">Klik untuk melihat detail masalah</span>
            </div>
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </motion.button>

        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-gray-400 text-xs font-mono border-t border-gray-100 bg-gray-50">
          <p>Suara ini tidak boleh berhenti di sini.</p>
          <p className="mt-1 opacity-50">#WajibBelajar9Tahun #HakPendidikan</p>
        </footer>

        {/* Context Modal / Overlay */}
        <AnimatePresence>
          {showContext && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowContext(false)}
            >
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white w-full max-w-lg rounded-t-2xl md:rounded-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
                onClick={e => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center z-10 shrink-0">
                  <h2 className="font-bold text-lg flex items-center gap-2 font-sans">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    Realita di Lapangan
                  </h2>
                  <button onClick={() => setShowContext(false)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 space-y-6 font-sans overflow-y-auto">
                  <div className="bg-red-50 p-5 rounded-xl border border-red-100 shadow-sm">
                    <h3 className="font-bold text-red-800 mb-2 text-lg">Inti Masalah</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Siswa dikeluarkan dengan alasan <strong>"Problematik"</strong> (merokok & bolos), padahal SP hanya mencatat "Bolos". Akar masalah sebenarnya adalah <strong>ketidakmampuan membayar uang sekolah</strong>.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 border-l-4 border-black pl-3 uppercase tracking-wide text-sm">Faktor Penghambat</h3>
                    
                    <div className="grid gap-3">
                      <FactorCard 
                        icon="🏠" 
                        title="Jarak" 
                        desc="Lokasi rumah siswa dan sekolah yang mungkin terlalu jauh untuk ditempuh berjalan kaki." 
                      />
                      <FactorCard 
                        icon="⏰" 
                        title="Waktu" 
                        desc="Tuntutan bangun pagi yang sulit dipenuhi jika anak harus membantu orang tua atau bekerja." 
                      />
                      <FactorCard 
                        icon="🚌" 
                        title="Transportasi" 
                        desc="Minim atau tidak tersedia, atau tidak ada biaya untuk ongkos." 
                      />
                      <FactorCard 
                        icon="🎒" 
                        title="Fasilitas" 
                        desc="Pulpen, buku, tas, baju, sepatu, parfum berpotensi minim atau tidak tersedia." 
                      />
                      <FactorCard 
                        icon="💰" 
                        title="Biaya (The Silent Killer)" 
                        desc="Uang sekolah, uang pembangunan, uang jajan, uang kas kelas, uang sumbangan, kerja kelompok, dll." 
                        highlight
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 p-5 rounded-xl text-sm text-gray-600 italic border-l-4 border-gray-300">
                    "Secara rasional, faktor ekonomi keluarga adalah hal utama yang mendasari keadaan ini, sehingga menimbulkan sebab-akibat yang kompleks dan mengikis minat belajar siswa secara signifikan."
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

function InteractiveText({ text, isActive, onClick, className }: { text: string, isActive: boolean, onClick: () => void, className?: string }) {
  return (
    <span onClick={onClick} className={className}>
      {text}
    </span>
  );
}

function Tooltip({ children, id, activeId, onClose }: { children: React.ReactNode, id: string, activeId: string | null, onClose: () => void }) {
  if (activeId !== id) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute left-0 top-full mt-2 z-20 w-64 bg-gray-900 text-white text-sm p-3 rounded-lg shadow-xl font-sans"
    >
      <div className="relative">
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute -top-2 -right-2 p-1 hover:text-gray-300">
          <X className="w-3 h-3" />
        </button>
        {children}
        <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 transform rotate-45 -translate-y-1/2"></div>
      </div>
    </motion.div>
  );
}

function FactorCard({ icon, title, desc, highlight = false }: { icon: string, title: string, desc: string, highlight?: boolean }) {
  return (
    <div className={`p-4 rounded-xl border transition-all hover:shadow-md ${highlight ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}`}>
      <div className="flex items-start gap-4">
        <span className="text-2xl bg-white p-2 rounded-full shadow-sm border border-gray-100" role="img" aria-label={title}>{icon}</span>
        <div>
          <h4 className={`font-bold ${highlight ? 'text-red-700' : 'text-gray-900'}`}>{title}</h4>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}
