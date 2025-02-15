const SurahData = [
  { id: 1, name: "Al-Fatihah", englishName: "The Opening", numberOfAyahs: 7, file: "./Surahmp3/001.mp3", duration: "00:00:51" },
  { id: 2, name: "Al-Baqarah", englishName: "The Cow", numberOfAyahs: 286, file: "./Surahmp3/002.mp3", duration: "2:05:39" },
  { id: 3, name: "Āl 'Imran", englishName: "Family of Imran", numberOfAyahs: 200, file: "./Surahmp3/003.mp3", duration: "1:17:29" },
  { id: 4, name: "An-Nisa", englishName: "The Women", numberOfAyahs: 176, file: "./Surahmp3/004.mp3", duration: "1:19:45" },
  { id: 5, name: "Al-Ma'idah", englishName: "The Table Spread", numberOfAyahs: 120, file: "./Surahmp3/005.mp3", duration: "1:02:47" },
  { id: 6, name: "Al-An'am", englishName: "The Cattle", numberOfAyahs: 165, file: "./Surahmp3/006.mp3", duration: "1:12:15" },
  { id: 7, name: "Al-A'raf", englishName: "The Heights", numberOfAyahs: 206, file: "./Surahmp3/007.mp3", duration: "1:22:52" },
  { id: 8, name: "Al-Anfal", englishName: "The Spoils of War", numberOfAyahs: 75, file: "./Surahmp3/008.mp3", duration: "00:30:23" },
  { id: 9, name: "At-Tawbah", englishName: "The Repentance", numberOfAyahs: 129, file: "./Surahmp3/009.mp3", duration: "1:00:24" },
  { id: 10, name: "Yunus", englishName: "Jonah", numberOfAyahs: 109, file: "./Surahmp3/010.mp3", duration: "00:44:50" },
  { id: 11, name: "Hud", englishName: "Hud", numberOfAyahs: 123, file: "./Surahmp3/011.mp3", duration: "00:46:11" },
  { id: 12, name: "Yusuf", englishName: "Joseph", numberOfAyahs: 111, file: "./Surahmp3/012.mp3", duration: "00:42:04" },
  { id: 13, name: "Ar-Ra'd", englishName: "The Thunder", numberOfAyahs: 43, file: "./Surahmp3/013.mp3", duration: "00:20:16" },
  { id: 14, name: "Ibrahim", englishName: "Abraham", numberOfAyahs: 52, file: "./Surahmp3/014.mp3", duration: "00:20:27" },
  { id: 15, name: "Al-Hijr", englishName: "The Rocky Tract", numberOfAyahs: 99, file: "./Surahmp3/015.mp3", duration: "00:15:54" },
  { id: 16, name: "An-Nahl", englishName: "The Bee", numberOfAyahs: 128, file: "./Surahmp3/016.mp3", duration: "00:42:08" },
  { id: 17, name: "Al-Isra", englishName: "The Night Journey", numberOfAyahs: 111, file: "./Surahmp3/017.mp3", duration: "00:35:13" },
  { id: 18, name: "Al-Kahf", englishName: "The Cave", numberOfAyahs: 110, file: "./Surahmp3/018.mp3", duration: "00:33:15" },
  { id: 19, name: "Maryam", englishName: "Mary", numberOfAyahs: 98, file: "./Surahmp3/019.mp3", duration: "00:21:22" },
  { id: 20, name: "Ta-Ha", englishName: "Ta-Ha", numberOfAyahs: 135, file: "./Surahmp3/020.mp3", duration: "00:27:07" },
  { id: 21, name: "Al-Anbiya", englishName: "The Prophets", numberOfAyahs: 112, file: "./Surahmp3/021.mp3", duration: "00:26:10" },
  { id: 22, name: "Al-Hajj", englishName: "The Pilgrimage", numberOfAyahs: 78, file: "./Surahmp3/022.mp3", duration: "00:29:32" },
  { id: 23, name: "Al-Mu'minun", englishName: "The Believers", numberOfAyahs: 118, file: "./Surahmp3/023.mp3", duration: "00:24:45" },
  { id: 24, name: "An-Nur", englishName: "The Light", numberOfAyahs: 64, file: "./Surahmp3/024.mp3", duration: "00:30:40" },
  { id: 25, name: "Al-Furqan", englishName: "The Criterion", numberOfAyahs: 77, file: "./Surahmp3/025.mp3", duration: "00:18:21" },
  { id: 26, name: "Ash-Shu'ara", englishName: "The Poets", numberOfAyahs: 227, file: "./Surahmp3/026.mp3", duration: "00:30:32" },
  { id: 27, name: "An-Naml", englishName: "The Ant", numberOfAyahs: 93, file: "./Surahmp3/027.mp3", duration: "00:26:12" },
  { id: 28, name: "Al-Qasas", englishName: "The Stories", numberOfAyahs: 88, file: "./Surahmp3/028.mp3", duration: "00:31:43" },
  { id: 29, name: "Al-Ankabut", englishName: "The Spider", numberOfAyahs: 69, file: "./Surahmp3/029.mp3", duration: "00:21:10" },
  { id: 30, name: "Ar-Rum", englishName: "The Romans", numberOfAyahs: 60, file: "./Surahmp3/030.mp3", duration: "00:19:31" },
  { id: 31, name: "Luqman", englishName: "Luqman", numberOfAyahs: 34, file: "./Surahmp3/031.mp3", duration: "00:11:55" },
  { id: 32, name: "As-Sajdah", englishName: "The Prostration", numberOfAyahs: 30, file: "./Surahmp3/032.mp3", duration: "00:08:43" },
  { id: 33, name: "Al-Ahzab", englishName: "The Combined Forces", numberOfAyahs: 73, file: "./Surahmp3/033.mp3", duration: "00:29:02" },
  { id: 34, name: "Saba", englishName: "Sheba", numberOfAyahs: 54, file: "./Surahmp3/034.mp3", duration: "00:19:02" },
  { id: 35, name: "Fatir", englishName: "The Originator", numberOfAyahs: 45, file: "./Surahmp3/035.mp3", duration: "00:17:36" },
  { id: 36, name: "Ya-Sin", englishName: "Ya Sin", numberOfAyahs: 83, file: "./Surahmp3/036.mp3", duration: "00:17:39" },
  { id: 37, name: "As-Saffat", englishName: "Those Who Set The Ranks", numberOfAyahs: 182, file: "./Surahmp3/037.mp3", duration: "00:24:09" },
  { id: 38, name: "Sad", englishName: "The Letter Sad", numberOfAyahs: 88, file: "./Surahmp3/038.mp3", duration: "00:17:49" },
  { id: 39, name: "Az-Zumar", englishName: "The Troops", numberOfAyahs: 75, file: "./Surahmp3/039.mp3", duration: "00:27:09" },
  { id: 40, name: "Ghafir", englishName: "The Forgiver", numberOfAyahs: 85, file: "./Surahmp3/040.mp3", duration: "00:26:07" },
  { id: 41, name: "Fussilat", englishName: "Explained in Detail", numberOfAyahs: 54, file: "./Surahmp3/041.mp3", duration: "00:19:20" },
  { id: 42, name: "Ash-Shura", englishName: "The Consultation", numberOfAyahs: 53, file: "./Surahmp3/042.mp3", duration: "00:19:29" },
  { id: 43, name: "Az-Zukhruf", englishName: "The Gold Adornments", numberOfAyahs: 89, file: "./Surahmp3/043.mp3", duration: "00:21:29" },
  { id: 44, name: "Ad-Dukhan", englishName: "The Smoke", numberOfAyahs: 59, file: "./Surahmp3/044.mp3", duration: "00:18:34" },
  { id: 45, name: "Al-Ahqaf", englishName: "The Wind-Curved Sandhills", numberOfAyahs: 5, file: "./Surahmp3/045.mp3", duration: "00:02:22" },
  { id: 46, name: "Muhammad", englishName: "Muhammad", numberOfAyahs: 38, file: "./Surahmp3/046.mp3", duration: "00:10:17" },
  { id: 47, name: "Al-Fath", englishName: "The Victory", numberOfAyahs: 29, file: "./Surahmp3/047.mp3", duration: "00:10:01" },
  { id: 48, name: "Al-Hujurat", englishName: "The Rooms", numberOfAyahs: 18, file: "./Surahmp3/048.mp3", duration: "00:05:12" },
  { id: 49, name: "Qamar", englishName: "The Moon", numberOfAyahs: 55, file: "./Surahmp3/049.mp3", duration: "00:20:07" },
  { id: 50, name: "Al-Qamar", englishName: "The Moon", numberOfAyahs: 55, file: "./Surahmp3/050.mp3", duration: "00:20:07" },
  { id: 51, name: "Adh-Dhariyat", englishName: "The Winnowing Winds", numberOfAyahs: 60, file: "./Surahmp3/051.mp3", duration: "00:19:30" },
  { id: 52, name: "At-Tur", englishName: "The Mount", numberOfAyahs: 49, file: "./Surahmp3/052.mp3", duration: "00:16:42" },
  { id: 53, name: "An-Najm", englishName: "The Star", numberOfAyahs: 62, file: "./Surahmp3/053.mp3", duration: "00:18:40" },
  { id: 54, name: "Al-Qamar", englishName: "The Moon", numberOfAyahs: 55, file: "./Surahmp3/054.mp3", duration: "00:18:05" },
  { id: 55, name: "Ar-Rahman", englishName: "The Beneficent", numberOfAyahs: 78, file: "./Surahmp3/055.mp3", duration: "00:21:11" },
  { id: 56, name: "Al-Waqi'ah", englishName: "The Inevitable", numberOfAyahs: 96, file: "./Surahmp3/056.mp3", duration: "00:25:30" },
  { id: 57, name: "Al-Hadid", englishName: "The Iron", numberOfAyahs: 29, file: "./Surahmp3/057.mp3", duration: "00:08:31" },
  { id: 58, name: "Al-Mujadila", englishName: "The Pleading Woman", numberOfAyahs: 22, file: "./Surahmp3/058.mp3", duration: "00:07:00" },
  { id: 59, name: "Al-Hashr", englishName: "The Exile", numberOfAyahs: 24, file: "./Surahmp3/059.mp3", duration: "00:08:11" },
  { id: 60, name: "Al-Mumtahanah", englishName: "She that is to be examined", numberOfAyahs: 13, file: "./Surahmp3/060.mp3", duration: "00:04:52" },
  { id: 61, name: "As-Saff", englishName: "The Ranks", numberOfAyahs: 14, file: "./Surahmp3/061.mp3", duration: "00:04:12" },
  { id: 62, name: "Al-Jumu'ah", englishName: "The Friday", numberOfAyahs: 11, file: "./Surahmp3/062.mp3", duration: "00:03:36" },
  { id: 63, name: "Al-Munafiqun", englishName: "The Hypocrites", numberOfAyahs: 11, file: "./Surahmp3/063.mp3", duration: "00:03:40" },
  { id: 64, name: "At-Taghabun", englishName: "The Mutual Disillusion", numberOfAyahs: 18, file: "./Surahmp3/064.mp3", duration: "00:05:22" },
  { id: 65, name: "At-Talaq", englishName: "The Divorce", numberOfAyahs: 12, file: "./Surahmp3/065.mp3", duration: "00:03:58" },
  { id: 66, name: "At-Tahrim", englishName: "The Prohibition", numberOfAyahs: 12, file: "./Surahmp3/066.mp3", duration: "00:03:58" },
  { id: 67, name: "Al-Mulk", englishName: "The Sovereignty", numberOfAyahs: 30, file: "./Surahmp3/067.mp3", duration: "00:08:40" },
  { id: 68, name: "Al-Qalam", englishName: "The Pen", numberOfAyahs: 52, file: "./Surahmp3/068.mp3", duration: "00:18:28" },
  { id: 69, name: "Al-Haqqah", englishName: "The Inevitable", numberOfAyahs: 52, file: "./Surahmp3/069.mp3", duration: "00:15:58" },
  { id: 70, name: "Al-Ma'arij", englishName: "The Ascending Stairways", numberOfAyahs: 44, file: "./Surahmp3/070.mp3", duration: "00:13:11" },
  { id: 71, name: "Nuh", englishName: "Noah", numberOfAyahs: 28, file: "./Surahmp3/071.mp3", duration: "00:09:40" },
  { id: 72, name: "Al-Jinn", englishName: "The Jinn", numberOfAyahs: 28, file: "./Surahmp3/072.mp3", duration: "00:10:22" },
  { id: 73, name: "Al-Muzzammil", englishName: "The Enshrouded One", numberOfAyahs: 20, file: "./Surahmp3/073.mp3", duration: "00:05:33" },
  { id: 74, name: "Al-Muddathir", englishName: "The Cloaked One", numberOfAyahs: 56, file: "./Surahmp3/074.mp3", duration: "00:12:44" },
  { id: 75, name: "Al-Qiyama", englishName: "The Resurrection", numberOfAyahs: 40, file: "./Surahmp3/075.mp3", duration: "00:09:51" },
  { id: 76, name: "Al-Insan", englishName: "Man", numberOfAyahs: 31, file: "./Surahmp3/076.mp3", duration: "00:08:15" },
  { id: 77, name: "Al-Mursalat", englishName: "The Emissaries", numberOfAyahs: 50, file: "./Surahmp3/077.mp3", duration: "00:14:50" },
  { id: 78, name: "An-Naba", englishName: "The Tidings", numberOfAyahs: 40, file: "./Surahmp3/078.mp3", duration: "00:11:12" },
  { id: 79, name: "An-Nazi'at", englishName: "The Soul-Snatchers", numberOfAyahs: 46, file: "./Surahmp3/079.mp3", duration: "00:13:10" },
  { id: 80, name: "Abasa", englishName: "He Frowned", numberOfAyahs: 42, file: "./Surahmp3/080.mp3", duration: "00:11:15" },
  { id: 81, name: "At-Takwir", englishName: "The Overthrowing", numberOfAyahs: 29, file: "./Surahmp3/081.mp3", duration: "00:07:45" },
  { id: 82, name: "Al-Infitar", englishName: "The Splitting Open", numberOfAyahs: 19, file: "./Surahmp3/082.mp3", duration: "00:05:13" },
  { id: 83, name: "Al-Mutaffifin", englishName: "Defrauding", numberOfAyahs: 36, file: "./Surahmp3/083.mp3", duration: "00:09:45" },
  { id: 84, name: "Al-Inshiqaq", englishName: "The Splitting", numberOfAyahs: 25, file: "./Surahmp3/084.mp3", duration: "00:06:38" },
  { id: 85, name: "Al-Buruj", englishName: "The Mansions of the Stars", numberOfAyahs: 22, file: "./Surahmp3/085.mp3", duration: "00:05:50" },
  { id: 86, name: "At-Tariq", englishName: "The Morning Star", numberOfAyahs: 17, file: "./Surahmp3/086.mp3", duration: "00:04:55" },
  { id: 87, name: "Al-A'la", englishName: "The Most High", numberOfAyahs: 19, file: "./Surahmp3/087.mp3", duration: "00:04:47" },
  { id: 88, name: "Al-Ghashiyah", englishName: "The Overwhelming", numberOfAyahs: 26, file: "./Surahmp3/088.mp3", duration: "00:06:47" },
  { id: 89, name: "Al-Fajr", englishName: "The Dawn", numberOfAyahs: 30, file: "./Surahmp3/089.mp3", duration: "00:07:30" },
  { id: 90, name: "Al-Balad", englishName: "The City", numberOfAyahs: 20, file: "./Surahmp3/090.mp3", duration: "00:05:22" },
  { id: 91, name: "Ash-Shams", englishName: "The Sun", numberOfAyahs: 15, file: "./Surahmp3/091.mp3", duration: "00:01:24" },
  { id: 92, name: "Al-Lail", englishName: "The Night", numberOfAyahs: 21, file: "./Surahmp3/092.mp3", duration: "00:01:51" },
  { id: 93, name: "Ad-Duha", englishName: "The Morning Hours", numberOfAyahs: 11, file: "./Surahmp3/093.mp3", duration: "00:01:05" },
  { id: 94, name: "Ash-Sharh", englishName: "The Relief", numberOfAyahs: 8, file: "./Surahmp3/094.mp3", duration: "00:00:42" },
  { id: 95, name: "At-Tin", englishName: "The Fig", numberOfAyahs: 8, file: "./Surahmp3/095.mp3", duration: "00:01:04" },
  { id: 96, name: "Al-Alaq", englishName: "The Clot", numberOfAyahs: 19, file: "./Surahmp3/096.mp3", duration: "00:01:35" },
  { id: 97, name: "Al-Qadr", englishName: "The Power", numberOfAyahs: 5, file: "./Surahmp3/097.mp3", duration: "00:00:45" },
  { id: 98, name: "Al-Bayyinah", englishName: "The Clear Proof", numberOfAyahs: 8, file: "./Surahmp3/098.mp3", duration: "00:02:06" },
  { id: 99, name: "Az-Zalzalah", englishName: "The Earthquake", numberOfAyahs: 8, file: "./Surahmp3/099.mp3", duration: "00:00:59" },
  { id: 100, name: "Al-Adiyat", englishName: "The Courser", numberOfAyahs: 11, file: "./Surahmp3/100.mp3", duration: "00:01:10" },
  { id: 101, name: "Al-Qari'ah", englishName: "The Calamity", numberOfAyahs: 11, file: "./Surahmp3/101.mp3", duration: "00:01:02" },
  { id: 102, name: "At-Takathur", englishName: "The Rivalry in World Increase", numberOfAyahs: 8, file: "./Surahmp3/102.mp3", duration: "00:01:02" },
  { id: 103, name: "Al-Asr", englishName: "The Declining Day", numberOfAyahs: 3, file: "./Surahmp3/103.mp3", duration: "00:00:27" },
  { id: 104, name: "Al-Humazah", englishName: "The Traducer", numberOfAyahs: 9, file: "./Surahmp3/104.mp3", duration: "00:00:58" },
  { id: 105, name: "Al-Fil", englishName: "The Elephant", numberOfAyahs: 5, file: "./Surahmp3/105.mp3", duration: "00:00:48" },
  { id: 106, name: "Quraish", englishName: "Quraysh", numberOfAyahs: 4, file: "./Surahmp3/106.mp3", duration: "00:00:42" },
  { id: 107, name: "Al-Ma'un", englishName: "Small Kindnesses", numberOfAyahs: 7, file: "./Surahmp3/107.mp3", duration: "00:00:57" },
  { id: 108, name: "Al-Kawthar", englishName: "Abundance", numberOfAyahs: 3, file: "./Surahmp3/108.mp3", duration: "00:00:24" },
  { id: 109, name: "Al-Kafirun", englishName: "The Disbelievers", numberOfAyahs: 6, file: "./Surahmp3/109.mp3", duration: "00:00:54" },
  { id: 110, name: "An-Nasr", englishName: "Divine Support", numberOfAyahs: 3, file: "./Surahmp3/110.mp3", duration: "00:00:34" },
  { id: 111, name: "Al-Masad", englishName: "The Palm Fiber", numberOfAyahs: 5, file: "./Surahmp3/111.mp3", duration: "00:00:41" },
  { id: 112, name: "Al-Ikhlas", englishName: "Sincerity", numberOfAyahs: 4, file: "./Surahmp3/112.mp3", duration: "00:00:21" },
  { id: 113, name: "Al-Falaq", englishName: "The Daybreak", numberOfAyahs: 5, file: "./Surahmp3/113.mp3", duration: "00:00:33" },
  { id: 114, name: "An-Nas", englishName: "Mankind", numberOfAyahs: 6, file: "./Surahmp3/114.mp3", duration: "00:00:50" }
];

