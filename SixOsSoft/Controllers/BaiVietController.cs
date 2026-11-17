using Microsoft.AspNetCore.Mvc;

namespace SixOsSoft.Controllers
{
    public class BaiVietController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction("Index", "TinTuc");
        }

        public IActionResult DanhSachBaiViet()
        {
            return RedirectToAction("Index", "TinTuc");
        }

        [HttpGet("chi-tiet-bai-viet/{slug?}")]
        public IActionResult XemChiTietBaiViet(string? slug)
        {
            ViewData["Title"] = "Chi Tiết Bài Viết - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "TinTuc";
            return View("~/Views/TinTuc/Index.cshtml");
        }
    }
}
