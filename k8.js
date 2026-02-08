
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let category = "";
        if (bmi < 18.5) category = "Thiếu cân";
        else if (bmi < 25) category = "Bình thường";
        else category = "Thừa cân";
        
        document.getElementById("bmi-result").innerHTML = "BMI: " + bmi.toFixed(2) + " - Phân loại: " + category;
    } else {
        alert("Vui lòng nhập giá trị hợp lệ!");
    }
}