// Function to play the audio 
function playAudio() {
    const audio = document.getElementById('greeting-audio');
    audio.play(); // Play the audio

    // When the audio ends, hide the player and button, and save the status
    audio.onended = function() {
        document.getElementById('greeting-audio').style.display = 'none'; // Hide the audio player
        document.getElementById('play-button').style.display = 'none'; // Hide the button
        document.getElementById('container').style.display = 'block';//show the quran pak ki surah playlist container
        document.getElementById('footer').style.display = 'block';//show the footer section
    };
}

let searchQuery = "";

// Function to filter and display the Surah list
function searchSurah() {
    const search = document.getElementById('search').value.toLowerCase();
    searchQuery = search; // Update search query
    displayPlaylist();
}

// Function to display the playlist with IDs, names, and durations
function displayPlaylist() {
    const playlist = document.getElementById('playlist');
    playlist.innerHTML = "";

    const filteredSurahs = SurahData.filter(Surah => 
        Surah.name.toLowerCase().includes(searchQuery) || 
        Surah.englishName.toLowerCase().includes(searchQuery) ||
        Surah.id.toString().includes(searchQuery)
    );

    if (filteredSurahs.length === 0) {
        playlist.innerHTML = `
            <div class="no-results">
                <p>No Surahs found matching "${searchQuery}"</p>
            </div>`;
    } else {
        filteredSurahs.forEach((Surah, index) => {
            const SurahElement = document.createElement('div');
            SurahElement.classList.add('playlist-item');
            SurahElement.style.setProperty('--index', index);
            SurahElement.innerHTML = `
                <div class="surah-left">
                    <div class="name-id-group">
                        <div class="id-container">
                            <span class="Surah-id">${String(Surah.id).padStart(3, '0')}</span>
                        </div>
                        <span class="Surah-name">${Surah.name}</span>
                    </div>
                    <div class="Surah-details">
                        <span class="Surah-english">${Surah.englishName}</span>
                        <span class="Surah-ayahs">${Surah.numberOfAyahs} Ayahs</span>
                    </div>
                </div>
                <div class="surah-duration">${Surah.duration}</div>
            `;

            SurahElement.onclick = () => {
                localStorage.setItem("currentSurahId", Surah.id);
                playMusic(Surah.id);
            };
            playlist.appendChild(SurahElement);
        });

        // Add scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.playlist-item').forEach(item => {
            item.classList.add('scroll-reveal');
            observer.observe(item);
        });
    }
}

