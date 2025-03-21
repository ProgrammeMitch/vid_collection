// Sample data for video collections
const videoData = [
    {
        thumbnail: "./public/thumbnails/discoveires2.png",
        videoLink: "https://youtu.be/NZk5QrWAnNA?si=7nTvusxQMyGzJuNv",
        title: "When Cops Make Disturbing discoveries Part 01",
        scriptLink: "https://docs.google.com/document/d/18rZNQmCKMvTT8YRFS8ZRoBuvmsIHyylQ3ucMdnvsI4g/edit?usp=sharing"
    },
    {
        thumbnail: "./public/thumbnails/discoveires.png",
        videoLink: "https://youtu.be/HS5uuw06fEg?si=ckS1ls9njZx0Yv2X",
        title: "When Cops Make Disturbing discoveries Part 02",
        scriptLink: "https://docs.google.com/document/d/1Q919u5btRAc7TxsdKn7_AwXELC_OmOOjUX1CXZBTf3w/edit?usp=sharing"
    },
    {
        thumbnail: "./public/thumbnails/karen.png",
        videoLink: "https://youtu.be/ZtIkxavMV30?si=5uHgSdk2xYoUKGaa",
        title: "Entitled Karen Who Got Instant Karma",
        scriptLink: "https://docs.google.com/document/d/1-rKdJEzmvSb4X6MjLLeNHy_A9H5X_eDUlKNvW72U1JA/edit?usp=sharing"
    },
    {
        thumbnail: "./public/thumbnails/brave.png",
        videoLink: "https://youtu.be/t5F235oASoE?si=wSEUInrtfpt_7zXY",
        title: "When Brave Citizens Help Save Cops",
        scriptLink: "https://docs.google.com/document/d/1qv7bTZgN5BgLV7e3ksJUpnwMC8WDZ5NMOEvUl-7z9Go/edit?usp=sharing"
    }, {
        thumbnail: "./public/thumbnails/karen2.png",
        videoLink: "https://youtu.be/BOAs6xKDZdA?si=Uq1J2YYYKCsujQek",
        title: "When Karens Try To Fight Cops",
        scriptLink: "https://docs.google.com/document/d/149N0vI0FbmR8-9KI8U5cRpSnB_6vnZqUi9tlD0EJ5KA/edit?usp=sharing"
    }, {
        thumbnail: "./public/thumbnails/wrong-suspect.png",
        videoLink: "https://youtu.be/kMVrDGV7xV4?si=bfTnEgh-QB9xC5nW",
        title: "When Cops Arrest The Wrong Suspect",
        scriptLink: "https://docs.google.com/document/d/1vDuDM5R8OAMtY-jqpkH1ndM_7MLzZ75zO1iIRXVSXpo/edit?usp=sharing"
    }, {
        thumbnail: "./public/thumbnails/entiltled-karen.png",
        videoLink: "https://youtu.be/zAkJoDvhdTs?si=9Lm2NygJaZYSf68l",
        title: "When Entitled Karens Get Served Instant Karma",
        scriptLink: "https://docs.google.com/document/d/1Beg-6BiJC-HXYLlT73mEs1omlFHnwlB14AVqwxzh278/edit?usp=sharing"
    }, {
        thumbnail: "./public/thumbnails/spit.png",
        videoLink: "https://youtu.be/eG15jSwlEjk?si=qdTB6Gp0jxy0aXd_",
        title: "Here's Why You Shouldn't Spit On Cops",
        scriptLink: "https://docs.google.com/document/d/1cPQ9tl6ordGkM0dwrOli5VZIuPgK0oLv5EwIV66OplU/edit?usp=sharing"
    },
    {
        thumbnail: "./public/thumbnails/hijack.png",
        videoLink: "https://youtu.be/N88Ohy_wV-A?si=U8iBB6zJZ3D8qoAc",
        title: "When Dumb Suspects Try To Hijack Planes",
        scriptLink: "https://docs.google.com/document/d/1xKvYCrqNJBfS2xA75M-H7wmjoulO24k99OTpjaaFuYI/edit?usp=sharing"
    }, {
        thumbnail: "./public/thumbnails/secrets.png",
        videoLink: "https://youtu.be/_k6tI2W3hXU?si=ckYecZlSR8MVe9HF",
        title: "When Parents Discover Thier Kids Horrifying Secrets",
        scriptLink: "https://docs.google.com/document/d/1np2DvAWTsYE7J9aFieiqMbljw_wGuSND6G3sAZwL0sA/edit?usp=sharing"
    }, {
        thumbnail: "./public/thumbnails/criminals.png",
        videoLink: "https://youtu.be/m85jqZ4VaNo?si=F_d_cCJDsfSms3WR",
        title: "Criminals Who Took Escaping To The Next Level",
        scriptLink: "https://docs.google.com/document/d/1qu5ku1FfnDHb4Ci7EtTCidDtReyQa6WgtHdn3QcvohU/edit?usp=sharing"
    }, {
        thumbnail: "./public/thumbnails/dumb.png",
        videoLink: "https://youtu.be/0JLJ5L3l2aY?si=X7i2rE27j3KhIGEX",
        title: "When Dumb Suspects Try To Hide Drugs",
        scriptLink: "https://docs.google.com/document/d/1kROD8LGi56xczpTFgmFZK0WEccr_cbABGVze7m7xxcY/edit?usp=sharing"
    }, {
        thumbnail: "./public/thumbnails/predators.png",
        videoLink: "https://youtu.be/HI-Bvt9-DWg?si=tf-y0zf7xlJ9o9kE",
        title: "When Cops Catch Predators Just In Time",
        scriptLink: "https://docs.google.com/document/d/1nOqgNTAcHbNfzuM4sLXlA8FxQK3oF-WHHh3NFlskRvk/edit?usp=sharing"
    },
    {
        thumbnail: "./public/thumbnails/keys.png",
        videoLink: "https://youtu.be/-Ug8qNP_t9M?si=verR0VsKLZoKXvb6",
        title: "Why Cops Shouldn't Leave Keys In The Ignition",
        scriptLink: "https://docs.google.com/document/d/1pDpL4EWeFFC61bHcrVx_XLwrP8pvqlKCwjIDL6oGlZw/edit?usp=sharing"
    },{
        thumbnail: "./public/thumbnails/burning.png",
        videoLink: "https://youtu.be/5S1iOmAVNu0?si=JLKZkwXYudXv4rIi",
        title: "When Cops Save People From Burning Homes",
        scriptLink: "https://docs.google.com/document/d/12AmrL-2_iUmNN0TG_KWJrrG3_wjx16gO_fenLCTXG3U/edit?usp=sharing"
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