// Sample data for video collections
const videoData = [
    {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries",
        scriptLink: "script1.pdf"
    },
    {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries",
        scriptLink: "script1.pdf"
    },
    {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries",
        scriptLink: "script1.pdf"
    },
    {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries",
        scriptLink: "script1.pdf"
    }, {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries",
        scriptLink: "script1.pdf"
    }, {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries",
        scriptLink: "script1.pdf"
    }, {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries",
        scriptLink: "script1.pdf"
    }, {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries",
        scriptLink: "script1.pdf"
    },
];

// Function to create a collection
function createCollection(video) {
    return `

      <div class="collection">
        <div class="thumbnail">
          <a href="${video.videoLink}" target="_blank">
            <img src="${video.thumbnail}" alt="${video.title} Thumbnail">
          </a>
        </div>
        <div class="video-link">
        <div class="title">${video.title}</div>
        <div class="script-link">
          <a href="${video.scriptLink}" target="_blank">View Script</a>
        </div>
        </div>
      </div>
    `;
}

// Function to render all collections
function renderCollections() {
    const container = document.querySelector('.collections');
    container.innerHTML = videoData.map(video => createCollection(video)).join('');
}

// Render collections on page load
window.onload = renderCollections;