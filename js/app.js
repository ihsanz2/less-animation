$(document).ready(function() {
  $(".slider").slider({
    indicators: false,
    height: 600,
    transition: 200,
    interval: 4000
  });
  $(".sidenav").sidenav();
  $(".sidenav li").click(() => {
    $(".sidenav").sidenav("close");
  });

  $(".carousel").carousel({
    dist: 0,
    padding: 0,
    // fullWidth: true,
    indicators: true,
    duration: 100
  });
  setTimeout(autoplay, 7000);
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 7000);
  }
  $(".modal").modal();
  $(".scrollspy").scrollSpy({
    scrollOffset: 75
  });
  $(".dropdown-trigger").dropdown();
});

// initial atribut data reload
let dataReload = document.querySelectorAll("[data-reload]");

//translate bahasa
let language = {
  en: {
    word: "About"
  },
  in: {
    word: "Tentang",
    tujuan: "Tujuan",
    testi: "Testimoni",
    kontak: "Kontak",
    in_jp: "Tetap Terhubung Walaupun di Gunung Fuji",
    in_korea: "Berselancar di dunia maya menjadi lebih mudah",
    in_eropa_slide: "Pasang Kartunya dan Anda Sudah Bisa Online",
    in_tentang: "Tentang Kami",
    aboutus1:
      "Kami adalah perusahaan Cloud Communication dan layanan IT global yang tergabung pada tahun 2017. Visi kami adalah menyederhanakan komunikasi untuk semua. Kami telah banyak membantu perusahaan mencapai hasil yang bagus dengan investasi minimal.",
    aboutus2:
      "Visi kami tidak berakhir di sana. Kami berusaha untuk membantu penggemar wisata, orang yang berlibur, dan individu seperti Anda dan saya untuk menikmati manfaat yang sama.",
    aboutus3:
      "Dengan itu, kami bersemangat untuk menghadirkan HolidaySIMcards. Kesederhanaan selalu menjadi filosofi kami. Jadi, masukkan salah satu kartu sim kami ke telepon Anda di hari libur berikutnya, dan go Online!",
    //benefit
    in_benefit1:
      "Pasang Kartu SIM, dan anda sudah langsung bisa online dan nelpon tanpa ribet",
    in_benefit2:
      "Kartu SIM khusuh negara tujuan, dengan kecepatan tinggi dan harga murah",
    in_benefit3a: "Tidak ada biaya tambahan",
    in_benefit3b:
      "Tidak perlu sewa WIFI Router seharga Rp. 500.000, dengan harga tersebut anda bisa mendapat dua kartu HolidaySims",
    in_benefit4a: "Tinggal buang setelah liburan",
    in_benefit4b:
      "Tidak perlu khawatir tentang biaya untuk perangkat & kabel yang rusak. Tidak perlu dikembalikan, gunakan, dan buang!",
    in_desti: "Destinasi dan Harga",
    in_destiJPN: "Seluruh Jepang",
    in_destiKor: "Seluruh Korea",
    getit: "Dapatkan disini",
    testimoni: "Testimoni",
    touch: "Hubungi Kami",
    in_eropa:
      "1.5 GB, gratis nelpon 60 menit ke nomor lokal dan gratis terima telpon"
  }
};

// set bahasa melalui window hash
if (window.location.hash) {
  if (window.location.hash === "#in") {
    //nav
    tentang.textContent = language.in.word;
    tujuan.textContent = language.in.tujuan;
    testi.textContent = language.in.testi;
    kontak.textContent = language.in.kontak;
    //slide
    in_jp.textContent = language.in.in_jp;
    in_korea.textContent = language.in.in_korea;
    in_eropa_slide.textContent = language.in.in_eropa_slide;

    //about
    in_tentang.textContent = language.in.in_tentang;
    aboutus1.textContent = language.in.aboutus1;
    aboutus2.textContent = language.in.aboutus2;
    aboutus3.textContent = language.in.aboutus3;
    //benefit
    in_benefit1.textContent = language.in.in_benefit1;
    in_benefit2.textContent = language.in.in_benefit2;
    in_benefit3a.textContent = language.in.in_benefit3a;
    in_benefit3b.textContent = language.in.in_benefit3b;
    in_benefit4a.textContent = language.in.in_benefit4a;
    in_benefit4b.textContent = language.in.in_benefit4b;
    //destination
    in_desti.textContent = language.in.in_desti;
    in_destiJPN.textContent = language.in.in_destiJPN;
    in_destiKor.textContent = language.in.in_destiKor;
    getit.textContent = language.in.getit;
    in_eropa.textContent = language.in.in_eropa;
    //testimoni
    testimoni.textContent = language.in.testimoni;
    touch.textContent = language.in.touch;
  }
}

//setting bahasa onclick
for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function() {
    location.reload(true);
  };
}
