
        document.getElementById("reg-form").addEventListener("submit", function(e) {
            const p1 = document.getElementById("pass1").value; // Lấy giá trị pass 1
            const p2 = document.getElementById("pass2").value; // Lấy giá trị pass 2
            
            if (p1 !== p2) {
                e.preventDefault(); // Ngăn form gửi đi nếu không khớp
                document.getElementById("error-msg").textContent = "Mật khẩu không khớp!";
            } else {
                document.getElementById("error-msg").textContent = "";
                alert("Đăng ký thành công!");
            }
        });
    