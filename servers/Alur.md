✅ Penjelasan alur:

[User]
User datang ke aplikasi.
⬇ [Google OAuth Login]
User login menggunakan akun Google.
Setelah berhasil login, data user (email, name, dsb) disimpan di database Users jika belum ada.
⬇ [Rest Countries API] —> [List Countries]
Aplikasi akan fetch daftar negara dari Rest Countries API.
Ditampilkan ke user sebagai list untuk dipilih.
⬇ [User Selects Country]
User memilih negara dari daftar yang ditampilkan.
⬇ [Unsplash API] + [Google Maps Embed API] + [WeatherAPI] + [OpenTripMap]
Setelah user memilih negara, aplikasi secara otomatis:
Ambil foto dari Unsplash API
Ambil peta embed URL dari Google Maps Embed API
Ambil cuaca dari WeatherAPI
Ambil tempat wisata dari OpenTripMap API
⬇ [Gemini AI Recommendations]
Data negara, foto, cuaca, dan tempat wisata bisa kamu olah dan kirim ke Gemini AI untuk mendapatkan rekomendasi tambahan.
Hasil rekomendasinya ditampilkan untuk user.
⬇ [User Favorites & Notes] — stored in database
User bisa menandai negara sebagai favorit + menulis catatan.
Data favorit + catatan disimpan ke tabel Favorites dan Recommendations/Notes di database.

✅ Singkatnya:
Semua data (country list, weather, photo, map, wisata) hanya di-fetch dari API saat user butuh.
Yang disimpan ke database hanya:
Data user (dari Google OAuth)
User favorites & notes.
Jika mau, kamu juga bisa menyimpan recommendation dari Gemini jika ingin caching.
