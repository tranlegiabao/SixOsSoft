using Microsoft.AspNetCore.Mvc;

namespace SixOsSoft.Controllers
{
    public class TrangChuController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Phòng Khám Đa Khoa MINDLAB BẾN TRE - Trang chủ";
            ViewData["ActiveNav"] = "Index";
            return View();
        }

        public IActionResult GioiThieu() => RedirectToAction("Index", "GioiThieu");
        public IActionResult ChuyenKhoa() => RedirectToAction("Index", "ChuyenKhoa");
        public IActionResult DoiNguBacSi() => RedirectToAction("Index", "DoiNguBacSi");
        public IActionResult DichVu() => RedirectToAction("Index", "DichVu");
        public IActionResult TinTuc() => RedirectToAction("Index", "TinTuc");
        public IActionResult LienHe() => RedirectToAction("Index", "LienHe");

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}
