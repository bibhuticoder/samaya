// Samaya Quotes API Client

export interface Quote {
  text: string;
  author: string;
  category?: string;
  fetchedAt?: number;
}

const FALLBACK_QUOTES: Quote[] = [
  {
    text: 'सफलता अन्तिम होइन, असफलता घातक होइन: जारी राख्ने साहस नै महत्वपूर्ण हो।',
    author: 'विन्स्टन चर्चिल',
  },
  {
    text: 'सपना त्यो होइन जुन हामी सुत्दा देख्छौं, सपना त्यो हो जसले हामीलाई सुत्न दिँदैन।',
    author: 'एपीजे अब्दुल कलाम',
  },
  {
    text: 'हजार माइलको यात्रा पनि एक पाइलाबाट सुरु हुन्छ।',
    author: 'लाओ त्सु',
  },
  {
    text: 'परिवर्तन नै प्रकृतिको नियम हो।',
    author: 'भगवद्गीता',
  },
  {
    text: 'आफूलाई चिन्नु नै सम्पूर्ण बुद्धिमत्ताको सुरुवात हो।',
    author: 'अरस्तु',
  },
];

export async function fetchRandomQuote(): Promise<Quote> {
  try {
    const metaRes = await fetch(
      'https://bibhuticoder.github.io/samaya-quotes-api/quotes/metadata.json',
      { cache: 'no-cache' }
    );
    if (!metaRes.ok) throw new Error('Failed to fetch metadata');
    const metadata = await metaRes.json();
    const totalPages = metadata.totalPages || 1;
    const randomPage = Math.floor(Math.random() * totalPages) + 1;

    const quotesRes = await fetch(
      `https://bibhuticoder.github.io/samaya-quotes-api/quotes/${randomPage}.json`,
      { cache: 'no-cache' }
    );
    if (!quotesRes.ok) throw new Error('Failed to fetch quotes page');
    const quotesData: Quote[] = await quotesRes.json();

    if (Array.isArray(quotesData) && quotesData.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      return {
        ...quotesData[randomIndex],
        fetchedAt: Date.now(),
      };
    }
  } catch (error) {
    console.warn('Using fallback quote due to error:', error);
  }

  const fallback = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
  return {
    ...fallback,
    fetchedAt: Date.now(),
  };
}
