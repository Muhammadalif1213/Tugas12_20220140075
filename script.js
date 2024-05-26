var tanggalInput = document.getElementById('tanggal');
        flatpickr(tanggalInput, {
            enableTime: false,
            dateFormat: 'd-m-Y',
        });

        function kirimData() {
            var name = document.getElementById("nama").value;
            var nim = document.getElementById("nim").value;
            var peminatan = document.querySelector("input[name=peminatan]:checked").value;
            var alamat = document.getElementById("alamat").value;
            var tanggal = document.getElementById("tanggal").value;
            var angkatan = document.getElementById("angkatan").value;

            document.getElementById("result-nama").innerText = name;
            document.getElementById("result-nim").innerText = nim;
            document.getElementById("result-peminatan").innerText = peminatan;
            document.getElementById("result-angkatan").innerText = angkatan;
            document.getElementById("result-tanggal").innerText = tanggal;
            document.getElementById("result-alamat").innerText = alamat;

            document.getElementById("result").style.display = "block";
        }