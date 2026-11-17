# Dự Án Website Phòng Khám Đa Khoa MINDLAB BẾN TRE

Cấu trúc dự án đã được chuyển đổi hoàn toàn sang mô hình **ASP.NET Core MVC Solution (.NET 6)** chuẩn, tương thích 100% với cấu trúc dự án mẫu tại `D:\page` (`SixOsSoft.sln`).

---

## 📁 Cấu Trúc Dự Án (Chuẩn ASP.NET Core MVC)

```text
D:\web mới\
├── SixOsSoft.sln                  <-- File Solution mở trực tiếp bằng Visual Studio
├── MindLab.sln                    <-- File Solution bổ sung (tùy chọn)
└── SixOsSoft\                     <-- Project ASP.NET Core MVC
    ├── Controllers\
    │   └── TrangChuController.cs  <-- Điều hướng các trang: Index, GioiThieu, ChuyenKhoa, DoiNguBacSi, DichVu, TinTuc, LienHe
    ├── Models\
    │   └── ErrorViewModel.cs
    ├── Properties\
    │   └── launchSettings.json    <-- Cấu hình chạy IIS Express & Kestrel (HTTPS 7288 / HTTP 5080)
    ├── Views\
    │   ├── _ViewStart.cshtml
    │   ├── _ViewImports.cshtml
    │   ├── Shared\
    │   │   └── _Layout.cshtml     <-- Layout chung (Header, Menu, Logo, Footer Vĩnh Long, Nút Zalo/Hotline)
    │   └── TrangChu\
    │       ├── Index.cshtml       <-- Trang chủ
    │       ├── GioiThieu.cshtml   <-- Giới thiệu
    │       ├── ChuyenKhoa.cshtml  <-- Chuyên khoa
    │       ├── DoiNguBacSi.cshtml <-- Đội ngũ 12 y bác sĩ kèm CCHN
    │       ├── DichVu.cshtml      <-- Dịch vụ phòng khám (5 dịch vụ sạch, không nha khoa)
    │       ├── TinTuc.cshtml      <-- Tin tức y khoa
    │       ├── LienHe.cshtml      <-- Liên hệ & Bản đồ
    │       └── Error.cshtml
    ├── wwwroot\                   <-- Thư mục chứa toàn bộ Static Assets
    │   ├── css\
    │   ├── images\
    │   ├── js\
    │   ├── lib\
    │   ├── apple-touch-icon.png
    │   ├── favicon-96x96.png
    │   ├── favicon.ico
    │   └── favicon.svg
    ├── appsettings.json
    ├── appsettings.Development.json
    ├── Program.cs
    └── SixOsSoft.csproj
```

---

## 🚀 Hướng Dẫn Chạy Bằng Visual Studio 2022

1. **Mở dự án:**
   - Trong **Visual Studio 2022**, chọn **File** -> **Open** -> **Project/Solution...**
   - Chọn file `D:\web mới\SixOsSoft.sln` (hoặc nhấp đúp trực tiếp vào file `SixOsSoft.sln` trong Windows Explorer).
2. **Khởi chạy:**
   - Nút **Play (tam giác xanh)** trên thanh công cụ sẽ hiển thị tên dự án `SixOsSoft` hoặc `IIS Express` (không còn bị mờ hay báo "Select Startup Item...").
   - Nhấn **F5** (hoặc nút Play xanh) để tự động biên dịch và mở trình duyệt web.

---

## ⚡ Chạy Nhanh Qua Terminal (Command Prompt / PowerShell)

```powershell
cd "D:\web mới\SixOsSoft"
dotnet run
```
Mở trình duyệt truy cập: `https://localhost:7288` hoặc `http://localhost:5080`
