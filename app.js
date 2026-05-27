document.addEventListener("DOMContentLoaded", () => {
    
    // Helper function to build Image and Video HTML safely
    function createMediaHtml(imageUrl, videoUrl, title) {
        let html = "";
        if (imageUrl && imageUrl.trim() !== "") {
            html += `<img src="${imageUrl}" alt="${title}" class="card-image">`;
        }
        if (videoUrl && videoUrl.trim() !== "") {
            html += `
                <a href="${videoUrl}" target="_blank" class="video-btn">
                    📺 Watch Video Breakdown
                </a>`;
        }
        return html;
    }

    // 1. Set Date & Load Summary Highlights
    document.getElementById("current-date").textContent = MARKET_DATA.date;
    const summaryList = document.getElementById("summary-list");
    MARKET_DATA.summary.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        summaryList.appendChild(li);
    });

    // 2. Load and Build Daily News Section (Multi-Grid)
    const newsContainer = document.getElementById("news-container");
    MARKET_DATA.news.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        
        const mediaHtml = createMediaHtml(item.imageUrl, item.videoUrl, item.headline);

        card.innerHTML = `
            <div>
                ${mediaHtml}
                <h3 class="news-headline" style="${item.imageUrl ? 'margin-top: 0.5rem;' : ''}">${item.headline}</h3>
                <p class="news-explanation">${item.explanation}</p>
            </div>
            <div class="meta-footer">
                <span>Asset: <strong>${item.marketAffected}</strong></span>
                <span>${item.timePosted}</span>
            </div>
        `;
        newsContainer.appendChild(card);
    });

    // 3. Load and Build Insights Section (Multi-Grid)
    const insightsContainer = document.getElementById("insights-container");
    MARKET_DATA.insights.forEach(item => {
        const directionClass = item.direction.toLowerCase();
        const card = document.createElement("div");
        card.className = "card";
        
        const mediaHtml = createMediaHtml(item.imageUrl, item.videoUrl, item.market);

        card.innerHTML = `
            <div>
                <span class="badge ${directionClass}">${item.direction}</span>
                ${mediaHtml}
                <h3 style="margin: 0.5rem 0;">${item.market}</h3>
                <p class="news-explanation">${item.reason}</p>
                <div class="insight-levels">${item.keyLevels}</div>
            </div>
            <p class="risk-alert">⚠️ <strong>Risk Warning:</strong> ${item.riskWarning}</p>
        `;
        insightsContainer.appendChild(card);
    });

    // 4. Load Trader Notes Section (Side-by-Side Multi Grid Layout)
    const notesContainer = document.getElementById("notes-container");
    MARKET_DATA.traderNotes.forEach(item => {
        const div = document.createElement("div");
        div.className = "note-item";
        
        const mediaHtml = createMediaHtml(item.imageUrl, item.videoUrl, "Trader Note");

        div.innerHTML = `
            <p>"${item.note}"</p>
            ${mediaHtml ? `<div class="note-media-box">${mediaHtml}</div>` : ''}
        `;
        notesContainer.appendChild(div);
    });
});