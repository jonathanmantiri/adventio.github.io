function sapa() {

    const pesan =
        document.getElementById("pesan");

    const teks =
        "Halo! Terima kasih sudah mengunjungi website saya 🚀";

    pesan.innerHTML = "";

    let i = 0;

    const mengetik =
        setInterval(function() {

            pesan.innerHTML +=
                teks.charAt(i);

            i++;

            if (i >= teks.length) {

                clearInterval(mengetik);

            }

        }, 50);

}