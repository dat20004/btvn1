//Viết chương trình JavaScript để kiểm tra xem một số nguyên là dương, âm hay bằng 0 và in ra kết quả.
    //const checkNumber = 20;
    //if(checkNumber > 0){
 //       console.log("Biến dương")
  //  }
 //   else if(checkNumber < 0){
 //       console.log("Biến âm")
 //   }
//    else{
 //       console.log("Biến = 0")
//    }
    //Viết chương trình JavaScript để kiểm tra xem một chuỗi có độ dài lớn hơn 5 ký tự không. Nếu có, in ra "Chuỗi quá dài"; ngược lại, in ra "Chuỗi đủ ngắn".
  //  const chuoiKitu = "Java"
 //   const dodaichuoi = chuoiKitu.length;
 //   if(dodaichuoi > 5){
 //       console.log("ĐỘ dài chuỗi:",dodaichuoi,",Chuỗi quá dài")
  //  }
 //   else{
   //     console.log("ĐỘ dài chuỗi:",dodaichuoi,",Chuỗi đủ ngắn")
//    }


//Viết chương trình JavaScript để kiểm tra xem một số nguyên có phải là số nguyên tố hay không. In ra kết quả tương ứng.

//   const checkNguyento = 20;
    
//    if(checkNguyento % 2 === 0 && checkNguyento % 3 === 0){
//        console.log("so nguyen to")
 //   }
//    else{
 //       console.log("Khong phai so nguyen to")
 //   }

   //Viết chương trình JavaScript để tìm số lớn nhất trong ba số nguyên a, b và c.
 //   const a = 1;
 //   const b = 2;
 //   const c = 3;

  //  if(a > b && a > c){
   //     console.log("a la so lon nhat")
 //   }
 //   else if(b > a && b > c){
  //      console.log("b la so lon nhat")
 //   }
 //   else{
 //       console.log("c la so lon nhat")
//   }
     //Tạo một biến year và kiểm tra xem year có phải là năm nhuận không. In ra thông báo tương ứng.
  // const checkyear = 2012;
    
 //   if(checkyear % 4 === 0 && checkyear % 100 !== 0 || checkyear % 400 === 0){
   //     console.log("năm đó là năm nhuận")
  //  }
 //   else{
 //       console.log("năm đó không phải là năm nhuận")
 //   }

    //Tạo một biến day và kiểm tra xem day có phải là một ngày hợp lệ trong tháng (ví dụ: ngày 1-31) không.

  //  const day = 31

 //   if(day>=1 && day <=31){
 //       console.log("ngày",day,",ngày hợp lệ")
   // }
  //  else{
 //       console.log("ngày",day,",ngày không hợp lệ")
 //   }
    //Tạo một biến age và kiểm tra xem age có lớn hơn hoặc bằng 18 không. Nếu có, in ra "Bạn đã đủ tuổi"; ngược lại, in ra "Bạn chưa đủ tuổi".

  //  const age = 18;
  //  if(age > 18){
  //      console.log("bạn đủ tuổi")
 //   }
 //   else{
 //       console.log("bạn chưa đủ tuôi")
 //   }
 //Tạo một biến score và kiểm tra điểm số của học sinh theo hệ điểm 10. Nếu score lớn hơn hoặc bằng 5, in ra "Đậu"; ngược lại, in ra "Trượt".
 //const diem = 5
 //if(diem >= 5){
 //   console.log("ĐẬU")
// }
 //else{
 //   console.log("TRUỢT")
// }
//5. Viết chương trình JavaScript để kiểm tra xem một số nguyên có phải là số chẵn hay không. Nếu là số chẵn, in ra "Số chẵn"; ngược lại, in ra "Số lẻ".
 //   const so = 5;
 //   if(so % 2 === 0){
 //      console.log(so," là số chẵn")
 //   }
 //   else{
 //       console.log(so,"là số lẻ")
 //   }
  //  //11. Tạo một biến hour và kiểm tra xem hour có phải là giờ hợp lệ (0-23) không.
 //   const hour = 23;
//
 //   if(hour >= 0 && hour <= 23){
 //       console.log(hour," là giờ hợp lệ")
//   }
 //   else{
 //       console.log(hour," là giờ không hợp lệ")
 //   }


 //Viết chương trình JavaScript để kiểm tra xem một số nguyên có phải là số Palindrome (số đối xứng) hay không
 //   const number = 939;
  //  const tailNumber = number % 10;
 //   const headNumber = (number - number % 100) / 100
 //   
 //   if(tailNumber === headNumber){
 //     console.log("Số nguyên là số đối xứng")
 //       }
 //   else{
 //     console.log("Số nguyên không phải số đối xứng")
  //  }

  //13. Tạo một biến word và kiểm tra xem word có phải là từ viết tắt (ví dụ: "ASAP", "LOL") không.
 // const word = "Liên minh huyền thoại"
 // const viettat = "LMHT"
 // if(viettat === "LMHT"){
 //   console.log(viettat,"là từ viết tắt của",word)
 // }
 // else{
 //   console.log(viettat,"là từ không viết tắt của",word)
 // }

 //10. Viết chương trình JavaScript để tính lãi suất đơn giản cho một số tiền gửi dựa trên số tiền, lãi suất và thời gian gửi.
  const tiengui = 20000000;
  const laisuat1nam = 0.07
  const time = 365

  console.log("lãi suất :",tiengui*laisuat1nam*time)
  