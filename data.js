const MARKET_DATA = {
    date: "May 27, 2026",
    
    summary: [
        "USD showing strong bullish momentum ahead of New York session.",
        "Gold (XAUUSD) breaking down past critical support levels.",
        "Crypto markets bracing for high volatility ahead of options expiry."
    ],

    // 📰 C. DAILY NEWS SECTION (3 Items Example)
    news: [
        {
            headline: "DSE summary on 26th market performance",
            explanation: `1. On February 27, 2026, the Dar es Salaam Stock Exchange achieved an equities turnover of TZS 24.06 billion and a massive government bond trading value of TZS 76.46 billion.
                          2. Major commercial bank counters like CRDB, KCB, and NMB heavily dominated the daily equity trading volumes and block transactions.
                          3. Key indicators closed strong, bringing the total market capitalization to TZS 34,636.64 billion with an All Share Index (DSEI) of 3,986.77.`,
            imageUrl: "./images/dse.png", 
            videoUrl: "https://youtu.be/i6TV_Szv7rg?si=T3cSgXpX7RmGK4tD", 
            marketAffected: `
*Official Bank of Tanzania (BoT) Mean Exchange Rates

    -USD to TZS: 2,546.74 
    -KES to TZS: 19.73 
    -GBP to TZS: 3,450.8`,
            timePosted: "yesterday 26th."
        },
        {
            headline: "Gold Plummets as Treasury Yields Climb",
            explanation: `### Summary of the Bank of Tanzania Public Notice (26 May 2026)

The **Bank of Tanzania (BoT)** announced that it intervened in the **Interbank Foreign Exchange Market (IFEM)** under its **Foreign Exchange Intervention Policy, 2023**.

#### Key Points:

* The BoT sold **USD 28.75 million** through a foreign exchange auction.
* The purpose was to **increase liquidity** in the foreign exchange market.
* The **weighted average exchange rate** was:

  * **TZS 2,619.31 per USD**

#### Auction Results:

* **Currency:** USD
* **Initially Offered Amount:** USD 20 million
* **Total Tendered Amount:** USD 28.75 million
* **Successful Amount Sold:** USD 28.75 million
* **Highest Bid Rate:** TZS 2,630/USD
* **Lowest Bid Rate:** TZS 2,610/USD
* **Banks Participated:** 21
* **Banks Accepted:** 21

#### Meaning:

This intervention shows that the central bank is actively supporting the foreign exchange market by supplying U.S. dollars to commercial banks, helping stabilize liquidity and exchange rate pressures in Tanzania.
`,
            imageUrl: "https://www.bot.go.tz/img/slider/2026031309301635.jpg", 
            videoUrl: "", // No video for this one
            marketAffected: "",
            timePosted: "may 27 2026"
        },
        {
            headline: "Crypto Liquidations Cross $200M Within 2 Hours",
            explanation: "Over-leveraged long positions were completely wiped out as Bitcoin dipped sharply to test liquidity blocks near the lower range of its daily structure.",
            imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500", 
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
            marketAffected: "BTC, ETH",
            timePosted: "11:45 AM"
        }
    ],

    // 🧠 D. INSIGHTS SECTION (3 Items Example)
    insights: [
        {
            market: "USD (DXY)",
            direction: "Bullish", 
            reason: "Backed by exceptional economic data prints and hawkish comments from central bankers overnight.",
            keyLevels: "Res: 105.50 | Sup: 104.20",
            imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500", 
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
            riskWarning: "High impact NFP data releasing later this week could radically alter this setup."
        },
        {
            market: "EURUSD",
            direction: "Bearish", 
            reason: "Clear structural breakdown on the H4 chart accompanied by aggressive selling pressure following the Eurozone CPI miss.",
            keyLevels: "Res: 1.0890 | Sup: 1.0720",
            imageUrl: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=500", 
            videoUrl: "", 
            riskWarning: "Watch out for sudden liquidity sweeps above yesterday's high."
        },
        {
            market: "Ethereum (ETH)",
            direction: "Neutral", 
            reason: "Price action is completely compressed between major moving averages with no clear institutional direction present.",
            keyLevels: "Res: $3,450 | Sup: $3,100",
            imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500", 
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
            riskWarning: "Avoid trading inside this choppy distribution zone."
        }
    ],

    // 👤 E. TRADER NOTES SECTION (2 Items Example)
    traderNotes: [
        {
            note: "Today is a day for extreme patience. The market is setting highly convincing traps ahead of tomorrow's high-impact economic news releases. Protect your capital first.",
            imageUrl: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500", 
            videoUrl: "" 
        },
        {
            note: "Risk Management Warning: Always cut your standard position sizing in half when dealing with assets trading directly at historical key levels. High volatility is expected.",
            imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500", 
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        }
    ]
};