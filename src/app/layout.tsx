import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// ドメインを設定してください
const siteUrl = "https://and-and.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ゼットプラス | 中小企業の業務自動化・IT効率化パートナー",
    template: "%s | ゼットプラス",
  },
  description: "業務自動化、Lステップ構築、SaaS開発など中小企業のIT課題をまるごと解決。初期費用0円・最短3日で導入可能。無料ZOOM相談で1つ効率化プレゼント実施中！",
  keywords: [
    "業務効率化",
    "業務自動化",
    "Lステップ",
    "Lステップ構築",
    "GAS",
    "Google Apps Script",
    "スプレッドシート自動化",
    "中小企業 IT支援",
    "DX支援",
    "SaaS開発",
    "RPA",
    "kintone連携",
    "LINE公式アカウント",
    "業務改善",
    "IT効率化",
  ],
  authors: [{ name: "ゼットプラス" }],
  creator: "ゼットプラス",
  publisher: "ゼットプラス",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "ゼットプラス",
    title: "ゼットプラス | 中小企業の業務自動化・IT効率化パートナー",
    description: "業務自動化、Lステップ構築、SaaS開発など中小企業のIT課題をまるごと解決。初期費用0円・最短3日で導入可能。",
  },
  twitter: {
    card: "summary",
    title: "ゼットプラス | 中小企業の業務自動化・IT効率化パートナー",
    description: "業務自動化、Lステップ構築、SaaS開発など中小企業のIT課題をまるごと解決。初期費用0円・最短3日で導入可能。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console の認証コードをここに追加
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD 構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ゼットプラス",
  alternateName: "Z+",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description: "中小企業の業務自動化・IT効率化を支援するパートナー",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
  },
  sameAs: [
    "https://lin.ee/jDiQH6f",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "JPY",
    lowPrice: "50000",
    highPrice: "100000",
    offerCount: "2",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "業務自動化・IT効率化サービス",
  provider: {
    "@type": "Organization",
    name: "ゼットプラス",
  },
  description: "業務自動化、Lステップ構築、SaaS開発など中小企業のIT課題をまるごと解決",
  areaServed: {
    "@type": "Country",
    name: "Japan",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "料金プラン",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ライトプラン",
          description: "月1回ミーティング、チャットサポート、軽微な改善対応",
        },
        price: "50000",
        priceCurrency: "JPY",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "スタンダードプラン",
          description: "月2〜3回ミーティング、チャットサポート無制限、新規ツール構築",
        },
        price: "100000",
        priceCurrency: "JPY",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "どんな業種でも対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、業種を問わず対応可能です。美容、飲食、小売、不動産、士業など様々な実績があります。",
      },
    },
    {
      "@type": "Question",
      name: "契約期間の縛りはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最低契約期間はありません。月単位でのご契約なので、いつでも解約可能です。",
      },
    },
    {
      "@type": "Question",
      name: "既存ツールとの連携は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "kintone、Salesforce、freeeなど既存ツールとの連携も対応可能です。API連携やデータ移行もお任せください。",
      },
    },
    {
      "@type": "Question",
      name: "どのくらいで効果が出ますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業務自動化であれば即日〜1週間で効果を実感いただけます。継続的な改善で更なる効率化を実現します。",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${notoSansJP.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