// Function to handle playing the clicked Surah
function playMusic(id) {
    window.location.href = "player.html"; // Redirect to the player page
}

// Load the playlist when the page loads
window.onload = displayPlaylist;

// Footer animation
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('main-footer');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    if (footer) {
        observer.observe(footer);
    }
});


// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const clearButton = document.querySelector('.search-clear');
    const resultsCount = document.querySelector('.results-count');

    // Clear search
    clearButton?.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        searchQuery = '';
        displayPlaylist();
        resultsCount.classList.remove('visible');
    });

    // Update results count
    searchInput?.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        const filteredCount = SurahData.filter(surah => 
            surah.name.toLowerCase().includes(searchQuery) || 
            surah.englishName.toLowerCase().includes(searchQuery) ||
            surah.id.toString().includes(searchQuery)
        ).length;

        if (searchQuery) {
            resultsCount.textContent = `${filteredCount} results`;
            resultsCount.classList.add('visible');
        } else {
            resultsCount.classList.remove('visible');
        }

        displayPlaylist();
    });
});


// Back button functionality
function goBack() {
    // Save current audio state if needed
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        audioPlayer.pause();
        // Optionally save the current time and track info for resuming later
        localStorage.setItem('lastPlayedTime', audioPlayer.currentTime);
        localStorage.setItem('lastPlayedTrack', document.getElementById('Surah-title').textContent);
    }

    // Redirect to index.html with a smooth transition
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 300);
}

// Add fade-in effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});
  
