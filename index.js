//bài 1
document.getElementById("sapxep").onclick = function () {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let number3 = +document.getElementById("number3").value;
    if (number1 >= number2) {
      let tmp1 = number1;
      number1 = number2;
      number2 = tmp1;
    }
    if (number2 >= number3) {
      let tmp2 = number2;
      number2 = number3;
      number3 = tmp2;
    }
    if(number3 < number1){
        let tmp3 = number3
        number3 = number1;
        number1 = tmp3;
    }
    document.getElementById("ketqua1").style.display = "block";
    document.getElementById("ketquabai1").innerHTML =
      number1 + ", " + number2 + " ," + number3;
  };

  // Bài 2
function bai2 () {
  let familyName = document.getElementById("familyName").value;
let hello
switch(familyName){
    case "b":
        hello = "Xin chào bố !"
        break;
        case "m":
            hello = "Xin chào mẹ !"
            break;
            case "a":
                hello = "Xin chào anh !"
                break;
                case "e":
                    hello = "Xin chào em !"
                    break;
                    default:
                        hello = "Chào người lạ !"
                        break;

}
document.getElementById("ketqua2").style.display = "block";
  document.getElementById("ketquabai2").innerHTML = "" + hello;
}

//Bài 3
document.getElementById("dem").onclick = function(){
  let number_1 = +document.getElementById("number_1").value;
  let number_2 = +document.getElementById("number_2").value;
  let number_3 = +document.getElementById("number_3").value;
  let soChan = 0;
  let soLe = 0;
  if(number_1 % 2 === 0){
   soChan++
  }else{
    soLe++
  }

  if(number_2 % 2 === 0){
    soChan++
   }else{
     soLe++
   }
   if(number_3 % 2 === 0){
    soChan++
   }else{
     soLe++
   }
   document.getElementById("ketqua3").style.display = "block";
   document.getElementById("ketquabai3").innerHTML =
     "Có :" + soChan + " số chẵn và " + soLe + " số lẻ";
}
// Bài 4
document.getElementById("dudoan").onclick = function () {
    let canh1 = +document.getElementById("canh1").value;
    let canh2 = +document.getElementById("canh2").value;
    let canh3 = +document.getElementById("canh3").value;
    let ketquabai4 = 0;
    if (canh1 === canh2 && canh2 === canh3) {
        ketquabai4 = "Tam giác đều";
      } else {
        if (
          canh1 ^ (2 == canh2) ^ (2 + canh3) ^ 2 ||
          canh2 ^ (2 == canh1) ^ (2 + canh3) ^ 2 ||
          canh3 ^ (2 == canh1) ^ (2 + canh2) ^ 2
        ) {
            ketquabai4 = "Tam giác vuông";
        }
        if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
            ketquabai4 = "Tam giác cân";
        } else {
            ketquabai4 = "Tam giác thường";
        }
      }
      document.getElementById("ketqua4").style.display = "block";
      document.getElementById("ketquabai4").innerHTML = " " + ketquabai4;
    };

    // Bài 6
    document.getElementById("ngayhomqua").onclick = function () {
        let yesterdayDate = today.valueAsDate;
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        let day = yesterdayDate.getDate();
        let month = yesterdayDate.getMonth() + 1;
        let year = yesterdayDate.getFullYear();
        ngayhomqua = month + "/" + day + "/" + year;
        document.getElementById("ketqua5").style.display = "block";
        document.getElementById("ketquabai5").innerHTML = ngayhomqua;
      };
      
      document.getElementById("ngaymai").onclick = function () {
        let tomorrowDate = today.valueAsDate;
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        let day = tomorrowDate.getDate();
        let month = tomorrowDate.getMonth() + 1;
        let year = tomorrowDate.getFullYear();
        ngaymai = month + "/" + day + "/" + year;
        document.getElementById("ketqua5").style.display = "block";
        document.getElementById("ketquabai5").innerHTML = ngaymai;
      };

      //Bài 6
      document.getElementById("tinhngay").onclick = function () {
        let ngay = 0;
        let thang = +document.getElementById("thang").value;
        let nam = +document.getElementById("nam").value;
        if (thang > 12 && thang < 1) {
          alert("Tháng phải lớn hơn 0 và nhỏ hơn 13");
        } else if (nam < 1900) {
          alert("năm phải lớn hơn 1900");
        }
        if (nam % 4 == 0) {
          switch (thang) {
            case 1:
              ngay = 31;
              break;
            case 2:
              ngay = 29;
              break;
            case 3:
              ngay = 31;
              break;
            case 4:
              ngay = 30;
              break;
            case 5:
              ngay = 31;
              break;
            case 6:
              ngay = 30;
              break;
            case 7:
              ngay = 31;
              break;
            case 8:
              ngay = 31;
              break;
            case 9:
              ngay = 30;
              break;
            case 10:
              ngay = 31;
              break;
            case 11:
              ngay = 30;
              break;
            case 12:
              ngay = 31;
              break;
          }
        } else {
          switch (thang) {
            case 1:
              ngay = 31;
              break;
            case 2:
              ngay = 28;
              break;
            case 3:
              ngay = 31;
              break;
            case 4:
              ngay = 30;
              break;
            case 5:
              ngay = 31;
              break;
            case 6:
              ngay = 30;
              break;
            case 7:
              ngay = 31;
              break;
            case 8:
              ngay = 31;
              break;
            case 9:
              ngay = 30;
              break;
            case 10:
              ngay = 31;
              break;
            case 11:
              ngay = 30;
              break;
            case 12:
              ngay = 31;
              break;
          }
        }
        document.getElementById("ketqua6").style.display = "block";
        document.getElementById("ketquabai6").innerHTML = "Có " + ngay + " Ngày";
      };
      // Bài7
      
      document.getElementById("docso").onclick = function () {
        let numberEl = +document.getElementById("numberEl").value;
        if (numberEl < 100 || numberEl > 999) {
          alert("Vui lòng nhập số có 3 chữ số");
        }
        let a1 = numberEl % 10;
        let text1 = "1";
        switch (a1) {
          case 1:
            text1 = "một";
            break;
          case 2:
            text1 = "hai";
            break;
          case 3:
            text1 = "ba";
            break;
          case 4:
            text1 = "bốn";
            break;
          case 5:
            text1 = "năm";
            break;
          case 6:
            text1 = "sáu";
            break;
          case 7:
            text1 = "bảy";
            break;
          case 8:
            text1 = "tám";
            break;
          case 9:
            text1 = "chín";
            break;
        }
        numberEl = numberEl / 10;
        numberEl = Math.floor(numberEl);
        let a2 = numberEl % 10;
        let text2 = "1";
        switch (a2) {
          case 1:
            text2 = "một";
            break;
          case 2:
            text2 = "hai";
            break;
          case 3:
            text2 = "ba";
            break;
          case 4:
            text2 = "bốn";
            break;
          case 5:
            text2 = "năm";
            break;
          case 6:
            text2 = "sáu";
            break;
          case 7:
            text2 = "bảy";
            break;
          case 8:
            text2 = "tám";
            break;
          case 9:
            text2 = "chín";
            break;
        }
        numberEl = numberEl / 10;
        numberEl = Math.floor(numberEl, 0);
        let a3 = numberEl;
        let text3 = "";
        switch (a3) {
          case 1:
            text3 = "một";
            break;
          case 2:
            text3 = "hai";
            break;
          case 3:
            text3 = "ba";
            break;
          case 4:
            text3 = "bốn";
            break;
          case 5:
            text3 = "năm";
            break;
          case 6:
            text3 = "sáu";
            break;
          case 7:
            text3 = "bảy";
            break;
          case 8:
            text3 = "tám";
            break;
          case 9:
            text3 = "chín";
            break;
        }
        if (a1 == 0 && a2 == 0) {
          document.getElementById("ketqua7").style.display = "block";
          document.getElementById("ketquabai7").innerHTML = text3 + " trăm ";
        } else if (a1 == 0 && a2 != 0) {
          document.getElementById("ketqua7").style.display = "block";
          document.getElementById("ketquabai7").innerHTML =
            text3 + " trăm " + text2 + " mươi ";
        } else if (a1 != 0 && a2 == 0) {
          document.getElementById("ketqua7").style.display = "block";
          document.getElementById("ketquabai7").innerHTML = text3 + " trăm  lẻ " + text1;
        } else {
          document.getElementById("ketqua7").style.display = "block";
          document.getElementById("ketquabai7").innerHTML =
            " " + text3 + " trăm " + text2 + " mươi " + text1;
        }
      };

      // Bài 8
      document.getElementById("tim").onclick = function () {
        let x1 = +document.getElementById("x1").value;
        let y1 = +document.getElementById("y1").value;
        let x2 = +document.getElementById("x2").value;
        let y2 = +document.getElementById("y2").value;
        let x3 = +document.getElementById("x3").value;
        let y3 = +document.getElementById("y3").value;
        let x4 = +document.getElementById("x4").value;
        let y4 = +document.getElementById("y4").value;
        console.log(y4);
        let d1 = (x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4);
        d1 = Math.sqrt(d1, 2);
        console.log(d1);
        let d2 = (x2 - x4) * (x2 - x4) + (y2 - y4) * (y2 - y4);
        d2 = Math.sqrt(d2, 2);
        let d3 = (x3 - x4) * (x3 - x4) + (y3 - y4) * (y3 - y4);
        d3 = Math.sqrt(d3, 2);
        if (d1 > d2 && d1 > d3) {
          let ten1 = document.getElementById("ten1").value;
          document.getElementById("ketqua8").style.display = "block";
          document.getElementById("ketquabai8").innerHTML =
            " sinh viên xa trường nhất: " + ten1;
        }
        if (d2 > d1 && d2 > d3) {
          let ten2 = document.getElementById("ten2").value;
          document.getElementById("ketqua8").style.display = "block";
          document.getElementById("ketquabai8").innerHTML =
            " sinh viên xa trường nhất: " + ten2;
        }
        if (d3 > d1 && d3 > d2) {
          let ten3 = document.getElementById("ten3").value;
          document.getElementById("ketqua8").style.display = "block";
          document.getElementById("ketquabai8").innerHTML =
            " Sinh viên xa trường nhất là : " + ten3;
        }
      };
      