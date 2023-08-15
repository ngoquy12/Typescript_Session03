// Cú pháp để tạo ra một đối tượng
// Ví dụ: Khởi tạo một đối tượng Person gồm các thông tin: id, name, age, address
class Person {
  // Danh sách tất cả các thuộc tính
  public userId: number;
  public userName: string;
  public age: number;
  public address: string;

  // Tạo ra constructor(Bản thiết kế cảu đối tượng Person)
  constructor(userId: number, userName: string, age: number, address: string) {
    this.userId = userId; // this được gọi là Context (Trỏ đến đối tượng mà nó đang đứng)
    this.userName = userName;
    this.age = age;
    this.address = address;
  }

  /// Method ///
  // Viết hàm lấy tên của person
  // getName(): string {
  //   return this.userName;
  // }

  // // Viết hàm lấy tuổi của person
  // getAge(): number {
  //   return this.age;
  // }

  // // set(setter - Thay đổi lại giá trị của property) và get(getter - Lấy ra giá trị của property)
  // set setUserId(userId: number) {
  //   // Gán lại giá trị
  //   this.userId = userId;
  // }

  // get getUserId(): number {
  //   return this.userId;
  // }
}

// Ứng dụng tính kế thừa của OOP
class Student extends Person {
  // Khai báo các property cho đối tượng Student
  public studentCode: string;
  public className: string;
  // public scoreMath: number;
  // public scoreHistory: number;
  // public scoreGeography: number;

  // Khởi tạo constructor
  constructor(
    userId: number,
    userName: string,
    age: number,
    address: string,
    studentCode: string,
    className: string
    // scoreMath: number,
    // scoreHistory: number,
    // scoreGeography: number
  ) {
    super(userId, userName, age, address); // Từ khóa super phải được gọi trước khi gán lại giá trị cho các property của đối tượng
    this.studentCode = studentCode;
    this.className = className;
    // this.scoreMath = scoreMath;
    // this.scoreHistory = scoreHistory;
    // this.scoreGeography = scoreGeography;
  }

  // Hàm tính tổng trung bình điểm số của sinh viên
  // advScore(): number {
  //   return Math.ceil(
  //     (this.scoreGeography + this.scoreMath + this.scoreHistory) / 3
  //   );
  // }
}

// Tạo đối tượng Person
// const person1 = new Person(1, "Nguyễn Văn A", 21, "Hà Nội");
// console.log("person1 trước khi update: ", person1);
// person1.setUserId = 2;
// console.log("person1 sau khi update: ", person1);
// console.log("UserName: ", person1.getName());
// console.log("Age: ", person1.getAge());

// Khởi tạo đối tượng Student
const student1 = new Student(
  1,
  "Nguyễn Quang Khải",
  19,
  "Hà Nội",
  "SV001",
  "JS-230215"
);
console.log("student1==>", student1);
// console.log("Điểm trung bình của khải: ", student1.advScore());

// Viết chương trình CRD quản lý sinh viên
// 1. Thêm mới sinh viên
// 2. Đọc thông tin tất cả sinh viên
// 3. Xóa sinh viên
// Còn lại thì thoát khỏi chương trinh

// Tạo mảng chứa thông tin của student
const listStudent: Student[] = [];

// Hàm thêm mới student
const createStudent = () => {
  const userId = Number(prompt("Nhập id của sinh viên: "));
  const userName = String(prompt("Nhập tên của sinh viên: "));
  const age = Number(prompt("Nhập tuổi của sinh viên: "));
  const address = String(prompt("Nhập địa chỉ của sinh viên: "));
  const studentCode = String(prompt("Nhập mã sinh viên: "));
  const className = String(prompt("Nhập lớp sinh viên: "));

  // Tạo đối tượng newStudent
  const newStudent: Student = {
    userId: userId,
    userName: userName,
    age: age,
    address: address,
    studentCode: studentCode,
    className: className,
  };

  // push vào mảng
  listStudent.push(newStudent);
  console.log("Thêm mơí thành công!");
};

// Hiển thị danh sách student
const loadData = () => {
  console.log("Danh sách student: ", listStudent);
};

// Hàm xóa thông tin student theo vị trí
const deleteStudent = () => {
  const indexStudent = Number(prompt("Nhập vị trí muốn xóa:"));
  // Kiểm tra điều kiện để xóa
  if (indexStudent >= 0 && indexStudent < listStudent.length) {
    listStudent.splice(indexStudent, 1);
    console.log("Xóa thành công");
  } else {
    console.log("Vị trí nhập vào không đúng");
  }
};

// Cập nhật thông tin sinh viên
const updateStudent = () => {
  // Lấy ra vị trí cần update
  const indexUpdate = Number(prompt("Nhập vị trí cần cập nhật: "));
  if (indexUpdate >= 0 && indexUpdate < listStudent.length) {
    // Lấy dữ liệu mới
    const newStudentId = Number(prompt("Nhập id mới: "));
    const newStudentName = String(prompt("Nhập tên mới: "));
    const newAge = Number(prompt("Nhập tuổi mới: "));
    const newAddress = String(prompt("Nhập địa chỉ mới: "));
    const newStudentCode = String(prompt("Nhập mã mới: "));
    const newClassName = String(prompt("Nhập lớp mới: "));

    // lấy ra thông tin của student tại vị trí index
    const studentUpdate = listStudent[indexUpdate];
    studentUpdate.userId = newStudentId;
    studentUpdate.userName = newStudentName;
    studentUpdate.age = newAge;
    studentUpdate.address = newAddress;
    studentUpdate.studentCode = newStudentCode;
    studentUpdate.className = newClassName;

    console.log("Cập nhật thông tin thành công");
  } else {
    console.log("Vị trí cần cập nhật không đúng!");
  }
};

let option: number;

do {
  option = Number(
    prompt(
      "Mời bạn nhập lựa chọn: 1. Thêm mới, 2. Xóa, 3. Đọc dữ liệu, 4. Cập nhật dữ liệu, Khác để thoát !"
    )
  );
  switch (option) {
    case 1:
      createStudent();
      break;
    case 2:
      deleteStudent();
      break;
    case 3:
      loadData();
      break;
    case 4:
      updateStudent();
      break;
    default:
      break;
  }
} while (option === 1 || option === 2 || option === 3 || option === 4);
