"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [particles, setParticles] = useState<Array<{id: number; x: number; y: number; size: number; duration: number; delay: number}>>([]);
  const heroRef = useRef<HTMLElement>(null);

  const fullText = "自動化できます。";

  useEffect(() => {
    setIsLoaded(true);

    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Typing effect
    let currentIndex = 0;
    const typingDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, 1200);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(typingDelay);
      clearInterval(cursorInterval);
    };
  }, []);

  const services = [
    {
      num: "01",
      title: "業務自動化",
      desc: "帳票作成、月次集計、ファイル整理など繰り返し作業をゼロに。GASやRPAで業務を効率化します。",
    },
    {
      num: "02",
      title: "データ管理基盤",
      desc: "スプレッドシートを壊れにくく、誰でも使える形に。入力ミス防止や履歴管理も対応。",
    },
    {
      num: "03",
      title: "Lステップ構築",
      desc: "LINE公式アカウントを活用した集客・予約・リピート施策。シナリオ設計から運用まで。",
    },
    {
      num: "04",
      title: "SaaS・アプリ開発",
      desc: "御社専用のWebアプリやシステムをゼロから構築。要件定義から保守運用まで一貫対応。",
    },
    {
      num: "05",
      title: "口コミ・MEO対策",
      desc: "Googleレビュー増加の仕組み作りとAI自動返信で、集客力を強化します。",
    },
    {
      num: "06",
      title: "EC・決済構築",
      desc: "商品登録から決済導線、サイト構築まで一括対応。Shopify、BASE、独自ECに対応。",
    },
  ];

  const steps = [
    { num: "01", title: "無料相談", desc: "現状の課題をZOOMでヒアリング。最適な解決策をご提案します。" },
    { num: "02", title: "プラン決定", desc: "ご予算とニーズに合わせて、ライト or スタンダードを選択。" },
    { num: "03", title: "導入開始", desc: "最短3日で導入。改善を繰り返しながら運用をサポート。" },
  ];

  const faqs = [
    { q: "どんな業種でも対応できますか？", a: "はい、業種を問わず対応可能です。美容、飲食、小売、不動産、士業など様々な実績があります。" },
    { q: "契約期間の縛りはありますか？", a: "最低契約期間はありません。月単位でのご契約なので、いつでも解約可能です。" },
    { q: "既存ツールとの連携は？", a: "kintone、Salesforce、freeeなど既存ツールとの連携も対応可能です。API連携やデータ移行もお任せください。" },
    { q: "どのくらいで効果が出ますか？", a: "業務自動化であれば即日〜1週間で効果を実感いただけます。継続的な改善で更なる効率化を実現します。" },
  ];

  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="glass rounded-xl px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl text-gradient font-bold">Z+</span>
              <span className="text-white/50 text-sm hidden sm:inline">ゼットプラス</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {[
                { en: "Service", ja: "サービス" },
                { en: "Works", ja: "実績" },
                { en: "Price", ja: "料金" },
                { en: "FAQ", ja: "質問" },
              ].map((item) => (
                <a key={item.en} href={`#${item.en.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors">
                  <span className="font-en font-medium">{item.en}</span>
                </a>
              ))}
            </nav>
            <a href="#cta" className="btn-primary text-sm py-2.5 px-5">
              無料相談
            </a>
          </div>
        </div>
      </header>

      {/* Hero - Dark section with large typography */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-primary)]">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
            alt="Business automation background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-[var(--bg-primary)]" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 animate-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Background gradient effects - enhanced */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/10" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[200px] animate-pulse-slow animation-delay-4000" />
        </div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-scan-line" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-scan-line animation-delay-1000" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-scan-line animation-delay-2000" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-20 h-20 border border-cyan-500/20 rotate-45 animate-float-slow" />
          <div className="absolute top-40 right-[15%] w-16 h-16 border border-blue-500/20 rotate-12 animate-float-slow animation-delay-2000" />
          <div className="absolute bottom-40 left-[20%] w-12 h-12 border border-purple-500/20 -rotate-12 animate-float-slow animation-delay-4000" />
          <div className="absolute top-1/3 right-[25%] w-8 h-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full animate-float-slow animation-delay-1000" />
          <div className="absolute bottom-1/3 left-[30%] w-6 h-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-float-slow animation-delay-3000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Main hero content */}
            <div className="text-center lg:text-left">
              {/* English subtitle with glitch effect */}
              <p className={`font-en text-white/40 text-sm md:text-base tracking-[0.3em] uppercase mb-6 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <span className="relative inline-block">
                  <span className="relative z-10">IT Support for Small Business</span>
                  <span className="absolute inset-0 text-cyan-400/30 animate-glitch-1 z-0" aria-hidden="true">IT Support for Small Business</span>
                  <span className="absolute inset-0 text-purple-400/30 animate-glitch-2 z-0" aria-hidden="true">IT Support for Small Business</span>
                </span>
              </p>

              {/* Main headline with typing effect */}
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <span className="text-white inline-block animate-text-reveal">その手作業、</span>
                <br />
                <span className="text-gradient relative">
                  {typedText}
                  <span className={`inline-block w-[4px] h-[0.9em] bg-cyan-400 ml-1 align-middle ${showCursor ? "opacity-100" : "opacity-0"} ${typedText.length === fullText.length ? "animate-blink" : ""}`} />
                </span>
              </h1>

              {/* Subhead */}
              <p className={`text-lg md:text-xl text-white/60 max-w-xl mb-8 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                業務自動化、Lステップ構築、SaaS開発まで。
                <br className="hidden sm:block" />
                中小企業のIT課題を、まるごと解決します。
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <a href="#cta" className="btn-line inline-flex items-center justify-center gap-3 text-lg group relative overflow-hidden">
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  <span className="relative z-10">LINE登録で無料相談</span>
                </a>
                <a href="#service" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg border-white/20 text-white hover:bg-white hover:text-[var(--bg-primary)]">
                  サービスを見る
                </a>
              </div>

              {/* Stats badges */}
              <div className={`flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {[
                  { value: "0", unit: "円", label: "初期費用" },
                  { value: "3", unit: "日〜", label: "最短導入" },
                  { value: "0", unit: "円", label: "解約金" },
                ].map((stat, i) => (
                  <div key={i} className="text-center min-w-[80px]">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="font-display text-4xl md:text-5xl text-white">{stat.value}</span>
                      <span className="text-lg md:text-xl text-cyan-400 font-bold">{stat.unit}</span>
                    </div>
                    <p className="text-white/40 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero Image with floating elements */}
            <div className={`relative hidden lg:block transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              {/* Main image container */}
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse-slow" />

                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Dashboard analytics"
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                </div>

                {/* Floating card 1 - Top left */}
                <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-xl animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">業務時間</p>
                      <p className="text-green-400 text-xs">-70% 削減</p>
                    </div>
                  </div>
                </div>

                {/* Floating card 2 - Bottom right */}
                <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-xl animate-float-slow animation-delay-2000">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">自動化完了</p>
                      <p className="text-cyan-400 text-xs">24/7 稼働中</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-center shadow-lg rotate-12 animate-float">
                  <span className="text-[10px]">無料相談で</span>
                  <span className="font-bold text-sm">1つ効率化</span>
                  <span className="text-[10px]">プレゼント</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile floating badge */}
          <div className={`absolute top-32 right-4 lg:hidden transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-lg transform rotate-12 animate-float">
              <span className="text-[9px]">無料相談で</span>
              <span className="font-bold text-xs">1つ効率化</span>
              <span className="text-[9px]">プレゼント</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="font-en text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
        </div>
      </section>

      {/* Problems - Light section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-en text-[var(--accent-blue)] font-semibold text-sm tracking-wider mb-2">PROBLEM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] section-title section-title-center">
              こんなお悩みありませんか？
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "毎月同じ作業に\n時間を取られている", color: "blue" },
              { title: "データがバラバラで\n管理できていない", color: "cyan" },
              { title: "ITに詳しい人が\n社内にいない", color: "orange" },
            ].map((item, i) => (
              <div key={i} className="feature-card text-center group">
                <div className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center ${item.color === "blue" ? "bg-blue-50 text-blue-600" : item.color === "cyan" ? "bg-cyan-50 text-cyan-600" : "bg-orange-50 text-orange-600"}`}>
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.color === "blue" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {item.color === "cyan" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                    {item.color === "orange" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                  </svg>
                </div>
                <p className="text-[var(--text-dark)] font-medium text-lg whitespace-pre-line leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              すべてゼットプラスが解決します
            </div>
          </div>
        </div>
      </section>

      {/* Services - Dark section */}
      <section id="service" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="font-en text-cyan-400 font-semibold text-sm tracking-wider mb-2">SERVICE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white section-title section-title-center">
              ゼットプラスができること
            </h2>
            <p className="text-white/50 mt-6 max-w-2xl mx-auto">
              インターネットの「何でも屋さん」として、幅広いIT課題に対応します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-[var(--bg-secondary)] border border-white/5 rounded-2xl p-8 card-hover group relative overflow-hidden">
                <div className="absolute top-4 right-4 font-en text-5xl font-bold text-white/5">
                  {service.num}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-en text-cyan-400 font-bold text-sm">{service.num}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works - Light section */}
      <section id="works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-en text-[var(--accent-blue)] font-semibold text-sm tracking-wider mb-2">WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] section-title section-title-center">
              導入事例
            </h2>
          </div>

          {/* Main Case */}
          <div className="bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] rounded-3xl p-8 md:p-12 mb-10">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 mb-6">
                  大型プロジェクト
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  美容サロン12店舗の
                  <br />
                  <span className="text-gradient">店舗運営DX</span>
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  60名規模の給与計算システム再構築から、売上管理、評価システム、LINE連携まで、店舗運営に必要な業務基盤をまるごと構築しました。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: "12", u: "店舗", l: "統合管理" },
                    { v: "60", u: "名", l: "給与自動計算" },
                    { v: "23", u: "種類", l: "給与項目整理" },
                    { v: "100", u: "万円/月", l: "継続サポート" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-2xl text-cyan-400">{s.v}</span>
                        <span className="text-cyan-400 text-sm">{s.u}</span>
                      </div>
                      <div className="text-xs text-white/40 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: "給与計算システム再構築", desc: "インセンティブ・歩合・控除の複雑ロジックを自動化" },
                  { title: "売上管理統合システム", desc: "店舗別→個人別の売上転記自動化" },
                  { title: "評価・研修・休暇システム", desc: "44項目の評価基準をデータ化" },
                  { title: "Lステップ連携", desc: "予約フロー整理、カレンダー連携" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-5 flex gap-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-white/40">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other Works */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: "Webアプリ開発", title: "売上予測SaaS", desc: "複数店舗の売上を一元管理。施術・物販を分離して予測。", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
              { tag: "Webアプリ開発", title: "人事考課SaaS", desc: "スタッフ評価を一元管理。評価基準の可視化、履歴管理。", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
              { tag: "ECサイト構築", title: "産直ECサイト", desc: "商品管理から決済まで一括対応。", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
            ].map((w, i) => (
              <div key={i} className="feature-card overflow-hidden group p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image src={w.img} alt={w.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[var(--accent-blue)] font-semibold">{w.tag}</span>
                  <h3 className="font-bold text-[var(--text-dark)] text-lg mt-1 mb-2">{w.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow - Light section with pattern */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-en text-[var(--accent-blue)] font-semibold text-sm tracking-wider mb-2">FLOW</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] section-title section-title-center">
              ご利用の流れ
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="feature-card text-center relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">
                    {step.num}
                  </div>
                  <div className="pt-8">
                    <h3 className="font-bold text-xl text-[var(--text-dark)] mb-3">{step.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 z-10">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Dark section */}
      <section id="price" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="font-en text-cyan-400 font-semibold text-sm tracking-wider mb-2">PRICE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white section-title section-title-center">
              シンプルな料金プラン
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["初期費用 0円", "縛りなし", "月額制"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 text-white/60 text-sm border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "ライトプラン",
                price: "50,000",
                desc: "まずは試してみたい方に",
                features: ["月1回ミーティング（60分）", "チャットサポート（営業時間内）", "軽微な改善・調整対応", "運用相談・アドバイス"],
                recommended: false,
              },
              {
                name: "スタンダードプラン",
                price: "100,000",
                desc: "本格的に効率化を進めたい方に",
                features: ["月2〜3回ミーティング", "チャットサポート無制限", "新規ツール構築・開発", "継続的な改善・最適化", "優先サポート対応"],
                recommended: true,
              },
            ].map((plan, i) => (
              <div key={i} className={`relative bg-[var(--bg-secondary)] rounded-2xl p-8 border-2 ${plan.recommended ? "border-cyan-500" : "border-white/10"}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                      おすすめ
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-white/40 mb-6">{plan.desc}</p>
                <div className="mb-8">
                  <span className="text-xs text-white/40">月額</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-white/60">¥</span>
                    <span className="font-display text-5xl text-white">{plan.price}</span>
                    <span className="text-white/40 text-sm">（税別）</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`block text-center py-4 px-6 rounded-xl font-bold transition-all ${plan.recommended ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/30" : "border border-white/20 text-white hover:bg-white/10"}`}>
                  無料相談する
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-10">
            ※ 大規模なシステム開発は別途お見積りとなります
          </p>
        </div>
      </section>

      {/* FAQ - Light section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-en text-[var(--accent-blue)] font-semibold text-sm tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] section-title section-title-center">
              よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-[var(--text-dark)] flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">Q</span>
                    {faq.q}
                  </span>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <div className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-sm flex-shrink-0">A</span>
                      <p className="text-[var(--text-muted)] pt-1">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Gradient section */}
      <section id="cta" className="py-24 relative overflow-hidden bg-gradient-to-br from-[var(--accent-blue)] via-blue-600 to-cyan-500">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur rounded-full px-5 py-2 text-sm text-white font-semibold mb-8">
            期間限定キャンペーン
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            今なら無料相談で
            <br />
            <span className="text-yellow-300">「1つ効率化」</span>プレゼント
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
            無料ZOOM相談にお申し込みいただいた方に、
            <br className="hidden sm:block" />
            簡単なGASスクリプトなど、1つ効率化をプレゼント。
          </p>
          <a
            href="https://lin.ee/jDiQH6f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#06C755] hover:bg-[#05b54d] text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all hover:scale-105 shadow-2xl"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINE登録して無料相談
          </a>
          <p className="text-white/50 text-sm mt-8">※ 登録後、自動で詳細をお送りします</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[var(--bg-primary)] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl text-gradient font-bold">Z+</span>
              <span className="text-white/30 text-sm">ゼットプラス</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/30">
              <a href="#" className="hover:text-white transition">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition">特定商取引法に基づく表記</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/30">
            © 2024 ゼットプラス. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
