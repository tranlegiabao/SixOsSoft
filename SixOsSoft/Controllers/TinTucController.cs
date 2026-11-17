using Microsoft.AspNetCore.Mvc;

namespace SixOsSoft.Controllers
{
    public class TinTucController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Tin Tức - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "TinTuc";
            return View();
        }

        [HttpGet("chi-tiet-tin-tuc/{slug?}")]
        public IActionResult ChiTiet(string? slug)
        {
            ViewData["Title"] = "Chi Tiết Tin Tức - Phòng Khám Đa Khoa MINDLAB BẾN TRE";
            ViewData["ActiveNav"] = "TinTuc";
            return View("Index");
        }
    }
}
