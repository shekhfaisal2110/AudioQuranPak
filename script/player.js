// Surah data array
let SurahData = [
  { id: 1, name: "Al-Fatihah", file: "./Surahmp3/001.mp3" },
  { id: 2, name: "Al-Baqarah", file: "./Surah_mp3/002.mp3" },
  { id: 3, name: "Āl 'Imran", file: "./Surah_mp3/003.mp3" },
  { id: 4, name: "An-Nisa", file: "./Surah_mp3/004.mp3" },
  { id: 5, name: "Al-Ma'idah", file: "./Surah_mp3/005.mp3" },
  { id: 6, name: "Al-An'am", file: "./Surah_mp3/006.mp3" },
  { id: 7, name: "Al-A'raf", file: "./Surah_mp3/007.mp3" },
  { id: 8, name: "Al-Anfal", file: "./Surah_mp3/008.mp3" },
  { id: 9, name: "At-Tawbah", file: "./Surah_mp3/009.mp3" },
  { id: 10, name: "Yunus", file: "./Surah_mp3/010.mp3" },
  { id: 11, name: "Hud", file: "./Surah_mp3/011.mp3" },
  { id: 12, name: "Yusuf", file: "./Surah_mp3/012.mp3" },
  { id: 13, name: "Ar-Ra'd", file: "./Surah_mp3/013.mp3" },
  { id: 14, name: "Ibrahim", file: "./Surah_mp3/014.mp3" },
  { id: 15, name: "Al-Hijr", file: "./Surah_mp3/015.mp3" },
  { id: 16, name: "An-Nahl", file: "./Surah_mp3/016.mp3" },
  { id: 17, name: "Al-Israa", file: "./Surah_mp3/017.mp3" },
  { id: 18, name: "Al-Kahf", file: "./Surah_mp3/018.mp3" },
  { id: 19, name: "Maryam", file: "./Surah_mp3/019.mp3" },
  { id: 20, name: "Ta-Ha", file: "./Surah_mp3/020.mp3" },
  { id: 21, name: "Al-Anbiya", file: "./Surah_mp3/021.mp3" },
  { id: 22, name: "	Al-Hajj", file: "./Surah_mp3/022.mp3" },
  { id: 23, name: "Al-Mu'minun", file: "./Surah_mp3/023.mp3" },
  { id: 24, name: "An-Nur", file: "./Surah_mp3/024.mp3" },
  { id: 25, name: "Al-Furqan", file: "./Surah_mp3/025.mp3" },
  { id: 26, name: "Ash-Shu'ara", file: "./Surah_mp3/026.mp3" },
  { id: 27, name: "An-Naml", file: "./Surah_mp3/027.mp3" },
  { id: 28, name: "Al-Qasas", file: "./Surah_mp3/028.mp3" },
  { id: 29, name: "Al-Ankabut", file: "./Surah_mp3/029.mp3" },
  { id: 30, name: "Ar-Rum", file: "./Surah_mp3/030.mp3" },
  { id: 31, name: "Luqmaan", file: "./Surah_mp3/031.mp3" },
  { id: 32, name: "As-Sajdah", file: "./Surah_mp3/032.mp3" },
  { id: 33, name: "Al-Ahzaab", file: "./Surah_mp3/033.mp3" },
  { id: 34, name: "Saba", file: "./Surah_mp3/034.mp3" },
  { id: 35, name: "Faatir", file: "./Surah_mp3/035.mp3" },
  { id: 36, name: "Ya-Sin", file: "./Surah_mp3/036.mp3" },
  { id: 37, name: "As-Saaffaat", file: "./Surah_mp3/037.mp3" },
  { id: 38, name: "Saad", file: "./Surah_mp3/038.mp3" },
  { id: 39, name: "Az-Zumar", file: "./Surah_mp3/039.mp3" },
  { id: 40, name: "Ghafir", file: "./Surah_mp3/040.mp3" },
  { id: 41, name: "Fussilat", file: "./Surah_mp3/041.mp3" },
  { id: 42, name: "Ash-Shura", file: "./Surah_mp3/042.mp3" },
  { id: 43, name: "Az-Zukhruf", file: "./Surah_mp3/043.mp3" },
  { id: 44, name: "Ad-Dukhaan", file: "./Surah_mp3/044.mp3" },
  { id: 45, name: "Al-Jaathiyah", file: "./Surah_mp3/045.mp3" },
  { id: 46, name: "Al-Ahqaaf", file: "./Surah_mp3/046.mp3" },
  { id: 47, name: "Muhammad", file: "./Surah_mp3/047.mp3" },
  { id: 48, name: "Al-Fath", file: "./Surah_mp3/048.mp3" },
  { id: 49, name: "Al-Hujuraat", file: "./Surah_mp3/049.mp3" },
  { id: 50, name: "Qaaf", file: "./Surah_mp3/050.mp3" },
  { id: 51, name: "Adh-Dhaariyaat", file: "./Surah_mp3/051.mp3" },
  { id: 52, name: "At-Toor", file: "./Surah_mp3/052.mp3" },
  { id: 53, name: "An-Najm", file: "./Surah_mp3/053.mp3" },
  { id: 54, name: "Al-Qamar", file: "./Surah_mp3/054.mp3" },
  { id: 55, name: "Ar-Rahman", file: "./Surah_mp3/055.mp3" },
  { id: 56, name: "Al-Waqi'ah", file: "./Surah_mp3/056.mp3" },
  { id: 57, name: "Al-Hadeed", file: "./Surah_mp3/057.mp3" },
  { id: 58, name: "Al-Mujadila", file: "./Surah_mp3/058.mp3" },
  { id: 59, name: "Al-Hashr", file: "./Surah_mp3/059.mp3" },
  { id: 60, name: "Al-Mumtahanah", file: "./Surah_mp3/060.mp3" },
  { id: 61, name: "As-Saff", file: "./Surah_mp3/061.mp3" },
  { id: 62, name: "Al-Jumu'ah", file: "./Surah_mp3/062.mp3" },
  { id: 63, name: "Al-Munafiqoon", file: "./Surah_mp3/063.mp3" },
  { id: 64, name: "At-Taghabun", file: "./Surah_mp3/064.mp3" },
  { id: 65, name: "At-Talaq", file: "./Surah_mp3/065.mp3" },
  { id: 66, name: "At-Tahreem", file: "./Surah_mp3/066.mp3" },
  { id: 67, name: "Al-Mulk", file: "./Surah_mp3/067.mp3" },
  { id: 68, name: "Al-Qalam", file: "./Surah_mp3/068.mp3" },
  { id: 69, name: "Al-Haaqqa", file: "./Surah_mp3/069.mp3" },
  { id: 70, name: "Al-Ma'aarij", file: "./Surah_mp3/070.mp3" },
  { id: 71, name: "Nuh", file: "./Surah_mp3/071.mp3" },
  { id: 72, name: "Al-Jinn", file: "./Surah_mp3/072.mp3" },
  { id: 73, name: "Al-Muzzammil", file: "./Surah_mp3/073.mp3" },
  { id: 74, name: "Al-Muddaththir", file: "./Surah_mp3/074.mp3" },
  { id: 75, name: "Al-Qiyamah", file: "./Surah_mp3/075.mp3" },
  { id: 76, name: "Al-Insaan", file: "./Surah_mp3/076.mp3" },
  { id: 77, name: "Al-Mursalaat", file: "./Surah_mp3/077.mp3" },
  { id: 78, name: "An-Naba'", file: "./Surah_mp3/078.mp3" },
  { id: 79, name: "An-Naazi'aat", file: "./Surah_mp3/079.mp3" },
  { id: 80, name: "Abasa", file: "./Surah_mp3/080.mp3" },
  { id: 81, name: "At-Takweer", file: "./Surah_mp3/081.mp3" },
  { id: 82, name: "Al-Infitar", file: "./Surah_mp3/082.mp3" },
  { id: 83, name: "Al-Mutaffifeen", file: "./Surah_mp3/083.mp3" },
  { id: 84, name: "Al-Inshiqaaq", file: "./Surah_mp3/084.mp3" },
  { id: 85, name: "Al-Burooj", file: "./Surah_mp3/085.mp3" },
  { id: 86, name: "At-Taariq", file: "./Surah_mp3/086.mp3" },
  { id: 87, name: "Al-A'la", file: "./Surah_mp3/087.mp3" },
  { id: 88, name: "Al-Ghaashiyah", file: "./Surah_mp3/088.mp3" },
  { id: 89, name: "Al-Fajr", file: "./Surah_mp3/089.mp3" },
  { id: 90, name: "Al-Balad", file: "./Surah_mp3/090.mp3" },
  { id: 91, name: "Ash-Shams", file: "./Surahmp3/091.mp3" },
  { id: 92, name: "Al-Layl", file: "./Surahmp3/092.mp3" },
  { id: 93, name: "Ad-Dhuha", file: "./Surahmp3/093.mp3" },
  { id: 94, name: "At-Tin", file: "./Surahmp3/095.mp3" },
  { id: 96, name: "Al-Alaq", file: "./Surahmp3/096.mp3" },
  { id: 97, name: "Al-Qadr", file: "./Surahmp3/097.mp3" },
  { id: 98, name: "Al-Bayyinah", file: "./Surahmp3/098.mp3" },
  { id: 99, name: "Az-Zalzalah", file: "./Surahmp3/099.mp3" },
  { id: 100, name: "Al-'Aadiyat", file: "./Surahmp3/100.mp3" },
  { id: 101, name: "Al-Qaari'ah", file: "./Surahmp3/101.mp3" },
  { id: 102, name: "At-Takaathur", file: "./Surahmp3/102.mp3" },
  { id: 103, name: "Al-'Asr", file: "./Surahmp3/103.mp3" },
  { id: 104, name: "Al-Humazah", file: "./Surahmp3/104.mp3" },
  { id: 105, name: "Al-Feel", file: "./Surahmp3/105.mp3" },
  { id: 106, name: "Quraish", file: "./Surahmp3/106.mp3" },
  { id: 107, name: "Al-Maa'oon", file: "./Surahmp3/107.mp3" },
  { id: 108, name: "Al-Kawthar", file: "./Surahmp3/108.mp3" },
  { id: 109, name: "Al-Kaafiroon", file: "./Surahmp3/109.mp3" },
  { id: 110, name: "An-Nasr", file: "./Surahmp3/110.mp3" },
  { id: 111, name: "Al-Masad", file: "./Surahmp3/111.mp3" },
  { id: 112, name: "Al-Ikhlas", file: "./Surahmp3/112.mp3" },
  { id: 113, name: "Al-Falaq", file: "./Surahmp3/113.mp3" },
  { id: 114, name: "An-Naas", file: "./Surahmp3/114.mp3" }

];

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const currentTimeSpan = document.getElementById('current-time');
    const totalTimeSpan = document.getElementById('total-time');
    const volumeControl = document.getElementById('volume-control');
    const volumeBtn = document.getElementById('volume-btn');
    const surahTitle = document.getElementById('Surah-title');
    const trackName = document.getElementById('track-name');
    const surahNumber = document.getElementById('surah-number');

    // Get current Surah ID from localStorage or set default to 1
    let currentSurahId = parseInt(localStorage.getItem("currentSurahId")) || 1;

    // Load initial Surah
    loadSurah(currentSurahId);

    // Initialize volume
    audioPlayer.volume = volumeControl.value / 100;

    // Variable to store previous volume
    let previousVolume = audioPlayer.volume;

    // Functions
    function loadSurah(id) {
        const surah = SurahData.find(s => s.id === id);
        if (!surah) return;

        // Update UI elements
        surahTitle.textContent = surah.name;
        trackName.textContent = surah.name;
        surahNumber.textContent = `Surah ${surah.id}`;
        
        // Update audio source
        audioPlayer.src = surah.file;
        audioPlayer.load();
        
        // Save current Surah ID
        localStorage.setItem("currentSurahId", id);
        playIcon.className = 'fas fa-play';
    }

    // Function to play the Surah
    function playSurah() {
        audioPlayer.play();
        playIcon.className = 'fas fa-pause';
    }

    // Function to handle when the audio ends
    audioPlayer.addEventListener('ended', () => {
        playIcon.className = 'fas fa-play';
        audioPlayer.currentTime = 0;
    });

    // Event Listeners
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            playSurah();
        } else {
            audioPlayer.pause();
            playIcon.className = 'fas fa-play';
        }
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${percent}%`;
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
        totalTimeSpan.textContent = formatTime(audioPlayer.duration);
    });

    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    });

    // Volume button click event
    volumeBtn.addEventListener('click', () => {
        if (audioPlayer.volume > 0) {
            // Mute the audio
            previousVolume = audioPlayer.volume; // Store the current volume
            audioPlayer.volume = 0;
            volumeControl.value = 0; // Update the slider
            updateVolumeIcon(0); // Update the icon to mute
        } else {
            // Restore the audio volume
            audioPlayer.volume = previousVolume; // Restore the previous volume
            volumeControl.value = previousVolume * 100; // Update the slider
            updateVolumeIcon(previousVolume * 100); // Update the icon based on the restored value
        }
    });

    // Volume control input event
    volumeControl.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value / 100;
        updateVolumeIcon(e.target.value); // Update the icon based on the slider value
        previousVolume = audioPlayer.volume; // Update previous volume
    });

    // Helper Functions
    function formatTime(seconds) {
        if (isNaN(seconds)) return "00:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    function updateVolumeIcon(value) {
        const volumeIcon = volumeBtn.querySelector('i');
        volumeIcon.className = 'fas ' + (
            value == 0 ? 'fa-volume-mute' :
            value < 50 ? 'fa-volume-down' : 'fa-volume-up'
        );
    }

    // Navigation Functions
    window.previousSurah = () => {
        currentSurahId = currentSurahId > 1 ? currentSurahId - 1 : SurahData.length;
        loadSurah(currentSurahId);
        playIcon.className = 'fas fa-play';
    };

    window.nextSurah = () => {
        currentSurahId = currentSurahId < SurahData.length ? currentSurahId + 1 : 1;
        loadSurah(currentSurahId);
        playIcon.className = 'fas fa-play';
    };

    window.goBack = () => {
        window.location.href = 'index.html';
    };

    // Redirect to About page when About Us button is clicked
    const aboutUsButton = document.querySelector('.about-us-button');
    aboutUsButton.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
});
