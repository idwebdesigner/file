document.getElementById('submit').addEventListener('click', getName);

function getName() {
    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var prefixes = ["Abid (Ahli Ibadah)","Pranaja (Anak laki-laki)", "Abinaya (Semangat)", "Alexi (Penjaga, pejuang, pelindung)", "Abinaya (Semangat)", "Basupati (Tak takut mati)", "Abqari (Genius, pintar)", "Agam (Kuat)", "Agler (Terkenal mulia)", "Abraham (Ayah semua orang) ", "Achilles (Kekuatan)", "Azka (Bersih, suci)", "Aldric (Bijaksana)", "Aaron (Cahaya gunung yang tinngi)", "Blenda (Penuh kemegahan)", "Abdul (Hamba Allah)", "Rahman (Ar-Rahman : Yang Maha Pengasih)", "Hafiz (Yang terpelihara)", "Abdullah (Hamba Allah)", "Abid (Beribadah)", "Pratama (Anak Pertama)", "Reynand (Bijaksana, besar, berani, kuat)", "Abrisam (Ketampanan, kelembutan)", "Abyan (Bisa menjelaskan secara jelas)", "Nandana (Anak laki-laki)", "Achazia (Raja)", "Brigit (Kekuatan)", "Aharon (Agung dan mulia)", "Ahmad (Terpercaya, jujur, nama kecil nabi Muhammad S.A.W.)", "Adam (yang pertama di bumi)", "Albert (mulia, cemerlang)", "Adrian (pemberani)", "Nurwahid (Cahaya utama, pertama)", "Poldi (Orang yang sangat berani)", "Emery (Pemimpin yang baik hati)", "Adelardo (Pangeran)", "Cetta (Berpengetahuan luas)", "Radmilo (Bekerja untuk rakyat)"],
        affixes = ["Zahidin (Orang-orang yang zuhud, rendah hati, sungguh-sungguh beribadah)","Abrar (Berbuat kebajikan)","Arsenio (Gagah berani)","Runako (Tampan)","Azhim (Yang Maha Agung)","Abidun (Beribadah)","Abyan (Yangg menjelaskan dengan gamblang)","Fadhil (Mulia)","Aqila (Yang berakal)","Rasyiqul (Gagah, kekar, kuat)","Rafif (berbudi pekerti baik, bagus)","Muinul (Membantu, menolong)","Wahid (Yang Maha Esa, Tunggal)","Wafi (Sempurna)","Khair (Paling, sangat baik)","Karim (Yang Maha Mulia)","Syamil (Menyeluruh)","Ghani (Yang Maha Karya)","Halim (Halus; lembut)","Ariqin (Berakhlak baik)","Farid (Yang istimewa)","Ahwas (Pemberani)","Hadi (Yang Maha Petunjuk)","Ahsan (Yang terbaik)","Shalihin (Orang yang shaleh)","Ahnafus (Sangat lempeng, lurus dalam beragama)","Justin (Adil)","Nabhan (Kemuliaan)","Nailun (Memperoleh, mendapat)","Purnama (Rembulan)","Atma (Jiwa)","Afnan (Mekar berseri)","Siddik (Yang membenarkan)","Ar Rafif (Berakhlak mulia)","Adyatma (Anugerah hidup)","Afdhal (Terbaik, lebih utama)","Gilang (Bercahaya terang)","Aditya (Di ridhai)","Affan (Pandai, cerdas)","Arsalan (Singa)","Baqir (Berilmu, berpengetahuan)","Nandana (Jawa: Anak laki-laki)","Surya (India, Indonesia, Jawa: Matahari)","Azzam (Berkemauan baik dan mulia)","Rafli (Perasaan pada keadilan, Berkah Tuhan, Kecintaan dan kebahagiaan, Berhasil dengan baik, cerdas dan beruntung, Pekerjaan yang sempurna)","Sakha (Berkah Tuhan, Berhasil dengan baik, cerdas dan beruntung)","Arkan, Arkaan (Mulia, kemuliaan, Ahli pujangga)","Wiratama/Perwira (Indonesia: Prajurit + Utama : yang terpenting, yg memiliki keutamaan)","Faiz (Menang, berjaya)","Arkhan (Memuliakan)","Adam (Nama nabi, teladan, tanah)","Muttaqin (Orang yang bertakwa, taat beribdah)","Zain (Perhiasan, mahkota)","Dary (Irish: Arif bijaksana, orang kaya)","Abiyyu (Mulia jiwanya)","Aditya/Raditya (Jawa: Matahari, Hindu: Sang matahari)","Naufal (Arab: Pemuda yang tampan dan dermawan)","Dary (Irish: Arif bijaksana, orang kaya)","Abiyyu (Mulia jiwanya)","Rifqi (Lemah lembut)","Hamizan (Cerdik, kuat, tampan)","Adlan (Keadilan)","Izzuddin (Kemuliaan agama)","Karami (Kemuliaanku)","Adli (Keadilan Allah)","Makarim (Kemuliaan)","Adlullah (Keadilan Allah)","Syafi (Penyembuh, pemberi pertolongan)","Adnan (Arab: kesenangan, Surga Firdaus)","Khiar (pilihan yang terbaik)","Adnan (Kesenangan, surga firdaus)","Ardhani (Suci)","Manaf (Memperlihatkan Kelebihan, kemampuan, kecakapan)","Adrian (Pelaut, kaya raya)","Pradipta (Cahaya cemerlang, anak pertama)","Amzari (Yang mulia)","Afi (Pemaaf, pengampun)","Sadid (Selalu betul, benar)","Qauluh (Ucapannya, perkataannya)","Afnan (Permohonan yang berbuah atau dikabulkan)","Fausto (Beruntung)","Saadan (Kebahagiaan)","Pratama (Indonesia: Putra pertama)","Najmudin (Bintang agama)","Syaraf (Kemuliaan)","Hubbu (Menyukai, mencintai)","Abdul Aziz (Hamba Allah yang mulia)","Fathul (Pembuka kejayaan)","Islam (Islam, selamat)","Abdul Aziz (Hamba Allah yang mulia)","Ghaffar (Yang Maha Pengampun)","Ahlam (Impian, harapan, kesabaran)","Faisal (Pemisah antara yang haq dan yang bathil)","Hanif (Muslim yang lurus)","Firdaus (Arab : Surga)","Zulfadli (Yang mempunyai kelebihan)","Rahmani (Kesayanganku)","Fadhlurrahman (Keutamaan dari Allah)","Najid (Gagah berani)","Aqeel, Aqeela (Yang terbaik)","Tsaniy, Tsany (Yang kedua)","Azam (Kebulatan tekad)","Faris (Satria berkuda)","Maulana (Gelar kehormatan untuk Nabi; Pelindung, penolong)","Ad-Din (Agama)","Jaudullami (Kebaikan)","Khairuddin (Kebaikan)","Rayyan (Arab: Pintu surga bagi orang-orang yg berpuasa)","Sulthan (Yang memberi kuasa)","Nazhirul Asrofi (Penerang dalam islam)","Waliuddin (Penuntun, penolong agama)","Yahya (Arab : Nama nabi, Mesir: Diberikan oleh Allah)","Najwan (Kemenangan)","Ahza (Yang beruntung)","Aidan (Bersemangat)","Quentin (Mendambakan masa depan)","Hamizan (Cerdas, kuat, tampan)","Aiman (Harapan)","Ahwaz (Kesungguhan)","Tsaqib (Cerdas, pintar)","Ujab (Kelebihan, keajaiban)","Aimanun (Kelompok, golongan orang shaleh)","Aimar (Sahabat rasulullah)","Moussa (Nabi Musa)","Faustin (Beruntung)","Radinka (Senang)","Caesar (Kaisar, pemimpin)","Nurdaffa (Cahaya pembela, orang yang punya pertahanan yang kuat)","Akhal (Arab: Memiliki mata hitam)","Bahir (Arab: Berseniar dan berkilauan)","Akhdan (Sahabat, teman akrab)","Ziyad (Keunggulan, kelebihan, keistimewaan)","Said (Senang, bahagia)","Akif (Rajin, tekun beritikaf)","Akmal (Lebih sempurna)","Majid (Dihormati)","Al Faruq (Pembeda antara haq dan bathil)","Akmal (Sempurna, lebih lengkap)","Zuhair (Keindahan, bersinar, bercahaya)","Farjana (Bijak, pandai, cerdas)","Khairudin (Kebaikan agama)","Ziyad (Keistimewaan, kelebihan, keunggulan)","Akram (Paling, sangat mulia)","Al-Amin (Dapat dipercaya)","Ananda (Kebahagiaan)","Reza (Raja)","Al-Ghazali (Nama salah satu imam besar, Imam Al Ghazali yang bijaksana)","Arif, Arief (Adil, bijaksana)","Abrisam (Ketampanan, kelembutan)","Alamgir (Penakluk dunia)","Alauddin (Kemuliaan agama)","Zuhdi (Kesungguhan, ketekunan beribadah, rendah hati)","Fachry (Bersahaja)","Luthfy (Lemah lembut)","Alby, Qalbu (Arab : Hati)","Pradipta, Pradipto (Jawa: Cahaya, cemerlang, anak pertama)","Zeroun (Armenia: Bijak dan terhormat)","Alham (Ilham)","Najid (Gagah berani)","Fadhlurahman (Keutamaan dari Allah)","Ali (Tinggi, salah satu sahabat Nabi Muhammad)","Hasan (Baik, bagus)","Aminuddin (Pengamanah agama)","Omar (Arab: Anak pertama, berumur panjang, yg memakmurkan)","Syaiban (Awan bersalju)","Ulya (Tempat yang tinggi, utama)","Hafizh (Arab: laki-laki penghafal Al-Qur’an)","Alif (Arab: lembut dan ramah)","Hafizh (Laki-laki penghafal Al quran)","Alif (Lembut dan ramah)","Sharkan (Kemuliaan)"],
        randomise = randomNumber(3, 0),
        randyP = randomNumber(prefixes.length, 0),
        randyA = randomNumber(affixes.length, 0),
        randomPrefix = prefixes[randyP],
        randomAffix = affixes[randyA],
        fonts = ["'sansationbold'"],
        name = document.getElementById('userName').value,
        beerName;
  
    if(name.length >= 1){
    if (randomise === 0) {
        beerName = randomPrefix + name;
    } else if (randomise === 1) {
        beerName = name + randomAffix;
    } else {
        beerName = randomPrefix + name + randomAffix;
    } 
    document.getElementById("title").style.fontFamily = fonts[randomNumber(fonts.length, 0)];
    document.getElementById('title').innerHTML = beerName;
    } else {
      alert("Enter your name first!");
    }

   
}

var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, {
        scaleY: 1.6,
        ease: Expo.easeOut
    });
    TweenMax.to($button, duration, {
        scaleX: 1.2,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [3],
        delay: delay
    });
    TweenMax.to($button, duration * 1.25, {
        scaleX: 1,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [6],
        delay: delay * 3
    });
});